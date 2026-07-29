/**
 * Service detail pages.
 * ------------------------------------------------------------------
 * The /services page is the showroom: six disciplines, one screen.
 * This file powers the individual pages behind it, which is where
 * search actually happens. Nobody types "design and engineering
 * studio" into Google; they type "ecommerce website developer" or
 * "answer engine optimisation".
 *
 * RULES for editing this file:
 *  - No em dashes anywhere. Use commas, colons, or full stops.
 *  - Every pricing figure must be labelled as a NEW ZEALAND MARKET
 *    range, never as AntCrow's own price. See [[pricing framing]] in
 *    CostCalculator.tsx for the same rule.
 *  - No invented client names, testimonials, statistics, or awards.
 *  - Claims must be defensible. "We build X" is fine. "We are the
 *    best at X" is not.
 */

export type ServiceFaq = { q: string; a: string };

export type ServiceDetail = {
  slug: string;
  /** Short label for nav, chips, and breadcrumbs */
  name: string;
  /** Two-digit index shown as an eyebrow */
  no: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /**
   * The direct answer. First paragraph on the page, written so an AI
   * assistant can lift it verbatim and still be accurate.
   */
  intro: string;
  /** Rendered as a definition block near the top: quotable by machines */
  definition: { term: string; body: string };
  sections: { heading: string; body: string }[];
  deliverables: string[];
  /** Who this is genuinely a good fit for. Honesty builds trust. */
  goodFit: string[];
  faqs: ServiceFaq[];
  /** Slugs of related services, for internal linking */
  related: string[];
};

