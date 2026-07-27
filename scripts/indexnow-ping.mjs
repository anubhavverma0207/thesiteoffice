/**
 * Ping IndexNow (Bing, and via it the engines feeding ChatGPT search)
 * with the site's URLs after a deploy.
 *
 * Usage: `npm run ping:indexnow` after pushing a content change.
 * Not run automatically so local builds stay silent.
 */

const HOST = "antcrow.com";
const KEY = "15e5dcccc26ca174901ae1aa1f50773c"; // must match public/<key>.txt

const urls = ["", "work/", "services/", "studio/", "lab/", "contact/"].map(
  (p) => `https://${HOST}/${p}`
);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow ping: HTTP ${res.status} for ${urls.length} URLs`);
if (!res.ok) console.log(await res.text());
