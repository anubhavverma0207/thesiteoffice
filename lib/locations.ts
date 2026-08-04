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
        a: "Auckland follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, and e-commerce from around $5,000. Those are market rates rather than ours: we scope and price every project individually and will tell you honestly what your budget can achieve.",
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
        a: "The same national market ranges apply: professionally built sites run from about $1,000 for simple freelancer work up to $15,000 or more for custom design. Those are market figures, and location does not change how we price: we scope every project individually.",
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
        a: "National market ranges apply: professionally built sites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce from around $5,000. Those are market rates; we price by scope, not postcode.",
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
        heading: "Finance concentration in the inner city sets the tone",
        body: "Modelled regional estimates put financial and insurance services at 34.0 percent of value added in the City of Sydney local government area, which is the inner city council area rather than Greater Sydney. That concentration shapes what the surrounding market expects from a website: precision, restraint, clear entity and licensing detail, plain explanations of complicated products, and accessibility handled properly rather than merely claimed. It raises the bar for everyone selling into that ecosystem too, from law and accounting practices to technology vendors and recruiters. We build for readers who are assessing risk as much as capability, and we structure the evidence so it can be checked quickly.",
      },
      {
        heading: "How cross-Tasman projects actually run",
        body: "Honestly, and over video. Kickoff, weekly working sessions, and launch all happen on scheduled calls in Sydney hours, with a shared project space you can check any time. Contracts can be invoiced in AUD or NZD. The only thing we cannot do is meet you for a flat white on George Street, and we are working on an excuse to fix that too.",
      },
    ],
    faqs: [
      {
        q: "What does a business website cost in Sydney?",
        a: "Published Australian pricing guides put a custom business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, with figures commonly quoted exclusive of GST, which is 10 percent in Australia. Those are market ranges rather than ours. We scope and price every project individually, and our guide at /guides/website-cost-australia explains what moves the number.",
      },
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
  {
    slug: "hamilton",
    city: "Hamilton",
    country: "New Zealand",
    metaTitle: "Web Design Hamilton | Custom Website Design & Development",
    metaDescription:
      "Custom web design for Hamilton and Waikato businesses: agritech, dairy services, manufacturing, and professional firms. AntCrow designs and builds remotely, with the same senior team end to end.",
    h1: "Web design in Hamilton",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Hamilton businesses: agritech and dairy service companies, manufacturers, professional firms, and the operators serving a student population at the University of Waikato. Hamilton is New Zealand's fastest growing city, and its roughly 17,900 businesses compete accordingly. Hamilton projects run through our remote delivery model, with the same senior people from first call to launch.",
    sections: [
      {
        heading: "Agritech buyers judge you on substance, not stock photography",
        body: "Hamilton sits at the centre of New Zealand's agritech economy, with Fonterra, Gallagher, and the cluster of companies around Waikato Innovation Park setting the standard for how technical products are presented. Buyers in this sector arrive already informed. They want specifications, integration detail, dealer and distributor coverage, and evidence that a product survives a real farm. A website built for that audience leads with proof and technical clarity, then makes it easy to request a demonstration or find the nearest distributor, rather than burying everything behind a generic contact form.",
      },
      {
        heading: "The fastest growing city has the least established word of mouth",
        body: "Hamilton's population passed 192,000 and is still climbing at around 1.4 percent a year, faster than any other New Zealand city. That growth changes how customers find you. Newcomers have no local network to ask, so they search, compare three results, and decide. That makes your website the first and often only impression, and it makes being visible in Google and in AI assistant answers a direct commercial issue rather than a marketing nicety. We build both into every Hamilton project from the start.",
      },
      {
        heading: "Golden Triangle position widens your natural market",
        body: "Hamilton sits on the freight and business corridor between Auckland and Tauranga, which means most Waikato companies of any size are already selling beyond the city boundary. It also means you are compared against Auckland competitors with larger marketing budgets. The practical answer is not to outspend them but to be more specific: clear service areas, honest capability, real project detail, and structured data that tells search engines and AI assistants exactly which regions you cover and what you actually do.",
      },
      {
        heading: "How Hamilton projects run in practice",
        body: "Remote first, and deliberately so. Kickoff, working sessions, and launch happen over video with a shared project space you can look into at any time, scheduled around your week rather than ours. In-person sessions in the Waikato can be arranged when a project genuinely benefits from being in the same room, usually at discovery or before a major launch. The same senior designers and engineers who scope your project are the ones who build it, with no hand-off to a junior team you never met.",
      },
    ],
    faqs: [
      {
        q: "How much does web design cost in Hamilton?",
        a: "Hamilton follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, and e-commerce from around $5,000. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "Do you build websites for agritech and manufacturing companies?",
        a: "Yes. Technical products need technical presentation: specification detail, integration and compatibility information, distributor coverage, and clear paths to a demonstration or quote. We design for informed buyers rather than casual browsers.",
      },
      {
        q: "Do you meet Hamilton clients in person?",
        a: "Most Waikato projects run efficiently over video with a shared project space. In-person sessions in Hamilton can be arranged when they genuinely help, typically at discovery or ahead of launch.",
      },
      {
        q: "Can a Hamilton business compete with Auckland companies in search?",
        a: "Often yes, because specificity beats budget in local and AI search. We build technical SEO, structured data, and answer-ready content that tells Google and AI assistants precisely what you do and which parts of the Waikato and upper North Island you serve.",
      },
    ],
  },
  {
    slug: "tauranga",
    city: "Tauranga",
    country: "New Zealand",
    metaTitle: "Web Design Tauranga | Custom Website Design & Development",
    metaDescription:
      "Custom web design for Tauranga and Bay of Plenty businesses: horticulture, export and logistics, marine services, trades, and hospitality. Designed and built by AntCrow, working remotely in your hours.",
    h1: "Web design in Tauranga",
    intro:
      "AntCrow designs and builds custom websites and online stores for Tauranga businesses: horticulture and kiwifruit operators, export and logistics firms working around the country's largest port by volume, manufacturers, trades, and hospitality. Tauranga has more than 20,000 businesses for a population of roughly 161,000, one of the densest commercial markets in the country. Projects run remotely, with the same senior team end to end.",
    sections: [
      {
        heading: "A port city sells to buyers who are rarely in the room",
        body: "Port of Tauranga is New Zealand's largest port by volume, and the freight, logistics, packing, and coolstore businesses built around it routinely deal with customers who will never visit the site. For those companies a website is the sales meeting: capability, capacity, certifications, service coverage, and a fast route to a real person. We design for procurement readers who are scanning for specific answers, and we make sure those answers are also structured so search engines and AI assistants can quote them accurately.",
      },
      {
        heading: "Horticulture runs on a calendar, and so should your website",
        body: "Kiwifruit and the wider Bay of Plenty horticulture sector, with Zespri headquartered here, work to a season that swings from recruitment surges to harvest to quiet months. Websites in this sector need to flex with that: seasonal recruitment pages that can be switched on without a developer, grower and supplier information that stays accurate, and content that holds up when traffic spikes. We build the content structure so your team can run the seasonal cycle without waiting on anyone.",
      },
      {
        heading: "A fast growing and older population changes design decisions",
        body: "Tauranga's growth has been driven partly by retirement migration, which gives the city an audience skew that most template websites ignore. Practical consequences follow: type that stays readable at a glance, contrast that survives bright screens and older eyes, tap targets that forgive imprecision, forms that do not punish a slower pace, and a phone number that is genuinely easy to find. Accessible design here is not a compliance exercise; it is the difference between an enquiry and a bounce.",
      },
      {
        heading: "Remote delivery with Bay of Plenty sessions when they earn their place",
        body: "Tauranga projects run over video and a shared workspace scheduled in your hours, which suits a market where the decision makers are often on a packhouse floor or at the port rather than at a desk. In-person sessions in the Bay of Plenty can be arranged when a project genuinely calls for one. Every site ships with technical SEO, structured data, and answer-ready content so local customers and AI assistants can find you without guesswork.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost for a Tauranga business?",
        a: "The national market ranges apply: professionally built sites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce from around $5,000. Those are market figures, not ours. We price by scope and tell you honestly what your budget can achieve.",
      },
      {
        q: "Can you build a website that handles seasonal recruitment?",
        a: "Yes. Horticulture and packing operations need to publish and retire seasonal roles quickly. We build editable seasonal sections and application flows your own team can run without developer help.",
      },
      {
        q: "Do you work with exporters and logistics companies?",
        a: "Yes. Export and freight buyers read for capability, capacity, certification, and coverage. We structure that information for fast scanning and mark it up so search engines and AI assistants can cite it accurately.",
      },
      {
        q: "Do you design for older customers?",
        a: "Yes, and it matters in Tauranga. Readable type, strong contrast, generous tap targets, and forms that are forgiving are standard in our builds rather than an accessibility afterthought.",
      },
    ],
  },
  {
    slug: "dunedin",
    city: "Dunedin",
    country: "New Zealand",
    metaTitle: "Web Design Dunedin | Custom Websites for Otago Businesses",
    metaDescription:
      "Custom web design for Dunedin and Otago businesses: university and research organisations, health providers, hospitality, retail, and the city's growing tech sector. Built by AntCrow, working remotely in your hours.",
    h1: "Web design for Dunedin businesses",
    intro:
      "AntCrow designs and builds custom websites for Dunedin businesses: health providers, research and education organisations, hospitality and retail serving a large student population, port and logistics firms, and a tech sector that keeps quietly growing. Dunedin has roughly 13,000 businesses across a city of about 104,000 people. Dunedin projects run through our remote delivery model, with the same senior team from first call to launch.",
    sections: [
      {
        heading: "A university city runs on an academic calendar",
        body: "The University of Otago drives roughly 15 to 16 percent of Dunedin's economy, and that single fact reshapes how many local businesses trade. Demand arrives in waves around orientation, semester start, exams, and graduation, then empties out over summer. Websites built for that reality need seasonal content that can be switched on and off, booking and ordering flows that survive a February surge, and messaging that speaks to a student audience without alienating the residents who keep the doors open the rest of the year.",
      },
      {
        heading: "Health and research organisations are held to a higher standard",
        body: "Dunedin's health sector and its research institutions attract audiences who read carefully: clinicians, funders, prospective students, patients, and collaborators. That means accuracy, plain language explanations sitting alongside technical detail, clear staff and credential information, and accessibility built in rather than bolted on. We use semantic structure, keyboard navigation, visible focus states, and reduced-motion support as defaults, which matters for public-facing health information and for any organisation whose work is scrutinised.",
      },
      {
        heading: "Heritage character is a design asset most sites waste",
        body: "Dunedin has architecture and a visual identity that almost no other New Zealand city can claim, and generic template websites throw all of it away. A site for a Dunedin business can carry real character through typography, colour, photography, and pacing without becoming a pastiche or a slow-loading museum piece. Distinctiveness is also commercially useful: in a city where reputation travels fast, looking like every other business in your category is the least persuasive thing you can do.",
      },
      {
        heading: "Remote delivery and being found from further away",
        body: "Otago has been one of the stronger regions for employee growth, and much of that activity is being discovered online rather than by referral. Dunedin projects run over video and a shared project space in your hours, with in-person sessions arranged when a project genuinely benefits. Every build ships with technical SEO, structured data, and answer-ready content so Google and AI assistants can describe your organisation correctly to someone searching from Auckland, Australia, or overseas.",
      },
    ],
    faqs: [
      {
        q: "How much does a website cost in Dunedin?",
        a: "Dunedin follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "Can you build a site that handles the student season?",
        a: "Yes. We build seasonal content and promotions your team can switch on and off, and we engineer ordering and booking flows to hold up during orientation and semester start rather than falling over at the busiest moment of the year.",
      },
      {
        q: "Do you work with research and health organisations?",
        a: "Yes. Those audiences read closely, so we combine plain language with technical depth, present credentials clearly, and build to modern accessibility practice by default.",
      },
      {
        q: "Do you work with Dunedin clients remotely?",
        a: "Yes. Otago projects run remotely with video working sessions scheduled in your hours and a shared project space you can check any time. In-person sessions can be arranged when a project genuinely calls for one.",
      },
    ],
  },
  {
    slug: "palmerston-north",
    city: "Palmerston North",
    country: "New Zealand",
    metaTitle: "Web Design Palmerston North | Custom Website Design & Development",
    metaDescription:
      "Custom web design for Palmerston North and Manawatu businesses: distribution and logistics, food science and research, defence suppliers, trades, and retail. Built by AntCrow, working remotely in your hours.",
    h1: "Web design for Palmerston North businesses",
    intro:
      "AntCrow designs and builds custom websites for Palmerston North businesses: distribution and logistics operators, food science and research organisations, suppliers to Massey University and Linton Military Camp, trades, and retail. The city has around 8,500 businesses serving a population of roughly 81,000 and a much larger catchment. Palmerston North projects run remotely, with the same senior designers and engineers end to end.",
    sections: [
      {
        heading: "A distribution hub sells to the whole North Island",
        body: "Palmerston North's central position made it the natural distribution and logistics centre of the lower North Island, which means most local operators are pitching to customers in Auckland, Wellington, Hawke's Bay, and Taranaki rather than down the road. Those buyers want warehouse capacity, service coverage, lead times, integration with their systems, and a named contact. A website that answers those questions in the first screen, and that marks the answers up so search engines and AI assistants can quote them, does real sales work before anyone picks up a phone.",
      },
      {
        heading: "A research city with an unusual concentration of expertise",
        body: "Massey University, the Fonterra research and development centre, and the FoodHQ collaboration give Palmerston North a density of food science and agricultural research that few cities its size can match. Organisations in that cluster have to speak to several audiences at once: commercial partners, funders, scientists, and students. We structure content so each of those readers can find their own path quickly, with plain language summaries sitting above technical detail rather than replacing it.",
      },
      {
        heading: "A population that keeps turning over needs to find you fast",
        body: "Between the student intake at Massey and postings through Linton Military Camp, a meaningful share of the local audience is new to the city in any given year. Those people have no local recommendations to draw on, so they search. Practically that means your opening hours, service area, pricing signals, and location need to be unmissable and machine readable. It also means being present in AI assistant answers, because a newcomer asking an assistant for a recommendation is now a completely ordinary way to choose a business.",
      },
      {
        heading: "How Manawatu projects run",
        body: "Remotely, over video and a shared project space, scheduled in your hours. Discovery, working sessions, and launch all run that way, and the senior people who scope the project are the ones who design and build it. In-person sessions in the Manawatu can be arranged when a project genuinely benefits from a room and a whiteboard. Every site ships with technical SEO, structured data, and answer-ready content so you are findable well beyond the city.",
      },
    ],
    faqs: [
      {
        q: "What does web design cost in Palmerston North?",
        a: "The national market applies: professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce from around $5,000. Those are market rates rather than ours, and we scope and price every project individually.",
      },
      {
        q: "Do you build websites for logistics and distribution companies?",
        a: "Yes. Those buyers scan for capacity, coverage, lead times, and system integration. We put that detail where it can be found in seconds and structure it so search engines and AI assistants can cite it accurately.",
      },
      {
        q: "Can you work with research and science organisations?",
        a: "Yes. Multi-audience sites are a common brief: commercial partners, funders, researchers, and students each need their own route through the same body of work, with plain language summaries above the technical detail.",
      },
      {
        q: "Do you work with Palmerston North clients remotely?",
        a: "Yes. Manawatu projects run over video with a shared project space you can check at any time, and in-person sessions can be arranged when a project genuinely calls for one.",
      },
    ],
  },
  {
    slug: "napier-hastings",
    city: "Napier and Hastings",
    country: "New Zealand",
    metaTitle: "Web Design Napier & Hastings | Custom Websites for Hawke's Bay",
    metaDescription:
      "Custom web design for Napier and Hastings businesses: wine, pipfruit and horticulture, food and beverage manufacturing, tourism, and trades. Built by AntCrow, working remotely across Hawke's Bay.",
    h1: "Web design for Napier and Hastings businesses",
    intro:
      "AntCrow designs and builds custom websites and online stores for Napier and Hastings businesses: wineries and cellar doors, pipfruit and horticulture operators, food and beverage manufacturers, tourism and hospitality, and the trades and services supporting them. The two cities share one economy of roughly 131,000 people and more than 18,000 businesses. Hawke's Bay projects run remotely, with the same senior team end to end.",
    sections: [
      {
        heading: "Two cities, one economy, and a website that should reflect both",
        body: "Napier and Hastings are separate councils with a single working economy, and businesses here rarely serve just one of them. Hastings carries around 95 percent of the region's exports through its growing, packing, and processing base, while Napier holds the port and the visitor economy. A website that hedges by naming neither city, or that names only one, quietly loses search visibility in the other. We set service areas, location markup, and content explicitly so both cities and the wider Hawke's Bay register properly.",
      },
      {
        heading: "Wine and pipfruit are export businesses first",
        body: "Hawke's Bay wine and apple exporters are selling to distributors, buyers, and consumers who are usually in another country and often in another language. That changes the brief: clean product and vintage data, credible provenance storytelling, freight and minimum order clarity, and pages that load quickly on connections you cannot control. Where direct sales matter, the store needs to handle age verification, shipping restrictions, and gifting without turning checkout into an obstacle course.",
      },
      {
        heading: "Art deco tourism runs on planning, not walk-ins",
        body: "Napier's art deco identity and the region's food and wine trails bring visitors who plan weeks ahead from somewhere else entirely. Those people compare accommodation, tours, cellar doors, and restaurants on a phone, in a hurry, often on a poor connection. Booking has to be two taps away, opening hours and seasonal availability have to be current, and the information has to be structured so that a search engine or an AI trip planner can surface you accurately when someone asks what to do in Hawke's Bay.",
      },
      {
        heading: "Remote delivery across the Bay",
        body: "Projects run over video and a shared workspace in your hours, which suits clients whose day is spent in an orchard, a winery, or a packhouse rather than at a desk. In-person sessions in Hawke's Bay can be arranged when a project genuinely benefits from one. Every build ships with technical SEO, structured data, and answer-ready content, so both local customers and visitors planning a trip can find you through search and through AI assistants.",
      },
    ],
    faqs: [
      {
        q: "How much does a website cost in Napier or Hastings?",
        a: "Hawke's Bay follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, and e-commerce from around $5,000. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "Do you cover both Napier and Hastings?",
        a: "Yes, and we build the site so both cities register properly in search rather than making you choose one. Service areas and location markup are set for the wider Hawke's Bay as well.",
      },
      {
        q: "Can you build an online store for a winery?",
        a: "Yes. Direct wine sales need age verification, shipping rules that vary by destination, gifting and club options, and clean vintage and product data. We build the store around those constraints instead of fighting them at checkout.",
      },
      {
        q: "Can you help tourism businesses get found by visitors?",
        a: "Yes. Visitors plan from outside the region, so we focus on fast mobile performance, current availability, prominent booking, and structured content that search engines and AI trip planners can quote correctly.",
      },
    ],
  },
  {
    slug: "new-plymouth",
    city: "New Plymouth",
    country: "New Zealand",
    metaTitle: "Web Design New Plymouth | Custom Website Design & Development",
    metaDescription:
      "Custom web design for New Plymouth and Taranaki businesses: energy services, engineering and industrial suppliers, dairy processing, professional firms, and retail. Built by AntCrow, working remotely in your hours.",
    h1: "Web design for New Plymouth businesses",
    intro:
      "AntCrow designs and builds custom websites for New Plymouth businesses: energy services and engineering firms, industrial suppliers, professional services, hospitality, and retail. Taranaki carries the highest GDP per capita of any New Zealand city region at roughly $77,000, and New Plymouth supports close to 10,700 businesses across a population of about 60,000. Projects run remotely, with the same senior designers and engineers end to end.",
    sections: [
      {
        heading: "Energy services buyers are procurement readers",
        body: "New Plymouth's energy services sector sells into organisations with formal procurement, and the people reading your website are checking whether you belong on a supplier list. They are looking for capability statements, certifications and safety record, plant and equipment, project references, and named technical contacts. Marketing language slows them down. We build sites that put verifiable capability up front, make documents easy to reach, and structure the information so it survives being pasted into an internal assessment or summarised by an AI assistant.",
      },
      {
        heading: "Industrial scale on the doorstep sets the supplier standard",
        body: "Fonterra Whareroa is one of the largest dairy processing sites in the world, and Methanex operates at a similar order of magnitude. Businesses that service sites at that scale are judged on response times, compliance, and continuity rather than on visual flourish. That does not mean a dull website. It means the design earns trust by being fast, precise, and free of the vagueness that makes a buyer wonder whether you have actually done the work before.",
      },
      {
        heading: "High local incomes raise consumer expectations too",
        body: "The same regional economy that supports energy and dairy processing, along with a bank headquartered in the city, gives New Plymouth consumers more spending power than most cities its size. Hospitality, retail, health, and home services here are compared against city-standard websites, not provincial ones. Online booking, clear pricing signals, real photography rather than stock, and a site that loads instantly on a phone are the baseline expectation rather than an upgrade.",
      },
      {
        heading: "How Taranaki projects run",
        body: "Remotely, and structured around your availability rather than ours: video working sessions, a shared project space you can look into at any point, and the same senior people from first call to launch. In-person sessions in Taranaki can be arranged when a project genuinely benefits from one. Every site ships with technical SEO, structured data, and answer-ready content so customers and AI assistants understand what you do and which parts of the region you cover.",
      },
    ],
    faqs: [
      {
        q: "What does web design cost in New Plymouth?",
        a: "New Plymouth follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce from around $5,000. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "Do you build websites for energy and industrial service companies?",
        a: "Yes. Those sites are read by procurement and technical staff, so we lead with capability, certifications, equipment, safety record, and project references, and make supporting documents easy to find.",
      },
      {
        q: "Can you present capability statements and compliance documents properly?",
        a: "Yes. We build structured document and capability sections that your team can update, rather than burying PDFs in a page nobody can navigate on a phone.",
      },
      {
        q: "Do you work with New Plymouth clients remotely?",
        a: "Yes. Taranaki projects run over video with a shared project space, scheduled in your hours, and in-person sessions can be arranged when a project genuinely calls for one.",
      },
    ],
  },
  {
    slug: "whangarei",
    city: "Whangarei",
    country: "New Zealand",
    metaTitle: "Web Design Whangarei | Custom Websites for Northland Businesses",
    metaDescription:
      "Custom web design for Whangarei and Northland businesses: marine and boatbuilding, wood processing, industrial services, trades, tourism, and retail. Built by AntCrow, working remotely in your hours.",
    h1: "Web design for Whangarei businesses",
    intro:
      "AntCrow designs and builds custom websites for Whangarei businesses: boatbuilders and marine services, wood processing and industrial firms, trades, tourism operators, and retail. Whangarei generates roughly 60 percent of Northland's GDP and supports around 11,700 businesses, so a website here is usually selling to the whole region rather than one suburb. Projects run remotely, with the same senior team end to end.",
    sections: [
      {
        heading: "Northland's commercial centre serves a very wide catchment",
        body: "Whangarei does most of Northland's economic work, which means local businesses are routinely servicing customers from Mangawhai to the Far North. A website that reads as though it only covers the city centre loses a large part of that catchment before anyone makes contact. We set service areas explicitly, structure location data so search engines and AI assistants understand the full coverage, and make travel, callout, and delivery terms clear enough that a customer two hours north knows immediately whether you will come to them.",
      },
      {
        heading: "Marine and boatbuilding sell to an international audience",
        body: "Whangarei's boatbuilding, refit, and marine services cluster competes for owners and captains who may be berthed anywhere in the world and are choosing a yard months in advance. Those clients want facility detail, haul-out capacity, craft specialisations, completed refits with real photography, and confidence that enquiries are answered quickly across time zones. This is one of the clearest cases where a website is genuinely the sales floor, and where looking provincial costs real money.",
      },
      {
        heading: "Wood processing, cement, and the port set the industrial tone",
        body: "Wood processing, cement production, and the freight moving through Northport at Marsden Point anchor a supply chain of engineering, transport, and maintenance businesses. Those companies are assessed on capability and reliability by people comparing suppliers on a screen. Clear capability, plant and equipment detail, safety and compliance information, and named contacts do more work than any hero animation. We design that content to be scanned quickly and to be quoted accurately by AI assistants when a buyer asks who can do the job in Northland.",
      },
      {
        heading: "Rural connections make performance a commercial issue",
        body: "A meaningful share of Northland traffic arrives on mobile connections that are slower than anything in a city. We engineer for that: tightly optimised images, minimal blocking scripts, and pages that become usable quickly rather than eventually. Projects themselves run over video and a shared workspace in your hours, with in-person sessions in Northland arranged when a project genuinely benefits from one.",
      },
    ],
    faqs: [
      {
        q: "How much does a website cost in Whangarei?",
        a: "Whangarei follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce from around $5,000. Those are market rates rather than ours, and we scope and price every project individually.",
      },
      {
        q: "Do you build websites for marine and boatbuilding businesses?",
        a: "Yes. Marine clients are often overseas and choosing a yard well in advance, so we focus on facility and capacity detail, completed work shown properly, and enquiry paths that work across time zones.",
      },
      {
        q: "Can you make the site cover all of Northland, not just Whangarei?",
        a: "Yes. We set service areas and location markup for the wider region and make callout, travel, and delivery terms explicit so customers outside the city know where they stand.",
      },
      {
        q: "Will the site work on slow rural connections?",
        a: "Yes, and we treat that as a requirement rather than a nice-to-have. Sites are engineered to load and become usable quickly on the connections a lot of Northland actually has.",
      },
    ],
  },
  {
    slug: "nelson",
    city: "Nelson",
    country: "New Zealand",
    metaTitle: "Web Design Nelson | Custom Websites for Nelson Tasman Businesses",
    metaDescription:
      "Custom web design for Nelson and Tasman businesses: seafood and aquaculture, forestry, science and research, makers and craft producers, tourism, and hospitality. Built by AntCrow, working remotely.",
    h1: "Web design for Nelson businesses",
    intro:
      "AntCrow designs and builds custom websites and online stores for Nelson businesses: seafood and aquaculture operators, forestry and processing firms, science and research organisations, makers and craft producers, tourism, and hospitality. Nelson supports close to 6,800 businesses across a city of roughly 51,000 people, which makes for a market that is small in headcount and unusually broad in what it does. Projects run remotely, with the same senior team end to end.",
    sections: [
      {
        heading: "Seafood and aquaculture are export industries with local faces",
        body: "Nelson is the base for a seafood and aquaculture sector that includes operations at the scale of Sealord and Talley's, with Port Nelson moving the product. Businesses in that supply chain typically need two things from one website: credible information for international buyers, processors, and certification bodies, and a straightforward story for the domestic customers and staff who live here. We structure sites so those audiences do not collide, with technical and compliance detail available without burying the human side of the business.",
      },
      {
        heading: "A science city expects precision",
        body: "The Cawthron Institute is New Zealand's largest independent science organisation, and the research and testing ecosystem around it gives Nelson an audience that reads carefully and dislikes overstatement. For research organisations, consultancies, and science-adjacent businesses, a website earns trust through accuracy, clear methodology, staff credentials, and publications that are actually findable. Accessibility and semantic structure matter here too, both for readers using assistive technology and for the machines increasingly summarising your work.",
      },
      {
        heading: "The maker economy needs commerce that respects the craft",
        body: "Nelson's arts, craft, and small production scene sells work where presentation is a large part of the value. Off-the-shelf store templates flatten that: cramped image handling, no room for process or provenance, and checkouts that feel like a warehouse. A properly built store gives the product photography space, tells the story of how something is made, handles limited runs and commissions sensibly, and still ships fast and takes payments cleanly.",
      },
      {
        heading: "Remote delivery across Nelson Tasman",
        body: "Projects run over video and a shared project space scheduled in your hours, with the same senior designers and engineers involved from first call to launch. In-person sessions in Nelson Tasman can be arranged when a project genuinely benefits from one. Every build ships with technical SEO, structured data, and answer-ready content so customers in the region, elsewhere in New Zealand, and overseas can find you through search and through AI assistants.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost for a Nelson business?",
        a: "The national market ranges apply: professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, and e-commerce from around $5,000. Those are market rates rather than ours, and we price every project by scope.",
      },
      {
        q: "Can you build an online store for a maker or food producer?",
        a: "Yes. We build stores that give product photography and process storytelling proper space, handle limited runs and commissions, and keep checkout fast and simple.",
      },
      {
        q: "Do you work with science and research organisations?",
        a: "Yes. Those sites are judged on accuracy, clear methodology, credible staff information, and findable publications, and we build them to modern accessibility practice by default.",
      },
      {
        q: "Do you work with Nelson clients remotely?",
        a: "Yes. Nelson Tasman projects run over video with a shared project space you can check any time, and in-person sessions can be arranged when a project genuinely calls for one.",
      },
    ],
  },
  {
    slug: "queenstown",
    city: "Queenstown",
    country: "New Zealand",
    metaTitle: "Web Design Queenstown | Custom Websites for Tourism & Hospitality",
    metaDescription:
      "Custom web design for Queenstown businesses: tourism operators, accommodation, hospitality, adventure activities, weddings, and trades. Built by AntCrow for international visitors and extreme seasonality.",
    h1: "Web design for Queenstown businesses",
    intro:
      "AntCrow designs and builds custom websites for Queenstown businesses: tour and adventure operators, accommodation, hospitality, wedding and event companies, retail, and the trades and services that keep it all running. Queenstown Lakes has around 11,500 businesses for a resident population near 29,000, roughly 214 businesses per thousand people and the highest commercial density in New Zealand. Projects run remotely, with the same senior team end to end.",
    sections: [
      {
        heading: "The most crowded commercial market in the country",
        body: "At roughly 214 businesses per thousand residents, Queenstown has more competitors per customer than anywhere else in New Zealand. A visitor searching for a jet boat trip, a restaurant, or a photographer is choosing between dozens of near-identical listings, and most of those websites were built from the same handful of templates. Distinctiveness is not vanity here, it is the only way to be remembered between the search result and the booking. That is design work, and it has to survive on a phone in a queue.",
      },
      {
        heading: "Tourism dominance means your customer is not local",
        body: "Tourism accounts for around 39 percent of the district's GDP and about 52 percent of its jobs, and much of that demand comes from international visitors planning from another country and another time zone. Practical consequences follow: instant mobile performance on foreign networks, pricing that is legible to someone unfamiliar with NZD, availability that is current, and content clear enough that translation tools and AI assistants do not mangle it when someone asks what to do in Queenstown.",
      },
      {
        heading: "Extreme seasonality has to be built into the site, not patched on",
        body: "Few places swing between peak and shoulder like Queenstown does. A website here needs seasonal programmes, pricing, and availability that your own team can change in minutes, not a developer ticket in the middle of a ski season. It also needs to hold up under booking surges rather than slowing down exactly when demand arrives. We build the content structure and the performance headroom for both ends of the year, and we plan project timing so launches land in the quieter months.",
      },
      {
        heading: "Being chosen before anyone arrives",
        body: "Most Queenstown decisions are made weeks in advance and increasingly with an AI assistant in the loop, asking what is worth booking and who is reliable. We build technical SEO, structured data, and answer-ready content so your operation can be described accurately in those answers, including what you do, where you are, and how to book. Projects themselves run over video and a shared workspace in your hours, with in-person sessions arranged when a project genuinely benefits.",
      },
    ],
    faqs: [
      {
        q: "How much does web design cost in Queenstown?",
        a: "Queenstown follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce and booking-heavy builds from around $5,000. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "When is the best time to build a new website for a Queenstown business?",
        a: "Shoulder seasons are usually best, so the build and launch do not compete with peak trading. We plan timelines backwards from your busiest period so the site is live and settled before demand arrives.",
      },
      {
        q: "Can you build for international visitors?",
        a: "Yes. That means fast loading on overseas networks, currency and pricing that reads clearly to non-New Zealanders, current availability, and content written so translation tools and AI assistants convey it accurately.",
      },
      {
        q: "Can the site handle seasonal pricing and availability changes?",
        a: "Yes. We build seasonal content, programmes, and pricing so your own team can update them in minutes, which matters when conditions and demand change week to week.",
      },
    ],
  },
  {
    slug: "rotorua",
    city: "Rotorua",
    country: "New Zealand",
    metaTitle: "Web Design Rotorua | Custom Websites for Tourism & Forestry Businesses",
    metaDescription:
      "Custom web design for Rotorua businesses: tourism and geothermal attractions, cultural experiences, forestry and wood processing, mountain biking, hospitality, and trades. Built by AntCrow, working remotely.",
    h1: "Web design for Rotorua businesses",
    intro:
      "AntCrow designs and builds custom websites for Rotorua businesses: tourism and geothermal attractions, cultural experience operators, forestry and wood processing companies, mountain biking and adventure businesses, accommodation, hospitality, and trades. Rotorua supports around 8,000 businesses across a population of roughly 58,500, with an economy that swings between a visitor market and a heavy industrial one. Projects run remotely, with the same senior team end to end.",
    sections: [
      {
        heading: "A visitor economy where the decision is made before arrival",
        body: "Geothermal attractions, forest trails, lakes, and cultural experiences bring visitors who research from somewhere else and book on a phone. Those people compare a handful of operators quickly, and the site that answers duration, price, transport, accessibility, and what to bring without making them hunt tends to win. Current availability and prominent booking matter more than a long history page. We also structure that information so AI assistants planning someone's trip can describe your experience accurately rather than approximately.",
      },
      {
        heading: "Forestry and wood processing are a different sale entirely",
        body: "Rotorua is also a forestry town, with operations at the scale of Red Stag Timber and the research work of Scion anchoring a supply chain of harvesting, transport, engineering, and processing businesses. Those buyers are assessing capability, volume, certification, and reliability, not atmosphere. A site serving that market needs specification-grade content, plant and capacity detail, and clear technical contacts, presented so a procurement reader can confirm fit in under a minute.",
      },
      {
        heading: "Cultural tourism has to be handled with care and accuracy",
        body: "Māori cultural tourism is central to how Rotorua presents itself, and it is the area where generic web design does the most damage. Getting it right means accurate use of te reo Māori with correct macrons, images and stories used with permission, plain descriptions of what an experience actually involves, and no cultural claims a business is not entitled to make. We build the site so the people who hold that knowledge can review and control the content rather than having it written around them.",
      },
      {
        heading: "Trails, events, and how projects run",
        body: "The Whakarewarewa Forest trail network gives Rotorua a year-round mountain biking audience with its own expectations: trail conditions, shuttle and hire information, event dates, and maps that work on a phone with patchy signal. Projects themselves run over video and a shared project space in your hours, with in-person sessions in the Bay of Plenty arranged when a project genuinely benefits. Every build ships with technical SEO, structured data, and answer-ready content.",
      },
    ],
    faqs: [
      {
        q: "How much does a website cost in Rotorua?",
        a: "Rotorua follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with booking and e-commerce builds from around $5,000. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "Can you build bilingual content in te reo Māori and English?",
        a: "Yes, including correct macron handling and a structure that lets your own people, or the cultural advisors you work with, review and control the wording rather than having it drafted around them.",
      },
      {
        q: "Do you build booking systems for tourism operators?",
        a: "Yes. We integrate booking so availability, pricing, and seasonal changes stay current and are two taps away on a phone, and we structure the details visitors ask about before they commit.",
      },
      {
        q: "Do you work with forestry and industrial businesses?",
        a: "Yes. Those sites need specification-grade capability, capacity, certification, and clear technical contacts, presented for a procurement reader rather than a casual browser.",
      },
    ],
  },
  {
    slug: "invercargill",
    city: "Invercargill",
    country: "New Zealand",
    metaTitle: "Web Design Invercargill | Custom Websites for Southland Businesses",
    metaDescription:
      "Custom web design for Invercargill and Southland businesses: agriculture and dairy services, industrial and engineering suppliers, seafood and aquaculture, trades, and retail. Built by AntCrow, working remotely.",
    h1: "Web design for Invercargill businesses",
    intro:
      "AntCrow designs and builds custom websites for Invercargill businesses: agricultural and dairy service companies, engineering and industrial suppliers, seafood and aquaculture operators, trades, education providers, and retail. Invercargill supports close to 5,700 businesses across a population of around 51,000 and acts as the commercial centre for the whole of Southland. Projects run remotely, scheduled in your hours, with the same senior team end to end.",
    sections: [
      {
        heading: "Agricultural service businesses sell to a dispersed customer base",
        body: "Southland farming is spread across a large area, and the businesses serving it are often trying to reach customers who are an hour or more from town. That makes coverage, callout terms, stock availability, and after-hours contact more important than a polished brand story. It also makes performance a practical matter: a lot of this audience is reading on a phone in a shed or a ute with variable signal, so a site that becomes usable in a second or two is doing real commercial work.",
      },
      {
        heading: "An industrial supply chain with a long horizon",
        body: "The Tiwai Point aluminium smelter is contracted through to 2044, which gives the engineering, transport, maintenance, and specialist supply businesses around it a planning horizon they did not always have. Those companies are assessed by procurement teams on capability, safety record, certification, and continuity. Websites in that segment earn their keep by making that evidence easy to find and easy to verify, and by structuring it so it can be quoted accurately by a search engine or an AI assistant rather than missed entirely.",
      },
      {
        heading: "Seafood, food producers, and selling beyond Southland",
        body: "Bluff oysters and the wider aquaculture and food production sector give Southland products with genuine national and international recognition and a sharply seasonal sales pattern. For those businesses an online store has to handle short intense seasons, pre-orders and waitlists, chilled shipping constraints, and clear delivery cut-offs, then go quiet without looking abandoned. We build the seasonal mechanics so your team can open and close a season without a developer.",
      },
      {
        heading: "Distance is a scheduling question, not a barrier",
        body: "Southland businesses are used to being furthest from everything, and the honest answer is that it makes no difference to how a project runs. Discovery, working sessions, and launch happen over video and a shared project space set to your hours, with the same senior people involved throughout. Every build ships with technical SEO, structured data, and answer-ready content so customers across Southland, the rest of New Zealand, and overseas can find you.",
      },
    ],
    faqs: [
      {
        q: "What does web design cost in Invercargill?",
        a: "Invercargill follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce from around $5,000. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "Do you build websites for industrial and engineering suppliers?",
        a: "Yes. Procurement readers want capability, certification, safety record, equipment, and continuity, so we put that evidence where it can be found quickly and structure it for accurate citation.",
      },
      {
        q: "Can you build a store for a seasonal food producer?",
        a: "Yes. Short seasons need pre-orders, waitlists, chilled shipping rules, and clear cut-off dates, plus an easy way to close the season without the site looking neglected.",
      },
      {
        q: "Does working with a remote studio slow things down in Southland?",
        a: "No. Projects run over video and a shared project space scheduled in your hours, with the same senior designers and engineers from first call to launch. In-person sessions can be arranged when a project genuinely calls for one.",
      },
    ],
  },
  {
    slug: "marlborough",
    city: "Marlborough",
    country: "New Zealand",
    metaTitle: "Web Design Marlborough & Blenheim | Custom Websites for Wine Businesses",
    metaDescription:
      "Custom web design for Marlborough and Blenheim businesses: wineries and vineyard services, aquaculture, aviation, tourism, and trades. Built by AntCrow for export audiences, working remotely in your hours.",
    h1: "Web design for Marlborough businesses",
    intro:
      "AntCrow designs and builds custom websites and online stores for Marlborough businesses: wineries and cellar doors, vineyard and contracting services, aquaculture operators in the Sounds, aviation companies, tourism, and trades. Marlborough has around 7,400 businesses centred on Blenheim, a town of roughly 30,000, because the region trades far beyond its own population. Projects run remotely, with the same senior team end to end.",
    sections: [
      {
        heading: "One industry sets the standard for everyone else",
        body: "Wine is roughly 20 percent of Marlborough's regional GDP, accounts for about 80 percent of New Zealand's total wine production, and supports around one in five local jobs. That concentration raises the visual bar for every business in the region, because customers arrive having just looked at beautifully presented winery websites. It also means a lot of the local B2B market, from contracting to engineering to logistics, is ultimately selling into wine, and should be speaking that industry's language rather than generic service copy.",
      },
      {
        heading: "Export means writing for readers who are not New Zealanders",
        body: "Marlborough wine sells into markets across Asia, North America, and Europe, to distributors, importers, sommeliers, and retail buyers who often read English as a second language. That has real design consequences: plain sentence construction, consistent product and vintage data, downloadable technical sheets and label assets, region and appellation context that cannot be assumed, and page structures that translate cleanly. It also makes structured data valuable, because international buyers increasingly reach you through AI assistants rather than a search results page.",
      },
      {
        heading: "Direct sales have rules that a template store ignores",
        body: "Selling wine directly brings constraints most e-commerce templates were never built for: age verification, destination-specific shipping restrictions, temperature and seasonal shipping windows, allocations and club memberships, gifting, and cellar door bookings that need to sit alongside the store rather than compete with it. We design the purchase path around those realities so a customer is not surprised at checkout, and so your team is not manually untangling orders that should never have been accepted.",
      },
      {
        heading: "Beyond wine, and how projects are timed",
        body: "Marlborough also runs a substantial greenshell mussel and aquaculture industry through the Sounds and a long-standing aviation sector, both selling to technical and international buyers with their own documentation expectations. Projects run over video and a shared workspace in your hours, and we plan timelines around vintage and harvest so a launch does not land in the weeks when nobody can review anything. In-person sessions can be arranged when a project genuinely benefits.",
      },
    ],
    faqs: [
      {
        q: "How much does a website cost for a Marlborough business?",
        a: "Marlborough follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, and e-commerce from around $5,000. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "Can you build a website for international wine buyers?",
        a: "Yes. That means clear writing for readers whose first language is not English, consistent vintage and product data, downloadable technical sheets and label assets, and structure that translates cleanly and can be cited accurately by AI assistants.",
      },
      {
        q: "Can you handle direct wine sales and cellar door bookings?",
        a: "Yes. We build for age verification, destination shipping restrictions, seasonal shipping windows, allocations and club memberships, gifting, and cellar door bookings that sit alongside the store rather than competing with it.",
      },
      {
        q: "When should we start a project around vintage?",
        a: "We plan backwards from vintage and harvest so reviews and approvals fall in periods when your team can actually give them attention, and so launches do not land in your busiest weeks.",
      },
    ],
  },
  {
    slug: "timaru",
    city: "Timaru",
    country: "New Zealand",
    metaTitle: "Web Design Timaru | Custom Websites for South Canterbury Businesses",
    metaDescription:
      "Custom web design for Timaru and South Canterbury businesses: food processing, engineering and trade suppliers, transport and export logistics, agriculture, and retail. Built by AntCrow, working remotely.",
    h1: "Web design for Timaru businesses",
    intro:
      "AntCrow designs and builds custom websites for Timaru businesses: food and beverage processing, engineering and trade suppliers, transport and export logistics, agricultural services, and retail. Timaru supports around 5,900 businesses across a population of roughly 29,000 and functions as the commercial centre of South Canterbury. Projects run remotely, scheduled in your hours, with the same senior designers and engineers from first call to launch.",
    sections: [
      {
        heading: "Large-scale food processing shapes the whole local market",
        body: "Fonterra Clandeboye is one of the largest dairy processing sites in the country, and McCain Foods and the DB Draught brewery add further industrial food and beverage capacity to a district of modest population. The effect is a local economy where a lot of businesses ultimately sell into big, process-driven organisations. Websites here should be written for that reader: specific about capability and capacity, precise about compliance and certification, and honest about lead times, rather than filled with the general service language a template supplies.",
      },
      {
        heading: "Trade and engineering suppliers are judged on evidence",
        body: "The engineering, fabrication, maintenance, transport, and specialist trade businesses that service those plants are competing for supplier positions rather than walk-in customers. That audience wants plant and equipment lists, tolerances and capabilities, safety and quality accreditation, previous work with real photography, and a technical contact who answers the phone. We design for scanning: the qualifying information visible immediately, the supporting documents easy to reach, and everything structured so it can be quoted accurately when a buyer asks an AI assistant who can do the work in South Canterbury.",
      },
      {
        heading: "An export port keeps the customer base national and international",
        body: "PrimePort Timaru handles roughly $1.1 billion in exports, which means a significant share of local businesses are connected to customers well outside the district. That makes coverage and logistics detail part of your sales pitch: where you deliver, how you handle freight, what your turnaround looks like from a South Canterbury base, and why distance is not a problem. Sites that state this plainly convert better than sites that leave a distant buyer guessing.",
      },
      {
        heading: "Serving South Canterbury and running projects remotely",
        body: "Timaru businesses usually cover a catchment stretching from Ashburton to the Waitaki, and the website should say so explicitly rather than making a customer in Geraldine or Waimate wonder. We set service areas and location data accordingly. Projects run over video and a shared project space in your hours, with in-person sessions arranged when a project genuinely benefits, and every build ships with technical SEO, structured data, and answer-ready content.",
      },
    ],
    faqs: [
      {
        q: "What does web design cost in Timaru?",
        a: "Timaru follows the national market, where professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce from around $5,000. Those are market rates rather than ours: we scope and price every project individually.",
      },
      {
        q: "Do you build websites for engineering and trade suppliers?",
        a: "Yes. Those sites need plant and equipment detail, capability and tolerance information, quality and safety accreditation, real project photography, and a technical contact, all visible without hunting.",
      },
      {
        q: "Can the site cover the whole of South Canterbury?",
        a: "Yes. We set service areas and location markup for the wider district, from Ashburton down to the Waitaki, so customers outside Timaru know immediately that you serve them.",
      },
      {
        q: "Do you work with Timaru clients remotely?",
        a: "Yes. Projects run over video with a shared project space scheduled in your hours, and in-person sessions can be arranged when a project genuinely calls for one.",
      },
    ],
  },
];

