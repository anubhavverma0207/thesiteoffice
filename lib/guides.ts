import type { Block } from "@/components/GuideBody";
import type { Source } from "@/components/Sources";

/**
 * Long-form guides.
 * ------------------------------------------------------------------
 * These are the pages that earn links and citations. The bar for
 * adding one:
 *
 *   1. It answers a question a real person actually types.
 *   2. It contains specifics: numbers, dates, named standards,
 *      thresholds. Adjectives are not content.
 *   3. Every factual claim is traceable to a source in `sources`.
 *      If it cannot be sourced, soften it or cut it.
 *   4. Where it touches law, it says plainly that it is general
 *      information and not legal advice, and it points at the actual
 *      regulator rather than paraphrasing them into a liability.
 *
 * Pricing rule, same as everywhere else on this site: every dollar
 * figure is a published NEW ZEALAND MARKET range, never AntCrow's own
 * price. Label it as such in the sentence, not just in a banner.
 *
 * No em dashes. Ever.
 */

export type GuideFaq = { q: string; a: string };

export type Guide = {
  slug: string;
  /** Short label for cards, breadcrumbs, and related links */
  name: string;
  category: "Buying a website" | "Search & AI" | "Running a website" | "New Zealand";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** The direct answer. Written so it can be lifted verbatim and stay true. */
  standfirst: string;
  /** ISO date this page was genuinely last reviewed. Do not bump without reviewing. */
  updated: string;
  /** ISO date first published. */
  published: string;
  /** Rough reading time, minutes. Honest estimate. */
  readingTime: number;
  blocks: Block[];
  faqs: GuideFaq[];
  sources: Source[];
  /** Slugs of related guides */
  related: string[];
};

