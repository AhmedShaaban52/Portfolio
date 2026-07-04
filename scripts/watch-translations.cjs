#!/usr/bin/env node
/**
 * watch-translations.js
 *
 * Runs continuously in the background while you develop. Every time you
 * save a file in app/, components/, or hooks/, it re-scans for t("key")
 * calls, and if it finds any NEW key that isn't in messages/*.json yet,
 * it:
 *   1. Writes the new key into every locale file (en.json gets a readable
 *      label, other locales get an "[XX] ..." placeholder).
 *   2. Prints the full updated messages/en.json to your terminal so you
 *      can see exactly what changed, live.
 *
 * Usage:
 *   npm run i18n:watch
 *
 * Leave it running in its own terminal tab alongside `npm run dev`.
 * Press Ctrl+C to stop it.
 */

const fs = require("fs");
const path = require("path");
const { runSync, MESSAGES_DIR, PRIMARY_LOCALE } = require("./translationSyncCore.cjs");

const ROOT = path.join(__dirname, "..");
const WATCH_DIRS = ["app", "components", "hooks"].map((d) => path.join(ROOT, d));

let debounceTimer = null;
let running = false;

function bar() {
  console.log("─".repeat(60));
}

function printFullEnFile() {
  const enPath = path.join(MESSAGES_DIR, `${PRIMARY_LOCALE}.json`);
  const content = fs.readFileSync(enPath, "utf8");
  console.log(`\nCurrent messages/${PRIMARY_LOCALE}.json:\n`);
  console.log(content);
}

function scanAndSync() {
  if (running) return; // avoid overlapping runs if saves fire rapidly
  running = true;
  try {
    const result = runSync({});
    if (result.totalMissing === 0) {
      // Nothing new — stay quiet so the terminal isn't spammed on every save.
      return;
    }

    bar();
    console.log(`New translation key(s) detected — updated ${result.localeFiles.length} locale file(s):\n`);
    for (const key of result.addedKeys) {
      console.log(`  + "${key}"`);
    }
    printFullEnFile();
    console.log(
      `Non-English locales got "[XX] ..." placeholders — open messages/ar.json (etc.) and replace them with real translations.`
    );
    bar();
  } catch (err) {
    console.error("Error while syncing translations:", err.message);
  } finally {
    running = false;
  }
}

function debouncedScan() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(scanAndSync, 250);
}

console.log("Watching for new t(\"...\") translation calls...");
console.log(`Directories: ${WATCH_DIRS.map((d) => path.relative(ROOT, d)).join(", ")}`);
console.log("Save a file that uses a new t(\"key\") and this will update messages/*.json automatically.\n");

// Initial pass in case there are already-missing keys when you start watching.
scanAndSync();

for (const dir of WATCH_DIRS) {
  if (!fs.existsSync(dir)) continue;
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    if (!/\.tsx?$/.test(filename)) return;
    debouncedScan();
  });
}
