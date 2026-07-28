/**
 * Ping IndexNow (Bing, and via it the engines feeding ChatGPT search)
 * with the site's URLs after a deploy.
 *
 * Usage: `npm run ping:indexnow` after pushing a content change.
 * Note: Google does not use IndexNow; Google discovery relies on the
 * sitemap and internal links.
 */

const HOST = "antcrow.com";
const KEY = "15e5dcccc26ca174901ae1aa1f50773c"; // must match public/<key>.txt

const paths = [
  "",
  "work/",
  "services/",
  "studio/",
  "lab/",
  "contact/",
  "locations/",
  "locations/auckland/",
  "locations/wellington/",
  "locations/christchurch/",
  "locations/sydney/",
  "industries/",
  "industries/builders/",
  "industries/trades/",
  "industries/hospitality/",
  "industries/professional-services/",
  "guides/website-cost-nz/",
  "guides/squarespace-wix-vs-custom/",
  "guides/ai-search-visibility-nz/",
  "tools/website-cost-calculator/",
];

const urls = paths.map((p) => `https://${HOST}/${p}`);

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
