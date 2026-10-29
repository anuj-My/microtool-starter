import assert from "node:assert/strict";
import { test } from "node:test";
import { site } from "./site.ts";

// Catches the settings mistakes that silently break canonical URLs, the sitemap or AdSense.
test("site url is https, without www or a trailing slash", () => {
  assert.match(site.url, /^https:\/\/[^/]+$/);
  assert.doesNotMatch(site.url, /^https:\/\/www\./);
});

test("contact email is on the site's own domain", () => {
  assert.equal(site.contactEmail.split("@")[1], new URL(site.url).host);
});

test("AdSense publisher ID is empty or well formed, and ads are off until it is set", () => {
  const { publisherId, enabled } = site.adsense;
  if (publisherId) assert.match(publisherId, /^ca-pub-\d{16}$/);
  else assert.equal(enabled, false);
});

test("description fits in a search result", () => {
  assert.ok(site.description.length <= 160, `description is ${site.description.length} characters`);
});
