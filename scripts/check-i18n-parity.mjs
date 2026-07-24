#!/usr/bin/env node
// Fails the build if src/i18n/translations.ts's `en` and `es` dictionaries ever drift out of
// shape — same keys at every level, same array lengths, same value types. This is the technical
// backstop for the "every text edit must update both languages" rule in CLAUDE.md: that's an
// instruction for an AI/human editing the file, this is what actually blocks a broken build.
//
// Deliberately NOT a TypeScript type-check (this project has none configured — see CLAUDE.md) and
// deliberately not comparing string *content* (that would defeat the point: `es` strings are
// supposed to differ from `en` strings). It only compares *shape*: same keys, same array lengths,
// same value types (string vs function vs array vs object) at every corresponding path.

import { translations } from "../src/i18n/translations.ts";

const errors = [];

function describe(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

function compareShape(a, b, path) {
  const aType = describe(a);
  const bType = describe(b);

  if (aType !== bType) {
    errors.push(`${path}: type mismatch (en is ${aType}, es is ${bType})`);
    return;
  }

  if (aType === "array") {
    if (a.length !== b.length) {
      errors.push(`${path}: array length mismatch (en has ${a.length}, es has ${b.length})`);
    }
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      compareShape(a[i], b[i], `${path}[${i}]`);
    }
    return;
  }

  if (aType === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const key of aKeys) {
      if (!bKeys.includes(key)) {
        errors.push(`${path}.${key}: present in en, missing in es`);
      }
    }
    for (const key of bKeys) {
      if (!aKeys.includes(key)) {
        errors.push(`${path}.${key}: present in es, missing in en`);
      }
    }
    for (const key of aKeys) {
      if (bKeys.includes(key)) {
        compareShape(a[key], b[key], `${path}.${key}`);
      }
    }
  }

  // Strings, numbers, functions: type already matched above — that's all we check.
  // (Deliberately not diffing string content or function arity/behavior.)
}

compareShape(translations.en, translations.es, "translations");

if (errors.length > 0) {
  console.error(`\n✖ i18n parity check failed — en/es are out of sync in translations.ts:\n`);
  for (const err of errors) console.error(`  - ${err}`);
  console.error(`\nEvery user-facing text change must update both languages (see CLAUDE.md).\n`);
  process.exit(1);
}

console.log("✓ i18n parity check passed — en and es have matching shape in translations.ts");
