/**
 * Location pages data. Each city gets genuinely distinct copy: local
 * business landscape, how we work there, and city-specific FAQs.
 * Rule: never ship a city whose only local element is its name.
 * Auckland is home; other cities are honestly framed as remote-first.
 */

export type LocationFaq = { q: string; a: string };

export type Location = {
  slug: string;
  city: string;
  country: "New Zealand" | "Australia";
  /** Used in <title>: exact-match pattern that ranks */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Direct answer paragraph, quotable by AI engines */
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: LocationFaq[];
};

export const locations: Location[] = [
  {
    slug: "auckland",
    city: "Auckland",
    country: "New Zealand",
    metaTitle: "Web Design Auckland | Custom Website Design & Development",
    metaDescription:
      "AntCrow builds custom websites, e-commerce, and AI-ready digital experiences for Auckland businesses, serving the whole city from the CBD to the Hibiscus Coast with senior design and engineering end to end.",
    h1: "Web design in Auckland",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Auckland businesses that want to stand out, from trades and hospitality to professional services and product companies. Auckland is one of our deepest markets, and we serve it with the same global standard we bring to every client.",
    sections: [
      {
        heading: "Deep Auckland market knowledge",
        body: "We know this market properly: the difference between a Ponsonby hospitality brand and a Penrose engineering firm, what Auckland customers expect on their screens, and how competitive every category here has become. Every project is designed and engineered by the same senior people you first talk to, with no hand-offs to strangers, and in-person sessions can be arranged across Auckland when a project calls for them.",
      },
      {
        heading: "What Auckland businesses need from a website in 2026",
        body: "Auckland is New Zealand's most competitive market. When a customer compares three companies, the website usually decides which one gets the call. That means fast loading on mobile, a design that could not be mistaken for a template, clear pricing signals, and increasingly, being visible when customers ask Google or an AI assistant who to use. We build all of that in from day one.",
      },
      {
        heading: "Serving the whole of Auckland",
        body: "We work with businesses across the region: the CBD and city fringe, the North Shore, West Auckland out to Kumeu, South Auckland and the airport corridor, East Auckland and the Pohutukawa Coast, and up to the Hibiscus Coast. Most work happens over video and shared documents, with in-person sessions available around Auckland when a project calls for it.",
      },
      {
        heading: "From first sketch to found on Google",
        body: "A website that nobody finds is a secret. Every Auckland build ships with technical SEO, structured data, and answer-ready content so you can be found on Google and cited by AI assistants when locals ask for what you do. If you want to go further, our AI Visibility Audit shows exactly where you stand in AI search before you spend anything on a rebuild.",
      },
    ],
    faqs: [
      {
        q: "How much does web design cost in Auckland?",
        a: "Auckland pricing follows the national market: professionally built business websites typically run $3,000 to $15,000, with custom-designed sites between $5,000 and $25,000 and e-commerce from $8,000. We scope and price every project individually and will tell you honestly what your budget can achieve.",
      },
      {
        q: "Do you meet clients in person in Auckland?",
        a: "Yes. Most projects run efficiently over video calls, and in-person sessions can be arranged around Auckland when they genuinely help, especially at kickoff.",
      },
      {
        q: "How long does a website take for an Auckland business?",
        a: "Most custom business websites take 4 to 8 weeks from kickoff to launch. E-commerce and larger builds take longer. We agree on a timeline before any work starts.",
      },
      {
        q: "Can you help my Auckland business show up in AI search?",
        a: "Yes. AI search visibility is one of our six disciplines. Every site we build ships AI-readable, and our AI Visibility Audit measures how assistants like ChatGPT and Google's AI Overviews currently see your business, with a prioritised fix list.",
      },
    ],
  },
  {
    slug: "wellington",
    city: "Wellington",
    country: "New Zealand",
    metaTitle: "Web Design Wellington | Custom Websites for Wellington Businesses",
    metaDescription:
      "Custom web design for Wellington businesses: government-adjacent firms, tech companies, hospitality, and creative studios. AntCrow designs and builds from Auckland, working with Wellington clients over video in your hours.",
    h1: "Web design for Wellington businesses",
    intro:
      "AntCrow designs and builds custom websites for Wellington businesses: consultancies and firms serving the government sector, tech and creative companies, and the hospitality scene that makes the capital what it is. Wellington projects run through our remote delivery model, in your hours, with the same senior team end to end.",
    sections: [
      {
        heading: "Built for how Wellington does business",
        body: "Wellington's economy runs on credibility: policy consultancies, engineering and legal firms, tech companies, and agencies that sell to government all live or die on whether they look like a safe pair of hands. A website that feels considered, loads fast, and meets accessibility expectations is not a nice-to-have in this market; it is the baseline for being taken seriously in a capital city procurement culture.",
      },
      {
        heading: "Accessibility is not optional in the capital",
        body: "If your clients include the public sector, accessibility standards matter contractually as well as ethically. We build to modern accessibility practice as a default: semantic structure, keyboard navigation, visible focus states, and motion that respects reduced-motion preferences. That work is invisible when done right, and very visible in an audit when it is not.",
      },
      {
        heading: "A delivery model built for the capital",
        body: "Wellington's tech-literate businesses tend to prefer disciplined remote delivery anyway: video working sessions, a shared project space you can see into at any time, and senior people from first call to launch. It is the same model we run for clients worldwide. Distance has never been the thing that sinks a project; vagueness has.",
      },
    ],
    faqs: [
      {
        q: "Do you work with Wellington clients remotely?",
        a: "Yes, all Wellington projects run remotely with video check-ins scheduled in your hours. The full process, from discovery to launch, is designed to work this way, and in-person sessions can be arranged when a project genuinely calls for one.",
      },
      {
        q: "Can you build accessible websites for government-facing firms?",
        a: "Yes. We build to modern accessibility practice by default, including semantic markup, keyboard navigation, and reduced-motion support, which matters for any Wellington business working with or selling to the public sector.",
      },
      {
        q: "What does a website cost for a Wellington business?",
        a: "The same honest national ranges apply: most professionally built business sites run $3,000 to $15,000, custom work $5,000 to $25,000, and e-commerce from $8,000. Location does not change our pricing.",
      },
    ],
  },
  {
    slug: "christchurch",
    city: "Christchurch",
    country: "New Zealand",
    metaTitle: "Web Design Christchurch | Custom Websites for Canterbury Businesses",
    metaDescription:
      "Custom web design for Christchurch and Canterbury businesses: construction, manufacturing, agritech, and the businesses rebuilding the South Island's biggest city. Designed and built by AntCrow, working remotely in your hours.",
    h1: "Web design for Christchurch businesses",
    intro:
      "AntCrow builds custom websites for Christchurch and Canterbury businesses: construction and trades companies, manufacturers and agritech firms, and the retail and hospitality operators of a city that has spent a decade rebuilding itself into one of New Zealand's most modern urban centres. Christchurch projects run through our remote delivery model, with the same senior team end to end.",
    sections: [
      {
        heading: "A city that rebuilt deserves better than template websites",
        body: "Christchurch's post-rebuild economy is dense with construction firms, engineering companies, manufacturers, and agritech businesses selling serious capability. Too many of them present that capability through generic template websites that could belong to anyone. A custom site that shows real projects, real people, and real process is a competitive weapon in a market where word of mouth still decides most contracts.",
      },
      {
        heading: "Construction and trades are in our DNA",
        body: "Our team also runs CheckMyBuilder, a public tool that indexes New Zealand building companies against the official Companies Register and public records. We understand how Canterbury homeowners and commercial clients vet builders and trades businesses before making contact, and we design websites that answer exactly the questions those customers arrive with.",
      },
      {
        heading: "Remote-first, with South Island understanding",
        body: "Projects run over video and a shared workspace, scheduled in your hours. We stay across the details that matter locally, from the practical tone Canterbury clients expect to the fact that a rural Canterbury audience may be reading your site on a slow connection, which is one more reason we engineer every site to load fast.",
      },
    ],
    faqs: [
      {
        q: "Do you work with Christchurch businesses remotely?",
        a: "Yes. All Christchurch and wider Canterbury projects run remotely with video working sessions in your hours, using a process designed for it. The same senior people handle your project from first call to launch.",
      },
      {
        q: "Do you build websites for construction and trades companies?",
        a: "Yes, it is one of our specialties. Our team also runs CheckMyBuilder, which indexes NZ building companies against public records, so we know exactly how customers vet construction businesses online and design sites to pass that vetting.",
      },
      {
        q: "What do Christchurch business websites cost?",
        a: "National market ranges apply: professionally built business sites typically run $3,000 to $15,000, custom-designed sites $5,000 to $25,000, and e-commerce from $8,000. We price by scope, not postcode.",
      },
    ],
  },
  {
    slug: "sydney",
    city: "Sydney",
    country: "Australia",
    metaTitle: "Web Design for Sydney Businesses | AntCrow Studio",
    metaDescription:
      "Custom web design and development for Sydney businesses from AntCrow, working across the Tasman: a time difference of two hours or less, senior people end to end, and pricing that travels well.",
    h1: "Web design for Sydney businesses",
    intro:
      "AntCrow designs and builds custom websites for Sydney and Australian businesses. We work across the Tasman remotely: the time difference is two hours or less, the process is built for video, and Australian clients get senior design and engineering craft with pricing that travels well.",
    sections: [
      {
        heading: "Why Sydney businesses hire across the Tasman",
        body: "Sydney's agency market is excellent and priced accordingly. Working across the Tasman with AntCrow gets you the same calibre of senior design and engineering with a favourable exchange rate, without the offshore lottery: we are two hours away, natively English-speaking, and culturally next door. For many Sydney businesses that combination lands in exactly the right place between a local agency premium and an overseas gamble.",
      },
      {
        heading: "Built for Australian search and AI answers",
        body: "A Sydney business needs to be found by Australian customers. We build for that from the start: Australian market signals in your content, structured data that tells Google and AI assistants exactly where you operate, and performance that holds up on Australian mobile networks. Your site is engineered to be quoted when customers ask AI assistants who to use, not just to look good in a portfolio.",
      },
      {
        heading: "How cross-Tasman projects actually run",
        body: "Honestly, and over video. Kickoff, weekly working sessions, and launch all happen on scheduled calls in Sydney hours, with a shared project space you can check any time. Contracts can be invoiced in AUD or NZD. The only thing we cannot do is meet you for a flat white on George Street, and we are working on an excuse to fix that too.",
      },
    ],
    faqs: [
      {
        q: "Do you work with Australian clients?",
        a: "Yes. AntCrow serves both New Zealand and Australia, and cross-Tasman projects run remotely with video sessions in Australian hours. The time difference with Sydney is two hours or less year-round.",
      },
      {
        q: "Can you invoice in Australian dollars?",
        a: "Yes, projects for Australian clients can be invoiced in AUD or NZD, whichever suits your accounting.",
      },
      {
        q: "Will my website be optimised for Australian customers?",
        a: "Yes. We build Australian market signals, structured data, and local search readiness into the site so Google and AI assistants understand exactly where you operate and who you serve.",
      },
    ],
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
