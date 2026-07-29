/**
 * Glossary.
 * ------------------------------------------------------------------
 * Every entry here is written to be extracted. An answer engine
 * retrieves passages, not pages, so each definition has to survive
 * being torn out of context and still be accurate and attributable.
 *
 * That drives the shape:
 *   short       one sentence, complete on its own. Used in the hub,
 *               in schema, and in the machine-readable surfaces.
 *   definition  120 to 180 words, the band that performs best in the
 *               citation research. Names the thing explicitly rather
 *               than saying "it" or "this".
 *   whyItMatters  the practical consequence, which is what a person
 *               actually wanted when they looked the word up.
 *   misconception  optional. Where a term is widely misunderstood,
 *               correcting it is the most useful thing on the page
 *               and the most likely passage to be quoted.
 *
 * Rules: no em dashes, no invented statistics, and where a term
 * touches New Zealand law, describe it accurately and point at the
 * regulator rather than paraphrasing them into a liability.
 */

export type GlossaryCategory =
  | "Search & AI"
  | "Design"
  | "Development"
  | "Performance"
  | "Commerce"
  | "New Zealand";

export type Term = {
  slug: string;
  term: string;
  /** Other names the same thing goes by. Helps entity matching. */
  aka?: string[];
  category: GlossaryCategory;
  short: string;
  definition: string;
  whyItMatters: string;
  misconception?: string;
  /** Slugs of related terms */
  related: string[];
};

