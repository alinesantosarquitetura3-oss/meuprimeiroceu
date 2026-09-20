import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const expectedPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;
assert(expectedPixel, "NEXT_PUBLIC_META_PIXEL_ID must be set for Firebase builds");

const home = await readFile(path.join("out", "index.html"), "utf8");
assert(home.includes('https://meu-primeiro-ceu.web.app/'), "Canonical URL must use the Firebase production domain");
assert(!home.includes("chatgpt.site"), "Production HTML must not reference the retired chatgpt.site domain");

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const location = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(location));
    else files.push(location);
  }
  return files;
}

const chunks = (await collectFiles(path.join("out", "_next", "static", "chunks"))).filter((file) => file.endsWith(".js"));
const bundle = (await Promise.all(chunks.map((file) => readFile(file, "utf8")))).join("\n");
assert(bundle.includes(expectedPixel), "Compiled JavaScript must contain the configured Meta Pixel ID");
assert(bundle.includes("connect.facebook.net/en_US/fbevents.js"), "Compiled JavaScript must load Meta fbevents.js");
assert(bundle.includes("meu_primeiro_ceu_analytics_consent"), "Compiled JavaScript must gate analytics behind the consent preference");

await readFile(path.join("out", "robots.txt"), "utf8");
await readFile(path.join("out", "sitemap.xml"), "utf8");
console.log("Firebase output verified: domain, consent, Meta Pixel, robots and sitemap.");