export const serviceCatalog: ServiceDetail[] = [
  // ---------------------------------------------------------------
  {
    slug: "web-design",
    name: "Web Design",
    no: "01",
    metaTitle: "Web Design Services | Custom Website Design Studio",
    metaDescription:
      "Custom web design that looks like nobody else. AntCrow designs editorial, high-performance websites for ambitious companies, with no templates and no hand-offs to junior teams.",
    h1: "Web design",
    intro:
      "AntCrow designs custom websites from a blank page. No templates, no theme licences, no drag-and-drop builders. Every layout, typeface, colour, and interaction is chosen for your business specifically, then engineered to load fast and work properly on every screen your customers actually use.",
    definition: {
      term: "What is custom web design?",
      body: "Custom web design means the site is designed from scratch for one business rather than adapted from a pre-built template. The layout, typography, colour system, imagery, and interactions are all decided by a designer working from that company's positioning and audience. The practical difference is that a custom site can look and behave like nothing else in its market, while a template site shares its structure with thousands of others.",
    },
    sections: [
      {
        heading: "Design is the argument your business makes before anyone speaks",
        body: "When a customer compares three companies, they are rarely comparing capability, because they cannot assess it yet. They are comparing signals. A site that looks considered suggests a business that is considered. A site that looks like a template suggests a business that took the cheapest option available, which is a fair inference and a costly one. Design is the first argument you make, and it is made before a single word is read.",
      },
      {
        heading: "How we design",
        body: "We start with positioning, not pixels: who you are for, what you want them to feel, and what has to happen on the page. Then we design in high fidelity early, because a wireframe cannot tell you whether something feels expensive. You see real layouts with real type and real motion within the first fortnight, and you keep seeing them as they evolve. Nothing is presented as final that has not been pressure-tested on a phone.",
      },
      {
        heading: "Mobile is not a version, it is the primary case",
        body: "Most of your visitors arrive on a phone, often on mobile data, often distracted. We design the small screen as a first-class layout rather than squeezing a desktop grid into it. That means legible type at arm's length, tap targets you can hit while walking, and page weight kept low enough that the site appears before patience runs out.",
      },
      {
        heading: "Accessible by default, because it is also just better",
        body: "We build to WCAG 2.2 AA as a working standard: real colour contrast, keyboard navigation that works, focus states you can see, alt text that says something, and motion that respects a visitor's reduced-motion setting. This matters legally for some organisations and ethically for all of them, and it happens to produce clearer, faster sites for everyone.",
      },
    ],
    deliverables: [
      "Discovery and positioning",
      "UX architecture and wireframes",
      "High-fidelity UI design",
      "Design system and components",
      "Interactive prototypes",
      "Responsive layouts for every breakpoint",
      "Accessibility review to WCAG 2.2 AA",
      "Design handover and documentation",
    ],
    goodFit: [
      "You are competing on quality and your current site undersells you",
      "You want a site that could not be mistaken for a competitor's",
      "You value getting it right over getting it cheap",
      "You have real content, or you want help creating it",
    ],
    faqs: [
      {
        q: "How much does custom web design cost in New Zealand?",
        a: "Across the New Zealand market in 2026, custom-designed websites typically run from about $3,000 for a small custom build to $25,000 or more for large or complex projects, while template-based sites start around $1,000. Those are published market ranges rather than AntCrow's prices. We scope and quote every project individually and will tell you honestly what a given budget can achieve.",
      },
      {
        q: "How long does web design take?",
        a: "Design alone usually takes two to four weeks for a standard business website, running in parallel with content work. A full project from kickoff to launch, including development, commonly takes four to eight weeks. Larger e-commerce or product builds run longer, and we agree the timeline before any work begins.",
      },
      {
        q: "Do you use templates or page builders?",
        a: "No. Every AntCrow site is designed from a blank page and built in code. Templates and page builders are legitimate tools for some situations, and if a template is genuinely the right answer for your budget we will say so, but it is not the work we do.",
      },
      {
        q: "Will I be able to update the site myself?",
        a: "Yes, where you want to. We connect the parts that change often, such as projects, team members, blog posts, and menus, to a content editor you can use without touching design or code. Structural changes still come back to us, which is deliberate: it keeps the design from drifting.",
      },
      {
        q: "What do I need to provide?",
        a: "Ideally: your logo and any brand assets, real photography or a budget for it, and a sense of what you want each page to achieve. If you do not have content ready, we can help write and structure it. Real content early makes a dramatic difference, because design built around placeholder text tends to break when reality arrives.",
      },
    ],
    related: ["web-development", "brand-identity", "website-redesign"],
  },

  // ---------------------------------------------------------------
  {
    slug: "web-development",
    name: "Web Development",
    no: "02",
    metaTitle: "Web Development Services | Custom Website Development",
    metaDescription:
      "Hand-built websites in Next.js and React. Fast, accessible, secure, and engineered to last, with no page-builder bloat and no plugin sprawl.",
    h1: "Web development",
    intro:
      "AntCrow builds websites in code, primarily with Next.js and React. That means pages that load in well under a second, security that does not depend on you remembering to update plugins, and a codebase another engineer could pick up and understand. We build the site that was designed, not the closest approximation a builder tool allows.",
    definition: {
      term: "What is custom web development?",
      body: "Custom web development is building a website directly in code rather than assembling it from a content management system's themes and plugins. The developer writes the HTML, CSS, and JavaScript that produce the site, usually with a framework such as Next.js or React. The trade-offs are real: custom builds cost more up front and need a developer for structural changes, but they are typically faster, more secure, and not limited by what a plugin ecosystem happens to support.",
    },
    sections: [
      {
        heading: "Speed is a feature, and it is measurable",
        body: "Google measures real-world loading performance through Core Web Vitals, and slow sites lose visitors long before they lose rankings. We build statically where possible, which means most pages are pre-rendered files served straight from a global edge network with no database call in the path. Images are compressed and sized properly, JavaScript is kept to what the page actually needs, and fonts are loaded so text appears immediately rather than after a blank pause.",
      },
      {
        heading: "The security you get by not having a login page",
        body: "Most website compromises are not sophisticated. They exploit an out-of-date plugin, a weak admin password, or a known vulnerability in a widely used component. A statically generated site has no database to inject, no admin panel exposed to the internet, and no plugin ecosystem to keep patched. It is not immune to everything, but it removes the categories of risk that account for most real-world incidents.",
      },
      {
        heading: "Content management that fits how you actually work",
        body: "We connect the changing parts of your site to a headless content editor, so your team updates content in a clean interface and the site rebuilds itself. You are not editing layouts, which is the point: the design stays intact while the content stays current. Where a site genuinely does not need a CMS, we say so rather than selling one.",
      },
      {
        heading: "Built to be handed over",
        body: "Your code is yours. We write it to be read: sensible structure, real comments where the reasoning is not obvious, and documentation for anything non-standard. If you ever move to another team, they inherit something maintainable rather than a puzzle. We have no interest in holding clients hostage through complexity.",
      },
    ],
    deliverables: [
      "Next.js and React development",
      "Headless CMS integration",
      "Core Web Vitals performance work",
      "Structured data and semantic markup",
      "Forms, integrations, and third-party APIs",
      "Analytics and conversion tracking",
      "Hosting setup and deployment pipeline",
      "Documentation and handover",
    ],
    goodFit: [
      "You need speed, security, and reliability rather than plugin flexibility",
      "Your site is a business asset, not a brochure you forget about",
      "You have outgrown a template or page-builder site",
      "You want to own your code outright",
    ],
    faqs: [
      {
        q: "What technology do you build with?",
        a: "Primarily Next.js and React, with TypeScript, deployed as static or hybrid sites on a global edge network. For content we use headless CMS platforms, and for e-commerce we integrate with established payment and commerce providers rather than reinventing them. The stack is chosen per project, but the principle is constant: fewer moving parts, fewer things to break.",
      },
      {
        q: "Why not just use WordPress?",
        a: "WordPress is a reasonable choice for content-heavy sites where a large plugin ecosystem is genuinely useful, and roughly 40 percent of the web runs on it for good reasons. The trade-offs are ongoing maintenance, plugin conflicts, security patching, and performance that usually needs active work. We build in code because it produces faster, safer sites with fewer ongoing obligations, but we will tell you when WordPress is the better fit for your situation.",
      },
      {
        q: "Can you work with our existing designs?",
        a: "Yes. If you have designs from another studio or an in-house team, we can build them faithfully. We will flag anything that will cause problems in practice, such as layouts that break on small screens or interactions that will hurt accessibility, before we start rather than after.",
      },
      {
        q: "Do you do ongoing maintenance?",
        a: "Yes. Hosting, monitoring, updates, performance checks, and content changes are available as an ongoing arrangement. Statically built sites need far less routine maintenance than plugin-based ones, so these arrangements tend to be light.",
      },
      {
        q: "What does website hosting cost in New Zealand?",
        a: "Market rates vary widely by type. Shared hosting commonly runs from about $10 to $40 a month, managed WordPress hosting from about $30 to $150 a month, and modern static hosting on a global edge network is frequently free or very low cost at typical business traffic levels. Those are market figures rather than ours. Domain registration for a .nz name is usually around $25 to $50 a year.",
      },
    ],
    related: ["web-design", "ecommerce", "website-maintenance"],
  },

  // ---------------------------------------------------------------
  {
    slug: "ecommerce",
    name: "E-commerce",
    no: "03",
    metaTitle: "E-commerce Website Development | Online Store Design",
    metaDescription:
      "Custom online stores designed to sell. Fast product pages, checkouts that do not lose customers, and the analytics to see exactly where revenue leaks.",
    h1: "E-commerce",
    intro:
      "AntCrow designs and builds online stores where the design serves the sale. That means product pages that answer objections before they are raised, a checkout with as little friction as the payment provider allows, and the measurement to see precisely where people abandon so it can be fixed rather than guessed at.",
    definition: {
      term: "What is custom e-commerce development?",
      body: "Custom e-commerce development means building an online store's storefront specifically for one retailer rather than using a stock theme. The commerce engine handling products, payments, and orders is usually an established platform such as Shopify or a headless commerce provider, while the customer-facing design and experience are built from scratch. This separates the parts worth customising, which is the buying experience, from the parts that are safer to leave to specialists, which is payment handling and security compliance.",
    },
    sections: [
      {
        heading: "Every step between interest and payment loses people",
        body: "Published industry research consistently puts average online shopping cart abandonment around 70 percent, with the most cited causes being unexpected extra costs, forced account creation, and checkouts that are long or confusing. Most of that is a design and information problem rather than a technical one. We work on being clear about total cost early, keeping the path short, and removing every step that exists for the retailer's convenience rather than the customer's.",
      },
      {
        heading: "Product pages have to do the selling",
        body: "In a physical shop a customer can pick something up. Online, the product page carries that entire burden. It needs photography that shows the thing honestly, specifications that answer the practical question, delivery and returns information visible before the decision rather than after, and social proof where it genuinely exists. We design product pages as the most important pages on the site, because commercially they are.",
      },
      {
        heading: "Speed matters more here than anywhere else",
        body: "E-commerce is where slow loading converts directly into lost revenue, and the effect compounds on mobile data. We build storefronts as pre-rendered pages where possible, keep image payloads tight without visibly degrading product photography, and load only the code a given page requires. The commerce logic still runs on a proven platform; what we change is the speed at which the customer experiences it.",
      },
      {
        heading: "Payments and compliance handled properly",
        body: "We integrate established payment providers rather than handling card data ourselves, which is both safer and how PCI DSS compliance is realistically achieved by a business of any normal size. For New Zealand retailers that typically means Stripe, Windcave, or your platform's native payments, plus buy-now-pay-later options such as Afterpay or Laybuy where they suit your customers. We will walk through the fee structures honestly, because they differ more than most retailers realise.",
      },
    ],
    deliverables: [
      "Storefront design and build",
      "Product and category page architecture",
      "Checkout experience optimisation",
      "Payment gateway integration",
      "Shipping and tax configuration",
      "Inventory and order management setup",
      "Product schema and search visibility",
      "Conversion tracking and analytics",
    ],
    goodFit: [
      "You have products that deserve better presentation than a stock theme",
      "Your current store converts worse than your traffic suggests it should",
      "You are moving from marketplace selling to your own storefront",
      "You need the store to match a considered brand",
    ],
    faqs: [
      {
        q: "How much does an e-commerce website cost in New Zealand?",
        a: "The New Zealand market for online stores generally runs from about $5,000 for a straightforward custom storefront to $18,000 or more for larger catalogues, custom integrations, or complex fulfilment. Those are published market ranges rather than AntCrow's prices. Platform subscription and payment processing fees sit on top of the build cost in every case.",
      },
      {
        q: "Which e-commerce platform should I use?",
        a: "For most New Zealand retailers, Shopify handles payments, tax, inventory, and security well enough that building those from scratch is hard to justify. Where a business has unusual requirements, a headless setup keeps that engine while allowing a completely custom storefront. WooCommerce suits some content-led businesses already on WordPress. The right answer depends on catalogue size, fulfilment complexity, and how much you need the buying experience to be distinctive.",
      },
      {
        q: "Can you migrate my existing store?",
        a: "Yes. Product data, customer accounts, and order history can generally be migrated between major platforms. The part that needs real care is URL mapping: if existing product URLs change without redirects, you lose the search rankings those pages have earned. We map redirects before launch rather than discovering the problem afterwards.",
      },
      {
        q: "Do you handle product photography?",
        a: "We art-direct it and can arrange a photographer, but we do not shoot it ourselves. Product photography is worth investing in properly, because on an e-commerce site it is doing the job a physical shelf would do.",
      },
      {
        q: "Will my products show up in Google Shopping and AI answers?",
        a: "We implement Product structured data with pricing, availability, and review markup where it genuinely applies, which is what both Google Shopping and AI assistants read to understand your catalogue. Feed setup for Google Merchant Center can be included. We do not mark up reviews that do not exist, because that breaches Google's guidelines and risks a manual penalty.",
      },
    ],
    related: ["web-development", "seo", "web-design"],
  },

  // ---------------------------------------------------------------
  {
    slug: "seo",
    name: "SEO",
    no: "04",
    metaTitle: "SEO Services | Technical SEO & Search Visibility",
    metaDescription:
      "Search engine optimisation built into the website rather than bolted on. Technical SEO, structured data, content architecture, and honest measurement.",
    h1: "Search engine optimisation",
    intro:
      "AntCrow builds search visibility into websites from the first day rather than treating it as an afterthought. That covers the technical foundation search engines need to crawl and understand your site, the content architecture that lets you compete for the searches that matter, and measurement honest enough to show what is and is not working.",
    definition: {
      term: "What is SEO?",
      body: "SEO, or search engine optimisation, is the practice of making a website more likely to appear in unpaid search results for relevant queries. It has three broad parts: technical SEO, which is whether search engines can crawl, render, and understand the site; on-page SEO, which is whether the content genuinely answers what people are searching for; and off-page SEO, which is whether other credible sites reference yours. No provider can guarantee a specific ranking, because no provider controls the ranking systems.",
    },
    sections: [
      {
        heading: "The technical foundation, which most sites get wrong quietly",
        body: "Before content can rank, a search engine has to reach it, render it, and understand it. That means clean crawlable URLs, correct canonical tags so duplicate versions do not compete with each other, a sitemap that reflects reality, structured data that describes what each page is, fast loading measured by Core Web Vitals, and no accidental blocking in robots directives. These problems are invisible from the front end, which is exactly why they persist for years on otherwise well-run sites.",
      },
      {
        heading: "Content that matches what people actually search",
        body: "Most business websites are organised around the company's internal structure rather than around what customers type. The fix is unglamorous: find the real queries, understand what the searcher actually wants, and build a page that genuinely serves that intent rather than a page that mentions the keyword. One page that fully answers a question outperforms five pages that circle it.",
      },
      {
        heading: "Local search, where proximity and consistency decide it",
        body: "For businesses serving a defined area, local search rankings turn largely on three things: relevance to the query, distance from the searcher, and prominence signals such as consistent business information across the web. Getting your name, contact details, and service areas identical everywhere they appear sounds trivial and demonstrably is not. We handle the on-site half properly, including local structured data and location content that says something real.",
      },
      {
        heading: "Measurement without the theatre",
        body: "We set up Google Search Console, Bing Webmaster Tools, and analytics so you can see actual queries, actual impressions, and actual conversions rather than a vanity dashboard. We will also tell you plainly when SEO is the wrong investment for your situation. A business in a low-search-volume category is often better served by referral and direct channels, and pretending otherwise would be selling you something you do not need.",
      },
    ],
    deliverables: [
      "Technical SEO audit and fixes",
      "Structured data implementation",
      "Keyword and intent research",
      "Content architecture and internal linking",
      "Core Web Vitals performance work",
      "Local search optimisation",
      "Search Console and Bing Webmaster setup",
      "Reporting on queries, rankings, and conversions",
    ],
    goodFit: [
      "Your customers genuinely search for what you offer",
      "You are willing to give it months rather than weeks",
      "You want the technical foundation done properly once",
      "You would rather hear an honest assessment than a promise",
    ],
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "For a new domain, meaningful organic traffic usually takes four to twelve months, because search engines weigh signals that accumulate over time. An established site with technical problems can improve faster, sometimes within weeks of fixes being deployed, since the underlying authority already exists. Anyone promising first-page rankings in thirty days is either misrepresenting the timeline or targeting searches nobody performs.",
      },
      {
        q: "Can you guarantee first-page rankings?",
        a: "No, and neither can anyone else. Search rankings are determined by systems Google and Microsoft control and change constantly. Any provider guaranteeing a specific position is either relying on searches with no competition or is not being straight with you. What can be committed to is the work: technical correctness, content that serves real intent, and transparent reporting.",
      },
      {
        q: "How much does SEO cost in New Zealand?",
        a: "Ongoing SEO retainers in the New Zealand market commonly run from about $800 to $4,000 a month depending on scope and competitiveness, with one-off technical audits typically from about $1,000 to $5,000. Those are market ranges rather than AntCrow's prices. We scope SEO work per project and are equally willing to do a single foundational engagement rather than an open-ended retainer.",
      },
      {
        q: "Is SEO still worth it now that AI answers questions directly?",
        a: "Yes, and the two are increasingly the same job. AI assistants build their answers largely from web content they can crawl and trust, so the technical and content work that earns search visibility is substantially the work that earns AI citations. What is changing is the measurement, since an AI citation may never produce a click, and the growing importance of being quotable rather than merely rankable.",
      },
      {
        q: "What is the difference between SEO and AEO?",
        a: "SEO aims to rank a page in a list of search results. AEO, or answer engine optimisation, aims to have your content cited inside an AI-generated answer. They share a foundation, since both need crawlable, credible, well-structured content, but they differ in emphasis: AEO rewards direct, self-contained answers, clear factual statements, and strong entity clarity about who you are.",
      },
    ],
    related: ["ai-search-optimisation", "web-development", "website-redesign"],
  },

  // ---------------------------------------------------------------
  {
    slug: "ai-search-optimisation",
    name: "AI Search Optimisation",
    no: "05",
    metaTitle: "AI Search Optimisation | AEO & GEO Services",
    metaDescription:
      "Answer engine optimisation for ChatGPT, Google AI Overviews, Perplexity, and Copilot. Be the source AI assistants cite when customers ask.",
    h1: "AI search optimisation",
    intro:
      "Your customers increasingly ask an AI assistant instead of scrolling a results page. AntCrow engineers websites to be found, understood, and cited by those systems: ChatGPT, Google's AI Overviews and AI Mode, Perplexity, Copilot, and Claude. It is a distinct discipline from classic SEO, and most websites are currently invisible to it.",
    definition: {
      term: "What is AEO (answer engine optimisation)?",
      body: "AEO, sometimes called GEO or generative engine optimisation, is the practice of making a website's content likely to be retrieved and cited by AI systems when they generate an answer. Where traditional SEO competes for a position in a ranked list, AEO competes to be the source quoted inside a synthesised response. In practice it emphasises self-contained direct answers, clear factual statements, structured data, unambiguous identity signals about the organisation, and allowing the relevant AI crawlers to access the site at all.",
    },
    sections: [
      {
        heading: "The shift is in how the question gets asked",
        body: "Classic search returns ten links and lets the visitor choose. An AI assistant returns one composed answer, usually citing a handful of sources. That compresses the field dramatically: being the eighth-best result used to mean some traffic, and now it frequently means none. The compensation is that a citation carries the assistant's implicit endorsement, which is why AI-referred visitors tend to arrive further along in their decision than search visitors do.",
      },
      {
        heading: "Being quotable is a structural property, not a writing style",
        body: "AI systems retrieve passages, not pages. A paragraph that depends on the three paragraphs above it to make sense is hard to quote safely, so it tends not to be. We restructure content so each substantive answer stands alone: the question phrased the way people ask it, the answer immediately beneath it, specifics rather than adjectives, and no dependence on surrounding context. This also happens to make pages easier for humans to read, which is not a coincidence.",
      },
      {
        heading: "Entity clarity, or making sure the machine knows who you are",
        body: "Before an assistant can recommend you, it needs to have formed a confident understanding of what your organisation is, what it does, and where it operates. That understanding is assembled from structured data on your site, consistent descriptions of you across the web, and references from sources the system already trusts. Vagueness is the enemy: a business described three different ways in three places is a business the model is unsure about, and models avoid citing what they are unsure about.",
      },
      {
        heading: "Crawler access, which is where many sites silently fail",
        body: "AI systems use distinct crawlers, and blocking them is easy to do by accident. A robots.txt written years ago, a security product filtering unfamiliar user agents, or a platform default can all make a site invisible to AI retrieval while leaving Google unaffected. We audit which AI crawlers can actually reach your content and make deliberate decisions about each, including the genuinely reasonable decision to block training crawlers while allowing the search and retrieval ones.",
      },
    ],
    deliverables: [
      "AI visibility baseline across the major assistants",
      "Entity and identity structured data",
      "Answer-first content restructuring",
      "AI crawler access audit and configuration",
      "llms.txt and machine-readable content surfaces",
      "Competitor comparison in AI answers",
      "Prioritised fix list with expected impact",
      "Re-measurement after implementation",
    ],
    goodFit: [
      "Your customers research before they buy",
      "You rank reasonably on Google but never appear in AI answers",
      "You operate somewhere competitors are already being recommended",
      "You would rather move early than catch up",
    ],
    faqs: [
      {
        q: "What is the difference between AEO, GEO, and SEO?",
        a: "SEO optimises for position in a ranked list of links. AEO, answer engine optimisation, optimises for being cited inside an AI-generated answer. GEO, generative engine optimisation, is a near-synonym of AEO that came out of academic research and is used interchangeably in practice. All three rest on the same foundation of crawlable, credible, well-structured content, but AEO and GEO put more weight on self-contained answers and clear entity signals.",
      },
      {
        q: "Which AI systems does this cover?",
        a: "The ones that meaningfully drive discovery: OpenAI's ChatGPT search, Google's AI Overviews and AI Mode, Perplexity, Microsoft Copilot, and Claude. They differ in how they retrieve content, with some leaning on their own crawlers and others on existing search indexes, which is why the work covers several distinct access paths rather than one.",
      },
      {
        q: "Does llms.txt actually do anything?",
        a: "Its adoption is genuinely limited, and no major AI provider has committed to honouring it as a ranking or retrieval signal. We implement it because it costs almost nothing and provides a clean machine-readable map of a site, but we do not present it as a significant lever. Anyone selling llms.txt as the centrepiece of an AI visibility strategy is overstating what it currently does.",
      },
      {
        q: "Can you guarantee my business will be recommended by ChatGPT?",
        a: "No. AI systems choose their sources through processes their operators control and do not publish, and outputs vary between users and over time. What can be done is to remove every reason a system would fail to find, understand, or trust your content, and to measure where you stand before and after. We report what actually changed rather than claiming credit for a system we do not control.",
      },
      {
        q: "How is AI visibility measured?",
        a: "By asking the assistants the questions your customers ask and recording what they answer: whether you appear, in what position, how you are described, and which competitors are named instead. Repeated over time and across systems, that gives a real picture. It is more manual than a rankings dashboard, and considerably more honest than one.",
      },
    ],
    related: ["seo", "ai-concierges", "web-development"],
  },

  // ---------------------------------------------------------------
  {
    slug: "brand-identity",
    name: "Brand & Identity",
    no: "06",
    metaTitle: "Brand Identity Design | Logo, Visual Identity & Guidelines",
    metaDescription:
      "Visual identity systems with intent: logo and wordmark, typography, colour, art direction, and guidelines that keep a brand coherent as it grows.",
    h1: "Brand and identity",
    intro:
      "AntCrow builds visual identity systems: the logo, typography, colour, imagery, and rules that together make a company recognisable. Not a logo delivered in isolation, but a system considered enough that everything you produce afterwards looks like it came from the same place.",
    definition: {
      term: "What is a brand identity system?",
      body: "A brand identity system is the complete set of visual and verbal elements an organisation uses to present itself consistently: logo and wordmark, typefaces, colour palette, imagery direction, layout principles, tone of voice, and the documented rules governing their use. It differs from a logo in the same way a language differs from a single word. The purpose is coherence: any person producing material for the organisation should be able to make something that unmistakably belongs to it.",
    },
    sections: [
      {
        heading: "A logo is the smallest part of the job",
        body: "Most of what makes a brand recognisable is not the mark. It is the typeface, the colour relationships, the way photography is treated, the amount of space left empty, the rhythm of the layout. People recognise these before they consciously register a logo. We design the system, and the mark takes its place within it rather than carrying the whole weight alone.",
      },
      {
        heading: "Identity work is positioning made visible",
        body: "Before anything is drawn, the useful question is what you want someone to conclude about you within a second of looking. Precise or approachable, established or insurgent, expensive or accessible. Those conclusions are reached visually and almost instantly. We start with the positioning and design toward it, which is what separates identity work from decoration.",
      },
      {
        heading: "Designed for where it will actually live",
        body: "A mark that works on a presentation slide can fall apart as a favicon, embroidered on a shirt, printed one colour on an invoice, or cropped into a social avatar. We design and test across the real surfaces from the start: small sizes, single colour, dark backgrounds, awkward crops. An identity that only works in ideal conditions is an identity that will be quietly abandoned.",
      },
      {
        heading: "Guidelines that get used",
        body: "Brand guidelines fail when they are a hundred pages nobody opens. We produce guidance sized to the organisation: clear rules, real examples, correct files in every format, and enough explanation that someone can make a sensible decision about a case the document did not anticipate. The measure of success is whether material produced a year later still looks right.",
      },
    ],
    deliverables: [
      "Positioning and brand strategy",
      "Logo and wordmark design",
      "Typography system",
      "Colour palette and usage rules",
      "Art direction and imagery guidance",
      "Layout and grid principles",
      "Brand guidelines document",
      "Complete asset library in all formats",
    ],
    goodFit: [
      "You are launching and want to start coherent",
      "Your current identity no longer matches what the business became",
      "Your materials look like they came from different companies",
      "You need something that will still work at ten times the size",
    ],
    faqs: [
      {
        q: "How much does brand identity design cost in New Zealand?",
        a: "The New Zealand market for identity work generally runs from about $1,500 for a basic logo and asset package to $8,000 or more for a full identity system with strategy and guidelines. Larger programmes run higher again. Those are market ranges rather than AntCrow's prices, and we scope each engagement individually.",
      },
      {
        q: "Do I own the logo and can I trademark it?",
        a: "You own the final artwork and all rights to it on completion, with the transfer stated in writing. Whether it can be registered as a trade mark is a separate legal question determined by the Intellectual Property Office of New Zealand, which assesses distinctiveness and conflicts with existing marks. We design with registrability in mind and run preliminary searches, but registration advice should come from an intellectual property lawyer or trade mark attorney.",
      },
      {
        q: "How long does a brand identity project take?",
        a: "Typically three to six weeks for a focused identity, longer where strategy work or extensive stakeholder consultation is involved. The variable is rarely design time; it is how quickly decisions get made on your side.",
      },
      {
        q: "Can you refresh our existing brand instead of replacing it?",
        a: "Often that is the better call. If your mark carries genuine recognition, throwing it away discards real value. An evolution keeps what people recognise while fixing what does not work: typography, colour, application, and consistency. We will give you an honest view on whether yours is worth keeping.",
      },
      {
        q: "Do you design brands without building the website?",
        a: "Yes. Identity work stands on its own, and we hand over a complete asset package your existing web team can implement. The work does tend to be stronger when identity and website are designed together, because each informs the other, but it is not a requirement.",
      },
    ],
    related: ["web-design", "web-development", "website-redesign"],
  },

  // ---------------------------------------------------------------
  {
    slug: "ai-concierges",
    name: "AI Concierges & Agents",
    no: "07",
    metaTitle: "AI Concierge & Chatbot Development | Custom AI Assistants",
    metaDescription:
      "Custom AI assistants trained on your business that answer real questions, capture enquiries, and hand over to a human at the right moment.",
    h1: "AI concierges and agents",
    intro:
      "A concierge, not a chatbot. AntCrow designs and builds AI assistants trained on your actual business: your services, your process, your availability, your voice. They answer real questions properly, capture the enquiry when someone is ready, and hand to a human the moment they should rather than trapping people in a loop.",
    definition: {
      term: "What is an AI concierge?",
      body: "An AI concierge is a website assistant built on a large language model and grounded in a specific organisation's own information, so it can answer questions about that business in natural conversation. It differs from a traditional chatbot, which follows a pre-scripted decision tree and fails when a visitor phrases something unexpectedly. A well-built concierge is constrained to its knowledge base, declines to answer what it does not know, and escalates to a human rather than inventing a response.",
    },
    sections: [
      {
        heading: "Why scripted chatbots are disliked",
        body: "The classic website chatbot follows a decision tree. Ask something the tree did not anticipate and it either loops, misroutes you, or offers a form you could have found yourself. Visitors learned this quickly and now dismiss the widget on sight. A language model grounded in real business information handles the question as asked, which is the difference between a tool people use and a tool people close.",
      },
      {
        heading: "Grounded, constrained, and honest about its limits",
        body: "The genuine risk with AI assistants is confident invention. We mitigate it structurally: the assistant answers only from a curated knowledge base you control, is instructed to say plainly when something is outside it, never quotes prices or commits to timelines unless you have explicitly authorised those figures, and escalates rather than improvises. An assistant that occasionally says it does not know is far more valuable than one that occasionally makes something up.",
      },
      {
        heading: "It should do something, not just talk",
        body: "The point of a concierge is action. Capture the enquiry with the details you actually need to quote. Check availability. Book the consultation. Send the guide. Route an urgent job differently from a general question. We design what the assistant is allowed to do, and everything it does lands in the systems you already use.",
      },
      {
        heading: "In your voice, and under your control",
        body: "The assistant is a member of your team in the visitor's mind, so it should sound like one. We write its tone deliberately, set boundaries on subjects it will not discuss, and give you a plain interface for updating its knowledge as your business changes. You see every conversation, which is also one of the most useful sources of insight you will get about what customers are actually confused by.",
      },
    ],
    deliverables: [
      "Concierge design and conversation strategy",
      "Knowledge base construction",
      "Guardrails, tone of voice, and escalation rules",
      "Lead capture and CRM integration",
      "Booking and availability integration",
      "Conversation review dashboard",
      "Managed hosting and monitoring",
      "Ongoing knowledge base tuning",
    ],
    goodFit: [
      "You answer the same questions repeatedly by email",
      "Enquiries arrive outside working hours and go cold",
      "Your services need explaining before someone can buy",
      "You want the insight of seeing what visitors actually ask",
    ],
    faqs: [
      {
        q: "How is this different from a chatbot?",
        a: "A traditional chatbot follows a scripted decision tree and breaks when a question is phrased unexpectedly. A concierge is built on a language model grounded in your business information, so it understands the question as asked. The practical difference is that visitors get a real answer rather than a menu.",
      },
      {
        q: "Will it make things up about my business?",
        a: "It is constrained to a knowledge base you control and instructed to say clearly when something falls outside it. We deliberately prevent it from quoting prices, committing to timelines, or making claims unless you have explicitly authorised those specifics. No AI system can be guaranteed to never err, which is precisely why we design for escalation and why every conversation is reviewable.",
      },
      {
        q: "How much does an AI concierge cost?",
        a: "This depends on knowledge base depth, integrations, and expected conversation volume, and there are ongoing costs for the underlying AI usage and hosting that scale with traffic. We scope and quote per project and will be direct about the running costs, since they are the part most providers leave vague.",
      },
      {
        q: "Do I need one?",
        a: "Often not, and we will say so. If your business is simple to understand and your enquiry volume is low, a clear website and a good contact form do the job. Concierges earn their place where services need explaining, where questions repeat, or where enquiries arrive at hours you do not work.",
      },
      {
        q: "What about privacy and the Privacy Act?",
        a: "Conversations may contain personal information, which brings obligations under the Privacy Act 2020 for New Zealand businesses, including being transparent about collection, storing it securely, and using it only for the stated purpose. We design retention deliberately, disclose the assistant's nature to visitors, and can configure it to avoid collecting sensitive information at all. For advice specific to your obligations, consult a privacy professional.",
      },
    ],
    related: ["ai-search-optimisation", "web-development", "seo"],
  },

  // ---------------------------------------------------------------
  {
    slug: "website-redesign",
    name: "Website Redesign",
    no: "08",
    metaTitle: "Website Redesign Services | Rebuild Without Losing Rankings",
    metaDescription:
      "Redesign an existing website without losing the search rankings it has earned. Audit first, redirect properly, and fix the reasons it underperformed.",
    h1: "Website redesign",
    intro:
      "AntCrow redesigns existing websites without throwing away what they have earned. We audit first to establish which pages actually bring you traffic and enquiries, map every URL before anything moves, and rebuild around the reasons the current site underperforms rather than simply making it newer.",
    definition: {
      term: "What is a website redesign?",
      body: "A website redesign is rebuilding an existing site's design, structure, and often its underlying technology, while preserving the elements that already perform. The critical difference between a good and bad redesign is usually not visual. It is whether existing URLs were mapped and redirected, whether the pages that drove traffic were retained, and whether the underlying problems were diagnosed before the rebuild began. Redesigns that skip these steps routinely lose a substantial share of organic traffic at launch.",
    },
    sections: [
      {
        heading: "The redesign that loses half your traffic",
        body: "It is a common and entirely avoidable outcome. A business launches a beautiful new site, and organic traffic falls sharply within weeks. The cause is almost always structural: URLs changed without redirects, so every ranking those pages held was discarded. Pages that quietly brought in enquiries were cut because nobody checked the data. Content was shortened for visual reasons, removing the substance that made it rank. None of this is visible in the design review, which is why it survives to launch.",
      },
      {
        heading: "Diagnose before you prescribe",
        body: "We start by finding out what is actually wrong. Analytics show where people leave. Search Console shows which pages earn impressions and which queries you already nearly win. Speed testing shows whether the problem is patience rather than persuasion. Sometimes the finding is that the design is fine and the content is the failure, which is cheaper to fix and worth knowing before you commission a rebuild.",
      },
      {
        heading: "Migration handled with discipline",
        body: "Every existing URL gets mapped to its new destination before launch, with permanent redirects in place on day one. Content that performs is carried across rather than paraphrased away. Structured data, metadata, and internal links are rebuilt deliberately. After launch we monitor crawl errors and rankings closely, because the first few weeks are when a migration problem is still cheap to fix.",
      },
      {
        heading: "Fix the reason, not the symptom",
        body: "A site that fails to convert rarely fails because of its colour palette. It fails because the offer is unclear, the proof is missing, the path to enquiry is buried, or it is too slow on a phone. A redesign is a good opportunity to address those, and a wasted one if it only addresses appearance. We will tell you which of your problems a redesign actually solves.",
      },
    ],
    deliverables: [
      "Analytics and Search Console audit",
      "Full content and URL inventory",
      "Technical and performance diagnosis",
      "Redirect map covering every existing URL",
      "Redesign and rebuild",
      "Content migration and improvement",
      "Post-launch monitoring and correction",
      "Before-and-after measurement",
    ],
    goodFit: [
      "Your site looks dated relative to your competitors",
      "Traffic arrives but enquiries do not follow",
      "The site is slow, fragile, or awkward to update",
      "You have outgrown a template or a DIY build",
    ],
    faqs: [
      {
        q: "Will a redesign hurt my Google rankings?",
        a: "It can, and this is the single biggest risk in any redesign. Rankings are lost when URLs change without permanent redirects, when well-performing pages are removed, or when substantive content is cut. Handled properly, with a complete redirect map and performance data guiding what to keep, rankings are preserved and usually improve as speed and structure get better.",
      },
      {
        q: "How much does a website redesign cost in New Zealand?",
        a: "Redesigns follow the same New Zealand market ranges as new builds, roughly $3,000 to $25,000 for custom work depending on size and complexity, with migration and content work sometimes adding to that. Those are market figures rather than AntCrow's prices. A redesign is occasionally cheaper than a new build because content and structure already exist, and occasionally more expensive because of migration complexity.",
      },
      {
        q: "How do I know if I need a redesign or just fixes?",
        a: "If the design is sound but the site is slow, unclear, or missing content, targeted fixes are usually the better investment. A full redesign is warranted when the technology is holding you back, the brand has moved on, the structure cannot accommodate what you now do, or the site is genuinely costing you credibility. We audit first so this is a decision based on evidence.",
      },
      {
        q: "Can you keep our existing content?",
        a: "Yes, and where it performs we actively want to. Pages that rank represent accumulated trust that is expensive to rebuild. We carry those across, improve them where there is a clear reason, and preserve their URLs wherever possible.",
      },
      {
        q: "How long does a redesign take?",
        a: "Usually four to eight weeks for a standard business site, similar to a new build, with additional time for audit at the start and monitoring after launch. Sites with large content inventories or complex integrations take longer, mostly in migration rather than design.",
      },
    ],
    related: ["web-design", "seo", "web-development"],
  },

  // ---------------------------------------------------------------
  {
    slug: "website-maintenance",
    name: "Website Care & Support",
    no: "09",
    metaTitle: "Website Maintenance & Support | Ongoing Website Care",
    metaDescription:
      "Ongoing website care: hosting, monitoring, updates, backups, performance, and content changes, so your site keeps working without you thinking about it.",
    h1: "Website care and support",
    intro:
      "A website is not a thing you finish. AntCrow provides ongoing care: hosting and uptime monitoring, security and dependency updates, backups you can actually restore from, performance checks, and content changes handled quickly. The aim is that you never have to think about your website until you want to change something.",
    definition: {
      term: "What is website maintenance?",
      body: "Website maintenance is the ongoing work required to keep a live website secure, fast, and functioning: applying software and security updates, monitoring uptime and errors, taking and verifying backups, renewing domains and certificates, checking for broken links and forms, and making content changes. The scope varies substantially by platform. Plugin-based sites such as WordPress need frequent updating, whereas statically built sites have far fewer moving parts and correspondingly lighter maintenance needs.",
    },
    sections: [
      {
        heading: "The failures that happen quietly",
        body: "Websites rarely fail dramatically. A contact form stops delivering after a mail provider changes something, and nobody notices for six weeks of lost enquiries. An SSL certificate lapses and browsers begin warning visitors away. A plugin update conflicts with another and breaks a page nobody visits daily. These are the failures worth monitoring for, because they are invisible from the inside and expensive from the outside.",
      },
      {
        heading: "Backups that have been tested",
        body: "Most sites have backups. Considerably fewer have backups anyone has ever restored from, which means the assumption is untested at exactly the moment it matters. We keep versioned backups, verify that restoration works, and can roll a site back to a known-good state quickly. The value of a backup is entirely in whether it works under pressure.",
      },
      {
        heading: "Performance drifts unless someone watches it",
        body: "A site launched fast does not stay fast automatically. Content teams upload large images, a marketing tag is added, a third-party widget slows the page, and six months later loading has degraded without any single decision causing it. We check performance regularly and flag drift while it is still a small correction rather than a project.",
      },
      {
        heading: "Changes handled without ceremony",
        body: "New team member, updated service, price change, seasonal notice. Small changes should take hours, not a fortnight of quoting. Care arrangements include an allowance for exactly this kind of work, handled directly, so the site stays accurate. Sites drift out of date mostly because updating them is annoying, and that is a solvable problem.",
      },
    ],
    deliverables: [
      "Hosting and deployment management",
      "Uptime and error monitoring",
      "Security and dependency updates",
      "Versioned, tested backups",
      "SSL and domain renewal management",
      "Performance monitoring and correction",
      "Form and integration testing",
      "Content updates and small changes",
    ],
    goodFit: [
      "Nobody internally owns the website",
      "You want someone watching it who will notice before you do",
      "You make regular small content changes",
      "You would rather pay for prevention than emergencies",
    ],
    faqs: [
      {
        q: "How much does website maintenance cost in New Zealand?",
        a: "Maintenance plans in the New Zealand market commonly run from about $50 to $150 a month for basic hosting and updates, and from about $200 to $800 a month for fuller care including content changes and performance work. Those are market ranges rather than AntCrow's prices. Statically built sites generally sit at the lower end because they have far fewer components requiring routine patching.",
      },
      {
        q: "Do I actually need a maintenance plan?",
        a: "It depends on the site. A plugin-based site genuinely needs regular updating, because unpatched components are the most common route to a compromise. A static site with no database and no plugins needs much less, and if you rarely change content you may reasonably choose ad-hoc support instead. We will tell you honestly which category yours falls into.",
      },
      {
        q: "What happens if my site goes down?",
        a: "Monitoring alerts us rather than waiting for you to notice. We diagnose, restore from a verified backup if needed, and tell you what happened and what prevents a repeat. Response times are agreed in advance so expectations are explicit rather than assumed.",
      },
      {
        q: "Can you take over a website someone else built?",
        a: "Usually yes. We start with an audit to understand what is there, what condition it is in, and what risks it carries. Occasionally we find a site built in a way that makes safe maintenance impractical, in which case we will say so plainly rather than charging a monthly fee to manage something unmanageable.",
      },
      {
        q: "Who owns the site and the hosting account?",
        a: "You do. Domains are registered in your name, hosting accounts belong to you, and code is yours. We will never hold a client's domain, code, or accounts as leverage. If you decide to move on, we hand over everything and help with the transition.",
      },
    ],
    related: ["web-development", "seo", "website-redesign"],
  },

  // ---------------------------------------------------------------
  {
    slug: "motion-design",
    name: "Motion & 3D",
    no: "10",
    metaTitle: "Web Motion Design & 3D | Interaction Design Studio",
    metaDescription:
      "Motion and 3D on the web done with restraint: scroll choreography, transitions, WebGL, and micro-interactions that add meaning rather than noise.",
    h1: "Motion and 3D",
    intro:
      "Interaction is part of the product. AntCrow choreographs scroll, transitions, and 3D so a site feels considered rather than merely animated. The discipline is knowing what to leave still: motion that serves comprehension earns its cost, and motion that exists to impress usually just slows the page.",
    definition: {
      term: "What is web motion design?",
      body: "Web motion design is the deliberate use of animation and transition in an interface: how elements enter, how a page changes to another page, how a control responds to being touched, and how scrolling reveals content. Used well it communicates relationships and state, guiding attention and making an interface feel responsive. Used poorly it delays interaction, distracts from content, and can cause genuine discomfort for people sensitive to motion, which is why respecting the operating system's reduced-motion preference is a baseline requirement rather than an optional courtesy.",
    },
    sections: [
      {
        heading: "Motion should mean something",
        body: "Every animation is a small claim on attention and on loading time, so each one should earn it. Good motion tells you where something came from, that an action registered, or that two things are related. Decorative motion that communicates nothing is a cost with no return, and a page full of it reads as a designer performing rather than a business communicating.",
      },
      {
        heading: "Performance is the constraint that keeps it honest",
        body: "Animation that stutters is worse than no animation, and heavy 3D can make a page unusable on a mid-range phone. We animate properties browsers handle efficiently, keep 3D scenes within a strict performance budget, test on real devices rather than a developer's machine, and provide a lighter experience where the hardware calls for it. The site has to be excellent on an ordinary phone on ordinary mobile data.",
      },
      {
        heading: "Accessibility is not negotiable here",
        body: "Some people experience nausea, dizziness, or migraine from parallax and large-scale movement. Operating systems provide a reduced-motion setting for exactly this reason, and we honour it: motion is reduced or removed while the site remains completely functional. Nothing essential is ever communicated by animation alone.",
      },
      {
        heading: "3D where the subject warrants it",
        body: "WebGL and 3D are genuinely valuable for some things: examining a product from every angle, exploring a space, making an abstract idea tangible. They are a poor fit for most business websites, where they add weight and complexity for spectacle. We will tell you which situation you are in before quoting for it.",
      },
    ],
    deliverables: [
      "Interaction and motion design",
      "Scroll choreography",
      "Page transitions",
      "Micro-interactions and state feedback",
      "WebGL and 3D scenes",
      "Performance budgeting",
      "Reduced-motion alternatives",
      "Motion documentation for your design system",
    ],
    goodFit: [
      "Your product or space benefits from being shown, not described",
      "You want a site that feels distinct in a category that all looks alike",
      "You have a brand with enough character to justify the expression",
      "You want it done without wrecking performance",
    ],
    faqs: [
      {
        q: "Does animation slow down a website?",
        a: "It can, and badly implemented animation is one of the more common causes of a site feeling sluggish. Done properly, using efficient properties, keeping the amount of work per frame small, and loading heavy assets only when needed, motion has minimal impact. We hold a performance budget throughout rather than measuring after the fact.",
      },
      {
        q: "Is 3D on a website worth it?",
        a: "Sometimes. It is genuinely valuable when the subject benefits from being examined: physical products, architecture, spaces, complex objects. For a typical service business it usually adds weight and cost without adding persuasion. We would rather talk you out of it than build something impressive that hurts your results.",
      },
      {
        q: "What about people who find motion uncomfortable?",
        a: "Every site we build honours the operating system's reduced-motion preference, which switches animation off or reduces it substantially while keeping the site fully functional. This is a WCAG requirement for some categories of motion and simply correct practice for the rest.",
      },
      {
        q: "Can you add motion to our existing site?",
        a: "Often yes, depending on how it is built. Sites on rigid page builders can be restrictive, and we will assess feasibility honestly before quoting rather than promising something the platform will fight.",
      },
    ],
    related: ["web-design", "web-development", "brand-identity"],
  },
];

export const getService = (slug: string) =>
  serviceCatalog.find((s) => s.slug === slug);

export const serviceSlugs = serviceCatalog.map((s) => s.slug);
