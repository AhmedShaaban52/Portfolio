#!/usr/bin/env node
/**
 * sync-translations.js
 *
 * One-shot scan: finds every t("key") call in app/ components/ hooks/,
 * and adds any key missing from messages/*.json.
 *
 * Usage:
 *   node scripts/sync-translations.js          // scan + write missing keys
 *   node scripts/sync-translations.js --check  // scan only, exit 1 if anything missing (for CI)
 *
 * For a version that runs continuously and updates live as you save files,
 * use scripts/watch-translations.js (npm run i18n:watch) instead.
 */

const path = require("path");
const { runSync, MESSAGES_DIR, PRIMARY_LOCALE } = require("./translationSyncCore.cjs");

const CHECK_ONLY = process.argv.includes("--check");

function main() {
  const result = runSync({ dryRun: CHECK_ONLY });

  if (result.totalMissing === 0) {
    console.log(`All translation keys found in code already exist in every locale file. ✅`);
    return;
  }

  console.log(`Found ${result.totalMissing} missing key/locale combination(s):\n`);
  for (const locale of Object.keys(result.missingByLocale)) {
    for (const { fullKey, usage } of result.missingByLocale[locale]) {
      console.log(`  [${locale}] "${fullKey}"  <-  ${usage.file}:${usage.line}`);
    }
  }
  console.log("");

  if (CHECK_ONLY) {
    console.error("Run `node scripts/sync-translations.js` (without --check) to add these automatically.");
    process.exit(1);
  }

  for (const { locale, filePath } of result.localeFiles) {
    console.log(`Updated ${path.relative(process.cwd(), filePath)}`);
  }

  console.log(
    `\nDone. Non-English placeholders are prefixed like "[AR] ..." — search for that prefix and replace with real translations.`
  );
}

main();
