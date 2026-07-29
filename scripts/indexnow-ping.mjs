/**
 * Ping IndexNow with every URL in the live sitemap.
 *
 * Usage: `npm run ping:indexnow` after a deploy has gone live.
 *
 * This reads the LIVE sitemap rather than a hand-maintained list. The
 * previous version held a hardcoded array of 21 paths, which silently
 * fell out of date the moment new pages shipped, so most of the site
 * was never being submitted. Deriving the list from the sitemap means
 * it cannot drift again.
 *
 * Scope note: IndexNow is Bing, Yandex, Naver, Seznam and the engines
 * built on them, which includes Microsoft Copilot's retrieval layer.
 * GOOGLE DOES NOT SUPPORT INDEXNOW. Google discovery relies on the
 * sitemap, internal links, and Search Console. Do not add a line here
 * claiming otherwise.
 */

const HOST = "antcrow.com";
const KEY = "15e5dcccc26ca174901ae1aa1f50773c"; // must match public/<key>.txt
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

// IndexNow accepts up to 10,000 URLs per request. Batch anyway so a
// single oversized payload can never silently fail.
const BATCH = 1000;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// 1. Confirm the key file is actually reachable. IndexNow validates it,
//    and a 200 here is the difference between "submitted" and "rejected".
const keyUrl = `https://${HOST}/${KEY}.txt`;
const keyRes = await fetch(keyUrl);
if (!keyRes.ok) {
  console.error(`FAIL: key file ${keyUrl} returned HTTP ${keyRes.status}.`);
  console.error("IndexNow will reject the submission. Fix this first.");
  process.exit(1);
}
const keyBody = (await keyRes.text()).trim();
if (keyBody !== KEY) {
  console.error(`FAIL: key file contents do not match the key.`);
  console.error(`  expected: ${KEY}`);
  console.error(`  found:    ${keyBody.slice(0, 80)}`);
  process.exit(1);
}
console.log(`Key file verified at ${keyUrl}`);

// 2. Pull the live sitemap and extract every URL.
const smRes = await fetch(SITEMAP);
if (!smRes.ok) {
  console.error(`FAIL: could not fetch ${SITEMAP} (HTTP ${smRes.status})`);
  process.exit(1);
}
const xml = await smRes.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (urls.length === 0) {
  console.error("FAIL: sitemap contained no <loc> entries. Nothing submitted.");
  process.exit(1);
}
console.log(`Found ${urls.length} URLs in the live sitemap.`);

// 3. Submit.
let ok = 0;
let failed = 0;
for (const [i, batch] of chunk(urls, BATCH).entries()) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: keyUrl,
      urlList: batch,
    }),
  });
  // 200 accepted, 202 accepted but key validation pending. Both fine.
  if (res.ok) {
    ok += batch.length;
    console.log(`Batch ${i + 1}: HTTP ${res.status}, ${batch.length} URLs accepted`);
  } else {
    failed += batch.length;
    console.error(`Batch ${i + 1}: HTTP ${res.status}`);
    console.error(await res.text());
  }
}

console.log("");
console.log(`Submitted ${ok} URLs. Failed ${failed}.`);
console.log("Reaches: Bing, Yandex, Naver, Seznam, and Copilot's retrieval.");
console.log("Does NOT reach Google. Use Search Console for that.");
if (failed > 0) process.exit(1);