export const guides: Guide[] = [
  // =================================================================
  {
    slug: "ai-crawlers-explained",
    name: "AI crawlers explained",
    category: "Search & AI",
    metaTitle: "AI Crawlers Explained: Which Bots to Allow and Which to Block",
    metaDescription:
      "A complete reference to the AI crawlers reaching your website in 2026: what each one does, whether blocking it costs you visibility, and how to decide.",
    h1: "AI crawlers, and which ones to let in",
    standfirst:
      "There is no such thing as \"the AI crawler\". There are dozens, they do three completely different jobs, and blocking the wrong one makes your business invisible to ChatGPT or Copilot while blocking the right one saves you bandwidth and nothing else. This is the full reference, with the decision for each.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 9,
    blocks: [
      {
        type: "p",
        text: "Most advice about AI crawlers treats them as one category to be allowed or blocked wholesale. That is the mistake that quietly costs businesses their AI visibility. OpenAI alone operates four distinct bots that do entirely different things, and the one that determines whether ChatGPT can cite you is not the one most robots.txt files block.",
      },
      {
        type: "h2",
        text: "Three jobs hide behind one label",
      },
      {
        type: "p",
        text: "Every bot in this space is doing one of three things, and the distinction decides everything. Search indexing bots build the index an assistant retrieves from when it answers a question. If you block one of these, you cannot be cited by that assistant, no matter how good your content is. User-fetch bots go and read a specific page because a person asked the assistant about it; blocking these breaks the experience for someone who was already interested enough to paste your URL. Training bots collect content that may inform a future model. Blocking a training bot has no effect on whether you are cited today, which is why it is the one genuinely defensible thing to block if bandwidth is a concern.",
      },
      {
        type: "callout",
        title: "The single most common expensive mistake",
        body: "Blocking GPTBot and assuming you have opted out of AI. GPTBot is OpenAI's training crawler. The bot that decides whether ChatGPT can cite your site in a search answer is OAI-SearchBot, which is a separate token. Many sites have blocked the one with no citation impact while leaving the one that matters untouched, and vice versa.",
      },
      {
        type: "h2",
        text: "The full crawler table",
      },
      {
        type: "p",
        text: "Recommendations below assume you want maximum visibility in AI answers. A publisher whose business model depends on page views may reasonably make different calls on the training column, and that is a legitimate commercial decision rather than a technical one.",
      },
      {
        type: "table",
        caption:
          "Sources: OpenAI, Anthropic, Perplexity, Google, and Apple crawler documentation. Listed in full at the end of this page.",
        headers: ["User agent", "Operator", "Job", "Recommendation"],
        rows: [
          ["Googlebot", "Google", "Search index, and the source for AI Overviews and AI Mode", "Allow"],
          ["Bingbot", "Microsoft", "Bing index, which is the whole of Copilot's retrieval", "Allow"],
          ["OAI-SearchBot", "OpenAI", "Search index used for ChatGPT citation", "Allow"],
          ["ChatGPT-User", "OpenAI", "Live fetch when a person asks about a page", "Allow"],
          ["GPTBot", "OpenAI", "Model training", "Optional"],
          ["Claude-SearchBot", "Anthropic", "Search index for Claude", "Allow"],
          ["Claude-User", "Anthropic", "Live fetch for a Claude user", "Allow"],
          ["ClaudeBot", "Anthropic", "Model training", "Optional"],
          ["PerplexityBot", "Perplexity", "Search index, documented as not used for training", "Allow"],
          ["Perplexity-User", "Perplexity", "Live fetch on user request", "Allow"],
          ["Google-Extended", "Google", "Gemini training and Gemini app grounding only", "Optional"],
          ["Applebot", "Apple", "Siri, Spotlight, Safari suggestions", "Allow"],
          ["Applebot-Extended", "Apple", "Apple Intelligence training only", "Optional"],
          ["Amazonbot", "Amazon", "Alexa and Amazon shopping AI", "Allow"],
          ["Bytespider", "ByteDance", "Training, documented ignoring robots.txt", "Block"],
        ],
      },
      {
        type: "h2",
        text: "Google-Extended does not do what its name suggests",
      },
      {
        type: "p",
        text: "This one catches almost everybody. It is natural to read Google-Extended as the switch that controls whether Google's AI features use your content, and to block it if you would rather not feed them. It is not that switch. Google's own crawler documentation states that Google-Extended governs whether content is used to train Gemini models and to ground certain Gemini and Vertex products, and that it does not affect a site's inclusion in Google Search and is not used as a ranking signal. AI Overviews and AI Mode are served from the ordinary Googlebot index. There is currently no mechanism to appear in Google Search while opting out of AI Overviews. Blocking Google-Extended costs you grounding in the Gemini app and gains you nothing in Search.",
      },
      {
        type: "h2",
        text: "Robots.txt is a request, not a lock",
      },
      {
        type: "p",
        text: "Two things worth being clear-eyed about. First, robots.txt is advisory. Well-behaved operators honour it and several publish IP ranges so you can verify their bots, but a crawler that ignores it will keep ignoring it, so anything you genuinely need to stop has to be stopped at the network edge rather than in a text file. Second, OpenAI's own documentation notes that because ChatGPT-User actions are initiated by a person rather than by a crawl schedule, robots.txt rules may not apply to them. The practical implication is that robots.txt is the right tool for expressing a preference to cooperative operators and the wrong tool for enforcement.",
      },
      {
        type: "h2",
        text: "What allowing everything actually costs",
      },
      {
        type: "p",
        text: "Bandwidth, mostly, and the ratio is worse than people expect. Cloudflare's published analysis of AI bot traffic found that the large majority of it is training collection rather than search indexing or user-triggered fetches, and its crawl-to-referral ratios show some operators crawling tens of thousands of pages for every visitor they send back. For a brochure or services site with modest page counts, this is a rounding error and the trade is clearly worth making. For a large publisher serving millions of pages, it is a real infrastructure cost and a real commercial decision. Know which you are before copying anyone's robots.txt.",
      },
      {
        type: "h2",
        text: "How to check what you are currently doing",
      },
      {
        type: "ol",
        items: [
          "Open yoursite.com/robots.txt in a browser. If it returns nothing or a 404, you are allowing everything by default, which for most businesses is the correct posture anyway.",
          "Look for Disallow lines under any of the user agents in the table above. A blanket Disallow under a named AI bot is the thing to check first.",
          "Check your hosting or CDN settings separately. Several security products block unfamiliar user agents by default, which blocks AI crawlers without anything appearing in robots.txt at all. This is the most common cause of invisible blocking.",
          "Check your server logs for the user agents above. If a bot has never requested anything, something upstream is stopping it.",
          "Confirm the site is indexed in Bing, not just Google. Bing is the entire retrieval layer for Microsoft Copilot and contributes to ChatGPT, and plenty of sites are indexed in one and not the other.",
        ],
      },
      {
        type: "callout",
        title: "Bing is the underrated half of this",
        body: "Bing Webmaster Tools now reports AI-specific data, including a measure of how often your site is cited in AI answers. No equivalent reporting exists in Google Search Console. If you want to actually measure AI visibility rather than guess at it, verifying your site in Bing Webmaster Tools is the highest-value hour available.",
      },
    ],
    faqs: [
      {
        q: "Should I block AI crawlers?",
        a: "For most businesses, no. Blocking search-indexing crawlers such as OAI-SearchBot, Claude-SearchBot, and PerplexityBot removes any possibility of being cited by those assistants. Blocking training crawlers such as GPTBot and ClaudeBot has no effect on current citations and is a reasonable choice if bandwidth is a concern. Publishers whose revenue depends on page views face a genuinely different calculation from service businesses that want to be recommended.",
      },
      {
        q: "Does blocking GPTBot stop ChatGPT from citing my site?",
        a: "No. GPTBot collects training data. ChatGPT's search citations come from an index built by a separate crawler, OAI-SearchBot. Blocking GPTBot while allowing OAI-SearchBot means your content is not used for training but can still be found and cited in ChatGPT search results, which is the combination many businesses actually want.",
      },
      {
        q: "How do I let AI crawlers in?",
        a: "In most cases you already have. An absent or permissive robots.txt allows everything. The more common real-world problem is unintentional blocking by a security product or CDN filtering unfamiliar user agents, which will not show up in robots.txt. Check your server logs to confirm the bots are actually reaching you.",
      },
      {
        q: "Will allowing AI crawlers slow down my website?",
        a: "Not meaningfully for a typical business site. AI crawler traffic is real but modest relative to normal visitor traffic at that scale, and crawlers request pages rather than running expensive operations. Large sites with millions of URLs are the case where crawl volume becomes an infrastructure cost worth managing.",
      },
    ],
    sources: [
      {
        title: "Overview of OpenAI crawlers",
        publisher: "OpenAI Developer Documentation",
        href: "https://platform.openai.com/docs/bots",
      },
      {
        title: "Does Anthropic crawl data from the web?",
        publisher: "Anthropic Support",
        href: "https://support.claude.com/en/articles/8896518",
      },
      {
        title: "PerplexityBot documentation",
        publisher: "Perplexity",
        href: "https://docs.perplexity.ai/guides/bots",
      },
      {
        title: "Google crawlers and user-triggered fetchers",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers",
      },
      {
        title: "AI crawler traffic by purpose and industry",
        publisher: "Cloudflare Radar",
        href: "https://blog.cloudflare.com/ai-crawler-traffic-by-purpose-and-industry/",
      },
      {
        title: "About Applebot",
        publisher: "Apple Support",
        href: "https://support.apple.com/en-us/119829",
      },
    ],
    related: ["content-ai-cites", "what-is-schema-markup"],
  },

  // =================================================================
  {
    slug: "content-ai-cites",
    name: "What AI actually cites",
    category: "Search & AI",
    metaTitle: "What Content AI Search Actually Cites: The Evidence",
    metaDescription:
      "What the research actually shows about getting cited by ChatGPT, AI Overviews, and Perplexity, including the popular tactics the data says do not work.",
    h1: "What AI search actually cites",
    standfirst:
      "Most AEO advice is recycled guesswork, and several of its most repeated tactics are contradicted by the largest datasets available. This is what the published research supports, what it refutes, and where the honest uncertainty sits.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 11,
    blocks: [
      {
        type: "p",
        text: "Answer engine optimisation has attracted an enormous amount of confident advice in a very short time, most of it untested. Meanwhile several large-scale studies have been published, and some of what they found directly contradicts the tactics being sold. This page separates the two, and flags where the evidence is genuinely thin rather than pretending otherwise.",
      },
      {
        type: "h2",
        text: "The strongest signals are off your website entirely",
      },
      {
        type: "p",
        text: "This is the uncomfortable finding. Ahrefs analysed correlations between brand visibility in AI answers and a range of factors across roughly 75,000 brands, and the strongest correlate was mentions on YouTube, at around 0.74. Branded mentions across the web generally followed at roughly 0.66 to 0.71. Domain Rating, the classic SEO authority metric, sat far behind at around 0.27 to 0.33, and raw backlink counts were weaker still. Correlation is not causation and brand size plausibly drives all of these together, but the ordering is consistent and it points somewhere awkward: the biggest lever on whether an AI recommends you is how much the rest of the web talks about you, not how well your own pages are optimised.",
      },
      {
        type: "statGroup",
        items: [
          { value: "0.74", label: "Correlation between YouTube brand mentions and AI visibility" },
          { value: "0.66", label: "Correlation for branded web mentions generally" },
          { value: "0.27", label: "Correlation for Domain Rating, the classic SEO metric" },
        ],
      },
      {
        type: "h2",
        text: "Community platforms are cited far above their share of the web",
      },
      {
        type: "p",
        text: "Analyses of AI citation sources repeatedly surface the same names near the top: Reddit, YouTube, LinkedIn, and Wikipedia. SE Ranking's study of roughly 129,000 domains found that sites with a heavy Reddit presence averaged around 7.0 ChatGPT citations against roughly 1.8 for sites with minimal presence. Review platforms showed a similar pattern, with listed businesses averaging several times the citations of absent ones. Exact figures vary substantially between studies because different researchers measure citation share and mention share differently, so treat the specific numbers as indicative. The direction is consistent enough to act on: presence on the platforms where people discuss your category matters more than most on-site work.",
      },
      {
        type: "h2",
        text: "Tactics the data does not support",
      },
      {
        type: "p",
        text: "Three pieces of standard AEO advice come out badly in the largest available dataset, and it is worth being blunt about them because they are sold constantly.",
      },
      {
        type: "ul",
        items: [
          "Question-phrased headings. SE Ranking found pages using standard topical headings averaged more citations than those using question-style headings. This is the single most repeated AEO tactic and the data suggests it is mildly counterproductive. Use question headings where readers genuinely search that way, not as a citation technique.",
          "FAQPage schema. The same study found a slight negative association with citations, and Google retired the FAQ rich result entirely in May 2026. The markup does no harm, but adding it expecting AI citations is not supported.",
          "Keyword-optimised titles and URLs. Pages with heavily keyword-matched titles averaged materially fewer citations than pages with natural ones. The same pattern appeared for URL slugs. This echoes the Princeton GEO research, which found keyword stuffing was the only tested modification that reduced visibility.",
        ],
      },
      {
        type: "callout",
        title: "On llms.txt",
        body: "Adoption sits somewhere around 5 to 10 percent of large sites and is growing, but no major AI search provider has confirmed consuming it, Google's own documentation explicitly says such files are ignored, and at least one large modelling study found accuracy improved when llms.txt was removed as a variable. It is cheap to publish and genuinely useful for coding assistants pointed at documentation. Selling it as an AI visibility strategy is not honest.",
      },
      {
        type: "h2",
        text: "Tactics the data does support",
      },
      {
        type: "p",
        text: "The Princeton GEO paper, published at KDD 2024, tested nine content modifications against a generative engine across roughly 10,000 queries. Citing sources performed best, followed by adding statistics and adding direct quotations. Notably, the effect was largest for pages ranking around fifth rather than first, which suggests this work matters most for the businesses that are currently almost visible rather than already dominant.",
      },
      {
        type: "ol",
        items: [
          "Cite your sources with real outbound links. The highest-performing single modification in the Princeton research. Outbound citation is what makes a page read as evidence rather than as assertion.",
          "Put concrete numbers in. Pages carrying many specific data points are cited substantially more than pages of adjectives. Every number needs a source attached, or it becomes a liability rather than an asset.",
          "Front-load the answer. Analysis of ChatGPT citations found a large share came from the first third of a page. Lead each section with its conclusion, then support it.",
          "Write sections that stand alone. Roughly 120 to 180 words between headings performed best, which is notably longer than the 40-word answer blocks commonly recommended. A chunk needs claim, evidence, and enough context to survive being extracted.",
          "Name things explicitly. Heavily cited text carries a much higher density of named entities than ordinary prose. Replace \"our platform\" and \"the solution\" with actual names, versions, places, and dates.",
          "Show a visible last-updated date. Pages displaying one were cited substantially more often, and the overwhelming majority of cited content is recent. The date has to be true.",
          "Attribute content to a named person with real credentials, not to a faceless team.",
          "Be fast. Citation rates correlated strongly with first contentful paint. Live-fetch agents time out on slow pages exactly like impatient humans do.",
        ],
      },
      {
        type: "h2",
        text: "There is no single AI visibility to win",
      },
      {
        type: "p",
        text: "Different engines cite startlingly different sources for the same question. Published comparisons have found that Google's own AI Overviews and AI Mode share only a small minority of cited URLs with each other, and that the large majority of cited URLs appear in exactly one engine. Semrush's analysis of AI prompts also found ChatGPT surfacing many more sources per answer than Gemini does, which makes Gemini a far narrower funnel. The practical consequence is that a single AI visibility score is close to meaningless, and progress has to be measured engine by engine.",
      },
      {
        type: "h2",
        text: "The uncomfortable summary",
      },
      {
        type: "p",
        text: "On-site structure work is real, cheap, and bounded. Do it: answer-first sections, real numbers with sources, named authors, visible dates, fast pages, explicit entities. Then accept that the larger share of the outcome sits in things that take much longer, namely being genuinely talked about on the platforms where your category gets discussed. Anyone offering to make you visible in AI search purely through changes to your own website is selling the easy half and quietly omitting the hard one.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between AEO, GEO, and SEO?",
        a: "SEO optimises for a position in a ranked list of links. AEO, answer engine optimisation, optimises for being cited inside an AI-generated answer. GEO, generative engine optimisation, is a near-synonym of AEO originating in academic research and used interchangeably in practice. All three share a foundation of crawlable, credible content, but AEO and GEO put more weight on self-contained answers, concrete evidence, and clear entity signals.",
      },
      {
        q: "Does schema markup help with AI citations?",
        a: "The evidence is weaker than commonly claimed. Google's own guidance states no special schema is required for its AI features, and at least one cross-platform study found a negative overall association between schema presence and citation. The signal that does emerge is that schema carrying concrete values, such as real prices, ratings, dates, and author identity, performs better than structural boilerplate. Markup is not magic; extractable facts are what get used.",
      },
      {
        q: "How long does it take to become visible in AI search?",
        a: "On-site structural improvements can show up within weeks, because retrieval indexes refresh relatively quickly. The off-site signals that correlate most strongly, such as brand mentions and community presence, accumulate over many months. Anyone promising rapid AI visibility for a business nobody discusses is describing something the published data does not support.",
      },
      {
        q: "Can AI visibility be measured?",
        a: "Partially. Bing Webmaster Tools now reports AI-specific data including citation share, which is the only first-party reporting any engine currently offers. Google Search Console provides no AI-specific breakdown. Beyond that, measurement means systematically asking the assistants the questions your customers ask and recording what comes back, repeated over time and per engine.",
      },
    ],
    sources: [
      {
        title: "GEO: Generative Engine Optimization",
        publisher: "Aggarwal et al., KDD 2024, arXiv:2311.09735",
        href: "https://arxiv.org/abs/2311.09735",
      },
      {
        title: "AI brand visibility correlations study",
        publisher: "Ahrefs",
        href: "https://ahrefs.com/blog/ai-brand-visibility-correlations",
      },
      {
        title: "How to optimize for ChatGPT: a data study",
        publisher: "SE Ranking",
        href: "https://seranking.com/blog/how-to-optimize-for-chatgpt/",
      },
      {
        title: "AI features and your website",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      },
      {
        title: "New AI visibility insights in Bing Webmaster Tools",
        publisher: "Microsoft Bing Blogs",
        href: "https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare",
      },
      {
        title: "2026 AI Visibility Index",
        publisher: "Semrush",
        href: "https://www.semrush.com/news/463141-semrush-releases-expanded-2026-ai-visibility-index-analyzing-126-million-ai-search-prompts/",
      },
    ],
    related: ["ai-crawlers-explained", "what-is-schema-markup"],
  },

  // =================================================================
  {
    slug: "choosing-a-web-design-agency-nz",
    name: "Choosing a web design agency",
    category: "Buying a website",
    metaTitle: "How to Choose a Web Design Agency in New Zealand",
    metaDescription:
      "What to ask, what to check, and the warning signs that predict a bad outcome, from someone who has to answer these questions honestly to win work.",
    h1: "How to choose a web design agency",
    standfirst:
      "You are being asked to spend real money on something you cannot fully evaluate until it exists. This is what to ask, what the answers should sound like, and which warning signs reliably predict a project going wrong.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 10,
    blocks: [
      {
        type: "p",
        text: "There is an obvious conflict of interest in a web studio publishing this guide, so here is the disclosure up front: AntCrow is a web design studio and would like your business. The questions below are ones we have to answer honestly to win work, which is precisely why they are useful to you. A studio that becomes evasive under these questions is telling you something.",
      },
      {
        type: "h2",
        text: "Ask who actually does the work",
      },
      {
        type: "p",
        text: "The most common gap between expectation and reality in this industry is not price or timeline, it is who does the work. In many agencies the senior person who wins the project is not the person who designs or builds it, and the handover happens quietly after the contract is signed. Ask directly: who will design this, who will build it, are they employees or subcontractors, and will I speak to them. There is nothing wrong with a studio using specialist contractors, and plenty of excellent work is delivered that way. There is something wrong with not being told. The answer you want is a specific one with names in it.",
      },
      {
        type: "h2",
        text: "Ask what happens to your rankings",
      },
      {
        type: "p",
        text: "This question separates studios that understand websites from studios that make pictures. If you have an existing site with any search presence, a redesign puts it at risk. URLs change, pages get cut, content gets shortened for visual reasons, and organic traffic falls off a cliff a few weeks after a launch everyone was pleased with. The answer you want mentions a redirect map covering every existing URL, a review of which pages currently earn traffic before deciding what to cut, and monitoring after launch. If the answer is a vague reassurance that the new site will be better for SEO, you are talking to someone who has not done this carefully before.",
      },
      {
        type: "callout",
        title: "The single best predictor of a bad outcome",
        body: "A proposal with no discovery in it. If a studio can quote a fixed price for your website before understanding what it needs to do, they are either quoting a template with your logo on it or they are guessing and will manage the gap later through change requests. Serious proposals begin with questions.",
      },
      {
        type: "h2",
        text: "Ask who owns what at the end",
      },
      {
        type: "p",
        text: "Get this in writing before you sign anything, because it is the thing that hurts most when it goes wrong. Who owns the design files, the code, the domain, and the hosting account. Can you leave and take the site with you. Is there a proprietary platform involved that only this studio can maintain. Some agencies deliberately register clients' domains in their own name, which turns a routine parting of ways into a hostage situation. The correct answers are that you own everything, the domain is registered to you, and you can leave whenever you like. Any answer that requires explaining is a warning.",
      },
      {
        type: "h2",
        text: "The questions worth asking, in order",
      },
      {
        type: "ol",
        items: [
          "Who specifically will design and build this, and will I be dealing with them directly?",
          "What happens to my current search rankings, and how do you protect them during migration?",
          "Who owns the design files, the code, the domain, and the hosting account when we finish?",
          "What is not included in this price, and what typically triggers additional cost?",
          "What happens after launch, what does support cost, and what response time does that buy?",
          "Can I update content myself, and which parts specifically?",
          "Can you show me a site you built that is at least two years old and still performing?",
          "What would make you tell a prospective client not to hire you?",
        ],
      },
      {
        type: "p",
        text: "That last question is the most revealing one on the list. Every honest studio has a category of work it is wrong for. A studio that claims to be the right answer for every business and every budget is either inexperienced or not being straight with you.",
      },
      {
        type: "h2",
        text: "What the market actually charges",
      },
      {
        type: "p",
        text: "Price alone tells you little, but a quote far outside the market range should prompt a question in either direction. The figures below are published New Zealand market ranges, not any single studio's pricing, and they vary considerably with scope.",
      },
      {
        type: "table",
        caption:
          "Indicative New Zealand market ranges for 2026. These are market figures rather than AntCrow's prices, and every project is scoped individually.",
        headers: ["Type of project", "Typical NZ market range"],
        rows: [
          ["Template-based small business site", "$1,000 to $4,000"],
          ["Custom-designed business website", "$2,500 to $10,000"],
          ["E-commerce store", "$5,000 to $18,000"],
          ["Large or custom platform build", "$12,000 to $40,000"],
          ["Brand identity, standalone", "$1,500 to $8,000"],
          ["Ongoing care and maintenance", "$50 to $800 per month"],
        ],
        numeric: [1],
      },
      {
        type: "p",
        text: "A quote well below the bottom of these ranges usually means a template, offshore production, or a scope that will grow once work starts. A quote well above the top should come with a clear explanation of what justifies it. Neither is automatically wrong, but both deserve a direct question.",
      },
      {
        type: "h2",
        text: "The warning signs that matter",
      },
      {
        type: "ul",
        items: [
          "Guaranteed first-page Google rankings. Nobody controls Google's ranking systems, and this promise is either meaningless or targeting searches with no competition.",
          "A portfolio with no live links. Real projects have URLs. Screenshots of work that never launched, or launched and was replaced, prove nothing.",
          "Pressure to sign before a discovery conversation has happened.",
          "Vagueness about who does the work, or a portfolio that clearly spans wildly different hands.",
          "Ownership terms that are not in writing, especially around the domain.",
          "Monthly fees whose termination terms are unclear, or that quietly include hosting you cannot move.",
          "No written scope. If what is included lives only in a conversation, disputes are guaranteed.",
        ],
      },
      {
        type: "h2",
        text: "Check the company itself",
      },
      {
        type: "p",
        text: "For a New Zealand studio, the Companies Register at companiesoffice.govt.nz is public, free, and takes two minutes. It tells you when the company was incorporated, who the directors are, and whether it is in good standing. A studio presenting itself as long-established while its company was registered eight months ago is worth a second look. This is the same public-record vetting customers increasingly apply to trades and building companies, and it applies just as well to the people building your website.",
      },
    ],
    faqs: [
      {
        q: "How much should a website cost in New Zealand?",
        a: "Published New Zealand market ranges in 2026 run from roughly $1,000 for a template-based small business site to $10,000 or more for custom design, with e-commerce commonly from around $5,000 and large platform builds higher again. Those are market figures rather than any one studio's prices. Scope drives the number far more than the studio's location does.",
      },
      {
        q: "Should I hire a freelancer or an agency?",
        a: "A good freelancer is often better value for a straightforward site and gives you direct access to the person doing the work. The trade-offs are capacity and continuity: illness, holidays, or a change of career leave you without support. Agencies cost more and add coordination overhead but offer redundancy and a wider range of skills. Neither is inherently better; match it to how critical the site is to your revenue.",
      },
      {
        q: "How long should a website take?",
        a: "Four to eight weeks from kickoff to launch is typical for a standard business website. E-commerce and larger builds run longer. Projects most often slip because content and decisions arrive slowly on the client side rather than because of design or development time, so the timeline is partly within your control.",
      },
      {
        q: "What questions should I ask a web designer before hiring?",
        a: "Who specifically will do the work, what happens to existing search rankings during migration, who owns the code and domain at the end, what is excluded from the price, what post-launch support costs, and what kind of client they would turn away. The last one is the most informative, because every honest studio has projects it is wrong for.",
      },
      {
        q: "Is it safe to hire an overseas web designer?",
        a: "It can be, and plenty of good work is delivered remotely. The genuine risks are practical rather than geographic: time zone gaps that slow decisions, harder recourse if something goes wrong, and unfamiliarity with local obligations such as New Zealand's Privacy Act and Fair Trading Act. Judge the specific studio and the contract rather than the country.",
      },
    ],
    sources: [
      {
        title: "Companies Register search",
        publisher: "New Zealand Companies Office",
        href: "https://companies-register.companiesoffice.govt.nz/",
      },
      {
        title: "Fair Trading Act: misleading claims in trade",
        publisher: "New Zealand Commerce Commission",
        href: "https://comcom.govt.nz/business/avoiding-anti-competitive-behaviour/fair-trading",
      },
    ],
    related: ["website-redesign-checklist", "nz-privacy-act-websites"],
  },

  // =================================================================
  {
    slug: "website-redesign-checklist",
    name: "Website redesign checklist",
    category: "Buying a website",
    metaTitle: "Website Redesign Checklist: Rebuild Without Losing Traffic",
    metaDescription:
      "The complete pre-launch and post-launch checklist for redesigning a website without losing the search rankings and traffic it has already earned.",
    h1: "The website redesign checklist",
    standfirst:
      "A redesign that loses half your organic traffic is common, entirely avoidable, and almost never caused by the design. It is caused by skipping the unglamorous migration steps below.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 9,
    blocks: [
      {
        type: "p",
        text: "The pattern repeats constantly. A business launches a new site everyone is pleased with, and four to six weeks later enquiries have dried up. The design review passed. The migration did not happen. Below is what should be done before, during, and after launch, in the order it should happen.",
      },
      {
        type: "h2",
        text: "Before you design anything, find out what is working",
      },
      {
        type: "p",
        text: "You cannot protect what you have not measured. Before any design work begins, export the data that tells you which pages matter. Google Search Console shows which pages earn impressions and clicks and for which queries. Analytics shows which pages people actually land on and which produce enquiries. Crawl the existing site to get a complete URL inventory. The output you want is a simple list of every page that earns traffic or conversions, which becomes the protected list. Cutting a page that quietly brought in two enquiries a month is invisible at design time and expensive afterwards.",
      },
      {
        type: "ol",
        items: [
          "Export twelve months of Search Console performance data by page and by query.",
          "Export analytics landing page data with conversions, not just sessions.",
          "Crawl the full site to inventory every URL, including ones nobody remembers.",
          "List every page with backlinks pointing to it, since those are the hardest to replace.",
          "Record current Core Web Vitals so you can prove the new site is faster.",
          "Screenshot or archive key pages so you can compare content before and after.",
        ],
      },
      {
        type: "callout",
        title: "The protected list",
        body: "Any page that earns organic impressions, receives external links, or produces conversions goes on a protected list. Those pages either keep their URL exactly, or get a permanent redirect to the closest equivalent. Nothing on that list gets deleted without a specific decision made with the data in front of you.",
      },
      {
        type: "h2",
        text: "Map every URL before launch, not after",
      },
      {
        type: "p",
        text: "This is the step that prevents the traffic collapse, and it is the one most often left until the week of launch when there is no time for it. Build a spreadsheet with every old URL in one column and its new destination in the next. Every single one needs a destination, and that destination should be the closest genuine equivalent rather than the homepage. Redirecting everything to the homepage is technically a redirect and practically a deletion, because search engines treat a mass redirect to an irrelevant page as a soft 404. Use permanent 301 redirects, not temporary 302s, since only the permanent form passes accumulated ranking signals reliably.",
      },
      {
        type: "h2",
        text: "The pre-launch checklist",
      },
      {
        type: "ul",
        items: [
          "Every old URL mapped to a new destination with a 301 redirect, tested in a staging environment.",
          "Redirect chains collapsed, so no URL redirects to another redirect.",
          "Page titles and meta descriptions written for every page, not inherited from a template.",
          "Canonical tags pointing to the correct version of each page.",
          "Structured data implemented and validated with a testing tool.",
          "XML sitemap regenerated to reflect the new structure only.",
          "Robots.txt checked, and any staging-site blocking rules removed before going live.",
          "Analytics and conversion tracking installed and verified with a test conversion.",
          "Every form submitted end to end, confirming the email actually arrives.",
          "Core Web Vitals measured on the staging site and compared with the old one.",
          "Accessibility checked: contrast, keyboard navigation, focus states, alt text.",
          "Tested on a real mid-range phone on mobile data, not only in a desktop browser.",
          "SSL certificate valid, and all internal links using https.",
          "404 page in place that helps people rather than dead-ending them.",
        ],
      },
      {
        type: "callout",
        title: "The one that catches everyone",
        body: "A staging site is usually blocked from search engines with a robots directive or a noindex tag. If that block ships to production, the new site becomes invisible to Google and nobody notices until rankings vanish. Check it on launch day, then check it again the next morning.",
      },
      {
        type: "h2",
        text: "The first fortnight after launch",
      },
      {
        type: "p",
        text: "Migration problems are cheap to fix in week one and expensive in month three, so the monitoring period is not optional. Submit the new sitemap in both Google Search Console and Bing Webmaster Tools on launch day. Watch the coverage and crawl error reports daily for the first week: a spike in 404 errors means a redirect was missed, and the report will tell you exactly which URL. Watch impressions rather than rankings, because impressions move first. Some fluctuation is normal for a week or two as engines recrawl. A sustained drop after three weeks is a problem, not settling.",
      },
      {
        type: "ol",
        items: [
          "Submit the new XML sitemap to Google Search Console and Bing Webmaster Tools.",
          "Check crawl errors daily for the first week and fix every 404 that appears.",
          "Verify redirects are firing correctly by testing a sample of old URLs by hand.",
          "Confirm analytics is recording traffic and conversions properly.",
          "Compare Core Web Vitals against the old site and record the improvement.",
          "Re-test every form a week after launch, because mail delivery problems often appear late.",
          "Watch Search Console impressions weekly for two months before drawing conclusions.",
        ],
      },
      {
        type: "h2",
        text: "When a redesign is the wrong answer",
      },
      {
        type: "p",
        text: "Sometimes the honest advice is not to redesign. If the site is reasonably modern and the real problems are slow loading, unclear messaging, thin content, or a buried contact path, targeted fixes cost a fraction of a rebuild and address the actual cause. A full redesign is warranted when the underlying technology genuinely constrains you, when the brand has moved on, when the structure cannot accommodate what the business now does, or when the site is actively costing credibility. Diagnose before prescribing, because a redesign that fixes appearance while leaving the real problem untouched is an expensive way to stand still.",
      },
    ],
    faqs: [
      {
        q: "Will a website redesign hurt my Google rankings?",
        a: "It can, and this is the single biggest risk in any redesign. Rankings are lost when URLs change without permanent redirects, when pages that earn traffic are deleted, or when substantive content is cut for visual reasons. Handled with a complete redirect map and performance data guiding decisions, rankings are normally preserved and often improve as speed and structure get better.",
      },
      {
        q: "How long does it take to recover rankings after a redesign?",
        a: "If redirects are correct, most sites see fluctuation for two to four weeks while search engines recrawl, then stabilise. If redirects were missed, recovery begins only once they are fixed, and the longer the gap the longer the return. A sustained decline beyond about three weeks should be treated as a fault to diagnose rather than a settling period.",
      },
      {
        q: "Should I keep the same URLs when redesigning?",
        a: "Wherever practical, yes. Keeping a URL is always safer than redirecting it, and a redirect is always safer than deleting. Change URLs only when there is a genuine structural reason, and map every change before launch rather than after.",
      },
      {
        q: "Do I need to redirect old pages I am deleting?",
        a: "If they have any traffic, links, or search impressions, yes, to the closest equivalent page. Pages with no traffic and no links can be allowed to return a 404, which is a legitimate signal that content is genuinely gone. What should be avoided is redirecting everything to the homepage, which search engines commonly treat as a soft 404 and which helps nobody.",
      },
    ],
    sources: [
      {
        title: "Site moves with URL changes",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
      },
      {
        title: "Core Web Vitals and page experience",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/appearance/page-experience",
      },
      {
        title: "Bing Webmaster Tools",
        publisher: "Microsoft",
        href: "https://www.bing.com/webmasters/",
      },
    ],
    related: ["choosing-a-web-design-agency-nz", "core-web-vitals-explained"],
  },

  // =================================================================
  {
    slug: "nz-privacy-act-websites",
    name: "Privacy Act 2020 for websites",
    category: "New Zealand",
    metaTitle: "Privacy Act 2020: What Your NZ Website Must Do",
    metaDescription:
      "What the Privacy Act 2020 requires of a New Zealand business website: contact forms, analytics, cookies, offshore storage, and breach notification.",
    h1: "The Privacy Act 2020 and your website",
    standfirst:
      "If your website collects a name, an email address, or an IP address, the Privacy Act 2020 applies to you. Most New Zealand business sites are quietly non-compliant in the same three ways, and all three are straightforward to fix.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 10,
    blocks: [
      {
        type: "callout",
        title: "This is general information, not legal advice",
        body: "AntCrow builds websites; we are not lawyers. This page explains the obligations as the Office of the Privacy Commissioner describes them, with links to the primary sources so you can read them yourself. For advice about your specific circumstances, particularly if you handle health information, credit information, or large volumes of personal data, consult a privacy lawyer or the Office of the Privacy Commissioner directly.",
      },
      {
        type: "p",
        text: "The Privacy Act 2020 came into force on 1 December 2020, replacing the 1993 Act. It applies to almost every New Zealand business and organisation regardless of size, with no small-business exemption. If your website has a contact form, a newsletter signup, an analytics script, or a chat widget, you are collecting personal information and the Act applies.",
      },
      {
        type: "h2",
        text: "There are fourteen principles now, and most guides still say thirteen",
      },
      {
        type: "p",
        text: "The Act is built around Information Privacy Principles governing how personal information is collected, stored, used, and disclosed. Nearly every guide online says there are thirteen. As of 1 May 2026 there are fourteen: the Privacy Amendment Act 2025 inserted a new principle, IPP 3A, which requires you to notify people when you collect their personal information indirectly rather than from them directly. That covers purchased lists, data enrichment services, lead generation partners, and CRM appends. It is not retrospective, but it applies to indirect collection from that date onward, and it is the obligation most likely to catch a business that buys marketing data.",
      },
      {
        type: "p",
        text: "Four principles do most of the work on a typical business website. Principle 3 requires you to tell people you are collecting their information, why, and who will get it. Principle 5 requires reasonable security safeguards. Principle 11 limits who you can disclose information to. Principle 12 governs sending personal information outside New Zealand, which is where most sites assume they are exposed and often are not, for reasons covered below.",
      },
      {
        type: "callout",
        title: "New Zealand does not require cookie consent banners",
        body: "This deserves saying plainly, because the search results for New Zealand privacy compliance are dominated by overseas software vendors selling consent banners to businesses that do not legally need them. New Zealand has no equivalent of the European ePrivacy Directive and no specific statutory provisions about cookies. The Privacy Commissioner's position is transparency, not consent. If your site serves a significant European or United Kingdom audience, GDPR may apply to those visitors independently, and that is a genuine reason to have one. Compliance with New Zealand law is not.",
      },
      {
        type: "h2",
        text: "The three things most New Zealand business sites get wrong",
      },
      {
        type: "ol",
        items: [
          "No privacy statement, or one that does not describe what actually happens. A privacy policy copied from a template and never matched to the site's real tools does not satisfy Principle 3. It has to describe what you genuinely collect and where it genuinely goes.",
          "Silence about offshore transfer. Principle 12 places conditions on sending personal information overseas. Most sites use offshore analytics, form services, email platforms, and hosting without ever mentioning it. The fix is disclosure and appropriate safeguards, not necessarily changing providers.",
          "No plan for a breach. Since December 2020, notification of privacy breaches that are likely to cause serious harm has been mandatory, to both the Privacy Commissioner and the affected people, as soon as practicable. Most small businesses have never considered what they would do, and the time to work it out is not during an incident.",
        ],
      },
      {
        type: "h2",
        text: "What a compliant privacy statement actually contains",
      },
      {
        type: "p",
        text: "Principle 3 requires that people know certain things at the point their information is collected. In practice that means a privacy statement, linked from every page and referenced near any form, which states in plain language what you collect, why you collect it, who else receives it, whether it goes overseas and where, how long you keep it, and how someone can access or correct what you hold about them. The right of access and correction under Principles 6 and 7 is not optional and is the part most templates omit entirely. Write it in language a customer can read, not in the legal boilerplate that makes people scroll past.",
      },
      {
        type: "ul",
        items: [
          "What personal information the site collects, including through forms, analytics, and any chat or booking tool.",
          "Why it is collected and what it will be used for.",
          "Who else receives it, including named third-party services.",
          "Whether it is stored or processed outside New Zealand, and in which countries.",
          "How long it is retained, and what happens to it afterwards.",
          "How a person can request access to their information or ask for a correction.",
          "How to make a complaint, including that a complaint can be made to the Office of the Privacy Commissioner.",
          "A contact point for privacy enquiries, and the date the statement was last updated.",
        ],
      },
      {
        type: "h2",
        text: "Cookies and analytics in New Zealand",
      },
      {
        type: "p",
        text: "New Zealand has no direct equivalent of the European cookie consent rules, which is why you see fewer consent banners on New Zealand sites than on European ones. That does not make analytics exempt from the Act. Where cookies or analytics collect information that can identify a person, including in some circumstances an IP address, the Information Privacy Principles apply, so collection should be disclosed and the data handled accordingly. If your site serves European or United Kingdom visitors, the GDPR and UK GDPR may apply to those visitors independently of New Zealand law, and that is a genuinely different and stricter regime worth taking advice on.",
      },
      {
        type: "h2",
        text: "Offshore hosting is usually not the problem people think it is",
      },
      {
        type: "p",
        text: "Principle 12 restricts disclosing personal information to a foreign person or entity, and it is routinely misread as meaning you cannot use overseas hosting or analytics. Section 11 of the Act treats information held by an agent acting solely on your behalf, which is what a hosting provider, content delivery network, or processor is, as still being held by you. On that basis it is not a disclosure, and Principle 12 is not engaged. The Privacy Commissioner's own guidance indicates you generally do not need a Principle 12 agreement with a cloud provider. Where Principle 12 genuinely bites is when the overseas party uses the data for its own purposes, which describes advertising platforms and some analytics products rather than your web host. That distinction is worth understanding before anyone sells you a migration you do not need.",
      },
      {
        type: "p",
        text: "Two things follow from this. First, you remain fully accountable for what your provider does with the data, so due diligence and disclosure still matter. Second, New Zealand holds a European Commission adequacy decision, reconfirmed in January 2024, which means personal data can flow from the European Economic Area to New Zealand without additional contractual machinery. That is a genuine commercial advantage for New Zealand businesses serving European customers, and almost nobody uses it in their sales conversations.",
      },
      {
        type: "h2",
        text: "Marketing email is governed by a different law entirely",
      },
      {
        type: "p",
        text: "This surprises people, and the penalties are far higher than the Privacy Act's. Sending marketing email in New Zealand is governed not by the Privacy Act but by the Unsolicited Electronic Messages Act 2007, administered by the Department of Internal Affairs. It requires consent, accurate sender identification, and a functional unsubscribe facility in every message. Two details catch people out. A single message can be spam under this Act, since there is no bulk-sending threshold. And the Department of Internal Affairs states penalties can reach $500,000, with real enforcement action taken against New Zealand businesses. A pre-ticked newsletter checkbox, or a form that quietly enrols anyone who makes an enquiry, is the common failure.",
      },
      {
        type: "callout",
        title: "Where the financial exposure actually sits",
        body: "The Privacy Act provides fines up to $10,000 for offences such as failing to notify a notifiable breach, and the Privacy Commissioner cannot fine you directly. The larger exposure is the Human Rights Review Tribunal, which has jurisdiction to award up to $350,000 for interference with privacy, though awards in serious cases have more commonly fallen in the tens of thousands. Larger again is the anti-spam regime, where the Department of Internal Affairs cites penalties up to $500,000. For most small businesses the practical risk remains reputational: a breach that becomes public is a trust problem long before it is a legal one.",
      },
      {
        type: "h2",
        text: "A practical compliance checklist",
      },
      {
        type: "ol",
        items: [
          "List every tool on your site that touches personal information: forms, analytics, chat, booking, email marketing, CRM, hosting.",
          "For each one, record what it collects and which country it stores data in.",
          "Write or rewrite your privacy statement so it describes that reality accurately.",
          "Link the privacy statement from every page, and reference it beside every form.",
          "Make sure marketing consent is express, unticked by default, and recorded.",
          "Confirm every marketing email carries accurate sender details and a working unsubscribe.",
          "Secure what you hold: HTTPS everywhere, access limited to people who need it, and no personal data sitting in shared inboxes or spreadsheets indefinitely.",
          "Set a retention period and actually delete data when it expires.",
          "Write a one-page breach response plan naming who decides, who notifies, and how quickly.",
          "Review the whole thing annually, and whenever you add a new tool to the site.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does my small New Zealand business website need a privacy policy?",
        a: "If it collects personal information, which includes a contact form, a newsletter signup, or analytics that can identify visitors, then yes in practical terms. The Privacy Act 2020 applies to organisations of every size with no small-business exemption, and Principle 3 requires that people be told what is collected, why, and who receives it. A privacy statement is the standard way of meeting that obligation.",
      },
      {
        q: "Do New Zealand websites need cookie consent banners?",
        a: "New Zealand has no direct equivalent of the European cookie consent requirement, so a consent banner is not mandated by New Zealand law in the way it is in the EU. Where cookies collect information that identifies a person, the Information Privacy Principles still apply and collection should be disclosed. Sites with significant European or UK audiences may have obligations under GDPR regardless of where the business is based.",
      },
      {
        q: "Can I store New Zealand customer data overseas?",
        a: "Generally yes, subject to Information Privacy Principle 12, which places conditions on disclosing personal information to a person or entity outside New Zealand. In broad terms you need reasonable grounds to believe the information will be protected by comparable safeguards, or the individual's informed authorisation. Most cloud services can be used compliantly; the failures are usually about disclosure and due diligence rather than the location itself.",
      },
      {
        q: "What happens if my website has a data breach?",
        a: "Since December 2020, if a privacy breach has caused or is likely to cause serious harm, you must notify the Office of the Privacy Commissioner and the affected people as soon as practicable. The Commissioner provides an online tool, NotifyUs, to help assess whether a breach meets that threshold and to make the notification. Failing to notify a notifiable breach is an offence.",
      },
      {
        q: "Do I need consent to send marketing emails in New Zealand?",
        a: "Yes. The Unsolicited Electronic Messages Act 2007 requires consent for commercial electronic messages, accurate sender identification, and a working unsubscribe in every message. Consent may be express or inferred in limited circumstances, but a website signup should capture express consent and keep a record of when and how it was given.",
      },
    ],
    sources: [
      {
        title: "Privacy Act 2020",
        publisher: "New Zealand Legislation",
        href: "https://www.legislation.govt.nz/act/public/2020/0031/latest/LMS23193.html",
      },
      {
        title: "The 13 Information Privacy Principles",
        publisher: "Office of the Privacy Commissioner",
        href: "https://www.privacy.org.nz/privacy-act-2020/privacy-principles/",
      },
      {
        title: "Privacy breaches and NotifyUs",
        publisher: "Office of the Privacy Commissioner",
        href: "https://www.privacy.org.nz/responsibilities/privacy-breaches/",
      },
      {
        title: "Unsolicited Electronic Messages Act 2007",
        publisher: "New Zealand Legislation",
        href: "https://www.legislation.govt.nz/act/public/2007/0007/latest/DLM405134.html",
      },
      {
        title: "New Zealand spam law for businesses",
        publisher: "Department of Internal Affairs",
        href: "https://www.dia.govt.nz/Spam-NZ-Spam-Law-for-Businesses",
      },
      {
        title: "Privacy Amendment Act 2025, introducing IPP 3A",
        publisher: "New Zealand Legislation",
        href: "https://www.legislation.govt.nz/act/public/2025/53/en/latest/",
        date: "In force 1 May 2026",
      },
      {
        title: "Disclosing personal information outside New Zealand",
        publisher: "Office of the Privacy Commissioner",
        href: "https://www.privacy.org.nz/responsibilities/disclosing-personal-information-outside-new-zealand/",
      },
    ],
    related: ["website-accessibility-nz", "choosing-a-web-design-agency-nz"],
  },

  // =================================================================
  {
    slug: "website-accessibility-nz",
    name: "Web accessibility in NZ",
    category: "New Zealand",
    metaTitle: "Website Accessibility in New Zealand: Standards & Requirements",
    metaDescription:
      "What WCAG requires, which New Zealand organisations must comply, and the accessibility failures that appear on almost every business website.",
    h1: "Website accessibility in New Zealand",
    standfirst:
      "Roughly a quarter of New Zealanders are disabled. Government agencies are required to meet a specific accessibility standard, private businesses are covered by the Human Rights Act more generally, and the common failures are cheap to fix if you catch them during design rather than after launch.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 9,
    blocks: [
      {
        type: "callout",
        title: "General information, not legal advice",
        body: "This page describes published standards and where to find them. It is not legal advice about your obligations. If you are a government agency, or a business facing a specific accessibility complaint, take proper advice.",
      },
      {
        type: "p",
        text: "Accessibility is usually framed as a compliance obligation, which is the least persuasive reason to do it. The better arguments are that Statistics New Zealand's Disability Survey has found roughly a quarter of the population is disabled, that accessible sites are measurably easier for everyone to use, and that the same structural clarity which helps a screen reader also helps a search engine and an AI system extract your content.",
      },
      {
        type: "h2",
        text: "WCAG is the standard everything else points at",
      },
      {
        type: "p",
        text: "The Web Content Accessibility Guidelines, published by the World Wide Web Consortium, are the international reference. WCAG 2.2 became a W3C Recommendation in October 2023 and is the current version. It defines three conformance levels: A is the minimum, AA is the level almost every regulation and policy in the world adopts, and AAA is aspirational and not expected across a whole site. When a New Zealand policy or contract refers to accessibility requirements, it is nearly always pointing at WCAG Level AA.",
      },
      {
        type: "h2",
        text: "Who is actually required to comply in New Zealand",
      },
      {
        type: "p",
        text: "The New Zealand Government Web Accessibility Standard 1.2 took effect on 17 March 2025 and mandates conformance with WCAG 2.2 Level AA, which puts New Zealand ahead of most jurisdictions, since many still reference WCAG 2.1. A companion Web Usability Standard 1.4 took effect the same day. The scope is narrower than most people assume: the mandate covers Public Service departments, New Zealand Police, the New Zealand Defence Force, the Parliamentary Counsel Office, and the New Zealand Security Intelligence Service. Crown entities, state-owned enterprises, councils, schools, and universities are not mandated by it, though many adopt it voluntarily or are bound through procurement.",
      },
      {
        type: "p",
        text: "Private businesses are not bound by that standard at all. The often-cited alternative is the Human Rights Act 1993, section 44 of which concerns the provision of goods and services to the public, read together with the prohibition on disability discrimination. It should be described honestly: no New Zealand court has ruled on whether a private website falls within section 44, so this is untested exposure rather than settled law. The Accessibility for New Zealanders Bill, which would have created a broader framework, was discharged on 14 August 2024. The most concrete commercial reason for a private business to meet WCAG 2.2 AA is that it has become the de facto government procurement standard, so any supplier bidding for public sector work is contractually bound to it regardless of what the Human Rights Act does or does not require.",
      },
      {
        type: "h2",
        text: "The failures that appear on almost every site",
      },
      {
        type: "table",
        caption:
          "The most common accessibility failures found in automated testing, and what each one actually breaks.",
        headers: ["Failure", "Who it affects", "Difficulty to fix"],
        rows: [
          ["Insufficient colour contrast on text", "Low vision, older users, anyone outdoors", "Low"],
          ["Images with missing or meaningless alt text", "Screen reader users", "Low"],
          ["Form inputs without associated labels", "Screen reader users, voice control users", "Low"],
          ["Links labelled only \"click here\" or \"read more\"", "Screen reader users navigating by link", "Low"],
          ["No visible keyboard focus indicator", "Keyboard-only users, motor impairment", "Low"],
          ["Content only reachable by mouse or hover", "Keyboard and touch users", "Medium"],
          ["Video without captions", "Deaf and hard of hearing users", "Medium"],
          ["Motion and parallax with no reduced-motion option", "Vestibular disorders, migraine", "Low"],
          ["Heading levels skipped or used for styling", "Screen reader navigation", "Low"],
          ["Text in images instead of real text", "Screen readers, translation, search engines", "Medium"],
        ],
      },
      {
        type: "p",
        text: "The pattern in that table is worth noticing: the overwhelming majority of common failures are cheap to fix and cost almost nothing to prevent if they are considered while designing. They become expensive only when a site is retrofitted after launch, which is the usual sequence and the reason accessibility gets a reputation for being costly.",
      },
      {
        type: "h2",
        text: "The four principles behind the standard",
      },
      {
        type: "ol",
        items: [
          "Perceivable. Information and interface components must be presentable in ways people can perceive, which covers text alternatives for images, captions for media, and sufficient contrast.",
          "Operable. Interface components and navigation must be operable, which means everything works by keyboard, people get enough time, and nothing flashes in a way that can trigger seizures.",
          "Understandable. Content and operation must be understandable: readable language, predictable behaviour, and errors explained in a way that helps someone recover.",
          "Robust. Content must be robust enough to work reliably with assistive technologies, which in practice means using correct semantic HTML rather than reinventing controls out of unlabelled elements.",
        ],
      },
      {
        type: "h2",
        text: "How to test without specialist tools",
      },
      {
        type: "p",
        text: "Automated tools catch perhaps a third of real accessibility issues, so they are a starting point rather than an answer. Run one anyway, because the issues they catch are the cheap ones. Then do the manual checks, which take about twenty minutes and find the problems automation misses.",
      },
      {
        type: "ol",
        items: [
          "Run an automated checker such as WAVE or the Lighthouse accessibility audit in Chrome. Fix everything it reports.",
          "Unplug your mouse. Navigate the whole site with Tab, Shift-Tab, Enter, and Space. If you cannot reach something, or you cannot see where you are, that is a failure.",
          "Zoom the browser to 200 percent. Content should reflow and remain readable without horizontal scrolling.",
          "Turn on your operating system's reduce-motion setting and reload. Animation should reduce or stop while the site still works.",
          "Turn on a screen reader for five minutes. VoiceOver on Mac and iPhone, Narrator on Windows, TalkBack on Android. It is uncomfortable the first time and extremely instructive.",
          "Check every form: submit it empty and see whether the errors explain what to do, and whether they are announced rather than only shown in red.",
        ],
      },
      {
        type: "callout",
        title: "Overlay widgets are not a fix",
        body: "Accessibility overlay products promise one-line compliance. The accessibility community has been consistently critical of them, they do not reliably fix the underlying markup, and they have been cited in legal complaints rather than preventing them. There is no substitute for building the page correctly.",
      },
    ],
    faqs: [
      {
        q: "Is web accessibility a legal requirement in New Zealand?",
        a: "For a specific set of government bodies, yes. The Web Accessibility Standard 1.2, effective 17 March 2025, requires WCAG 2.2 Level AA and applies to Public Service departments, New Zealand Police, the Defence Force, the Parliamentary Counsel Office, and the Security Intelligence Service. Crown entities, councils, schools, and universities are not mandated by it. Private businesses are not covered at all, and whether the Human Rights Act 1993 extends to private websites has not been tested in a New Zealand court.",
      },
      {
        q: "What WCAG level should a business website aim for?",
        a: "Level AA of WCAG 2.2. That is what the New Zealand government standard requires and what essentially every accessibility regulation internationally references. Level A alone leaves significant barriers in place, and Level AAA includes requirements that are not realistic across an entire site. It also matters commercially, because WCAG 2.2 AA has become the de facto standard in New Zealand government procurement.",
      },
      {
        q: "How much does it cost to make a website accessible?",
        a: "Very little if it is considered during design, because most requirements are decisions rather than features: adequate contrast, real labels, keyboard support, semantic structure. Retrofitting an existing site is more expensive and scales with how the site was built. The most common accessibility failures are also among the cheapest things to fix.",
      },
      {
        q: "Do accessibility overlay tools work?",
        a: "They are widely criticised by disability advocates and accessibility professionals, and they do not fix the underlying markup that assistive technology depends on. They can create additional problems by interfering with a user's own assistive tools. Building the site correctly is the only reliable approach.",
      },
      {
        q: "Does accessibility help SEO?",
        a: "Yes, though it is a side effect rather than the purpose. Proper heading structure, descriptive link text, real text instead of text in images, and semantic HTML all make a page easier for search engines and AI systems to parse, for exactly the same reasons they make it easier for a screen reader.",
      },
    ],
    sources: [
      {
        title: "Web Content Accessibility Guidelines (WCAG) 2.2",
        publisher: "World Wide Web Consortium",
        href: "https://www.w3.org/TR/WCAG22/",
      },
      {
        title: "Web Accessibility Standard 1.2",
        publisher: "digital.govt.nz, Department of Internal Affairs",
        href: "https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-accessibility-standard-1-2",
        date: "Effective 17 March 2025",
      },
      {
        title: "Human Rights Act 1993",
        publisher: "New Zealand Legislation",
        href: "https://www.legislation.govt.nz/act/public/1993/0082/latest/DLM304212.html",
      },
      {
        title: "Disability Survey",
        publisher: "Stats NZ",
        href: "https://www.stats.govt.nz/information-releases/disability-survey-2023/",
      },
      {
        title: "WAVE Web Accessibility Evaluation Tool",
        publisher: "WebAIM, Utah State University",
        href: "https://wave.webaim.org/",
      },
    ],
    related: ["nz-privacy-act-websites", "core-web-vitals-explained"],
  },

  // =================================================================
  {
    slug: "core-web-vitals-explained",
    name: "Core Web Vitals explained",
    category: "Running a website",
    metaTitle: "Core Web Vitals Explained: LCP, INP and CLS",
    metaDescription:
      "What Core Web Vitals measure, the exact thresholds Google uses, and the specific causes behind each failing metric.",
    h1: "Core Web Vitals, explained properly",
    standfirst:
      "Three metrics, three thresholds, and a clear list of causes behind each. Core Web Vitals measure how a page feels to a real person on real hardware, which is why they resist the usual tricks.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 8,
    blocks: [
      {
        type: "p",
        text: "Core Web Vitals are Google's attempt to measure page experience with numbers rather than adjectives. There are three, they each capture a different kind of frustration, and each has a published threshold. Unlike most SEO metrics they are measured on real visitors using real devices, which is why a site can look fast on a developer's machine and fail in the field.",
      },
      {
        type: "table",
        caption:
          "The three Core Web Vitals and their thresholds. A page passes when the 75th percentile of real visits falls in the good range.",
        headers: ["Metric", "What it measures", "Good", "Needs work", "Poor"],
        rows: [
          ["LCP, Largest Contentful Paint", "How long until the main content appears", "Under 2.5s", "2.5s to 4.0s", "Over 4.0s"],
          ["INP, Interaction to Next Paint", "How quickly the page responds when tapped", "Under 200ms", "200ms to 500ms", "Over 500ms"],
          ["CLS, Cumulative Layout Shift", "How much the layout jumps while loading", "Under 0.1", "0.1 to 0.25", "Over 0.25"],
        ],
      },
      {
        type: "callout",
        title: "INP replaced FID in March 2024",
        body: "If you are reading older material that mentions First Input Delay, it is out of date. FID only measured the delay before the first interaction was processed, which flattered pages that responded quickly once and slowly thereafter. INP measures responsiveness across the whole visit and is a considerably harder test to pass.",
      },
      {
        type: "h2",
        text: "Largest Contentful Paint, and why it usually fails",
      },
      {
        type: "p",
        text: "LCP marks the moment the largest visible element finishes rendering, which is usually a hero image, a video poster, or a large block of heading text. It is the closest single number to the question a visitor is actually asking, which is whether anything has appeared yet. In practice, failures cluster around a handful of causes: an enormous unoptimised hero image, a slow server response before anything can start, render-blocking CSS or JavaScript in the head, a web font that hides text while it loads, and images served at far larger dimensions than they display at. The single most effective fix on most sites is compressing and correctly sizing the hero image, which is unglamorous and routinely worth more than a fortnight of other optimisation.",
      },
      {
        type: "h2",
        text: "Interaction to Next Paint, the JavaScript tax",
      },
      {
        type: "p",
        text: "INP measures how long it takes for the page to visibly respond after someone taps or clicks. High values almost always mean the browser's main thread is busy running JavaScript when the visitor tries to interact. The usual culprits are heavy third-party scripts such as tag managers, chat widgets, and tracking pixels, oversized JavaScript bundles that must be parsed before anything responds, and event handlers doing too much work at once. This is where sites built by stacking plugins and marketing tags suffer most, because each addition is individually reasonable and collectively fatal.",
      },
      {
        type: "h2",
        text: "Cumulative Layout Shift, the one users hate most",
      },
      {
        type: "p",
        text: "CLS quantifies the experience of reaching for a button and having the page move it. Every cause is preventable. Images and video without explicit width and height attributes leave the browser no way to reserve space. Ads and embeds injected into the flow push everything down. Web fonts swapping in at a different size shift the text beneath them. Content inserted above existing content, such as a cookie notice or a promotional banner, moves everything the visitor was already reading. Fixing CLS is mostly a matter of reserving space in advance for anything that arrives late.",
      },
      {
        type: "h2",
        text: "Field data and lab data are not the same thing",
      },
      {
        type: "p",
        text: "This distinction matters and causes constant confusion. Lab data comes from tools such as Lighthouse running a simulated load on a simulated device, and it is useful for diagnosis because it is repeatable. Field data comes from the Chrome User Experience Report, which aggregates measurements from real Chrome users on their real devices and connections, and it is what actually counts for Search. A page can score well in Lighthouse and fail in the field, usually because real visitors are on slower phones and worse connections than the simulation assumes. Diagnose in the lab, judge by the field.",
      },
      {
        type: "h2",
        text: "How much do they matter for rankings",
      },
      {
        type: "p",
        text: "Less than performance vendors imply and more than sceptics claim. Google has described page experience signals as one input among many, and relevance still dominates: a slow page that answers the question will outrank a fast page that does not. The stronger argument for fixing them is commercial rather than algorithmic. Speed affects whether people stay, whether they convert, and increasingly whether AI systems that fetch pages live manage to read yours before timing out. Treat Core Web Vitals as a proxy for whether the site respects the visitor's time, and the ranking question resolves itself.",
      },
      {
        type: "h2",
        text: "Where to measure yours",
      },
      {
        type: "ol",
        items: [
          "Google Search Console has a Core Web Vitals report using field data, grouped by page type. This is the authoritative view for your own site.",
          "PageSpeed Insights shows both field and lab data for any URL, including competitors, which makes it useful for benchmarking.",
          "Chrome DevTools Lighthouse runs locally and is best for diagnosing a specific problem after a change.",
          "The Chrome User Experience Report is the underlying public dataset if you want to analyse at scale.",
        ],
      },
    ],
    faqs: [
      {
        q: "What are good Core Web Vitals scores?",
        a: "Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. A page is considered to pass when the 75th percentile of real-world visits meets all three, which means the metrics have to hold up for slower devices and connections, not just fast ones.",
      },
      {
        q: "Do Core Web Vitals affect Google rankings?",
        a: "They are a ranking input, but a modest one relative to relevance and content quality. Google has consistently described page experience as a tiebreaker rather than a primary factor. The stronger reason to fix them is that slow, unstable pages lose visitors and conversions regardless of ranking.",
      },
      {
        q: "What replaced First Input Delay?",
        a: "Interaction to Next Paint, which became a Core Web Vital in March 2024. FID only measured the delay before the first interaction was processed. INP measures responsiveness throughout the whole visit, making it a much more representative and considerably harder metric.",
      },
      {
        q: "How do I improve Largest Contentful Paint?",
        a: "Start with the largest image on the page: compress it, serve it in a modern format, and size it to the dimensions it actually displays at. Then reduce server response time, remove render-blocking scripts and stylesheets from the head, and make sure web fonts do not hide text while loading. On most sites the hero image alone accounts for the majority of the problem.",
      },
      {
        q: "Why does my site score well in Lighthouse but fail in Search Console?",
        a: "Because they measure different things. Lighthouse is a simulated lab test on a simulated device. Search Console reports field data from real Chrome users on their actual phones and connections, which are typically slower than the simulation. Field data is what counts for Search.",
      },
    ],
    sources: [
      {
        title: "Core Web Vitals",
        publisher: "web.dev, Google",
        href: "https://web.dev/articles/vitals",
      },
      {
        title: "Interaction to Next Paint (INP)",
        publisher: "web.dev, Google",
        href: "https://web.dev/articles/inp",
      },
      {
        title: "Understanding page experience in Google Search results",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/appearance/page-experience",
      },
      {
        title: "Chrome User Experience Report",
        publisher: "Google",
        href: "https://developer.chrome.com/docs/crux",
      },
    ],
    related: ["website-redesign-checklist", "what-is-schema-markup"],
  },

  // =================================================================
  {
    slug: "what-is-schema-markup",
    name: "Schema markup explained",
    category: "Search & AI",
    metaTitle: "What Is Schema Markup and Does It Still Matter",
    metaDescription:
      "A plain explanation of structured data, which types are worth implementing in 2026, and an honest account of what the evidence says about AI citations.",
    h1: "Schema markup, explained",
    standfirst:
      "Structured data tells a machine what your page means rather than just what it says. It is genuinely useful, it is oversold as an AI tactic, and only a handful of the hundreds of available types are worth your time.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 8,
    blocks: [
      {
        type: "p",
        text: "A search engine reading your contact page sees text. It can infer that a string looks like a phone number and that another looks like an address, but inference is fragile. Schema markup removes the guesswork by labelling the content explicitly: this is an organisation, this is its telephone number, this is the area it serves. It is a shared vocabulary published at schema.org, developed jointly by Google, Microsoft, Yahoo, and Yandex.",
      },
      {
        type: "h2",
        text: "JSON-LD is the format to use",
      },
      {
        type: "p",
        text: "There are three ways to add structured data: Microdata and RDFa, which weave attributes into your HTML, and JSON-LD, which sits in a script tag separate from the markup. Google recommends JSON-LD and it is what almost everyone now uses, for the practical reason that keeping structured data separate from presentation means redesigning a page does not silently break the markup. It also means the data can be generated from the same source as the page content, so the two cannot drift apart.",
      },
      {
        type: "h2",
        text: "The types actually worth implementing",
      },
      {
        type: "p",
        text: "Schema.org defines hundreds of types and the vast majority are irrelevant to a normal business. The useful set is small.",
      },
      {
        type: "table",
        caption: "Structured data types worth the effort on a typical business website.",
        headers: ["Type", "What it does", "Worth it for"],
        rows: [
          ["Organization", "Identifies the business as an entity, with sameAs links to verified profiles", "Every site. This is the single most valuable one"],
          ["LocalBusiness", "Adds address, hours, and service area for businesses with a location", "Businesses serving a defined area"],
          ["Article or BlogPosting", "Marks up editorial content with a real author and dates", "Guides, articles, insights"],
          ["Product and Offer", "Price, availability, and condition", "E-commerce, and only with real values"],
          ["Service", "Describes a service offered and where", "Service businesses"],
          ["BreadcrumbList", "Describes where a page sits in the site structure", "Any site more than two levels deep"],
          ["Person", "Identifies a named author or team member", "Author attribution, team pages"],
          ["Event", "Dates, location, and ticketing for events", "Venues, organisers"],
        ],
      },
      {
        type: "h2",
        text: "Organization schema is the one that matters most",
      },
      {
        type: "p",
        text: "If you implement exactly one type, make it this. Organization schema is how you tell search engines and AI systems what your business is called, what it does, and, through the sameAs property, which profiles elsewhere on the web are genuinely you. That last part is entity disambiguation, and it is the mechanism by which a machine becomes confident that the company on your website, the company on that LinkedIn page, and the company being discussed in a forum thread are the same organisation. Confidence is a prerequisite for being recommended, because systems avoid citing entities they are unsure about. Only list profiles that genuinely exist and that you control; a broken sameAs link undermines exactly the thing it was meant to establish.",
      },
      {
        type: "h2",
        text: "An honest account of schema and AI citations",
      },
      {
        type: "p",
        text: "Structured data is heavily promoted as an AI visibility tactic and the evidence for that specific claim is weak. Google's own guidance on its AI features states plainly that structured data is not required and that no special markup exists for generative search. At least one cross-platform study found a negative overall association between the mere presence of schema and AI citation. The pattern that does emerge from the research is more specific and more useful: markup carrying concrete values, such as real prices, genuine ratings, dates, and identified authors, is associated with better outcomes than structural boilerplate. The lesson is that machines reward extractable facts rather than tags. Schema is a good way to deliver facts; it is not a substitute for having any.",
      },
      {
        type: "callout",
        title: "FAQPage: the rich result is gone",
        body: "Google retired the FAQ rich result in May 2026, so FAQ accordions no longer appear in search results for ordinary sites. The schema type still exists and causes no harm, but implementing it in the expectation of a visible result or an AI citation boost is not supported by current evidence. Write FAQ content because readers have questions, not as a markup tactic.",
      },
      {
        type: "h2",
        text: "Rules that keep you out of trouble",
      },
      {
        type: "ul",
        items: [
          "Only mark up content that is actually visible on the page. Structured data describing things a visitor cannot see breaches Google's guidelines and can trigger a manual action.",
          "Never invent reviews or ratings. Fabricated review markup is one of the more reliably penalised forms of spam, and in New Zealand it also risks breaching the Fair Trading Act's prohibition on misleading conduct in trade.",
          "Keep the markup and the page in sync. Prices, dates, and availability that disagree with the visible page are worse than no markup.",
          "Validate before shipping, using Google's Rich Results Test and the Schema.org validator. Silent syntax errors are common.",
          "Do not mark up the same thing three different ways hoping something sticks.",
        ],
      },
      {
        type: "h2",
        text: "Testing what you have",
      },
      {
        type: "ol",
        items: [
          "Run the page through Google's Rich Results Test to see what Google can parse and which enhancements it qualifies for.",
          "Run it through the Schema.org validator, which is stricter and catches vocabulary errors Google tolerates silently.",
          "Check the Enhancements section of Google Search Console for errors detected across the whole site rather than one page.",
          "View the page source and confirm the JSON-LD is present in the served HTML rather than being injected by JavaScript that a crawler may not run.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is schema markup?",
        a: "Schema markup, also called structured data, is code added to a web page that describes the meaning of its content in a standard vocabulary published at schema.org. It lets a search engine or AI system understand that a piece of text is a price, an address, an author, or a set of opening hours rather than inferring it from context.",
      },
      {
        q: "Does schema markup improve rankings?",
        a: "Not directly. Google has stated that structured data is not itself a ranking factor. What it can do is qualify a page for enhanced search results, and help systems understand your content and your identity accurately, which affects how and whether you are surfaced. The benefit is comprehension rather than a ranking boost.",
      },
      {
        q: "Which schema types should a business website use?",
        a: "Organization on every site, with accurate sameAs links to real profiles. LocalBusiness if you serve a defined area. Article or BlogPosting with a real named author and dates on editorial content. Product and Offer with genuine values for e-commerce. BreadcrumbList for structure. That short list covers the great majority of the available benefit.",
      },
      {
        q: "Is FAQ schema still worth adding?",
        a: "Google retired the FAQ rich result in May 2026, so it no longer produces a visible search enhancement for ordinary sites. The markup does no harm and remains valid, but there is no current evidence that it improves AI citation, and at least one large study found a slight negative association. Add FAQ content for readers rather than for the markup.",
      },
      {
        q: "Can schema markup get my site penalised?",
        a: "Yes, if it misrepresents the page. Marking up content that is not visible to visitors, or publishing review and rating markup for reviews that do not exist, breaches Google's structured data guidelines and can result in a manual action. In New Zealand, fabricated reviews also risk breaching the Fair Trading Act.",
      },
    ],
    sources: [
      {
        title: "Introduction to structured data markup",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      },
      {
        title: "Structured data general guidelines",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      },
      {
        title: "Schema.org vocabulary",
        publisher: "Schema.org",
        href: "https://schema.org/",
      },
      {
        title: "Rich Results Test",
        publisher: "Google",
        href: "https://search.google.com/test/rich-results",
      },
      {
        title: "AI features and your website",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      },
    ],
    related: ["content-ai-cites", "ai-crawlers-explained"],
  },

  // =================================================================
  {
    slug: "nz-website-hosting-and-data-sovereignty",
    name: "NZ hosting and data sovereignty",
    category: "New Zealand",
    metaTitle: "NZ Website Hosting & Data Sovereignty: A Complete Guide",
    metaDescription:
      "Where to host a New Zealand website, what onshore hosting actually gains you, measured latency figures, and what the law does and does not require.",
    h1: "Hosting a New Zealand website",
    standfirst:
      "New Zealand now has two hyperscale cloud regions on shore, which changes the hosting calculation for the first time in a decade. Here is what onshore hosting genuinely gains you, with measured latency figures, and an honest account of what the law requires rather than what vendors imply it requires.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 11,
    blocks: [
      {
        type: "p",
        text: "Hosting used to be a simple question for New Zealand businesses, because the honest answer was Sydney. That changed recently and quietly. Microsoft opened its New Zealand North region in Auckland in December 2024, and Amazon Web Services opened its Asia Pacific New Zealand region in September 2025. For the first time, hyperscale infrastructure sits on New Zealand soil, and the trade-offs are worth revisiting.",
      },
      {
        type: "h2",
        text: "What is actually available on shore",
      },
      {
        type: "table",
        caption:
          "Hyperscale cloud availability in and near New Zealand, as at July 2026.",
        headers: ["Provider", "Region", "Status"],
        rows: [
          ["Microsoft Azure", "New Zealand North, Auckland", "Live since December 2024"],
          ["Amazon Web Services", "Asia Pacific New Zealand, ap-southeast-6", "Live since September 2025"],
          ["Google Cloud", "Auckland region", "Announced in 2022, not yet launched"],
          ["Oracle Cloud", "No New Zealand region", "Nearest are Sydney and Melbourne"],
        ],
      },
      {
        type: "p",
        text: "Alongside the hyperscalers there is a long-established New Zealand hosting industry. Catalyst Cloud operates regions in Porirua and Hamilton, holds ISO 27001 and ISO 27017 certification, and is an approved cloud provider to the New Zealand Government. Datacom, majority New Zealand owned with a substantial stake held by the New Zealand Superannuation Fund, runs data centres in Auckland, Christchurch, and Hamilton. SiteHost has run its own Auckland facility since 2018. These are genuine options rather than consolation prizes, and for a business that wants a named local company answering the phone they are often the better fit.",
      },
      {
        type: "callout",
        title: "A common claim worth correcting",
        body: "You will see hosting sold on the basis that New Zealand law requires local data storage. For the overwhelming majority of businesses it does not. There is no general legal requirement that New Zealand customer data be held on shore, and we could not find a binding residency requirement even for health data. The obligations that do exist are about accountability and safeguards, not about geography. Anyone telling you otherwise is selling, not advising.",
      },
      {
        type: "h2",
        text: "The latency case, with actual numbers",
      },
      {
        type: "p",
        text: "This is the part of the argument that survives scrutiny. Microsoft publishes measured round-trip latency between its regions, sampled continuously and reported at the median. From Auckland, the figures are unambiguous: about 28 milliseconds to Sydney, about 39 to Melbourne, roughly 133 to 138 to the United States west coast, and roughly 245 to 270 to Europe. Those are network times before your server does any work at all.",
      },
      {
        type: "statGroup",
        items: [
          { value: "28ms", label: "Auckland to Sydney round trip" },
          { value: "135ms", label: "Auckland to United States west coast" },
          { value: "250ms", label: "Auckland to Europe" },
        ],
      },
      {
        type: "p",
        text: "The practical effect depends on how chatty your site is. A single round trip difference of 100 milliseconds is barely perceptible. A page that makes ten sequential round trips before it can render, which is entirely normal for a database-driven site with third-party scripts, turns that into a full second. This is why hosting location matters far more for traditional server-rendered sites than for static ones, and it is the single strongest argument for moving off distant hosting.",
      },
      {
        type: "h2",
        text: "New Zealand is well connected, which is why this is not the whole story",
      },
      {
        type: "p",
        text: "Three major submarine cable systems serve the country. The Southern Cross Cable Network has run since 2000 and lands at Whenuapai and Takapuna in Auckland. Southern Cross NEXT entered service in July 2022, adding substantial capacity on the Sydney to Auckland to Los Angeles route. The Hawaiki cable, in service since 2018, connects New Zealand to Australia and the United States, and the Tasman Global Access cable has linked Raglan to Sydney since 2017. Combined capacity across these systems is large and growing. Connectivity is not New Zealand's bottleneck, which is worth knowing before paying a premium to solve a problem you may not have.",
      },
      {
        type: "h2",
        text: "A content delivery network changes the calculation entirely",
      },
      {
        type: "p",
        text: "For most business websites, the hosting location debate is less important than it sounds, because a content delivery network makes the origin server's location largely irrelevant to visitors. A statically generated site distributed across a global edge network is served from a location near the visitor regardless of where it was built or where its origin lives. That is the architecture we use by default, and it is why a New Zealand visitor and a London visitor both get a fast page without anyone choosing between them. Origin location matters most when every request must reach the origin, which is the case for database-driven sites and for anything doing real work per request.",
      },
      {
        type: "h2",
        text: "What the Privacy Act actually says about offshore hosting",
      },
      {
        type: "p",
        text: "Information Privacy Principle 12 of the Privacy Act 2020 governs disclosing personal information to a foreign person or entity. It permits cross-border disclosure where the individual has given informed consent, where the recipient carries on business in New Zealand, where the recipient is subject to comparable privacy laws, where a prescribed binding scheme applies, or where contractual safeguards provide comparable protection. That is a set of conditions, not a prohibition, and standard cloud arrangements are routinely structured to satisfy them.",
      },
      {
        type: "p",
        text: "There is a further nuance worth taking advice on rather than taking from a web page. The generally understood position is that giving personal information to an overseas provider that merely stores or processes it on your behalf, which is what ordinary hosting is, is treated differently from disclosing it to that provider, because you are still regarded as holding the information. What is not in doubt is the practical consequence: you remain accountable under the Privacy Act for how your provider handles the data, wherever it sits. Choosing New Zealand hosting removes the cross-border question entirely, which is a legitimate reason to prefer it even though it is not a legal requirement.",
      },
      {
        type: "h2",
        text: "Government and public sector rules are genuinely different",
      },
      {
        type: "p",
        text: "If you are a public sector organisation, none of the above is the whole picture. The Government's Cloud First policy requires agencies to use public cloud services in preference to traditional infrastructure, and to seek approval from the Government Chief Digital Officer before investing in on-premise infrastructure, which is the opposite of the restriction people often assume. Data classified RESTRICTED or below may be held in public cloud, on shore or offshore, subject to a jurisdictional risk assessment, with a stated preference that RESTRICTED information move to New Zealand based data centres over time where a suitable service exists. Only two of the all-of-government cloud framework agreements are with New Zealand owned providers, Catalyst Cloud and Datacom.",
      },
      {
        type: "callout",
        title: "Two myths worth retiring",
        body: "The Public Records Act 2005 does not require the Chief Archivist's approval to hold public records offshore. Section 43 of that Act deals with classifying records as open or restricted access, not with storage location. Separately, we found no binding legal requirement that New Zealand health data be hosted on shore. The pressure there comes from privacy principles, security obligations, retention rules, and Maori data sovereignty guidance, not from a residency mandate.",
      },
      {
        type: "h2",
        text: "Maori data sovereignty is a real consideration, and a different one",
      },
      {
        type: "p",
        text: "Guidance in the health and research sectors holds that data about Maori should, wherever possible, be stored in Aotearoa New Zealand, on the basis that decisions about storage should preserve control for current and future generations. This is a governance principle rather than a statutory requirement, and it is not satisfied by choosing a data centre address alone, since it concerns who holds decision rights over the data. If your organisation holds significant Maori data, this deserves engagement rather than a hosting decision made on your behalf by a web studio.",
      },
      {
        type: "h2",
        text: "How to actually decide",
      },
      {
        type: "ol",
        items: [
          "If your site is a marketing or brochure site with no personal data beyond enquiry forms, host it wherever it is fastest and cheapest, and put a content delivery network in front of it. The sovereignty question does not meaningfully arise.",
          "If your site is database-driven and your visitors are overwhelmingly in New Zealand, onshore hosting is worth the money for the latency alone. The saving over United States hosting is over 100 milliseconds per round trip.",
          "If you hold sensitive personal information, onshore hosting removes a category of privacy analysis rather than a legal barrier. That simplification has genuine value even though it is not compulsory.",
          "If you are a public sector organisation, start with the Cloud First policy and the jurisdictional risk guidance on digital.govt.nz, not with a hosting provider's sales page.",
          "If you hold significant Maori data, treat storage location as a governance conversation rather than a procurement decision.",
          "In every case, make sure the hosting account is in your name and you can leave. That matters more in practice than the country it sits in.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does my New Zealand website have to be hosted in New Zealand?",
        a: "For almost all private businesses, no. There is no general legal requirement that New Zealand customer data be stored on shore. The Privacy Act 2020 places conditions on cross-border disclosure of personal information rather than prohibiting it, and standard cloud arrangements are normally structured to meet those conditions. Public sector organisations follow a separate set of policies.",
      },
      {
        q: "Is New Zealand hosting faster?",
        a: "For New Zealand visitors, yes, measurably. Published measurements put Auckland to Sydney at about 28 milliseconds round trip, Auckland to the United States west coast at about 133 to 138 milliseconds, and Auckland to Europe at about 245 to 270. The practical effect multiplies with the number of round trips a page needs, so it matters far more for database-driven sites than for static sites served through a content delivery network.",
      },
      {
        q: "Does AWS have a New Zealand region?",
        a: "Yes. Amazon Web Services opened its Asia Pacific New Zealand region, region code ap-southeast-6, in September 2025, with three availability zones. It is an opt-in region, meaning it is disabled by default on AWS accounts and has to be explicitly enabled, which catches people out.",
      },
      {
        q: "Does Google Cloud have a New Zealand region?",
        a: "Not yet. Google announced its intention to build an Auckland region in August 2022, and its own materials still describe the region in the future tense. The nearest live Google Cloud regions remain Sydney and Melbourne.",
      },
      {
        q: "Who are the New Zealand owned hosting providers?",
        a: "Catalyst Cloud, which operates regions in Porirua and Hamilton and holds ISO 27001 and ISO 27017 certification, Datacom, which is majority New Zealand owned and runs data centres in Auckland, Christchurch, and Hamilton, and SiteHost, which has operated its own Auckland facility since 2018. Note that Vocus New Zealand no longer exists as a separate brand, having merged into 2degrees, which is Australian controlled.",
      },
      {
        q: "How much does website hosting cost in New Zealand?",
        a: "Market rates vary widely by type. Shared hosting commonly runs from about $10 to $40 a month, managed WordPress hosting from about $30 to $150, and New Zealand cloud providers typically start around $30 a month for a basic virtual server. Statically generated sites on a global edge network are frequently free or very low cost at normal business traffic levels. These are market figures rather than our prices.",
      },
    ],
    sources: [
      {
        title: "Now open: AWS Asia Pacific (New Zealand) Region",
        publisher: "Amazon Web Services",
        href: "https://aws.amazon.com/blogs/aws/now-open-aws-asia-pacific-new-zealand-region",
        date: "September 2025",
      },
      {
        title: "New Zealand's first hyperscale cloud is open for business",
        publisher: "Microsoft New Zealand",
        href: "https://news.microsoft.com/en-nz/2024/12/12/new-zealands-first-hyperscale-cloud-is-open-for-business/",
        date: "December 2024",
      },
      {
        title: "Azure network round-trip latency statistics",
        publisher: "Microsoft Learn",
        href: "https://learn.microsoft.com/en-us/azure/networking/azure-network-latency",
      },
      {
        title: "Bringing our first cloud region to New Zealand",
        publisher: "Google",
        href: "https://blog.google/intl/en-nz/company-news/2022_08_bringing-our-first-cloud-region-to-nz/",
      },
      {
        title: "Information Privacy Principle 12: Disclosure outside New Zealand",
        publisher: "Office of the Privacy Commissioner",
        href: "https://www.privacy.org.nz/privacy-principles/12/",
      },
      {
        title: "Cloud adoption: Cabinet requirement",
        publisher: "digital.govt.nz, Department of Internal Affairs",
        href: "https://www.digital.govt.nz/standards-and-guidance/technology-and-architecture/cloud-services/cloud-adoption-policy-and-strategy/cabinet-requirement",
      },
      {
        title: "Key obligations under the Public Records Act 2005",
        publisher: "Archives New Zealand",
        href: "https://www.archives.govt.nz/manage-information/how-to-manage-your-information/key-obligations-and-the-standard/key-obligations-public-records-act-2005",
      },
      {
        title: "Cloud services and recordkeeping",
        publisher: "Archives New Zealand",
        href: "https://www.archives.govt.nz/manage-information/how-to-manage-your-information/digital/cloud-services",
      },
    ],
    related: ["nz-privacy-act-websites", "core-web-vitals-explained"],
  },

  // =================================================================
  {
    slug: "nz-ecommerce-compliance",
    name: "Selling online in NZ, legally",
    category: "New Zealand",
    metaTitle: "Selling Online in New Zealand: GST, Pricing & Legal Rules",
    metaDescription:
      "GST thresholds, how prices must be displayed, Fair Trading Act obligations, and consumer guarantees for New Zealand online stores.",
    h1: "Selling online in New Zealand",
    standfirst:
      "New Zealand has no single ecommerce statute. The rules come from four separate places, and the two that catch retailers most often are how prices are displayed and the fact that there is no change-of-mind right here at all.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 11,
    blocks: [
      {
        type: "callout",
        title: "General information, not legal or tax advice",
        body: "AntCrow builds websites. This page explains what published government sources say, with links so you can read them yourself. For advice on your circumstances, talk to an accountant, a lawyer, or Inland Revenue directly. Two areas below are actively changing, and we say where.",
      },
      {
        type: "p",
        text: "There is no New Zealand E-Commerce Act. Obligations for an online store come from the Goods and Services Tax Act, the Fair Trading Act 1986, the Consumer Guarantees Act 1993, and the Privacy Act 2020. Most overseas guidance applied to New Zealand gets at least one of these wrong, usually by importing a European or Australian rule that does not exist here.",
      },
      {
        type: "h2",
        text: "GST: the rate, the threshold, and the rolling test",
      },
      {
        type: "p",
        text: "GST is 15 percent, and has been since 1 October 2010 when it rose from 12.5 percent. Registration is compulsory if your turnover from a taxable activity was at least $60,000 in the last twelve months, or you expect it to be at least $60,000 in the next twelve. The detail people miss is that this is a rolling twelve-month test rather than a financial-year one, so the obligation can arise mid-year. A second trigger is easy to overlook: if you add GST to your prices, you must register, regardless of turnover.",
      },
      {
        type: "h2",
        text: "How prices must be displayed, and why this is about to get expensive",
      },
      {
        type: "p",
        text: "This surprises people: no New Zealand statute says displayed prices must include GST. The obligation is indirect. The Fair Trading Act 1986 prohibits misleading and deceptive conduct under section 9, false or misleading representations under section 13, and unsubstantiated representations under section 12A. Displaying a GST-exclusive price to a consumer without making that unmistakably clear is caught by those provisions rather than by any price-display rule. Government guidance states the convention plainly: GST is included in the advertised price unless stated otherwise. Consumer NZ notes that where GST is not clearly excluded from a quoted price, a customer can reasonably argue they should pay the figure quoted.",
      },
      {
        type: "callout",
        title: "Penalties are mid-change, and the increase is large",
        body: "Fair Trading Act maximums are currently $200,000 for an individual and $600,000 for a body corporate. The Fair Trading Amendment Bill, introduced on 13 May 2026, proposes raising this for misleading conduct to the greatest of three times the commercial gain, the total transaction value, or $5 million for a body corporate and $1 million for an individual. As at the time of writing it sits before the Finance and Expenditure Committee, with submissions closed on 16 July 2026. It is not law yet. Anyone quoting the new figures as current is ahead of Parliament.",
      },
      {
        type: "h2",
        text: "Business customers are treated differently, but only partly",
      },
      {
        type: "p",
        text: "Displaying prices exclusive of GST is a normal and accepted convention when selling to other businesses, provided it is clearly labelled. The legal basis for the difference is section 5D of the Fair Trading Act, which permits contracting out of sections 9, 12A, 13, and 14(1), but only where both parties are in trade, the agreement is in writing, and it is fair and reasonable for the parties to be bound by it. Two things follow. You cannot contract out when dealing with a consumer, and any attempt to do so is unenforceable. And even where a valid contracting-out clause exists, the Commerce Commission can still take enforcement action.",
      },
      {
        type: "h2",
        text: "New Zealand has no cooling-off period for online purchases",
      },
      {
        type: "p",
        text: "This is the single biggest divergence from European and United Kingdom expectations, and it works in retailers' favour. The Consumer Guarantees Act 1993 applies the same guarantees to online sales as to in-store sales: goods must be of acceptable quality, fit for purpose, and match their description. But New Zealand has no distance-selling regime and no statutory right to change your mind. A customer who simply decides they no longer want something has no legal right to return it. Note the trap, though: once you advertise a returns policy, that policy becomes a representation you can be held to under the Fair Trading Act.",
      },
      {
        type: "h2",
        text: "Selling into New Zealand from overseas",
      },
      {
        type: "p",
        text: "Two regimes apply to offshore sellers, and both use the same $60,000 registration threshold. Since 1 October 2016, offshore suppliers of remote services such as software, streaming, and digital downloads must register and charge New Zealand GST to New Zealand consumers. Since 1 December 2019, offshore sellers of low-value imported goods must charge GST at the point of sale on consignments valued at NZ$1,000 or less, excluding GST and calculated on customs value. Goods above NZ$1,000 continue to have GST and duty collected at the border by New Zealand Customs instead.",
      },
      {
        type: "callout",
        title: "The support ticket this creates",
        body: "Getting the NZ$1,000 threshold wrong produces the classic complaint: a customer is charged GST at checkout and then billed again by Customs on delivery, or expects a clean delivery and receives an unexpected Customs invoice. Whichever side of the threshold a consignment falls, the checkout must behave correspondingly, which means the logic has to be in the cart rather than in a footnote.",
      },
      {
        type: "h2",
        text: "Marketplace rules for accommodation, ride-sharing, and food delivery",
      },
      {
        type: "p",
        text: "From 1 April 2024, online marketplaces must collect GST at 15 percent on what Inland Revenue calls listed services: ride-sharing and ride-hailing, food and beverage delivery, and short-stay and visitor accommodation, along with closely connected services booked through the platform. This applies regardless of whether the underlying provider is GST registered. Where the provider is not registered, the marketplace remits 6.5 percent to Inland Revenue and passes 8.5 percent back to the provider as a flat-rate credit. Providers receiving that credit cannot also claim actual expenses as GST inputs. This is a narrow rule covering three sectors, not a general marketplace obligation.",
      },
      {
        type: "h2",
        text: "Two things people expect that do not exist here",
      },
      {
        type: "ul",
        items: [
          "There is no New Zealand digital services tax. A Digital Services Tax Bill proposing a 3 percent levy was introduced in 2023 and formally discharged on 20 May 2025, with the government citing renewed progress on an OECD solution. Cross-border digital taxation in New Zealand runs entirely through the GST remote services regime.",
          "Card surcharging is still lawful. A bill to ban surcharges on in-store payments passed its first reading on 17 September 2025 and was targeted to take effect by May 2026, but it stalled and that date passed without the ban commencing. Surcharges remain subject to the existing requirement that they not exceed the reasonable cost of accepting the payment method. Do not build a checkout on the assumption the ban has happened.",
        ],
      },
      {
        type: "h2",
        text: "A practical checklist for a New Zealand online store",
      },
      {
        type: "ol",
        items: [
          "Display consumer prices inclusive of GST. If you sell business to business and quote exclusive, label it unmistakably at every point a price appears, not only at checkout.",
          "Show shipping, surcharges, and any fees before the final step. Revealing costs late is both the top cause of cart abandonment and the conduct the Fair Trading Amendment Bill is aimed at.",
          "Make clear you are selling in trade, and publish terms that are findable rather than buried.",
          "State your returns policy accurately, remembering that it becomes an enforceable representation once published, and that nothing obliges you to offer change-of-mind returns.",
          "Do not publish reviews or ratings you have not genuinely received. Fabricated review markup breaches Google's guidelines and misleading conduct provisions at the same time.",
          "If you sell into New Zealand from offshore, build the NZ$1,000 threshold logic into the cart.",
          "Publish a privacy statement that describes what your store actually collects and which third parties receive it.",
          "Keep GST registration under review against the rolling twelve-month test rather than checking once a year.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to show prices including GST in New Zealand?",
        a: "There is no statute requiring GST-inclusive display, but showing a GST-exclusive price to a consumer without making that clear is caught by the Fair Trading Act's misleading conduct and false representation provisions. The convention, and the safe approach for consumer sales, is GST-inclusive. Business-to-business pricing exclusive of GST is normal provided it is clearly labelled.",
      },
      {
        q: "When do I need to register for GST in New Zealand?",
        a: "When turnover from a taxable activity was at least $60,000 in the last twelve months, or you expect it to be at least $60,000 in the next twelve. It is a rolling twelve-month test, not a financial-year one. You must also register if you charge GST on your prices, whatever your turnover.",
      },
      {
        q: "Do New Zealand customers have a right to change their mind and return an online purchase?",
        a: "No. New Zealand has no distance-selling regime and no statutory cooling-off period for online purchases, unlike the European Union and United Kingdom. The Consumer Guarantees Act still applies fully, so goods must be of acceptable quality, fit for purpose, and as described. If you publish a change-of-mind returns policy voluntarily, it becomes a representation you can be held to.",
      },
      {
        q: "Do overseas sellers charge GST on goods sent to New Zealand?",
        a: "Yes, for consignments valued at NZ$1,000 or less excluding GST, since 1 December 2019, once the seller exceeds NZ$60,000 of New Zealand sales in a twelve-month period. Goods above NZ$1,000 have GST and duty collected at the border by New Zealand Customs instead.",
      },
      {
        q: "Can I still add a surcharge for card payments in New Zealand?",
        a: "Yes, as at the time of writing. A bill to ban in-store surcharges passed its first reading in September 2025 with a target of May 2026, but it stalled and did not take effect. Existing rules still apply: a surcharge must not exceed the reasonable cost of accepting that payment method, and it must be disclosed before payment.",
      },
    ],
    sources: [
      {
        title: "Registering for GST",
        publisher: "Inland Revenue",
        href: "https://www.ird.govt.nz/gst/registering-for-gst",
      },
      {
        title: "GST on low value imported goods",
        publisher: "Inland Revenue",
        href: "https://www.ird.govt.nz/gst/gst-for-overseas-businesses/gst-on-low-value-imported-goods",
      },
      {
        title: "GST for listed services",
        publisher: "Inland Revenue",
        href: "https://www.ird.govt.nz/sharing-economy/sellers-of-listed-services/gst-for-listed-services",
      },
      {
        title: "Selling online: your obligations",
        publisher: "New Zealand Commerce Commission",
        href: "https://www.comcom.govt.nz/business/dealing-with-typical-situations/selling-goods-and-services/selling-online/",
      },
      {
        title: "Contracting out of the Fair Trading Act",
        publisher: "New Zealand Commerce Commission",
        href: "https://www.comcom.govt.nz/business/your-obligations-as-a-business/contracting-out-of-the-fair-trading-act/",
      },
      {
        title: "Fair Trading Act changes",
        publisher: "Ministry of Business, Innovation and Employment",
        href: "https://www.mbie.govt.nz/business-and-employment/consumer-protection/fair-trading-act-changes",
      },
      {
        title: "Discharge of the Digital Services Tax Bill",
        publisher: "New Zealand Government",
        href: "https://www.beehive.govt.nz/release/discharge-digital-services-tax-bill",
        date: "20 May 2025",
      },
    ],
    related: ["nz-checkout-addresses", "nz-privacy-act-websites"],
  },

  // =================================================================
  {
    slug: "nz-checkout-addresses",
    name: "NZ addresses and checkout",
    category: "New Zealand",
    metaTitle: "Why Your Checkout Breaks for New Zealand Customers",
    metaDescription:
      "NZ postcodes, rural delivery, address standards, and the specific ways checkouts built for the US or Australian market fail here.",
    h1: "Why your checkout breaks for New Zealand addresses",
    standfirst:
      "New Zealand addresses have no state, four-digit postcodes with meaningful leading zeros, and a rural delivery system that adds a surcharge invisible from the address itself. Most checkout forms are built elsewhere and fail on all three.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 10,
    blocks: [
      {
        type: "p",
        text: "This is the least glamorous page on this site and one of the most immediately useful. Address handling is where imported ecommerce templates quietly cost New Zealand retailers money: in abandoned checkouts, in undeliverable parcels, and in rural surcharges absorbed silently on every order. Every failure below is specific and fixable.",
      },
      {
        type: "h2",
        text: "The New Zealand address format",
      },
      {
        type: "p",
        text: "NZ Post's addressing standard is short. Line one is the street number and street name. Line two is the suburb. Line three is the town or city followed by the postcode, on the same line. There is no state, province, region, or county line, because New Zealand has no such administrative level in its postal addressing. PO Box and Private Bag numbers are written without internal spaces, and a PO Box address is never combined with a street address, because they are mutually exclusive delivery methods.",
      },
      {
        type: "table",
        caption:
          "Postcode structure. Each digit carries meaning, which is why the leading zero is not decorative.",
        headers: ["Digit", "What it encodes"],
        rows: [
          ["First", "One of ten processing lines, numbered north to south"],
          ["Second and third", "Postal sort area and delivery network type"],
          ["Fourth", "The urban area, box lobby, or rural delivery round"],
        ],
      },
      {
        type: "h2",
        text: "Seven specific ways an overseas checkout fails here",
      },
      {
        type: "ol",
        items: [
          "A required state or province dropdown. New Zealand has none. A mandatory field either blocks the order or fills your database with junk while the customer guesses.",
          "Postcode validated as five digits. New Zealand postcodes are four. A regular expression written for United States ZIP codes rejects every New Zealand address.",
          "Leading zeros stripped. Storing a postcode as an integer turns 0110 into 110, which is a genuine data corruption affecting the entire Whangarei and Northland region. Store postcodes as strings.",
          "Postcode rendered before the city, or on its own line. The New Zealand standard puts it after the town or city on the same line. Templates producing City, State ZIP output non-conforming addresses.",
          "No rural handling. Rural delivery attracts a surcharge and adds days. If the checkout does not detect it, the retailer absorbs the cost on every rural order without knowing.",
          "Suburb treated as always a suburb. On a rural address the suburb line holds an RD number instead, and the town on that line is the base of the delivery round rather than where the property is. Naive geocoding of that town puts rural customers in the wrong place.",
          "PO Box and street address in one free-text field. Many couriers cannot deliver to PO Boxes at all, and a single address line loses the distinction until the parcel fails.",
        ],
      },
      {
        type: "h2",
        text: "Rural delivery is the expensive one",
      },
      {
        type: "p",
        text: "Rural Delivery is NZ Post's service for properties outside urban delivery zones. Letters to rural addresses carry no surcharge, but parcels do: NZ Post applies a rural ticket, currently $6.00 per parcel, on top of the service for domestic parcel services. The trap is that rural status is not reliably visible from the address string, because some rural addresses carry no RD number at all. A single flat nationwide shipping rate therefore loses money on every rural order and quietly promises a delivery time it cannot meet.",
      },
      {
        type: "callout",
        title: "The fix is a checkout-time lookup, not a postcode table",
        body: "Rural determination has to happen at checkout, before the shipping rate is quoted. NZ Post's ParcelAddress API validates addresses and flags rural ones as part of the same call that powers type-ahead. NZ Couriers publishes an address zone checker that classifies rural, business, and residential. Either turns a silent margin leak into a priced line item.",
      },
      {
        type: "h2",
        text: "Address data sources, and which one you actually need",
      },
      {
        type: "table",
        caption:
          "The practical difference is postal deliverability versus address existence. They are not the same dataset.",
        headers: ["Source", "What it gives you", "Cost"],
        rows: [
          [
            "LINZ NZ Addresses",
            "All allocated street addresses from councils, updated weekly. No PO Boxes, no rural routing, no delivery identifiers",
            "Free, Creative Commons Attribution",
          ],
          [
            "NZ Post Postal Address File",
            "Around 1.8 million delivery points including PO Boxes and rural, with seven-digit delivery point identifiers, updated quarterly",
            "$1,000 a year base licence, $3,000 commercial",
          ],
          [
            "NZ Post ParcelAddress API",
            "Type-ahead validation with a rural flag, as a live call rather than a dataset",
            "Requires an NZ Post account",
          ],
          [
            "AddressFinder",
            "Type-ahead, verification, bulk cleansing, geocoding, plugins for common platforms",
            "From about NZ$19 a month",
          ],
        ],
      },
      {
        type: "p",
        text: "The choice follows from the question being asked. If you need to know whether an address exists, the LINZ dataset is free, open, and sufficient. If you need to know whether a parcel can actually be delivered there and what it will cost, you need postal data, which means the Postal Address File, an NZ Post API, or a commercial service that has licensed one of them.",
      },
      {
        type: "h2",
        text: "Shipping integration in practice",
      },
      {
        type: "p",
        text: "NZ Post publishes a set of shipping APIs covering address validation, rate and service options, label generation, pickup booking, and tracking. Labels are charged only when scanned by a courier, so misprints cost nothing. Access requires an active NZ Post account. Beyond NZ Post, most New Zealand retailers reach multiple carriers through an aggregator rather than integrating each one: GoSweetSpot and Starshipit are the two most commonly used, both connecting the major courier networks to platforms such as Shopify and WooCommerce. Mainfreight and NZ Couriers also publish their own developer documentation for direct integration.",
      },
      {
        type: "h2",
        text: "What to actually implement",
      },
      {
        type: "ol",
        items: [
          "Remove any mandatory state or province field, and make the postcode a four-character string field rather than a number.",
          "Add address autocomplete with a rural flag, so the classification arrives before the rate is quoted.",
          "Price rural delivery as a visible line rather than absorbing it, and set delivery expectations accordingly.",
          "Separate PO Box entry from street address, and check that your chosen carrier can deliver to a PO Box at all before offering it.",
          "Store the suburb, town, and postcode as distinct fields so labels can be formatted to the New Zealand standard.",
          "Test with real addresses across the range: an urban Auckland address, a rural address with an RD number, one without, a PO Box, and a Northland address with a leading zero postcode.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many digits is a New Zealand postcode?",
        a: "Four. Each digit carries meaning: the first identifies one of ten processing lines numbered north to south, the second and third identify the postal sort area and delivery network type, and the fourth identifies the urban area, box lobby, or rural delivery round. Leading zeros are significant and must be preserved, which means storing postcodes as text rather than numbers.",
      },
      {
        q: "Does New Zealand have states or provinces for addresses?",
        a: "No. New Zealand postal addresses have no state, province, or region line. The format is street address, then suburb, then town or city followed by the postcode on the same line. A required state field on a checkout form either blocks New Zealand orders or produces meaningless data.",
      },
      {
        q: "What does RD mean in a New Zealand address?",
        a: "RD stands for Rural Delivery and appears with a number in place of the suburb, for example RD 2. It identifies the rural delivery round serving the property. Importantly, the town shown on a rural address indicates where that delivery round is based rather than where the property physically sits, which is why geocoding a rural address from the town line alone produces wrong results.",
      },
      {
        q: "Why does rural delivery cost extra in New Zealand?",
        a: "Rural delivery covers properties outside urban delivery zones and is largely operated by owner-drivers on long routes. NZ Post applies a rural ticket, currently $6.00 per parcel, on top of the standard domestic parcel service. Letters are not surcharged. Because some rural addresses carry no RD number, rural status has to be determined by an address lookup rather than inferred from the address text.",
      },
      {
        q: "What is the best address validation service for New Zealand?",
        a: "It depends what you need. LINZ publishes all allocated street addresses free under a Creative Commons licence, which answers whether an address exists. NZ Post's Postal Address File and ParcelAddress API cover postal deliverability including PO Boxes and rural flags, which is what a checkout actually needs. AddressFinder is a New Zealand commercial service offering autocomplete, verification, and platform plugins from around NZ$19 a month.",
      },
    ],
    sources: [
      {
        title: "Addressing standards",
        publisher: "NZ Post",
        href: "https://www.nzpost.co.nz/business/shipping-in-nz/addressing-standards",
      },
      {
        title: "Postcodes",
        publisher: "NZ Post",
        href: "https://www.nzpost.co.nz/personal/sending-in-nz/postcodes",
      },
      {
        title: "Rural charge for tracked services",
        publisher: "NZ Post",
        href: "https://www.nzpost.co.nz/tools/rate-finder/sending-nz/rural-charge-for-tracked-services",
      },
      {
        title: "Shipping APIs",
        publisher: "NZ Post",
        href: "https://www.nzpost.co.nz/business/ecommerce/shipping-apis",
      },
      {
        title: "Postal Address File",
        publisher: "NZ Post",
        href: "https://www.nzpost.co.nz/business/shipping-in-nz/quality-addressing/postal-address-file-paf",
      },
      {
        title: "NZ Addresses dataset, layer 123113",
        publisher: "Toitu Te Whenua Land Information New Zealand",
        href: "https://data.linz.govt.nz/layer/123113-nz-addresses/",
      },
    ],
    related: ["nz-ecommerce-compliance", "core-web-vitals-explained"],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

/**
 * Guides and tools that predate this data model and still live as
 * hand-built pages. They are listed here purely so the /guides hub and
 * the sitemap can see them. Next.js resolves the static routes ahead of
 * /guides/[slug], so there is no collision.
 */
export type ExternalEntry = {
  href: string;
  name: string;
  category: Guide["category"] | "Tools";
  blurb: string;
};

export const standaloneGuides: ExternalEntry[] = [
  {
    href: "/guides/website-cost-nz",
    name: "What a website costs in NZ",
    category: "New Zealand",
    blurb:
      "Published New Zealand market rates for every type of website, what drives the number up, and what you actually get at each level.",
  },
  {
    href: "/guides/squarespace-wix-vs-custom",
    name: "Squarespace and Wix vs custom",
    category: "Buying a website",
    blurb:
      "An honest comparison of website builders against a custom build, including the cases where a builder is genuinely the right answer.",
  },
  {
    href: "/guides/ai-search-visibility-nz",
    name: "AI search visibility",
    category: "Search & AI",
    blurb:
      "How New Zealand businesses appear in ChatGPT, Perplexity, and Google's AI Overviews, and what determines whether you are cited.",
  },
];

export const standaloneTools: ExternalEntry[] = [
  {
    href: "/tools/ai-visibility-tracker",
    name: "AI visibility tracker",
    category: "Tools",
    blurb:
      "Measure whether ChatGPT, Perplexity, Google AI Mode, and Copilot actually recommend your business. Ten prompts, scored per engine, about twenty minutes.",
  },
  {
    href: "/tools/website-cost-calculator",
    name: "Website cost calculator",
    category: "Tools",
    blurb:
      "Estimate what your project would cost against published New Zealand market ranges. No email required.",
  },
  {
    href: "/tools/website-health-check",
    name: "Website health check",
    category: "Tools",
    blurb:
      "A 16-point self-audit across speed, trust, search visibility, and AI readiness. Runs entirely in your browser.",
  },
];

export const guideCategories: Guide["category"][] = [
  "Buying a website",
  "Search & AI",
  "Running a website",
  "New Zealand",
];
