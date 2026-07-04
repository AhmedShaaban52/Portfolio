/**
 * translationSyncCore.js
 *
 * Shared logic used by:
 *   - scripts/sync-translations.js   (run once, e.g. `npm run i18n:sync`)
 *   - scripts/watch-translations.js  (runs continuously while you code, e.g. `npm run i18n:watch`)
 *
 * See scripts/sync-translations.js header comment for full behavior notes.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MESSAGES_DIR = path.join(ROOT, "messages");
const SCAN_DIRS = ["app", "components", "hooks"];
const SOURCE_EXT = new Set([".ts", ".tsx"]);
const PRIMARY_LOCALE = "en";

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (SOURCE_EXT.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function humanize(key) {
  const last = key.split(".").pop();
  const withSpaces = last
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim();
  return withSpaces
    .split(" ")
    .map((w) => (w.length <= 3 && w === w.toUpperCase() ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

function setDeep(obj, dottedKey, value) {
  const parts = dottedKey.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (typeof cur[p] !== "object" || cur[p] === null || Array.isArray(cur[p])) {
      cur[p] = {};
    }
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
}

function getDeep(obj, dottedKey) {
  const parts = dottedKey.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object" || !(p in cur)) return undefined;
    cur = cur[p];
  }
  return cur;
}

const NAMESPACE_CALL_RE = /use(?:Trans|Translations)\(\s*["'`]([\w.]*)["'`]\s*\)/g;
const T_CALL_RE = /(?<![\w$])t\(\s*["'`]([\w.]+)["'`]/g;

function extractKeysFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  const namespaceEvents = [];
  let m;
  NAMESPACE_CALL_RE.lastIndex = 0;
  while ((m = NAMESPACE_CALL_RE.exec(content)) !== null) {
    const lineIdx = content.slice(0, m.index).split("\n").length - 1;
    namespaceEvents.push({ line: lineIdx, ns: m[1] || "" });
  }
  namespaceEvents.sort((a, b) => a.line - b.line);

  function namespaceForLine(lineIdx) {
    let ns = "";
    for (const ev of namespaceEvents) {
      if (ev.line <= lineIdx) ns = ev.ns;
      else break;
    }
    return ns;
  }

  const found = [];
  T_CALL_RE.lastIndex = 0;
  while ((m = T_CALL_RE.exec(content)) !== null) {
    const lineIdx = content.slice(0, m.index).split("\n").length - 1;
    const ns = namespaceForLine(lineIdx);
    const key = m[1];
    const fullKey = ns ? `${ns}.${key}` : key;
    found.push({ fullKey, file: path.relative(ROOT, filePath), line: lineIdx + 1 });
  }
  return found;
}

/**
 * Scans the project, and (unless dryRun) writes any missing keys into every
 * messages/*.json file. Returns a summary object describing what happened.
 */
function runSync({ dryRun = false, log = console.log } = {}) {
  const files = SCAN_DIRS.flatMap((d) => walk(path.join(ROOT, d)));
  const allUsages = files.flatMap(extractKeysFromFile);

  const localeFiles = fs
    .readdirSync(MESSAGES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ locale: path.basename(f, ".json"), filePath: path.join(MESSAGES_DIR, f) }));

  const localeData = {};
  for (const { locale, filePath } of localeFiles) {
    localeData[locale] = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  const uniqueByKey = new Map();
  for (const u of allUsages) {
    if (!uniqueByKey.has(u.fullKey)) uniqueByKey.set(u.fullKey, u);
  }

  const missingByLocale = {};
  for (const locale of Object.keys(localeData)) missingByLocale[locale] = [];

  for (const [fullKey, usage] of uniqueByKey) {
    for (const locale of Object.keys(localeData)) {
      if (getDeep(localeData[locale], fullKey) === undefined) {
        missingByLocale[locale].push({ fullKey, usage });
      }
    }
  }

  const totalMissing = Object.values(missingByLocale).reduce((n, arr) => n + arr.length, 0);

  if (totalMissing === 0) {
    return { totalMissing: 0, addedKeys: [], localeData, localeFiles };
  }

  if (dryRun) {
    return { totalMissing, addedKeys: [...uniqueByKey.keys()], localeData, localeFiles, missingByLocale };
  }

  const addedKeys = [];
  for (const locale of Object.keys(missingByLocale)) {
    for (const { fullKey } of missingByLocale[locale]) {
      const label = humanize(fullKey);
      const value = locale === PRIMARY_LOCALE ? label : `[${locale.toUpperCase()}] ${label}`;
      setDeep(localeData[locale], fullKey, value);
      if (locale === PRIMARY_LOCALE) addedKeys.push(fullKey);
    }
  }

  for (const { locale, filePath } of localeFiles) {
    fs.writeFileSync(filePath, JSON.stringify(localeData[locale], null, 2) + "\n", "utf8");
  }

  return { totalMissing, addedKeys, localeData, localeFiles, missingByLocale };
}

module.exports = { runSync, ROOT, MESSAGES_DIR, PRIMARY_LOCALE };
