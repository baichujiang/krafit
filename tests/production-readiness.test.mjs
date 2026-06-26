import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("content contains no launch placeholders or example contact addresses", async () => {
  const messages = await read("lib/messages.js");

  assert.doesNotMatch(messages, /krafit\.example/i);
  assert.doesNotMatch(messages, /placeholder|platzhalter/i);
});

test("production metadata and legal routes are present", async () => {
  const requiredFiles = [
    "app/robots.ts",
    "app/sitemap.ts",
    "app/manifest.ts",
    "public/og-image.png",
    "app/[locale]/imprint/page.tsx",
    "app/[locale]/privacy/page.tsx",
    "app/global-not-found.tsx",
  ];

  await Promise.all(requiredFiles.map((path) => read(path)));
});

test("legal identity is hardcoded in source, not env placeholders", async () => {
  const site = await read("lib/site.ts");
  const envExample = await read(".env.example");

  assert.match(site, /export const legalInfo/);
  assert.match(site, /hostingProvider:/);
  assert.doesNotMatch(site, /LEGAL_NAME|LEGAL_ADDRESS|LEGAL_REPRESENTATIVE|HOSTING_PROVIDER/);
  assert.doesNotMatch(site, /Configure LEGAL_|REPLACE_WITH|TODO:/i);
  assert.doesNotMatch(envExample, /^LEGAL_/m);
  assert.doesNotMatch(envExample, /^HOSTING_PROVIDER=/m);
});

test("social preview image is wired into metadata", async () => {
  const metadata = await read("lib/metadata.ts");
  const site = await read("lib/site.ts");

  assert.match(metadata, /ogImage/);
  assert.match(site, /og-image\.png/);
});

test("security headers and framework disclosure setting are configured", async () => {
  const config = await read("next.config.ts");

  assert.match(config, /poweredByHeader:\s*false/);
  assert.match(config, /Content-Security-Policy/);
  assert.match(config, /X-Content-Type-Options/);
  assert.match(config, /Strict-Transport-Security/);
});

test("hero product image stays within a production-friendly size budget", async () => {
  const { stat } = await import("node:fs/promises");
  const file = await stat(new URL("../public/products/resistance-bands.jpg", import.meta.url));
  const maxBytes = 512 * 1024;

  assert.ok(
    file.size <= maxBytes,
    `resistance-bands.jpg is ${file.size} bytes; expected <= ${maxBytes}`,
  );
});

test("deployment configuration documents every required public value", async () => {
  const envExample = await read(".env.example");
  const required = [
    "SITE_URL",
    "CONTACT_EMAIL",
    "BANDS_PRODUCT_URL",
    "PUSHUP_STANDS_PRODUCT_URL",
  ];

  for (const key of required) {
    assert.match(envExample, new RegExp(`^${key}=`, "m"));
  }
});