export const glossary: Term[] = [
  // ---------------------------------------------- Search & AI
  {
    slug: "seo",
    term: "SEO",
    aka: ["Search engine optimisation"],
    category: "Search & AI",
    short:
      "SEO is the practice of making a website more likely to appear in unpaid search results for relevant queries.",
    definition:
      "SEO, or search engine optimisation, is the practice of improving a website so that search engines rank it highly in unpaid results for queries relevant to the business. It has three broad components. Technical SEO concerns whether a search engine can crawl, render, and understand the site at all. On-page SEO concerns whether the content genuinely answers the query behind the search rather than merely containing the words. Off-page SEO concerns whether other credible websites reference yours, which search engines read as a signal of standing. SEO is a probabilistic discipline rather than a deterministic one: no practitioner controls the ranking systems, so no practitioner can guarantee a position.",
    whyItMatters:
      "Unpaid search remains one of the largest sources of commercial intent traffic on the web, and unlike advertising it does not stop the day you stop paying. The compounding nature is the point: a page that ranks keeps earning.",
    misconception:
      "That SEO is a one-off task. Search results are competitive and continuously re-evaluated, so a site that stops improving loses ground to sites that do not.",
    related: ["aeo", "technical-seo", "local-seo", "backlink"],
  },
  {
    slug: "aeo",
    term: "AEO",
    aka: ["Answer engine optimisation", "GEO", "Generative engine optimisation"],
    category: "Search & AI",
    short:
      "AEO is the practice of making content likely to be retrieved and cited inside an AI-generated answer.",
    definition:
      "AEO, or answer engine optimisation, is the practice of structuring a website so that AI systems retrieve and cite it when generating an answer. The related term GEO, generative engine optimisation, originated in academic research and is used more or less interchangeably. AEO shares its foundation with SEO, since content must still be crawlable and credible, but it differs in emphasis. Where SEO competes for a position in a ranked list of links, AEO competes to be the source quoted inside a single synthesised response. In practice that rewards self-contained direct answers, concrete verifiable facts, clear identity signals about the organisation, and allowing the relevant AI crawlers to reach the site at all.",
    whyItMatters:
      "An AI assistant returns one composed answer citing a handful of sources rather than ten links. Being the eighth best result used to mean some traffic; increasingly it means none.",
    misconception:
      "That AEO is a separate discipline requiring separate content. Publishing AI-targeted pages alongside human ones risks breaching search engines' scaled content policies, and the underlying work overlaps heavily with good SEO.",
    related: ["seo", "ai-crawler", "entity", "llms-txt"],
  },
  {
    slug: "ai-crawler",
    term: "AI crawler",
    aka: ["AI bot", "GPTBot", "ClaudeBot"],
    category: "Search & AI",
    short:
      "An AI crawler is an automated program that reads websites on behalf of an AI system, for search indexing, live user fetches, or model training.",
    definition:
      "An AI crawler is an automated program operated by an AI company to read web pages. Crucially, they do three different jobs and the distinction determines whether blocking one costs you anything. Search-indexing crawlers such as OAI-SearchBot, Claude-SearchBot, and PerplexityBot build the index an assistant retrieves from when answering; blocking these makes citation impossible. User-triggered fetchers such as ChatGPT-User and Perplexity-User read a specific page because a person asked about it. Training crawlers such as GPTBot and ClaudeBot collect content that may inform a future model, and blocking them has no effect on current citations. Each identifies itself with a distinct user-agent string, and several operators publish IP ranges so the bot can be verified.",
    whyItMatters:
      "Many websites have blocked the crawler with no citation impact while leaving the one that matters untouched, or have blocked all of them accidentally through a security product, making themselves invisible to AI search without realising.",
    misconception:
      "That Google-Extended controls whether you appear in Google's AI Overviews. It does not. AI Overviews are served from the ordinary Googlebot index; Google-Extended governs Gemini training and grounding only.",
    related: ["robots-txt", "aeo", "crawling"],
  },
  {
    slug: "schema-markup",
    term: "Schema markup",
    aka: ["Structured data", "JSON-LD"],
    category: "Search & AI",
    short:
      "Schema markup is code added to a page that describes the meaning of its content using the shared vocabulary published at schema.org.",
    definition:
      "Schema markup, also called structured data, is machine-readable code added to a web page that labels what its content means rather than leaving it to be inferred. It uses a shared vocabulary published at schema.org and developed jointly by Google, Microsoft, Yahoo, and Yandex. Rather than a search engine guessing that a string of digits is a phone number, schema states it explicitly. The recommended format is JSON-LD, which sits in a script tag separate from the visible markup, so redesigning a page does not silently break the data. Useful types for a business include Organization, LocalBusiness, Article, Product, Service, Person, and BreadcrumbList.",
    whyItMatters:
      "Structured data is how a machine becomes confident about who you are and what you offer. Organization markup with accurate sameAs links is the mechanism by which systems resolve that your website, your profiles, and mentions of you elsewhere are all the same entity.",
    misconception:
      "That schema markup improves rankings or reliably drives AI citations. Google states it is not a ranking factor, and research on AI citation finds the benefit comes from markup carrying concrete values such as real prices and dates, not from the presence of tags.",
    related: ["structured-data-types", "entity", "aeo", "seo"],
  },
  {
    slug: "entity",
    term: "Entity",
    category: "Search & AI",
    short:
      "An entity is a distinct thing a search or AI system recognises and holds information about, such as a specific company, person, product, or place.",
    definition:
      "In search and AI systems, an entity is a uniquely identifiable thing: a particular company, person, place, product, or concept, distinct from the words used to describe it. Modern systems do not merely match strings of text; they attempt to resolve which real-world entity a page is about, then reason about relationships between entities. This resolution is assembled from structured data on your own site, consistent descriptions of you elsewhere on the web, and references from sources the system already trusts. Entity clarity is the degree to which a system is confident about what your organisation is. Ambiguity is expensive, because systems avoid recommending things they are uncertain about.",
    whyItMatters:
      "Before an AI assistant can recommend a business, it needs a confident understanding of what that business is. A company described three different ways in three places is a company the model hedges on.",
    related: ["schema-markup", "aeo", "e-e-a-t"],
  },
  {
    slug: "e-e-a-t",
    term: "E-E-A-T",
    aka: ["Experience, Expertise, Authoritativeness, Trust"],
    category: "Search & AI",
    short:
      "E-E-A-T is Google's framework of Experience, Expertise, Authoritativeness, and Trust, used in its guidelines for assessing content quality.",
    definition:
      "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trust. It comes from Google's Search Quality Rater Guidelines, the document given to the human raters who evaluate search results to help train and assess ranking systems. Experience refers to first-hand involvement with the subject. Expertise refers to genuine knowledge or qualification. Authoritativeness refers to recognition by others in the field. Trust, which Google describes as the most important of the four, refers to accuracy, honesty, and safety. E-E-A-T is not a score a page receives and not a direct ranking factor. It is a description of what the ranking systems collectively attempt to reward.",
    whyItMatters:
      "The practical implications are concrete: name your authors, state their credentials, cite your sources, publish accurate contact details, correct mistakes visibly, and do not make claims you cannot support.",
    misconception:
      "That E-E-A-T can be optimised directly. There is no E-E-A-T setting. What can be done is to make genuine experience and expertise visible and verifiable rather than leaving them implied.",
    related: ["entity", "seo", "aeo"],
  },
  {
    slug: "technical-seo",
    term: "Technical SEO",
    category: "Search & AI",
    short:
      "Technical SEO is the work of ensuring search engines can crawl, render, understand, and index a website correctly.",
    definition:
      "Technical SEO covers everything that determines whether a search engine can access and interpret a site, as distinct from whether the content is any good. It includes crawlability, meaning bots can reach pages through links and are not blocked accidentally; indexability, meaning pages are eligible to be stored in the index; correct canonical tags so duplicate versions of a page do not compete with one another; an accurate XML sitemap; structured data; site architecture and internal linking; loading performance; mobile rendering; and secure delivery over HTTPS. These problems are invisible from the front end of a website, which is precisely why they persist for years on otherwise well-managed sites.",
    whyItMatters:
      "Content cannot rank if a search engine cannot reach, render, or understand it. Technical problems set a ceiling on everything else, and they are usually cheaper to fix than content is to produce.",
    related: ["seo", "crawling", "canonical-tag", "core-web-vitals"],
  },
  {
    slug: "crawling",
    term: "Crawling",
    aka: ["Indexing", "Crawl budget"],
    category: "Search & AI",
    short:
      "Crawling is the process by which a search engine's bot discovers and downloads web pages; indexing is storing and organising what it found.",
    definition:
      "Crawling is the process by which a search engine discovers and downloads pages, following links from page to page and consulting sitemaps for URLs it might otherwise miss. Indexing is the separate step of analysing what was downloaded and storing it so it can be retrieved for a query. The two are distinct and often confused: a page can be crawled but not indexed, if the engine judges it duplicative or low value. Crawl budget describes the finite attention an engine allocates to a site, which becomes a real constraint on very large sites and is essentially irrelevant on small ones.",
    whyItMatters:
      "A page that is not indexed cannot rank for anything. Google Search Console and Bing Webmaster Tools both report which of your pages are indexed and, more usefully, why the others are not.",
    misconception:
      "That submitting a sitemap guarantees indexing. A sitemap is a suggestion about what exists, not an instruction about what to store.",
    related: ["technical-seo", "robots-txt", "sitemap", "ai-crawler"],
  },
  {
    slug: "robots-txt",
    term: "robots.txt",
    category: "Search & AI",
    short:
      "robots.txt is a file at a website's root that tells cooperating crawlers which parts of the site they may request.",
    definition:
      "The robots.txt file sits at the root of a domain and states which paths a given crawler may or may not request, identified by user-agent. It is a convention rather than a security mechanism: well-behaved operators honour it, and one that ignores it will keep ignoring it. That distinction matters because robots.txt is frequently mistaken for access control. It is a request, and anything that genuinely must be prevented has to be enforced at the network or application layer. A robots.txt file also commonly declares the location of the site's XML sitemap.",
    whyItMatters:
      "A misconfigured robots.txt is one of the fastest ways to make a website disappear from search. A staging-site block that ships to production will deindex an entire site quietly.",
    misconception:
      "That disallowing a page in robots.txt removes it from search results. Blocking crawling can prevent an engine from seeing a noindex directive, occasionally leaving a URL listed with no description. To remove a page, allow crawling and use noindex.",
    related: ["crawling", "ai-crawler", "sitemap"],
  },
  {
    slug: "canonical-tag",
    term: "Canonical tag",
    category: "Search & AI",
    short:
      "A canonical tag tells search engines which URL is the preferred version of a page when the same content is reachable at several addresses.",
    definition:
      "A canonical tag is a link element in a page's head that names the preferred URL for that content. It exists because the same page is frequently reachable at multiple addresses: with and without a trailing slash, with tracking parameters attached, over http and https, or through a printer-friendly variant. Left unresolved, these compete with each other and split the ranking signals that should accumulate to one address. The canonical tag consolidates them. It is a strong hint rather than a directive, so search engines may occasionally choose a different canonical if the evidence points elsewhere.",
    whyItMatters:
      "Duplicate URLs are one of the most common and least visible technical problems on commercial websites, particularly e-commerce sites with filtering and sorting parameters.",
    related: ["technical-seo", "redirect-301", "crawling"],
  },
  {
    slug: "redirect-301",
    term: "301 redirect",
    category: "Search & AI",
    short:
      "A 301 redirect is a permanent instruction that a URL has moved, passing visitors and accumulated ranking signals to the new address.",
    definition:
      "A 301 redirect is an HTTP status code meaning the requested resource has moved permanently. Browsers follow it to the new location and search engines transfer the ranking signals the old URL had accumulated. A 302 redirect, by contrast, signals a temporary move and does not reliably pass those signals, which makes choosing between them consequential rather than cosmetic. Redirects should point to the closest genuine equivalent page. Redirecting many URLs to a homepage is technically a redirect and practically a deletion, since search engines commonly treat an irrelevant destination as a soft 404.",
    whyItMatters:
      "Missing 301 redirects are the single most common cause of a website redesign losing organic traffic. Every URL that changes needs one, mapped before launch rather than diagnosed afterwards.",
    related: ["canonical-tag", "technical-seo", "crawling"],
  },
  {
    slug: "sitemap",
    term: "XML sitemap",
    category: "Search & AI",
    short:
      "An XML sitemap is a machine-readable file listing a website's important URLs to help search engines discover them.",
    definition:
      "An XML sitemap is a structured file, conventionally at /sitemap.xml, listing the URLs a site owner considers worth crawling, optionally with the date each was last modified and a relative priority. Search engines use it to discover pages that internal linking might not surface, which makes it most valuable for large sites, new sites with few inbound links, and pages that are deep in the structure. It supplements crawling rather than replacing it. A sitemap should list only canonical, indexable URLs; including redirects, error pages, or noindexed pages reduces the trust an engine places in the file.",
    whyItMatters:
      "For a new domain with almost no inbound links, a sitemap submitted to Google Search Console and Bing Webmaster Tools is the fastest route to discovery.",
    misconception:
      "That stamping every URL with today's date makes a site look fresh. Search engines discount last-modified dates on sitemaps where everything is always current.",
    related: ["crawling", "robots-txt", "technical-seo"],
  },
  {
    slug: "local-seo",
    term: "Local SEO",
    category: "Search & AI",
    short:
      "Local SEO is optimisation for searches where the results depend on the searcher's location or a named place.",
    definition:
      "Local SEO covers the work of ranking for searches with geographic intent, whether explicit, such as a city name in the query, or implicit, such as a search for a service where the engine infers proximity matters. Local rankings turn on a different mix of factors from ordinary organic results: relevance to the query, distance from the searcher, and prominence, which includes consistency of business information across the web. That consistency, often shortened to NAP for name, address, and phone number, is unglamorous and genuinely consequential, because conflicting details across directories reduce confidence in the entity.",
    whyItMatters:
      "For any business serving a defined area, local search is where a large share of commercial intent concentrates, and the competitive set is small enough that a well-executed site can compete quickly.",
    related: ["seo", "entity", "schema-markup"],
  },
  {
    slug: "backlink",
    term: "Backlink",
    aka: ["Inbound link"],
    category: "Search & AI",
    short:
      "A backlink is a link from another website to yours, historically one of the strongest signals of a site's standing.",
    definition:
      "A backlink is a hyperlink on another website pointing to yours. Search engines have treated links as votes of confidence since their earliest ranking systems, on the reasoning that people link to things they find useful. Not all backlinks carry equal weight: a link from a widely trusted, topically relevant site is worth vastly more than one from a low-quality directory, and links marked with the nofollow, sponsored, or ugc attributes are treated differently. Buying links breaches Google's spam policies and risks a manual action against the site.",
    whyItMatters:
      "For a new domain, the absence of backlinks is usually the binding constraint on ranking rather than anything on the site itself. Earning them is slow, which is why it is the part most often skipped.",
    misconception:
      "That backlinks are the dominant factor in AI visibility. Research correlating AI brand visibility with various factors has found unlinked brand mentions and presence on community platforms correlate considerably more strongly than raw backlink counts.",
    related: ["seo", "e-e-a-t", "entity"],
  },
  {
    slug: "llms-txt",
    term: "llms.txt",
    category: "Search & AI",
    short:
      "llms.txt is a proposed root-level file offering a curated, machine-readable map of a website's content for large language models.",
    definition:
      "The llms.txt proposal, published in September 2024, describes a markdown file at a site's root providing background on the site and links to clean versions of its key pages, intended to help large language models find and read the content efficiently. A companion expanded variant is commonly called llms-full.txt. Adoption has grown but remains a minority practice among large sites. No major consumer AI search provider has confirmed using it as a retrieval or ranking signal, and Google's published guidance on its AI features states explicitly that such files are ignored. It has found genuine traction in one place: coding assistants and developer tools routinely fetch it when pointed at documentation.",
    whyItMatters:
      "It costs very little to publish and is genuinely useful if you ship technical documentation. It should not be presented as a meaningful lever for AI visibility, because there is currently no evidence that it is one.",
    misconception:
      "That llms.txt is an AI equivalent of robots.txt or a sitemap with comparable standing. It is a proposal with limited adoption and no confirmed consumer support.",
    related: ["aeo", "ai-crawler", "robots-txt"],
  },

  // ---------------------------------------------- Performance
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    category: "Performance",
    short:
      "Core Web Vitals are Google's three metrics for real-world page experience: loading, responsiveness, and visual stability.",
    definition:
      "Core Web Vitals are three metrics Google uses to quantify page experience using data from real visitors. Largest Contentful Paint measures how long until the main content appears, with under 2.5 seconds considered good. Interaction to Next Paint measures how quickly the page responds when someone taps or clicks, with under 200 milliseconds considered good. Cumulative Layout Shift measures how much the layout moves while loading, with under 0.1 considered good. A page passes when the 75th percentile of real visits meets all three thresholds, which means the metrics must hold up on slower devices and connections rather than only on fast ones.",
    whyItMatters:
      "They are a ranking input, though a modest one relative to relevance. The stronger argument is commercial: slow, unstable pages lose visitors and conversions regardless of where they rank.",
    misconception:
      "That First Input Delay is still one of them. Interaction to Next Paint replaced FID in March 2024 and is a considerably harder metric, because it measures responsiveness across the whole visit rather than only the first interaction.",
    related: ["lcp", "cls", "technical-seo", "cdn"],
  },
  {
    slug: "lcp",
    term: "Largest Contentful Paint",
    aka: ["LCP"],
    category: "Performance",
    short:
      "Largest Contentful Paint measures the time until the largest visible element on a page finishes rendering.",
    definition:
      "Largest Contentful Paint, usually shortened to LCP, records the moment the largest visible element in the viewport finishes rendering, which is typically a hero image, a video poster frame, or a large block of heading text. It is the closest single metric to the question a visitor is actually asking, which is whether anything has appeared yet. Google considers under 2.5 seconds good and over 4 seconds poor, measured at the 75th percentile of real visits. Common causes of a poor score are an oversized hero image, slow server response, render-blocking CSS or JavaScript, and web fonts that hide text while loading.",
    whyItMatters:
      "On most websites, compressing and correctly sizing the largest image accounts for the majority of the available improvement, which makes it unusually good value for the effort.",
    related: ["core-web-vitals", "cls", "cdn"],
  },
  {
    slug: "cls",
    term: "Cumulative Layout Shift",
    aka: ["CLS"],
    category: "Performance",
    short:
      "Cumulative Layout Shift measures how much a page's content moves unexpectedly while it loads.",
    definition:
      "Cumulative Layout Shift, or CLS, quantifies unexpected movement of visible content during a page's life, the experience of reaching for a button and having the page shift it. Google considers a score under 0.1 good and over 0.25 poor. Every common cause is preventable: images and embeds without declared width and height give the browser no way to reserve space, adverts and iframes injected into the flow push content down, web fonts swapping in at a different size shift the text below them, and banners inserted above existing content move everything a visitor was already reading.",
    whyItMatters:
      "It is the Core Web Vital users notice most viscerally, because it causes mis-taps rather than merely delay, and it is usually the cheapest of the three to fix.",
    related: ["core-web-vitals", "lcp"],
  },
  {
    slug: "cdn",
    term: "CDN",
    aka: ["Content delivery network", "Edge network"],
    category: "Performance",
    short:
      "A CDN is a distributed network of servers that delivers a website's files from a location physically near each visitor.",
    definition:
      "A content delivery network is a geographically distributed set of servers that caches a website's files and serves them from a location close to each visitor, rather than every request travelling to a single origin server. Because network latency is bounded by physical distance, this can remove a substantial share of loading time for distant visitors. A CDN also absorbs traffic spikes, since cached responses never reach the origin, and most providers include protection against denial of service attacks. For statically generated sites the entire site can be served from the edge, making the origin's location largely irrelevant to visitor experience.",
    whyItMatters:
      "For a New Zealand business with international visitors, or an overseas business selling into New Zealand, a CDN resolves most of the hosting-location argument. Round-trip time from Auckland to Europe is roughly 250 milliseconds; from an edge node it is a fraction of that.",
    related: ["static-site-generation", "hosting", "core-web-vitals"],
  },

  // ---------------------------------------------- Development
  {
    slug: "headless-cms",
    term: "Headless CMS",
    category: "Development",
    short:
      "A headless CMS stores and manages content but does not control how it is displayed, delivering it to any front end through an API.",
    definition:
      "A headless content management system separates content from presentation. It provides an editing interface and a structured store, then makes the content available through an API to whatever front end requests it, rather than rendering pages itself using themes and templates. Traditional systems such as WordPress in its default configuration couple the two, so the CMS both stores the content and determines the markup. The headless approach lets the same content serve a website, a mobile app, and a digital display without duplication, and lets developers build the front end in whatever framework suits without fighting the CMS.",
    whyItMatters:
      "It gives an editorial team a clean interface for the parts of a site that change, while keeping design and structure under version control, so content updates cannot gradually degrade the design.",
    related: ["static-site-generation", "api", "framework"],
  },
  {
    slug: "static-site-generation",
    term: "Static site generation",
    aka: ["SSG", "Pre-rendering"],
    category: "Development",
    short:
      "Static site generation builds a website's pages into ready-made HTML files at build time rather than assembling them for each visitor.",
    definition:
      "Static site generation compiles a website into finished HTML, CSS, and JavaScript files ahead of time, during a build step, rather than generating each page from a database when a visitor requests it. The resulting files can be served directly from a content delivery network with no server-side processing in the request path. This produces fast, cheap, and unusually secure sites: there is no database to inject, no admin panel exposed to the internet, and no plugin ecosystem to keep patched. Content is still editable, because a headless CMS can trigger a rebuild whenever something changes.",
    whyItMatters:
      "It removes the two most common sources of website trouble at once: slow, database-bound page loads and the security surface created by a live application handling every request.",
    misconception:
      "That static means unchanging or unable to handle dynamic features. Forms, search, personalisation, and commerce all work; the dynamic parts run as isolated services rather than rendering the whole page.",
    related: ["cdn", "headless-cms", "framework", "hosting"],
  },
  {
    slug: "framework",
    term: "Framework",
    aka: ["Next.js", "React"],
    category: "Development",
    short:
      "A framework is a structured foundation of pre-written code that handles common application concerns so developers build features rather than plumbing.",
    definition:
      "A web framework provides an organised set of conventions and pre-built solutions for problems every application faces: routing between pages, managing state, rendering content, handling data, and building for production. React is a library for building user interfaces from composable components. Next.js is a framework built on React that adds routing, multiple rendering strategies including static generation, image optimisation, and a production build pipeline. Using an established framework means a site is built on conventions other engineers recognise, which matters when a business changes agency or hires internally.",
    whyItMatters:
      "Framework choice determines who can maintain a site later. A codebase in a widely used framework can be handed to almost any competent developer; a bespoke or obscure foundation narrows that pool sharply.",
    related: ["static-site-generation", "headless-cms", "api"],
  },
  {
    slug: "api",
    term: "API",
    aka: ["Application programming interface"],
    category: "Development",
    short:
      "An API is a defined interface that lets one piece of software request data or actions from another.",
    definition:
      "An application programming interface is a published contract describing how one system can ask another for data or ask it to do something. On the web this usually means an HTTP endpoint that accepts a request and returns structured data, most often JSON. APIs are how a website checks stock in an inventory system, takes a payment through a gateway, creates a booking in a scheduling tool, generates a shipping label, or looks up a business in a public register. They allow specialised systems to be combined rather than rebuilt.",
    whyItMatters:
      "Almost every useful integration on a business website is an API integration. Whether a system you rely on has a usable API often determines whether a desired feature is a small job or an impossible one.",
    related: ["headless-cms", "framework", "payment-gateway"],
  },
  {
    slug: "dns",
    term: "DNS",
    aka: ["Domain Name System", "Nameservers"],
    category: "Development",
    short:
      "DNS is the system that translates a human-readable domain name into the numeric address of the server holding the website.",
    definition:
      "The Domain Name System translates domain names people can remember into the IP addresses machines actually use to connect. When a browser is given a domain, it queries DNS to find where to send the request. Nameservers are the authoritative servers holding a domain's records and determining which service answers for it. Common record types include A records pointing to an IPv4 address, CNAME records aliasing one name to another, MX records directing email, and TXT records used for verification and email authentication. Changes propagate over minutes to hours depending on cached time-to-live values.",
    whyItMatters:
      "DNS controls both your website and your email. Whoever holds the domain and its nameservers holds effective control of both, which is why the domain should always be registered in the business's own name.",
    related: ["ssl", "hosting", "nz-domain"],
  },
  {
    slug: "ssl",
    term: "SSL certificate",
    aka: ["TLS", "HTTPS"],
    category: "Development",
    short:
      "An SSL certificate enables encrypted HTTPS connections, protecting data in transit between a visitor's browser and the website.",
    definition:
      "An SSL certificate, more accurately a TLS certificate, allows a website to be served over HTTPS, encrypting traffic between the visitor's browser and the server so it cannot be read or altered in transit. It also verifies that the site is served by whoever controls the domain. Browsers display warnings on sites without one, and modern browser features increasingly require a secure context. Certificates are now generally free and automatically renewed through providers such as Let's Encrypt, which removed the cost argument that once justified unencrypted sites.",
    whyItMatters:
      "An expired certificate produces a full-page browser warning that stops most visitors. It is among the most damaging routine failures a website can have, and among the easiest to monitor for.",
    related: ["dns", "hosting"],
  },
  {
    slug: "hosting",
    term: "Web hosting",
    category: "Development",
    short:
      "Web hosting is the service of storing a website's files on a server connected to the internet so visitors can reach them.",
    definition:
      "Web hosting provides the infrastructure a website runs on. Shared hosting places many sites on one server and is cheapest. Virtual private servers allocate dedicated resources within a shared machine. Dedicated servers provide an entire machine. Managed hosting adds maintenance and support for a specific platform. Static or edge hosting serves pre-built files from a distributed network, which for many modern sites is both the fastest and the cheapest option. The right choice depends on how the site is built: a database-driven application and a statically generated site have genuinely different requirements.",
    whyItMatters:
      "Hosting determines speed, uptime, and how much routine maintenance a site demands. It should also always be in an account the business itself controls.",
    related: ["cdn", "static-site-generation", "dns", "nz-hosting"],
  },

  // ---------------------------------------------- Design
  {
    slug: "wcag",
    term: "WCAG",
    aka: ["Web Content Accessibility Guidelines"],
    category: "Design",
    short:
      "WCAG is the international standard defining how to make web content accessible to people with disabilities.",
    definition:
      "The Web Content Accessibility Guidelines, published by the World Wide Web Consortium, are the international reference standard for web accessibility. WCAG 2.2 became a W3C Recommendation in October 2023 and is the current version. The guidelines are organised around four principles: content must be perceivable, operable, understandable, and robust. Three conformance levels exist. Level A is the minimum, Level AA is what essentially every regulation and procurement standard worldwide adopts, and Level AAA includes requirements not realistically achievable across a whole site. Requirements cover colour contrast, keyboard operability, text alternatives, predictable behaviour, and reduced-motion support.",
    whyItMatters:
      "Accessibility failures exclude real customers, and roughly a quarter of New Zealanders are disabled. The great majority of common failures are also cheap to prevent during design and expensive to retrofit afterwards.",
    related: ["accessibility", "nz-web-standard", "ux"],
  },
  {
    slug: "accessibility",
    term: "Web accessibility",
    aka: ["a11y"],
    category: "Design",
    short:
      "Web accessibility is the practice of designing and building websites that people with disabilities can perceive, operate, and understand.",
    definition:
      "Web accessibility means building websites usable by people with visual, auditory, motor, cognitive, and neurological disabilities, including those using assistive technologies such as screen readers, magnification, voice control, and switch devices. In practice it covers sufficient colour contrast, meaningful text alternatives for images, form fields with proper labels, full keyboard operability with a visible focus indicator, captions for video, semantic HTML structure, and respecting a visitor's reduced-motion preference. Automated testing tools catch roughly a third of real issues, so manual checks such as navigating by keyboard alone remain necessary.",
    whyItMatters:
      "The same structural clarity that helps a screen reader also helps search engines and AI systems extract content, so accessibility work tends to improve machine readability as a side effect.",
    misconception:
      "That an accessibility overlay widget solves it. Overlays are widely criticised by accessibility practitioners, do not fix the underlying markup, and can interfere with a visitor's own assistive tools.",
    related: ["wcag", "nz-web-standard", "ux"],
  },
  {
    slug: "ux",
    term: "UX",
    aka: ["User experience"],
    category: "Design",
    short:
      "UX is the overall experience a person has using a product, covering how easily and successfully they achieve what they came to do.",
    definition:
      "User experience design concerns the whole of a person's interaction with a product: whether they can find what they need, understand what they are looking at, complete the task they arrived for, and recover when something goes wrong. It encompasses information architecture, interaction design, content structure, and the flow between steps. UX is distinct from UI, user interface design, which concerns the visual and interactive surface itself. A site can be visually accomplished and still fail on UX if navigation is confusing, forms are punishing, or the path to the thing people actually want is buried.",
    whyItMatters:
      "Most websites that fail to convert do not fail because of their appearance. They fail because the offer is unclear, the proof is missing, or the path to enquiry takes too many steps.",
    related: ["ui", "accessibility", "conversion-rate"],
  },
  {
    slug: "ui",
    term: "UI",
    aka: ["User interface"],
    category: "Design",
    short:
      "UI is the visual and interactive surface of a product: the layout, typography, colour, and controls a person actually sees and touches.",
    definition:
      "User interface design covers the presentation layer of a digital product: layout and spacing, typography, colour, iconography, imagery, and the appearance and behaviour of interactive controls such as buttons, inputs, and menus. It is where brand becomes tangible on screen and where usability is either supported or undermined by decisions about hierarchy, contrast, and affordance. UI works in service of UX: a well-designed interface makes the intended path obvious and the correct action the easiest one to take.",
    whyItMatters:
      "Visitors form judgements about credibility within moments of a page appearing, and those judgements are formed visually before any content is read.",
    related: ["ux", "design-system", "accessibility"],
  },
  {
    slug: "design-system",
    term: "Design system",
    category: "Design",
    short:
      "A design system is a documented set of reusable components, patterns, and rules that keeps a product visually and behaviourally consistent.",
    definition:
      "A design system is a shared library of components and the rules governing their use: typography scales, colour tokens, spacing units, buttons, form fields, cards, navigation patterns, and the guidance describing when each applies. It exists in both design tools and code, so that what is designed and what is built stay aligned. The purpose is consistency at scale. Without one, a site accumulates six subtly different button styles and four heading sizes as different people add pages over time, and the accumulated drift reads as carelessness.",
    whyItMatters:
      "It makes adding new pages faster and keeps them coherent. It also makes accessibility decisions once, at the component level, rather than relitigating them on every page.",
    related: ["ui", "wireframe", "framework"],
  },
  {
    slug: "wireframe",
    term: "Wireframe",
    category: "Design",
    short:
      "A wireframe is a deliberately plain layout diagram used to agree structure and priority before visual design begins.",
    definition:
      "A wireframe is a low-fidelity representation of a page showing what content appears, in what order, and at what relative prominence, using placeholder blocks rather than finished visual design. Stripping out colour, imagery, and typography is the point: it forces conversation about hierarchy and content rather than aesthetics. Wireframes are cheap to change, which makes them the right place to resolve structural disagreements. Their limitation is real, though: a wireframe cannot tell you whether something will feel considered or expensive, which is why high-fidelity design should follow reasonably quickly.",
    whyItMatters:
      "Structural mistakes caught at wireframe stage cost minutes. The same mistakes caught after build cost a redesign.",
    related: ["ux", "design-system", "ui"],
  },

  // ---------------------------------------------- Commerce
  {
    slug: "conversion-rate",
    term: "Conversion rate",
    category: "Commerce",
    short:
      "Conversion rate is the proportion of visitors who complete a desired action, such as making a purchase or submitting an enquiry.",
    definition:
      "Conversion rate is the number of visitors completing a defined goal divided by total visitors, expressed as a percentage. The goal varies by business: a purchase for a retailer, an enquiry form for a service business, a booking for a clinic, a download for a software company. Rates differ enormously by industry, traffic source, and device, which makes cross-industry benchmarks close to useless. The meaningful comparison is your own rate over time, and the meaningful analysis is where in the funnel people leave rather than the headline number.",
    whyItMatters:
      "Improving conversion rate compounds against all existing traffic, which usually makes it cheaper than acquiring more visitors to the same underperforming page.",
    misconception:
      "That a low conversion rate means the design is wrong. It frequently means the traffic is wrong, arriving with intent the page was never built to serve.",
    related: ["ux", "cart-abandonment"],
  },
  {
    slug: "cart-abandonment",
    term: "Cart abandonment",
    category: "Commerce",
    short:
      "Cart abandonment is when a shopper adds items to an online basket but leaves without completing the purchase.",
    definition:
      "Cart abandonment describes shoppers who begin a purchase and do not finish it. Published industry research consistently places the average rate around 70 percent, though methodology varies. The most frequently cited causes are consistent across studies: unexpected additional costs such as shipping or fees revealed late, being forced to create an account, a checkout that is long or confusing, concerns about payment security, and slow loading. Most of these are information design problems rather than technical ones, which means most are fixable without rebuilding anything.",
    whyItMatters:
      "Abandoned carts represent demand that already exists and has already chosen the product. Recovering a share of it is usually cheaper than generating equivalent new demand.",
    related: ["conversion-rate", "payment-gateway", "ux"],
  },
  {
    slug: "payment-gateway",
    term: "Payment gateway",
    category: "Commerce",
    short:
      "A payment gateway is the service that securely transmits payment details from a website to the systems that authorise and settle the transaction.",
    definition:
      "A payment gateway captures payment details on a website and passes them securely to the acquiring bank and card networks for authorisation. In New Zealand the market has a structure that surprises overseas merchants: local gateways such as Windcave typically require a separate merchant facility from your bank, so the gateway fee and the bank's merchant service fee are distinct charges. Providers such as Stripe act as both gateway and acquirer with a single published rate. Bank transfer options including POLi and Account2Account are also available and are usually cheaper than cards on larger transactions because their fees are capped.",
    whyItMatters:
      "Gateway choice affects both cost and checkout experience. It also affects integration effort, since some New Zealand banks require a hosted payment page and mandatory 3D Secure enrolment.",
    related: ["pci-dss", "cart-abandonment", "api"],
  },
  {
    slug: "pci-dss",
    term: "PCI DSS",
    category: "Commerce",
    short:
      "PCI DSS is the security standard governing how organisations that handle payment card data must protect it.",
    definition:
      "The Payment Card Industry Data Security Standard is a set of requirements developed by the major card networks covering how cardholder data must be stored, processed, and transmitted. It applies to any organisation touching card data, with the depth of validation scaling to transaction volume. For most businesses the practical approach is to reduce scope rather than meet the full standard: by using a hosted payment page or a tokenised field provided by the gateway, card details never reach your server, and the compliance burden falls dramatically. It is a contractual obligation imposed by the card networks rather than legislation.",
    whyItMatters:
      "Handling raw card data on your own infrastructure creates an obligation and a liability that almost no small or medium business should accept when the alternative is a hosted field.",
    related: ["payment-gateway", "ssl"],
  },

  // ---------------------------------------------- New Zealand
  {
    slug: "nzbn",
    term: "NZBN",
    aka: ["New Zealand Business Number"],
    category: "New Zealand",
    short:
      "An NZBN is a unique 13-digit identifier for a New Zealand business, issued as a GS1 Global Location Number.",
    definition:
      "The New Zealand Business Number is a unique 13-digit identifier assigned to New Zealand businesses. It is issued as a GS1 Global Location Number, which means it is an internationally recognised identifier rather than a purely domestic reference. Registered companies receive one automatically, as do GST-registered sole traders, partnerships, trusts, and body corporates; others can opt in free of charge. The NZBN register is public and offers a free API allowing search, retrieval, and watchlists that notify you when another business's registered details change.",
    whyItMatters:
      "Because an NZBN is a GS1 Global Location Number, the technically correct way to publish it in Organization structured data is the globalLocationNumber property rather than a generic identifier field. The free API also makes live business verification possible in supplier onboarding or checkout forms, which is a genuinely New Zealand-only capability.",
    related: ["schema-markup", "nz-domain"],
  },
  {
    slug: "nz-domain",
    term: ".nz domain",
    aka: [".co.nz", "UDAI"],
    category: "New Zealand",
    short:
      "A .nz domain is New Zealand's country-code top-level domain, available at both the second level and under .co.nz and similar.",
    definition:
      "The .nz domain is New Zealand's country-code top-level domain, administered under policies set by InternetNZ and overseen by the Domain Name Commission. Registration at the second level, meaning names such as example.nz, opened in September 2014 alongside the long-established third-level options such as .co.nz and .org.nz. Unlike Australia's .au, there is no New Zealand presence requirement: anyone eighteen or over, or any lawful entity anywhere, can register a .nz name, and there is no requirement to host it in New Zealand. Transfers use a UDAI, a sixteen-character authorisation code that expires after thirty days.",
    whyItMatters:
      "A .co.nz domain is a meaningful trust signal for New Zealand customers. Note also that .nz offers a free privacy option for individual registrants only; a business cannot hide its registration details, and no paid third-party WHOIS privacy exists for .nz.",
    related: ["dns", "nzbn", "nz-hosting"],
  },
  {
    slug: "nz-hosting",
    term: "Data sovereignty",
    aka: ["Onshore hosting", "NZ hosting"],
    category: "New Zealand",
    short:
      "Data sovereignty is the principle that data is subject to the laws of the country where it is stored and of the companies that hold it.",
    definition:
      "Data sovereignty concerns which legal jurisdictions can reach a given dataset. It is more complicated than server location, because three jurisdictions can overlap: where the servers physically sit, the nationality of the cloud provider, and the nationality of the underlying infrastructure operator. New Zealand now has two hyperscale cloud regions on shore, Microsoft's New Zealand North since December 2024 and an AWS region since September 2025, alongside established New Zealand owned providers including Catalyst Cloud, Datacom, and SiteHost. Choosing a New Zealand data centre operated by an overseas-owned company does not by itself remove foreign legal reach.",
    whyItMatters:
      "For most private businesses there is no legal requirement to host in New Zealand. The genuine arguments are latency, roughly 28 milliseconds to Sydney against roughly 250 to Europe, and removing a category of cross-border privacy analysis rather than a legal barrier.",
    misconception:
      "That New Zealand law requires local data storage. It does not, for the overwhelming majority of businesses. Public sector organisations follow a separate policy framework.",
    related: ["hosting", "cdn", "privacy-act"],
  },
  {
    slug: "privacy-act",
    term: "Privacy Act 2020",
    aka: ["Information Privacy Principles", "IPP"],
    category: "New Zealand",
    short:
      "The Privacy Act 2020 is New Zealand's core privacy legislation, built around Information Privacy Principles governing how personal information is handled.",
    definition:
      "The Privacy Act 2020 came into force on 1 December 2020 and applies to almost every New Zealand organisation with no small-business exemption. It is built around Information Privacy Principles governing collection, storage, use, and disclosure of personal information. Most guides still say there are thirteen; as of 1 May 2026 there are fourteen, following the Privacy Amendment Act 2025 which inserted IPP 3A requiring notification when personal information is collected indirectly rather than from the person concerned. Breaches likely to cause serious harm must be notified to the Office of the Privacy Commissioner and to affected individuals as soon as practicable.",
    whyItMatters:
      "If a website has a contact form, a newsletter signup, or analytics that can identify visitors, the Act applies. The practical obligations are a privacy statement describing what actually happens, reasonable security, and a plan for a breach.",
    misconception:
      "That New Zealand requires cookie consent banners. It does not. There is no New Zealand equivalent of the European ePrivacy Directive, and the Privacy Commissioner's position is transparency rather than consent.",
    related: ["nz-hosting", "nz-web-standard"],
  },
  {
    slug: "nz-web-standard",
    term: "NZ Web Accessibility Standard",
    category: "New Zealand",
    short:
      "The New Zealand Government Web Accessibility Standard requires specified government bodies to meet WCAG 2.2 Level AA.",
    definition:
      "The New Zealand Government Web Accessibility Standard 1.2, effective 17 March 2025, requires conformance with WCAG 2.2 Level AA, which places New Zealand ahead of jurisdictions still referencing WCAG 2.1. A companion Web Usability Standard 1.4 took effect the same day, covering matters such as contact details, response times, and privacy statements. The mandate is narrower than commonly assumed: it applies to Public Service departments, New Zealand Police, the Defence Force, the Parliamentary Counsel Office, and the Security Intelligence Service. Crown entities, state-owned enterprises, councils, schools, and universities are not mandated by it.",
    whyItMatters:
      "Private businesses are not bound by the standard, and whether the Human Rights Act 1993 extends to private websites has not been tested in a New Zealand court. The concrete commercial driver is procurement: suppliers bidding for government work are contractually held to WCAG 2.2 AA regardless.",
    related: ["wcag", "accessibility", "privacy-act"],
  },
];

export const getTerm = (slug: string) => glossary.find((t) => t.slug === slug);

export const glossaryCategories: GlossaryCategory[] = [
  "Search & AI",
  "Performance",
  "Development",
  "Design",
  "Commerce",
  "New Zealand",
];

/** Alphabetical, for the hub index. */
export const glossaryAlphabetical = [...glossary].sort((a, b) =>
  a.term.localeCompare(b.term, "en")
);