/**
 * AUSTRALIAN CITIES.
 * ------------------------------------------------------------------
 * Two rules that are easy to break and expensive to get wrong.
 *
 * 1. The economic figures below come from economy.id profiles, which are
 *    NIEIR MODELLED data in 2023/24 base-year dollars, not ABS survey
 *    data. They are phrased as "modelled regional estimates" throughout.
 *    NIEIR revises prior years with each release, so re-check before
 *    treating any figure as current.
 *
 * 2. City of Melbourne, City of Sydney, City of Perth and City of
 *    Adelaide are INNER CITY COUNCIL AREAS, not the metro areas. City of
 *    Brisbane is unusual: it covers most of metropolitan Brisbane. Never
 *    compare these council areas to each other by size, because the
 *    boundaries are not equivalent. "Brisbane's economy is larger than
 *    Melbourne's" would be sourceable and false.
 */
export const australianLocations: Location[] = [
  {
    slug: "melbourne",
    city: "Melbourne",
    country: "Australia",
    metaTitle: "Web Design Melbourne | Custom Website Design & Development",
    metaDescription:
      "AntCrow designs and builds custom websites for Melbourne businesses, from professional services and finance to health technology, with senior design and engineering end to end.",
    h1: "Web design in Melbourne",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Melbourne businesses. Melbourne's inner city runs on professional services and finance, and both are categories where a website is assessed rather than admired. We build for readers who are checking whether you are credible before they ever make contact.",
    sections: [
      {
        heading: "A professional services city, and websites are judged accordingly",
        body: "Modelled regional estimates put financial and insurance services at 29.0 percent of value added in the City of Melbourne local government area, against a Victorian benchmark of 10.8 percent. Professional, scientific and technical services employ around 150,000 people in that council area, roughly 22 percent of local jobs. Note that this is the inner city council area rather than Greater Melbourne. What it means practically is that a large share of the surrounding market sells expertise, and expertise is bought on evidence: clear credentials, plain explanations of complicated work, and a site that behaves precisely.",
      },
      {
        heading: "Health technology and research raise the standard",
        body: "Victoria hosts around 40 percent of ASX-listed medical technology and pharmaceutical companies and produces 54 percent of national pharmaceutical exports. Those are state figures rather than Melbourne ones, but the institutions sit here: the Walter and Eliza Hall Institute runs more than 90 laboratories with over 1,200 staff and students, and the Royal Melbourne Hospital has operated since 1848 as Victoria's first public hospital. Organisations in this orbit have compliance-minded reviewers, accessibility expectations, and a low tolerance for inflated claims. We build conservatively by default for exactly that reason.",
      },
      {
        heading: "Being found by Australian customers, and cited by AI",
        body: "A Melbourne business needs to be found by Australian customers specifically. We build Australian market signals into the content, structured data that tells search engines and AI assistants precisely where you operate and what you do, and performance that holds up on Australian mobile networks. Increasingly the question is not only whether you rank, but whether an assistant names you when someone asks who to use. That takes clear, quotable, factual content, which is the same discipline we apply to our own site.",
      },
      {
        heading: "How cross-Tasman projects actually run",
        body: "Remotely, and without pretending otherwise. Kickoff, working sessions, and launch happen on scheduled video calls in Melbourne hours, with a shared project space you can open at any time. Melbourne is two hours behind New Zealand for most of the year and three during the daylight saving overlap, which is a small enough gap that a normal working day covers both. Invoicing can be in AUD or NZD, and in-person sessions can be arranged where a project genuinely benefits from one.",
      },
    ],
    faqs: [
      {
        q: "What does a business website cost in Melbourne?",
        a: "Published Australian pricing guides put a custom-designed business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, commonly quoted exclusive of GST, which is 10 percent in Australia. Those are market ranges rather than ours, and Australian sources disagree widely at the entry level. Our guide at /guides/website-cost-australia collects the published figures and shows where they conflict.",
      },
      {
        q: "Do you work with Melbourne businesses from New Zealand?",
        a: "Yes. Projects run remotely with video sessions scheduled in Melbourne hours. The time difference is two hours for most of the year and three during the daylight saving overlap, so a normal working day comfortably covers both cities. In-person sessions can be arranged where a project genuinely benefits.",
      },
      {
        q: "Can you build for regulated or research-linked organisations?",
        a: "Yes, and we build conservatively by default: no inflated claims, no invented statistics, accessibility handled properly, and structured content your compliance reviewers can read without wincing. Melbourne has a dense health technology and research sector, and organisations in that orbit are reviewed more carefully than most.",
      },
      {
        q: "Will the site be found by Australian customers rather than New Zealand ones?",
        a: "Yes. Search engines determine relevance from content signals, structured data, and where your audience actually engages, not from where the studio sits. We build Australian market signals in from the start, and we can invoice in AUD.",
      },
    ],
  },
  {
    slug: "brisbane",
    city: "Brisbane",
    country: "Australia",
    metaTitle: "Web Design Brisbane | Custom Website Design & Development",
    metaDescription:
      "AntCrow builds custom websites for Brisbane businesses across an unusually diversified economy, engineered for Australian search, AI answers, and mobile performance.",
    h1: "Web design in Brisbane",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Brisbane businesses. Brisbane is the most genuinely diversified of Australia's big three city economies, which changes what a website has to do: it is more often explaining an unfamiliar business to a broad audience than competing inside one dominant sector.",
    sections: [
      {
        heading: "No single industry dominates, and that shapes the brief",
        body: "Modelled regional estimates put professional, scientific and technical services as the most productive industry in the City of Brisbane at about $21.4 billion, which is 13.1 percent of value added. That is the largest share, and it is small: in the City of Sydney council area, finance alone takes 34.0 percent. Queensland Treasury makes the same point at state level, noting no single sector has averaged more than 10 percent of output over the past decade. For a website it means less category shorthand and more explaining, because your visitor may have no frame of reference for what you do.",
      },
      {
        heading: "Health, research and a city preparing for 2032",
        body: "Health care employs around 160,000 people in the City of Brisbane council area, though notably that is a smaller share of local jobs than the Queensland average. Metro North Health employs more than 22,000 people and is the largest of Queensland's sixteen Hospital and Health Services; the Royal Brisbane and Women's Hospital is the state's largest, with over 9,000 staff and close to 1,000 beds. The University of Queensland teaches more than 57,000 students. Brisbane is also the host city for the 2032 Olympic and Paralympic Games, which is already shaping infrastructure and investment timelines.",
      },
      {
        heading: "The fastest growing of the big three city economies",
        body: "Modelled estimates put growth in the City of Brisbane council area at 3.0 percent in the year to June 2025, ahead of the City of Sydney at 2.5 percent and the City of Melbourne at 1.6 percent. Those council areas cover different proportions of their metro regions, so the absolute figures are not comparable, but the growth rates are a fair signal. Practically, a growing market means more new entrants, more categories that are still being explained to customers, and more competitive pressure on how clearly you can state what you do.",
      },
      {
        heading: "Built for Australian search and AI answers",
        body: "We build Australian market signals into the content, structured data that tells Google and AI assistants exactly where you operate, and performance that holds on Australian mobile networks. The newer question is whether an assistant names you when a customer asks who to use, which depends on clear factual content, consistent descriptions of your business across the web, and letting the right crawlers reach you. We do that work as part of the build rather than selling it back afterwards.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost in Brisbane?",
        a: "Published Australian pricing guides put a custom business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, usually quoted exclusive of GST at 10 percent. Those are market figures rather than ours. The published sources disagree substantially at the lower end, and our guide at /guides/website-cost-australia shows the spread rather than averaging it away.",
      },
      {
        q: "Do you work with Brisbane businesses from New Zealand?",
        a: "Yes. Projects run remotely on scheduled video calls in Brisbane hours. Queensland does not observe daylight saving, so the gap from New Zealand is two hours for part of the year and three during the New Zealand daylight saving period. Either way a normal working day covers both.",
      },
      {
        q: "Our category is hard to explain. Can you help with that?",
        a: "That is a large part of the work. Brisbane's economy is unusually diversified, which means more businesses are explaining an unfamiliar offering than competing inside a crowded, well-understood category. Positioning, structure, and plain language do more for those sites than visual flourish, and we start there.",
      },
      {
        q: "Will a New Zealand studio understand the Australian market?",
        a: "We build for Australian audiences with Australian market signals, Australian pricing context, and AUD invoicing. We are also honest about the limits: we do not have an Australian street address, so we are not competing for map-pack results. What we compete on is the quality of the build and how findable it is nationally.",
      },
    ],
  },
  {
    slug: "perth",
    city: "Perth",
    country: "Australia",
    metaTitle: "Web Design Perth | Custom Website Design & Development",
    metaDescription:
      "AntCrow builds custom websites for Perth businesses, including the engineering and professional services firms that run Western Australia's resources sector.",
    h1: "Web design in Perth",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Perth businesses. Perth's inner city is not a mine site; it is the head office, engineering and professional services centre that runs Western Australia's resources sector. That audience buys on demonstrated capability, and we build sites that show it rather than assert it.",
    sections: [
      {
        heading: "The control room for the resources sector",
        body: "This is the fact that explains Perth. Modelled regional estimates put professional, scientific and technical services as the largest employer in the City of Perth council area at around 62,700 jobs, roughly 24 percent of local employment, against a Western Australian benchmark of 7.9 percent. That sector added close to 19,500 jobs in five years. Mining leads on value added at 24.9 percent, well below the state's 46.3 percent. Read together, the inner city is where the engineering, technical and corporate work happens, not where the extraction does. Websites here are read by procurement teams and engineers.",
      },
      {
        heading: "What a capability-led audience actually wants",
        body: "Firms selling into resources are assessed on evidence: certifications, standards, equipment, tolerances, project history, and safety record. That is a different brief from consumer persuasion. It calls for structured capability content, specifications that a technical reader can scan without a sales conversation, and enquiry forms that capture enough detail to respond usefully. Perth also hosts substantial research infrastructure, including the Pawsey Supercomputing Research Centre at Kensington, supported by $90 million in Australian Government national research infrastructure funding, and Curtin University, which teaches over 50,000 students across its network.",
      },
      {
        heading: "A market with real scale and real distance",
        body: "Modelled estimates put gross regional product for the City of Perth council area at about $61.7 billion in the year to June 2025, growing 6.7 percent. Western Australia attracted $34 billion of mining and petroleum investment in 2025, a decade high and 62 percent of the national total, with more than 136,000 on-site full-time equivalents employed in mining. Perth Airport handled a record 18.03 million passengers in calendar 2025. The scale is genuine, and so is the isolation, which is precisely why remote-capable suppliers are normal here rather than exceptional.",
      },
      {
        heading: "Working across the widest time gap",
        body: "Perth is the furthest Australian capital from New Zealand in working hours, four hours behind for much of the year and five during the New Zealand daylight saving period. We do not pretend that is nothing. In practice it means a genuine overlap in the New Zealand afternoon and the Perth morning, and we schedule accordingly rather than asking anyone to take calls at unreasonable hours. Written updates and a shared project space carry the rest, which is how most Perth businesses already work with suppliers on the east coast.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost in Perth?",
        a: "Published Australian pricing guides put a custom business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, commonly quoted exclusive of GST at 10 percent. Those are Australian market ranges rather than ours. Our guide at /guides/website-cost-australia collects the published sources and shows where they conflict, which at the entry level is by a factor of forty.",
      },
      {
        q: "How does the time difference work between Perth and New Zealand?",
        a: "Perth is four hours behind New Zealand for much of the year and five during New Zealand daylight saving, the widest gap of any Australian capital. There is a workable overlap between the New Zealand afternoon and the Perth morning, and we schedule calls inside it. Everything else runs through written updates and a shared project space.",
      },
      {
        q: "Can you build for engineering and resources supply chain businesses?",
        a: "Yes, and it is a different discipline from consumer work. The audience is procurement staff and engineers assessing capability, so the site needs structured capability content, real specifications, certifications and standards where held, and enquiry forms that capture enough technical detail to quote against. Persuasion matters far less than being easy to evaluate.",
      },
      {
        q: "Do you have an office in Perth?",
        a: "No. AntCrow serves clients worldwide and works with Perth businesses remotely, which is a normal arrangement in a city that already works at distance from the eastern states. In-person sessions can be arranged where a project genuinely benefits. We would rather be straightforward about that than imply a local presence we do not have.",
      },
    ],
  },
  {
    slug: "adelaide",
    city: "Adelaide",
    country: "Australia",
    metaTitle: "Web Design Adelaide | Custom Website Design & Development",
    metaDescription:
      "AntCrow builds custom websites for Adelaide businesses, including the defence, health and research suppliers that anchor South Australia's institutional economy.",
    h1: "Web design in Adelaide",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Adelaide businesses. Adelaide's economy is institution-led: defence programmes, health networks, and public administration set the tone, and suppliers into that world are judged on evidence and reliability rather than flash. We build websites that survive that kind of reading.",
    sections: [
      {
        heading: "An institutional economy, and what that demands of a website",
        body: "Modelled regional estimates put public administration and safety at 16.7 percent of jobs in the City of Adelaide council area, against a South Australian benchmark of 6.8 percent, a concentration of roughly two and a half times. Health care is the largest employer at around 32,000 jobs, and financial and insurance services lead value added at 20.0 percent. Note this describes the inner city council area rather than Greater Adelaide. Selling into institutions means procurement processes, compliance reviewers, and long evaluation cycles, so the website's job is to make you easy to assess: credentials stated plainly, capability documented, claims that survive checking.",
      },
      {
        heading: "The defence build-up is reshaping the supplier landscape",
        body: "Osborne is the anchor. The Hunter Class frigate programme is a $45 billion undertaking with an average of 2,500 people building the ships and a peak of 3,000, and in March 2024 ASC was selected as the Sovereign Submarine Partner to jointly build SSN-AUKUS submarines with BAE Systems at Osborne, with up to 4,000 workers constructing the yard and several thousand more building the boats at programme peak. South Australia is home to seven of the world's top ten defence companies, including BAE Systems, Boeing and Lockheed Martin. Every tier of that supply chain gets vetted, and a supplier's website is the first document in the file.",
      },
      {
        heading: "Steady demand rather than a boom, stated honestly",
        body: "Modelled estimates put gross regional product for the City of Adelaide council area at about $28.2 billion in the year to June 2025, essentially flat on the year before. We would rather tell you that than sell you a boom story the data does not support. Flat headline growth in an institution-led economy means demand is steady rather than speculative: health networks such as the Central Adelaide Local Health Network, the largest in SA Health, research institutes such as SAHMRI, and the defence programmes above keep buying through cycles. Websites serving that demand need durability and clarity more than novelty.",
      },
      {
        heading: "Built for Australian search and AI answers",
        body: "We build Australian market signals into the content, structured data that tells search engines and AI assistants exactly what you do and where you operate, and performance that holds up on Australian mobile networks. For Adelaide suppliers the increasingly important question is whether an assistant names you when a procurement officer asks who does your kind of work, which depends on clear factual content and consistent descriptions of your business across the web. Projects run remotely on video in Adelaide hours, and the time difference from New Zealand is small enough that a normal working day covers both.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost in Adelaide?",
        a: "Published Australian pricing guides put a custom business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, commonly quoted exclusive of GST at 10 percent. Those are market ranges rather than ours, and the published sources disagree substantially at the entry level. Our guide at /guides/website-cost-australia collects the sources and shows the spread.",
      },
      {
        q: "Can you build websites for defence supply chain businesses?",
        a: "Yes, with the sobriety that audience expects: capability statements, certifications and standards where held, project history, and no inflated claims. We do not handle classified material and we say so plainly. What we build is the public evidence layer that lets a primes' procurement team assess you quickly.",
      },
      {
        q: "Do you work with Adelaide businesses from New Zealand?",
        a: "Yes. Projects run remotely with video sessions in Adelaide hours. Adelaide is two and a half hours behind New Zealand for part of the year and one and a half during the overlap of daylight saving periods, so scheduling is straightforward. Invoicing can be in AUD.",
      },
      {
        q: "Our organisation has compliance reviewers. Will the site survive them?",
        a: "That is how we build by default: accurate claims only, sources for published figures, accessibility handled properly, and structured content a reviewer can check quickly. Adelaide's institutional economy reviews suppliers more carefully than most markets, and a website that overstates is a liability there.",
      },
    ],
  },
  {
    slug: "gold-coast",
    city: "Gold Coast",
    country: "Australia",
    metaTitle: "Web Design Gold Coast | Custom Website Design & Development",
    metaDescription:
      "AntCrow builds custom websites for Gold Coast businesses in a construction and healthcare economy with a tourism overlay, engineered for Australian search and AI answers.",
    h1: "Web design on the Gold Coast",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Gold Coast businesses. The common picture of the Gold Coast as a tourism town is out of date: it is now a construction and healthcare economy with a tourism overlay, and the businesses growing fastest there are the ones most brochure websites were never designed to serve.",
    sections: [
      {
        heading: "Not a tourism monoculture, whatever the postcards say",
        body: "The numbers are unambiguous. Modelled regional estimates for Gold Coast City, which unusually does cover effectively the whole city, put accommodation and food services at just 5.0 percent of value added and 8.5 percent of jobs. Construction is the most productive industry at about $5.6 billion, 12.8 percent of value added against a Queensland benchmark of 8.8, and health care is the largest employer at around 58,000 jobs. Between 2019/20 and 2024/25 construction added roughly 16,700 jobs and health care 15,200. Tourism is real, and arts and recreation runs well above the state share, but it is the overlay rather than the engine.",
      },
      {
        heading: "A health precinct with genuine scale",
        body: "The Gold Coast Hospital and Health Service employs more than 14,000 people across more than twenty facilities including three hospitals, and describes itself as the city's largest employer. The Gold Coast Health and Knowledge Precinct spans 200 hectares and brings together more than $5 billion in health, research and education infrastructure, with over 1,000 researchers and 16,000 workers. Bond University at Robina was named Australia's top university for teaching in the Australian Financial Review's Best Universities Ranking in 2025, for the second year running. Clinics, allied health practices, and health-adjacent suppliers sit in the gravity of all that, and their websites carry real credibility obligations.",
      },
      {
        heading: "Construction and trades, where a website wins or loses jobs",
        body: "A construction economy growing at the Gold Coast's pace, with gross regional product up 3.7 percent in the year to June 2025 on modelled estimates, is a referral economy. Builders, subcontractors and trades win work when the person checking them out finds real projects, real credentials, and a fast path to an enquiry. That is a discipline we know unusually well: our team also runs CheckMyBuilder in New Zealand, which indexes building companies against public records, so we have watched exactly how customers vet construction businesses online before making contact.",
      },
      {
        heading: "Built for Australian search and AI answers",
        body: "We build Australian market signals into the content, structured data that tells Google and AI assistants exactly where you operate and what you do, and performance that holds on Australian mobile networks, which matters doubly for businesses whose customers search from a phone on a job site or a beach. Queensland does not observe daylight saving, so the gap from New Zealand is two hours for part of the year and three during the New Zealand daylight saving period, and a normal working day covers both comfortably.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost on the Gold Coast?",
        a: "Published Australian pricing guides put a custom business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, usually quoted exclusive of GST at 10 percent. Those are market figures rather than ours. The sources disagree widely at the entry level, and our guide at /guides/website-cost-australia shows the published spread rather than inventing an average.",
      },
      {
        q: "Do you build websites for builders and trades on the Gold Coast?",
        a: "Yes, and it is a genuine specialty. Our team also runs CheckMyBuilder in New Zealand, a public tool that indexes building companies against official records, so we know precisely how customers vet construction businesses online. We build builder websites to pass that vetting: real projects, credentials, clear service areas, and an enquiry path that captures what you need to quote.",
      },
      {
        q: "Can you build for clinics and health businesses?",
        a: "Yes. Health websites carry particular obligations: accurate practitioner credentials, careful claims, accessibility, and privacy handled properly. Australian health advertising is regulated, and specific compliance questions should go to the relevant authority or a lawyer, but we build conservatively by default so your site is not the thing that creates the problem.",
      },
      {
        q: "Do you work with Gold Coast businesses from New Zealand?",
        a: "Yes. Projects run remotely with video sessions in Queensland hours. The time difference is two to three hours depending on the season, since Queensland does not observe daylight saving, and a normal working day covers both cities. Invoicing can be in AUD.",
      },
    ],
  },
  {
    slug: "canberra",
    city: "Canberra",
    country: "Australia",
    metaTitle: "Web Design Canberra | Custom Website Design & Development",
    metaDescription:
      "AntCrow builds custom websites for Canberra businesses selling into government, where accessibility, procurement readiness and evidence matter more than anywhere in Australia.",
    h1: "Web design in Canberra",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Canberra businesses. Canberra is the most government-shaped market in Australia, and selling into it is different: procurement processes, panel arrangements, and accessibility standards decide who gets considered. We build websites that make those evaluations easy to pass.",
    sections: [
      {
        heading: "The public service is the economy, by a wide margin",
        body: "Public administration and safety contributed $18,757 million of industry gross value added in the ACT in 2024-25, far ahead of any other sector, and the Australian Public Service Commission's own workforce data puts 70,221 APS employees in Canberra at 30 June 2025, about 35 percent of the entire national service. The ACT economy grew 3.5 percent that year, the highest rate of any Australian jurisdiction, with GSP per capita of $119,544. Almost every business in the city either sells to government, sells to people paid by government, or supplies the businesses that do.",
      },
      {
        heading: "Selling to government starts with being assessable",
        body: "Government buyers do not browse; they evaluate. Before a supplier reaches a shortlist, someone has checked the website for capability evidence, corporate details, security posture, and whether the organisation seems like it will still exist in three years. A Canberra supplier's website is effectively a standing tender document. We structure them that way: capability statements that map to how agencies actually describe requirements, credentials and panel memberships stated plainly, and an entity that is consistent everywhere it appears, because procurement teams check that too.",
      },
      {
        heading: "Accessibility is not optional in this market",
        body: "Australian Government digital services are held to accessibility standards, and that expectation flows down to suppliers: an agency evaluating two vendors will notice if one's website fails the standards the agency itself must meet. We build to WCAG 2.2 AA as a working baseline, with real colour contrast, keyboard navigation, and structure that assistive technology can actually use. Canberra also hosts research anchors including CSIRO, which is consolidating sites in the city, the Australian National University, and the University of Canberra, and that institutional audience reads with the same care.",
      },
      {
        heading: "Built for Australian search and AI answers",
        body: "We build Australian market signals into the content, structured data that tells search engines and AI assistants exactly what you do, and clear factual pages that assistants can safely quote, which increasingly matters when an evaluator's first question goes to a chatbot rather than a search box. Projects run remotely on video in Canberra hours; the time difference from New Zealand is two hours for most of the year, and invoicing can be in AUD.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost in Canberra?",
        a: "Published Australian pricing guides put a custom business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, commonly quoted exclusive of GST at 10 percent. Those are market ranges rather than ours. Our guide at /guides/website-cost-australia collects the published sources, which disagree substantially at the entry level, and shows the spread.",
      },
      {
        q: "Can you build websites for businesses selling to government?",
        a: "Yes, and it is a distinct discipline. The site needs to function as a standing capability statement: what you do, evidence you have done it, corporate and compliance details where evaluators expect them, and accessibility to the standards agencies are themselves held to. We build to WCAG 2.2 AA as a baseline and keep claims strictly checkable.",
      },
      {
        q: "Does accessibility really affect winning government work?",
        a: "Practically, yes. Australian Government digital services are held to accessibility standards, and suppliers are assessed by people who work under those standards daily. An inaccessible supplier website is a visible signal of how you will treat their requirements. It is also simply the correct way to build, and it improves how machines read your content too.",
      },
      {
        q: "Do you work with Canberra organisations from New Zealand?",
        a: "Yes. Projects run remotely with video sessions in Canberra hours, and the time difference is two hours for most of the year, three during the overlap of daylight saving changes. Government-adjacent work often involves more stakeholders per decision, and we run structured reviews to keep that moving rather than letting it drift.",
      },
    ],
  },
  {
    slug: "newcastle",
    city: "Newcastle",
    country: "Australia",
    metaTitle: "Web Design Newcastle | Custom Website Design & Development",
    metaDescription:
      "AntCrow builds custom websites for Newcastle businesses in a city whose economy is now led by health care, not steel, with a port diversifying beneath it.",
    h1: "Web design in Newcastle",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Newcastle businesses. The city's economic story has quietly inverted: health care is now the defining industry inside Newcastle itself, while the coal economy lives mostly in the surrounding Hunter and in the port's throughput. Websites here serve a more diverse market than the reputation suggests.",
    sections: [
      {
        heading: "Health care is the defining industry now, and that surprises people",
        body: "Modelled regional estimates make health care and social assistance the largest employer in the City of Newcastle at around 33,000 local jobs, 23.8 percent of the total and up roughly 8,600 jobs in five years. The Hunter New England Local Health District employs more than 11,700 full-time equivalents, the largest employer in its region, serving over 970,000 residents. Mining's value added inside the council area fell from about $1.1 billion to $750 million over the same five years. Both things are true at once: the city has become a health and services economy, while the coal trade continues at scale through the port.",
      },
      {
        heading: "The port is diversifying beneath a very large number",
        body: "The Port of Newcastle describes itself as Australia's deepwater global gateway, the largest on the nation's East Coast, with trade worth about $48 billion a year to the national economy and its shipping channel running at half capacity. Its own 2025 trade report shows coal at 149 million revenue tonnes, 93.1 percent of trade and edging down from 94.6 the year before, while diversified non-coal trade grew by nearly a third. For the supply chain businesses around the port, the practical question is positioning for both realities: servicing today's trade while being findable for tomorrow's.",
      },
      {
        heading: "A university city with a serious research base",
        body: "The University of Newcastle counted 39,721 students and 3,014 full-time equivalent staff at the end of 2025, including more than 8,500 international students from 97 countries. A university at that scale feeds the city's professional services, health research, and startup activity, and it shapes the audience: Newcastle readers include a large population of students, academics and clinicians who check claims. Websites that state their evidence plainly do better here than websites that perform.",
      },
      {
        heading: "Built for Australian search and AI answers",
        body: "We build Australian market signals into the content, structured data that tells Google and AI assistants exactly where you operate, and performance that holds on Australian mobile networks. Newcastle businesses compete against Sydney suppliers two hours down the motorway, so being clearly findable and clearly credible is worth real money. Projects run remotely on video in New South Wales hours, with a time difference from New Zealand of two hours for most of the year, and invoicing can be in AUD.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost in Newcastle?",
        a: "Published Australian pricing guides put a custom business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, commonly quoted exclusive of GST at 10 percent. Those are market ranges rather than ours, and the published sources disagree by a wide margin at the entry level. Our guide at /guides/website-cost-australia shows the spread and cites every source.",
      },
      {
        q: "Can you build for port and logistics supply chain businesses?",
        a: "Yes. That audience is procurement-led: they want capability, certifications, service areas, and evidence they can verify quickly. We structure sites so a logistics coordinator or procurement officer can assess you in minutes, and we build the search presence so you are found for the diversifying trade as well as the established one.",
      },
      {
        q: "Do you build for health businesses and clinics?",
        a: "Yes. Health is Newcastle's largest employer and its websites carry particular obligations: accurate credentials, careful claims, accessibility, and privacy handled properly. We build conservatively by default and point specific regulatory questions to the relevant authority rather than guessing on your behalf.",
      },
      {
        q: "Do you work with Newcastle businesses from New Zealand?",
        a: "Yes. Projects run remotely with video sessions in New South Wales hours. The time difference is two hours for most of the year, briefly three around daylight saving changes, so a normal working day covers both. In-person sessions can be arranged where a project genuinely benefits.",
      },
    ],
  },
  {
    slug: "hobart",
    city: "Hobart",
    country: "Australia",
    metaTitle: "Web Design Hobart | Custom Website Design & Development",
    metaDescription:
      "AntCrow builds custom websites for Hobart businesses, from the Antarctic science sector to health, government and the makers Tasmania is known for.",
    h1: "Web design in Hobart",
    intro:
      "AntCrow designs and builds custom websites, online stores, and AI-ready digital experiences for Hobart businesses. Hobart concentrates Tasmania's institutions, carrying a quarter of the state's value added, and it holds one economy found nowhere else in Australia: the Antarctic gateway. Both audiences read carefully, and we build websites that stand up to careful reading.",
    sections: [
      {
        heading: "A city of institutions, concentrated",
        body: "Modelled regional estimates put Hobart City at about $10.0 billion of gross regional product, roughly 23.6 percent of Tasmania, with a quarter of the state's value added produced in the city. Three industries dominate: health care at 21.5 percent of value added, public administration and safety at 16.9, and financial and insurance services at 10.9, together nearly half the city's economy. Health care is the largest employer at around 15,200 jobs, and public administration runs at more than double the Tasmanian benchmark share. Selling into that mix means being easy to evaluate, which is a design problem as much as a content one.",
      },
      {
        heading: "The Antarctic gateway is a real industry, not a slogan",
        body: "The Antarctic and Southern Ocean sector contributes more than $204 million a year to the Tasmanian economy and employs more than 1,100 people, up from 671 a decade earlier, on the Tasmanian Government's own 2023-24 figures. The Australian Antarctic Division, headquarters of the national Antarctic programme, is based at Kingston just south of the city. Around that anchor sits a supply chain of science, logistics, engineering and specialist services whose customers are research agencies and expedition operators worldwide, and whose websites are read by exacting international audiences.",
      },
      {
        heading: "Small state, distinctive producers, global buyers",
        body: "Tasmania's agriculture, forestry and fishing sector is proportionally far larger than in most states, at about $3.4 billion of statewide value added, and Hobart is where much of it meets its market: producers, aquaculture businesses, and makers selling distinctive goods to mainland and international buyers. For those businesses the website is the export channel. It has to carry provenance convincingly, handle e-commerce properly, and perform for a customer in Sydney or Singapore as well as one in Sandy Bay. That is a remote-first problem by nature, which suits how we work.",
      },
      {
        heading: "Built for Australian search and AI answers",
        body: "We build Australian market signals into the content, structured data that tells search engines and AI assistants exactly what you do and where, and clear factual pages that assistants can quote safely. For a small market with global customers, being findable beyond Tasmania matters more than being merely present within it. Projects run remotely on video in Tasmanian hours, with a time difference from New Zealand of two hours for most of the year, and invoicing can be in AUD.",
      },
    ],
    faqs: [
      {
        q: "What does a website cost in Hobart?",
        a: "Published Australian pricing guides put a custom business website at roughly $5,000 to $15,000 and e-commerce from about $10,000, commonly quoted exclusive of GST at 10 percent. Those are market ranges rather than ours, and the sources disagree substantially at the entry level. Our guide at /guides/website-cost-australia collects the published figures and shows where they conflict.",
      },
      {
        q: "Can you build for science and Antarctic sector organisations?",
        a: "Yes. That audience is international, technical, and precise: research agencies, logistics partners and expedition operators who check claims. We build structured, factual, fast sites with accessibility handled properly, and we keep the content quotable, which matters when your next enquiry starts with someone asking an AI assistant who operates in the sector.",
      },
      {
        q: "Can you build e-commerce for Tasmanian producers selling beyond the state?",
        a: "Yes, and that is where a producer's website earns its keep: provenance told convincingly, product pages that do the selling, checkout and shipping handled properly for mainland and international customers, and performance that holds up far from Hobart. The site is effectively your export channel, and we build it as one.",
      },
      {
        q: "Do you work with Hobart businesses from New Zealand?",
        a: "Yes. Projects run remotely with video sessions in Tasmanian hours. The time difference is two hours for most of the year, briefly three around daylight saving changes, so scheduling is easy. In-person sessions can be arranged where a project genuinely benefits.",
      },
    ],
  },
];

/**
 * Every location, both countries. This is what the routes, the sitemap
 * and llms.txt read, so anything added to either array above appears
 * across the site automatically.
 *
 * The two arrays stay separate because hreflang is derived from
 * `country`: a page about a New Zealand city should not declare itself
 * relevant to an Australian audience, or the reverse.
 */
export const allLocations: Location[] = [...locations, ...australianLocations];

export const getLocation = (slug: string) =>
  allLocations.find((l) => l.slug === slug);
