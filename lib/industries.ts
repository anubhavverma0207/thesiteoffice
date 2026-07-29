/**
 * Industry pages data. Same discipline as locations: each niche gets
 * genuinely distinct content grounded in real expertise. The builders
 * page is the flagship: our team also runs CheckMyBuilder, so we know
 * how customers actually vet these businesses online.
 */

export type IndustryFaq = { q: string; a: string };

export type Industry = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: IndustryFaq[];
};

export const industries: Industry[] = [
  {
    slug: "builders",
    name: "Builders & Construction",
    metaTitle: "Websites for Builders NZ | Web Design for Construction Companies",
    metaDescription:
      "Websites for NZ builders and construction companies, designed by the team behind CheckMyBuilder. We know exactly how homeowners vet builders online, and we build websites that pass that vetting and win the job.",
    h1: "Websites for builders",
    intro:
      "AntCrow builds websites for New Zealand builders and construction companies. Our team also runs CheckMyBuilder, a public tool that indexes NZ building companies against the Companies Register and public records, so we know precisely how homeowners and commercial clients vet builders online before they ever make contact. We design builder websites to pass that vetting and win the job.",
    sections: [
      {
        heading: "How customers actually choose a builder in 2026",
        body: "Before anyone calls you, they search you. They look for how long you have been in business, whether your company records are clean, what your past work looks like, and whether anything about you feels vague. Running CheckMyBuilder has shown us this vetting behaviour up close: trust is decided in the first minutes, on your website and the public record, long before the first conversation.",
      },
      {
        heading: "What a builder's website must prove",
        body: "Three things: that you are real, that you are good, and that you are safe to pay a deposit to. That means real project galleries with locations and dates, the names and faces of the people running the company, clear service areas, your licensing and memberships where they exist, and a frictionless way to start a conversation. Generic stock-photo templates prove none of it and quietly cost you the jobs that never called.",
      },
      {
        heading: "Found when locals search, cited when they ask AI",
        body: "Homeowners increasingly ask Google and AI assistants questions like who is a good builder near me and how to check a builder before hiring. We engineer builder websites to be present in both: local search structure and structured data for Google, and clear, quotable answers for AI assistants. It is the same discipline we apply to our own studio.",
      },
      {
        heading: "Websites that respect how you work",
        body: "You are on the tools, not at a desk. So we build sites you rarely need to touch: project galleries you can update from a phone, enquiry forms that land in your inbox with the details you actually need (job type, location, timeline), and a structure that keeps working while you are on site. No logins you will forget, no maintenance treadmill.",
      },
    ],
    faqs: [
      {
        q: "What should a builder's website include in NZ?",
        a: "Real project photos with locations, the people behind the company, service areas, licensing and association memberships where held, an easy enquiry form that captures job type and timeline, and content that answers the questions homeowners vet builders with. Speed and mobile experience matter: most homeowners research builders on their phone.",
      },
      {
        q: "How much does a builder website cost in NZ?",
        a: "Builder websites follow the national market, which runs from about $1,000 for a simple freelancer-built site to $15,000 or more for custom design, depending on scope. Those are market rates rather than ours. Either way, a builder site usually pays for itself with a single additional job won.",
      },
      {
        q: "Why is AntCrow different for construction websites?",
        a: "Our team runs CheckMyBuilder, which indexes New Zealand building companies against the official Companies Register and public records. We understand exactly how customers vet builders online, and we design your website to answer that vetting before it costs you work.",
      },
    ],
  },
  {
    slug: "trades",
    name: "Trades",
    metaTitle: "Websites for Tradies NZ | Plumbers, Electricians, Roofers & More",
    metaDescription:
      "Websites for NZ tradies: plumbers, electricians, roofers, painters, and landscapers. Fast, honest websites that turn local searches into booked jobs, built by a studio that understands trade businesses.",
    h1: "Websites for tradies",
    intro:
      "AntCrow builds websites for New Zealand trade businesses: plumbers, electricians, roofers, painters, landscapers, and every trade where the next job comes from a local search. A tradie website has one job, turning a local search into a booked job, and everything we build serves that.",
    sections: [
      {
        heading: "Your customers search when something is broken",
        body: "Trade websites are found in urgent moments: a burst pipe, a failed hot water cylinder, a leaking roof. That means your site must load instantly on a phone, show your service area and hours immediately, and make calling or booking a one-tap action. Every second of delay and every unnecessary click loses urgent customers to whoever answers faster.",
      },
      {
        heading: "Trust signals that win the non-urgent jobs too",
        body: "For planned work like renovations and installs, customers compare several trades before contacting one. Real photos of your work, your actual team, clear services, and honest reviews are what separate you. We structure all of it so both Google and AI assistants can read exactly what you do and where, because that is increasingly where the comparison happens.",
      },
      {
        heading: "Run from the van, not the office",
        body: "We keep the moving parts minimal: enquiry forms that capture the job details you need to quote, galleries you can update from your phone, and hosting that does not need babysitting. The site keeps working while you work.",
      },
    ],
    faqs: [
      {
        q: "What makes a good tradie website?",
        a: "Speed on mobile, a visible phone number and service area, real photos of real jobs, clear services, and a simple enquiry form. For urgent trades, one-tap calling matters most; for planned work, proof of quality wins the comparison.",
      },
      {
        q: "How much does a tradie website cost in NZ?",
        a: "In the current New Zealand market, trade websites run from about $1,000 for a simple freelancer build to $10,000 or more for custom work, depending on scope. Those are market figures, not a quote. If the site wins you one decent job a month, it has paid for itself.",
      },
      {
        q: "Can you make my trade business show up on Google and AI search?",
        a: "Yes. We build local search structure and machine-readable data into every trade site so Google Maps, regular search, and AI assistants can all understand what you do and where you work. Visibility work beyond the build is available as an ongoing service.",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    metaTitle: "Websites for Cafes, Restaurants & Bars NZ | Hospitality Web Design",
    metaDescription:
      "Websites for NZ cafes, restaurants, and bars that make people hungry before they arrive: menus that stay current, bookings that just work, and local search presence that fills seats.",
    h1: "Websites for cafes, restaurants and bars",
    intro:
      "AntCrow builds websites for New Zealand hospitality: cafes, restaurants, bars, and venues. A hospitality website has three jobs, make people want to come, answer the practical questions (menu, hours, where), and take the booking, and it must do all three beautifully on a phone.",
    sections: [
      {
        heading: "Appetite is a design problem",
        body: "People choose where to eat with their eyes. Generic templates flatten what makes your place yours; custom design makes the room, the food, and the feeling come through the screen. That is the difference between being scrolled past and being chosen, and it is exactly the kind of design work this studio exists for.",
      },
      {
        heading: "The practical layer has to be effortless",
        body: "Menu, hours, location, bookings. Most hospitality websites bury at least one of them. We make all four instantly reachable, keep menus easy for you to update without a designer, and connect bookings to whatever system you run. Google and AI assistants read the same structured details, which is how you show up when someone asks where is good nearby.",
      },
      {
        heading: "Local search fills quiet nights",
        body: "Hospitality lives and dies on local discovery: searches, maps, and increasingly AI recommendations. We build the structured data and local signals that put you in those answers, and keep the site fast enough that an impatient, hungry person on mobile data never gives up on you.",
      },
    ],
    faqs: [
      {
        q: "What should a restaurant website include?",
        a: "A current menu that is fast to open on a phone, hours and location visible without scrolling, photography that does the food justice, and bookings in as few taps as possible. Behind the scenes, structured data so search engines and AI assistants can quote your details accurately.",
      },
      {
        q: "Can I update the menu myself?",
        a: "Yes. We set menus up so you can change items and prices yourself in minutes, without touching design or code, because a menu that drifts out of date costs trust every single day.",
      },
      {
        q: "How much does a hospitality website cost in NZ?",
        a: "The market runs from about $1,500 for a simple site to $12,000 or more depending on scope, with bookings integrations and photography direction at the upper end. Those are market rates; we scope and price each venue individually.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    metaTitle: "Websites for Law Firms, Accountants & Consultants NZ",
    metaDescription:
      "Websites for NZ professional services: law firms, accountants, consultants, and advisors. Credibility-first design that turns referrals into clients and makes your expertise visible to Google and AI assistants.",
    h1: "Websites for law firms, accountants and consultants",
    intro:
      "AntCrow builds websites for New Zealand professional services: law firms, accountancies, consultancies, and advisory practices. In professional services the website's job is credibility: referrals check you out before calling, and your site either confirms the recommendation or quietly undoes it.",
    sections: [
      {
        heading: "Referrals still check the website",
        body: "Most professional work arrives by word of mouth, but nearly every referral visits your website before making contact. What they are checking is simple: do these people look like they operate at the level I was told? Dated design, stock photography, and vague service descriptions all leak credibility that the referral earned you. Considered design and plain-language expertise keep it.",
      },
      {
        heading: "Expertise that machines can read",
        body: "When someone asks Google or an AI assistant a question in your field, the practices that answer clearly get cited and the rest are invisible. We structure your services and insights so they are quotable: direct answers, clean markup, and structured data that tells machines exactly who you are and what you advise on. Your expertise becomes your search presence.",
      },
      {
        heading: "Built for compliance-conscious firms",
        body: "Professional firms have obligations the average business does not: accuracy in claims, clarity about qualifications, and often accessibility expectations. We write and build conservatively by default, no inflated claims, no invented numbers, and a structure your compliance-minded partners can review without wincing.",
      },
    ],
    faqs: [
      {
        q: "What should a law firm or accounting website include?",
        a: "Clear practice areas in plain language, the people and their credentials, honest fee guidance where possible, and content that answers the questions clients actually ask. Structured data matters too, so search engines and AI assistants can accurately cite who you are and what you do.",
      },
      {
        q: "How much does a professional services website cost in NZ?",
        a: "The New Zealand market runs from about $2,500 to $20,000 for this kind of work, with the upper end reflecting the custom design and content depth that credibility demands. Those are market rates; we scope each practice individually and will say honestly what your budget achieves.",
      },
      {
        q: "Can you help our firm appear in AI search answers?",
        a: "Yes. Making expertise quotable by AI assistants is one of our six disciplines, and our AI Visibility Audit shows where your firm currently appears in AI answers, with a prioritised plan to improve it.",
      },
    ],
  },
  {
    slug: "wineries",
    name: "Wineries & Vineyards",
    metaTitle: "Websites for Wineries NZ | Winery & Vineyard Web Design",
    metaDescription:
      "Websites for New Zealand wineries and vineyards: cellar door bookings, wine club subscriptions, direct-to-consumer sales, trade and export enquiries, and age verification handled properly.",
    h1: "Websites for wineries and vineyards",
    intro:
      "AntCrow builds websites for wineries and vineyards, from Marlborough sauvignon blanc producers to Central Otago pinot noir estates, Hawke's Bay reds, and Waipara. A winery website carries an unusual load. It sells cellar door visits, runs a wine club, ships direct to consumers, answers distributor and export enquiries, and verifies age before any of it happens. We build sites that carry all of that without flattening the character of the place.",
    sections: [
      {
        heading: "The cellar door and the checkout are one website",
        body: "Most winery sites are asked to do two very different jobs at once. A visitor planning a weekend in the region wants opening hours, tasting options, whether to book, whether there is food, and how far it is from town. A returning drinker wants a specific vintage in the cart within a minute. Those journeys need separate front doors and a shared spine of accurate product data. We structure cellar door booking, tasting experiences, and the shop so neither audience has to wade through the other's content to get where they were going.",
      },
      {
        heading: "Wine club and direct-to-consumer economics",
        body: "Direct sales carry a margin that distribution never will, and the wine club is the mechanism that makes it predictable. That means the subscription needs to be genuinely easy to join, pause, skip, and change allocation on, because friction at any of those points shows up later as churn. Release notifications, allocation windows, member-only pricing, and rural freight rules all need to behave correctly rather than being bolted on. We build the club as a first-class part of the site rather than a plugin sitting awkwardly beside it.",
      },
      {
        heading: "Trade, export and distributor enquiries run on a separate track",
        body: "Wine is one of New Zealand's largest export categories, and the people who buy it in volume want completely different material to the person buying two bottles. Importers, sommeliers, and buyers look for technical sheets, analysis figures, vintage and harvest notes, high-resolution label and bottle imagery, allergen and labelling statements, and a named contact who answers trade mail. We give that audience its own clearly signposted area, so the consumer experience stays clean and the trade enquiry does not arrive missing half the information you need to respond.",
      },
      {
        heading: "Age verification and the practical fine print",
        body: "Selling alcohol online in New Zealand sits under the Sale and Supply of Alcohol Act 2012, which covers matters such as remote sales endorsements, what must appear on a sales page, and how alcohol may be promoted. We implement age verification and the required on-page information carefully, and we keep promotional copy conservative by default. What we will not do is tell you your licensing position. Confirm the specifics with your licensing authority or a lawyer, then we build the site to match what they tell you.",
      },
    ],
    faqs: [
      {
        q: "What should a winery website include?",
        a: "Cellar door details and booking, current releases with accurate vintage and tasting notes, a wine club that is easy to join and manage, a shop with sensible freight rules, a trade and export section with technical sheets and imagery, and age verification. Photography that conveys the place matters more here than in almost any other sector.",
      },
      {
        q: "Can the site handle a wine club subscription as well as one-off sales?",
        a: "Yes. Club membership, allocation releases, member pricing, and standard retail orders can run through the same commerce layer, so stock and customer records stay in one place. The club side needs care around pausing, skipping, and address changes, since that is where most subscription churn actually starts.",
      },
      {
        q: "How much does a winery website cost in NZ?",
        a: "In the current New Zealand market, winery sites run from about $4,000 for a presence with cellar door details and a simple shop to $25,000 or more once wine club subscriptions, trade portals, and photography direction are involved. Those are market figures, not a quote. We scope each estate individually.",
      },
    ],
  },
  {
    slug: "horticulture",
    name: "Horticulture & Orchards",
    metaTitle: "Websites for Growers & Orchards NZ | Horticulture Web Design",
    metaDescription:
      "Websites for New Zealand growers, orchards, and packhouses: export credibility, food safety and traceability documentation, supply relationships, and seasonal labour recruitment that actually works.",
    h1: "Websites for growers, orchards and packhouses",
    intro:
      "AntCrow builds websites for horticulture: kiwifruit growers in the Bay of Plenty, pipfruit in Hawke's Bay and Nelson, avocados, berries, and vegetable operations. The Pukekohe growing region alone produces roughly 26 percent of New Zealand's domestic vegetable value. A grower website rarely sells fruit directly. It earns supply relationships, satisfies export and compliance scrutiny, and fills a seasonal workforce, which are three quite different jobs.",
    sections: [
      {
        heading: "Your website is a credibility document for the supply chain",
        body: "Packhouses, marketers, exporters, and retail buyers assess growers on operational substance rather than marketing. What they want is orchard and block detail, hectares under management, varieties and rootstock, harvest windows, cool store and grading capability, and the names of the people who run the operation. Vague copy about quality and passion tells them nothing. We build the page a buyer or packhouse manager can read in three minutes and come away knowing whether you are the right size and shape for what they need.",
      },
      {
        heading: "Compliance and traceability belong in public view",
        body: "Export horticulture runs on documentation: NZGAP or GLOBALG.A.P. certification, food safety programmes, spray diaries, residue testing, and traceability from block to carton. Most growers hold all of this and mention none of it online. Publishing your certifications, audit status, and traceability approach in a structured, current way removes a whole round of back and forth from any new relationship. We set it up so certificates and expiry dates are easy for you to keep accurate, because an out of date accreditation displayed publicly is worse than none at all.",
      },
      {
        heading: "Seasonal labour recruitment is the highest-value page you have",
        body: "Harvest and thinning windows do not move, and a crew that arrives late costs real money. Yet most orchard websites treat recruitment as an afterthought. A working seasonal hiring page states the roles, the dates, pay structure, accommodation and transport arrangements, what to bring, and how to apply from a phone in a few taps. For operations engaging RSE workers, employer obligations and accreditation details need to be presented accurately. We build the recruitment section to be found in search during the exact weeks it matters and to collect applications in a form you can actually process at volume.",
      },
      {
        heading: "Built for a business with seasons",
        body: "Horticulture traffic is not flat. It spikes during harvest, during recruitment, and when a weather event has everyone checking whether you are still supplying. The site needs to hold up when a job listing gets shared widely, and it needs to be updatable from an orchard on patchy rural coverage rather than only from an office. We keep the moving parts few: seasonal content you can switch on and off yourself, forms that email you the details you need, and hosting that does not require attention during the busiest eight weeks of your year.",
      },
    ],
    faqs: [
      {
        q: "What should a grower or packhouse website include?",
        a: "Operational detail such as hectares, varieties, harvest windows, and post-harvest capability, your food safety and traceability accreditations with current status, the people running the business, and a seasonal recruitment section. Export-facing growers should also make trade contact and documentation easy to reach.",
      },
      {
        q: "Can the site handle seasonal worker applications?",
        a: "Yes. Job listings can be published and retired by you as seasons change, with mobile-first application forms that capture the details you need to shortlist. Applications land in your inbox or a shared address so more than one person can work through them during peak weeks.",
      },
      {
        q: "How much does a horticulture website cost in NZ?",
        a: "In the current New Zealand market, grower and packhouse sites run from about $2,500 for a credibility site to $15,000 or more once recruitment systems, compliance documentation, and multi-entity structures are involved. Those are market figures, not a quote.",
      },
    ],
  },
  {
    slug: "engineering",
    name: "Engineering & Manufacturing",
    metaTitle: "Websites for Engineering & Manufacturing NZ | Industrial Web Design",
    metaDescription:
      "Websites for New Zealand engineering and manufacturing firms: capability evidence, machine lists and tolerances, certifications, and RFQ workflows built for procurement audiences, not consumers.",
    h1: "Websites for engineering and manufacturing firms",
    intro:
      "AntCrow builds websites for precision engineering, fabrication, industrial automation, and contract manufacturing businesses. Auckland alone is home to more than 7,000 engineering firms, and almost all of them are being compared on the same few criteria: what you can actually make, to what tolerance, under which certifications, and how quickly you respond to a request for quote. We build sites that answer that as evidence rather than persuasion.",
    sections: [
      {
        heading: "Procurement wants evidence, not adjectives",
        body: "The person shortlisting you is usually an engineer or a procurement specialist with a drawing in hand and a shortlist to shorten. They are not moved by claims of excellence and innovation. They want to know your machine list, envelope sizes, achievable tolerances, materials you routinely work in, batch sizes you are set up for, and whether you have done something comparable before. Publishing that plainly disqualifies the wrong enquiries early, which is a feature rather than a loss, and moves the right ones straight to a technical conversation.",
      },
      {
        heading: "Capability pages are the search strategy",
        body: "Buyers in this sector search in specifics: a process, a material, a machine type, a standard, a component. Broad pages about engineering services rank for nothing and answer nobody. We build a page per genuine capability, written with the correct terminology and structured so both search engines and AI assistants can tell exactly what your shop does. That is also what makes you quotable when someone asks an assistant which firms in New Zealand can machine a particular material to a particular tolerance.",
      },
      {
        heading: "Certifications, standards and the audit question",
        body: "For a lot of work, certification is a gate rather than a differentiator. If you hold ISO 9001, welding qualifications, pressure equipment competencies, or sector-specific approvals, these need to be visible, current, and specific about scope, because a buyer in a regulated supply chain cannot proceed without confirming them. We present accreditations with their scope and status rather than as a row of logos, and we make them straightforward for you to update when certificates are renewed so nothing publicly displayed goes stale.",
      },
      {
        heading: "RFQ workflow and long sales cycles",
        body: "An enquiry in this sector is rarely a one-line message. It is a drawing, a quantity, a material, a delivery date, and often a confidentiality expectation. We build request-for-quote forms that accept file uploads, capture the fields your estimator needs, and route to the right person, so quoting does not begin with three emails asking for missing information. Because the cycle from first visit to first order can run for months, we also make sure your capability content stays useful to someone returning for the third time.",
      },
    ],
    faqs: [
      {
        q: "What should an engineering firm's website include?",
        a: "A real capability list with machines, envelopes, tolerances, and materials, certifications with their scope and status, evidence of comparable work, and a request-for-quote process that accepts drawings and captures what your estimator needs. Clear terminology matters more than styling in this sector.",
      },
      {
        q: "Can customers upload drawings for a quote?",
        a: "Yes. RFQ forms can accept CAD files, PDFs, and step files, capture quantity, material, tolerance, and required date, and route straight to your estimating team. Sensible file size limits and access controls are part of the build.",
      },
      {
        q: "How much does an engineering or manufacturing website cost in NZ?",
        a: "In the current New Zealand market, sites of this kind run from about $3,000 for a capability-focused site to $20,000 or more once detailed technical libraries, RFQ workflows, and product configurators are involved. Those are market figures, not a quote.",
      },
    ],
  },
  {
    slug: "accountants",
    name: "Accountants & Bookkeepers",
    metaTitle: "Websites for Accountants & Bookkeepers NZ | Accounting Web Design",
    metaDescription:
      "Websites for New Zealand accountants and bookkeepers: qualification and advisor credibility, Xero and MYOB integration, secure client document exchange, and clear fee positioning.",
    h1: "Websites for accountants and bookkeepers",
    intro:
      "AntCrow builds websites for accountants, bookkeepers, and advisory practices. Clients hand an accountant more sensitive information than they give almost any other supplier, so the website's first job is to make that feel safe and considered. Its second job is to move the practice beyond compliance work, because the difference between a return-filing relationship and an advisory one is usually decided by what the website says you do.",
    sections: [
      {
        heading: "Credentials do the reassurance work",
        body: "Prospective clients are choosing who sees their financial position. Chartered Accountants Australia and New Zealand membership, CPA qualifications, practising certificates, and the specific sectors a practice works in all belong where they can be seen, attributed to named people rather than the firm in the abstract. Photographs of the actual team, plainly written biographies, and honest statements about the size and shape of the practice reassure far more effectively than stock imagery of handshakes and glass towers. Precision about what you are qualified to advise on is also the safer position.",
      },
      {
        heading: "The software stack is a selling point",
        body: "Most New Zealand businesses arrive already running Xero or MYOB, and the first thing they check is whether you work the way they do. Advisor status, certified app partnerships, and the tools you actually use for payroll, inventory, job costing, and reporting deserve their own content rather than a badge in the footer. Practices that publish how they set up and run a client on a given stack tend to attract clients who already want that setup, which shortens the sales conversation considerably and reduces mismatched enquiries.",
      },
      {
        heading: "Secure document exchange rather than email attachments",
        body: "Bank statements, IRD correspondence, and identity documents move between practice and client constantly, and email attachments remain the default in far too many firms. A client portal or secure upload path built into the website changes that: authenticated access, sensible retention, an audit trail, and a single place clients return to instead of searching their inbox. It also removes a genuine irritation from onboarding. We build these with access control and data handling considered from the start rather than added after a scare.",
      },
      {
        heading: "Compliance content is the search engine",
        body: "Business owners search for provisional tax dates, GST filing frequency, FBT obligations, trust reporting requirements, and what they can claim. Practices that answer those questions clearly and keep the answers current become the source that both Google and AI assistants cite, which is a steady flow of qualified enquiries that costs nothing per click. We structure this content so it is quotable, dated, and easy for you to review each year, and we keep it descriptive rather than presented as advice for any particular taxpayer.",
      },
    ],
    faqs: [
      {
        q: "What should an accounting practice's website include?",
        a: "Named people with their qualifications and practising status, the software stack you work in, clearly described services separated into compliance and advisory, some indication of fee structure, a secure way to send documents, and content answering the compliance questions clients actually search for.",
      },
      {
        q: "Should we publish our fees?",
        a: "Publishing fixed-fee packages or at least a starting range filters out mismatched enquiries and tends to increase the quality of the ones that arrive. Practices that prefer not to publish figures can still set expectations by describing what determines a fee, which achieves much of the same effect.",
      },
      {
        q: "How much does an accounting website cost in NZ?",
        a: "In the current New Zealand market, accounting and bookkeeping sites run from about $2,500 to $15,000 depending on scope, with client portals and secure document exchange at the upper end. Those are market figures, not a quote.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    metaTitle: "Websites for Real Estate Agents NZ | Property Web Design",
    metaDescription:
      "Websites for New Zealand real estate agents and agencies: listing presentation, appraisal capture, suburb market content, and fast mobile performance with REA compliance considered.",
    h1: "Websites for real estate agents and agencies",
    intro:
      "AntCrow builds websites for real estate agents and agencies. Almost every property search now begins on a portal, so an agency website earns its keep somewhere else: winning the listing. Vendors choosing between agents look at how your current listings are presented, what you know about their street, and whether you look like the person who will get the result. We build sites aimed squarely at that decision.",
    sections: [
      {
        heading: "The website's real job is winning the listing",
        body: "Buyers find properties on portals, and no agency site is going to change that. Vendors, however, run a genuine comparison before signing an agency agreement, and they run it on your website. What they are assessing is presentation standard, whether your recent sales resemble their property, how you talk about strategy and marketing spend, and whether you seem to understand their suburb. An agency site built for buyer traffic misses this entirely. Built for vendors, it becomes the strongest piece of pitch material you own.",
      },
      {
        heading: "Agent personal brands inside an agency framework",
        body: "Real estate is a business of individuals operating under a brand, which pulls in two directions. Agents want a profile that reflects their own reputation and results, and agencies need consistency and control. We build agent profiles as proper pages with their own listings, sold history, testimonials where genuine, and a direct contact path, while keeping presentation within a single design system. That way an agent can share a page that feels like theirs, and the agency does not end up policing thirty different layouts.",
      },
      {
        heading: "Suburb data and market reports as durable content",
        body: "Vendors and buyers search for what homes are selling for in a specific suburb far more often than they search for an agency by name. Regular suburb reports, sales summaries, and clear commentary on local market conditions are the content that gets found, and increasingly the content that AI assistants quote when someone asks about a particular area. It also demonstrates the local knowledge that the vendor pitch relies on. We structure it so publishing each round takes minutes rather than an afternoon.",
      },
      {
        heading: "Compliance sits under everything you publish",
        body: "Real estate agency work in New Zealand is governed by the Real Estate Agents Act 2008 and overseen by the Real Estate Authority, with professional conduct and client care rules covering how agents advertise, describe properties, and present sales results. Marketing claims about performance and market share attract scrutiny, so we write conservatively and avoid figures that cannot be substantiated. We are not your compliance adviser. Confirm anything specific with the Real Estate Authority or a lawyer, and we will build to what they confirm.",
      },
    ],
    faqs: [
      {
        q: "Do agencies still need a website when portals dominate search?",
        a: "Yes, but for a different reason than most agencies assume. Buyers come from portals. Vendors comparing agents come to your website, and that comparison decides who gets the listing. A site designed around the vendor decision earns far more than one designed to compete with portals for buyer traffic.",
      },
      {
        q: "Can listings feed in automatically?",
        a: "Usually yes. Most agency CRM and listing systems provide a feed or API that can populate your website, so listings and status changes stay current without double entry. What is possible depends on the specific system, so it is worth checking before scoping the build.",
      },
      {
        q: "How much does a real estate website cost in NZ?",
        a: "In the current New Zealand market, agency sites run from about $3,000 for an individual agent presence to $25,000 or more for multi-office agencies with listing feeds, agent profiles, and suburb reporting. Those are market figures, not a quote.",
      },
    ],
  },
  {
    slug: "health-clinics",
    name: "Health & Medical Practices",
    metaTitle: "Websites for Clinics & Health Practices NZ | Medical Web Design",
    metaDescription:
      "Websites for New Zealand dentists, physiotherapists, GPs, and allied health practices: online booking, practitioner credentials, accessible design, and careful handling of patient privacy.",
    h1: "Websites for clinics and health practices",
    intro:
      "AntCrow builds websites for dental practices, physiotherapy and allied health clinics, general practices, and specialists. In healthcare, the single largest improvement most practices can make is letting patients book online at the moment they decide to act. Everything else the site does, credentials, treatment information, accessibility, and privacy, exists to make that booking feel like a safe decision.",
    sections: [
      {
        heading: "Online booking is the conversion lever that matters",
        body: "Patients decide to seek care at inconvenient hours, often in discomfort, and frequently while reluctant to phone anyone. A practice that only accepts bookings by telephone during business hours loses a meaningful share of those decisions to whichever nearby clinic accepts them at ten at night. We integrate booking with the practice management system you already run rather than adding a parallel diary, and we place the booking action where a patient in a hurry will find it on the first screen without hunting through a menu.",
      },
      {
        heading: "Credentials, registration and scope stated precisely",
        body: "Patients and referrers both check who is actually treating them. Practitioner pages should carry registration with the relevant responsible authority, qualifications, areas of practice, years in the field, and languages spoken, stated precisely rather than inflated. ACC provider status is worth being explicit about, since a large number of New Zealand patients specifically search for whether a clinic accepts ACC referrals and what they will pay. Precision here is also the safer position: describing scope accurately avoids implying capabilities the practice does not hold.",
      },
      {
        heading: "Accessibility is a clinical audience requirement",
        body: "A health website's audience disproportionately includes people with impaired vision, limited dexterity, cognitive fatigue, or a device in one hand while managing something else. Accessibility here is not a checkbox exercise. Proper colour contrast, keyboard navigation, sensible text sizing, meaningful labels on booking forms, and treatment information written at a reading level people can absorb while unwell all directly affect whether someone completes a booking. We build to recognised accessibility standards by default and treat readability of clinical content as part of the design work.",
      },
      {
        heading: "Privacy and advertising rules shape what the site can say",
        body: "Health information in New Zealand is governed by the Health Information Privacy Code 2020, which affects how enquiry forms collect data, where submissions are stored, and what analytics may observe. Separately, advertising of health services and therapeutic products sits under Advertising Standards Authority codes and the Medicines Act 1981, which restrict claims about outcomes. We build forms and tracking conservatively and keep treatment copy free of outcome promises. For your specific obligations, take advice from your responsible authority, your professional indemnity insurer, or a lawyer.",
      },
    ],
    faqs: [
      {
        q: "What should a clinic website include?",
        a: "Online booking that connects to your practice management system, practitioner profiles with registration and qualifications, clearly written treatment information, fees or ACC status where applicable, location and parking, and accessible design. Contact forms need to handle health information carefully.",
      },
      {
        q: "Can patients book appointments directly through the website?",
        a: "In most cases yes. Common practice management and booking systems used by New Zealand clinics offer integration, so patients book against your live availability rather than sending a request someone has to transcribe. Which options are available depends on the system your practice runs.",
      },
      {
        q: "How much does a medical or clinic website cost in NZ?",
        a: "In the current New Zealand market, clinic sites run from about $2,500 for a single practitioner to $18,000 or more for multi-site practices with booking integration, multiple practitioner profiles, and extensive treatment content. Those are market figures, not a quote.",
      },
    ],
  },
  {
    slug: "tourism",
    name: "Tourism & Experiences",
    metaTitle: "Websites for Tourism Operators NZ | Lodge & Activity Web Design",
    metaDescription:
      "Websites for New Zealand tourism operators, lodges, tours, and adventure activities: booking integration, international audiences, multi-currency, and fast performance on poor connections.",
    h1: "Websites for tourism operators and experiences",
    intro:
      "AntCrow builds websites for tourism operators, lodges, tour companies, and adventure activities. A tourism website is sold to someone who has never been where you are, often from a different time zone, currency, and language, and frequently on a phone with an unreliable connection. It has to make an experience feel real, answer the practical questions, and take the booking, all before their attention moves on.",
    sections: [
      {
        heading: "You are selling an experience nobody can inspect first",
        body: "A traveller cannot walk through your lodge or test your kayak before paying. Everything rests on how well the site conveys what the day actually feels like, which makes photography and video direction a commercial decision rather than a cosmetic one. Alongside the imagery, travellers want the unglamorous specifics: duration, physical requirements, minimum ages, what to wear, what is included, weather policy, and where to meet. Sites that carry both the emotional and the practical convert; sites with only beautiful pictures collect enquiries that never become bookings.",
      },
      {
        heading: "Booking, currencies and time zones",
        body: "Bookings arrive at every hour from people who will never phone you, so the booking engine needs to be genuinely part of the site rather than a jarring handoff to a differently styled page. Availability should be live, pricing should be viewable in the visitor's currency, and confirmations need to make sense to someone reading them from Europe or North America. Most New Zealand operators run a system such as Rezdy, Checkfront, Bookeo, or a property management system, and we integrate with what you already use rather than asking you to change it.",
      },
      {
        heading: "Speed matters more here than almost anywhere",
        body: "Your customers are frequently in exactly the places with the worst connectivity: on the road, in a remote valley, on hotel wifi, or roaming on a foreign plan and watching their data. A heavy site full of uncompressed hero video simply does not load for them, and they book something else. We build tourism sites to load quickly on poor connections, with imagery served at appropriate sizes and the booking path working reliably even when everything else is slow. Mobile is not a secondary layout in this sector, it is the primary one.",
      },
      {
        heading: "Trust signals for someone booking from the other side of the world",
        body: "A visitor paying a deposit to an operator they have never heard of, in a country they have never visited, is taking a leap. Qualmark accreditation, safety certifications, operating history, insurance and cancellation terms, and genuine reviews pulled from the platforms travellers already use all reduce that risk. Seasonality should be explicit too, since nothing damages trust faster than a booking made for a month you do not operate. Presenting all of this plainly does more for conversion than another paragraph of adjectives.",
      },
    ],
    faqs: [
      {
        q: "What should a tourism operator's website include?",
        a: "Strong photography and video of the actual experience, live booking with availability, practical details such as duration, fitness requirements, inclusions and weather policy, multi-currency pricing, accreditations such as Qualmark, cancellation terms, and genuine reviews. All of it needs to work fast on a phone.",
      },
      {
        q: "Can my existing booking system be integrated?",
        a: "Usually yes. Systems commonly used by New Zealand operators offer integration or embeddable booking flows, so availability and pricing stay in one place. We aim to make the booking step feel like part of your site rather than a handoff to something that looks unrelated.",
      },
      {
        q: "How much does a tourism website cost in NZ?",
        a: "In the current New Zealand market, tourism and experience sites run from about $3,000 for a single activity operator to $25,000 or more for lodges and multi-experience operators with booking integration, multi-currency, and photography direction. Those are market figures, not a quote.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Freight & Logistics",
    metaTitle: "Websites for Freight & Logistics NZ | Courier & 3PL Web Design",
    metaDescription:
      "Websites for New Zealand couriers, freight forwarders, 3PL providers, and transport operators: tracking, quote calculators, service area clarity, and credibility for B2B procurement.",
    h1: "Websites for freight and logistics operators",
    intro:
      "AntCrow builds websites for couriers, freight forwarders, third party logistics providers, and transport operators. Logistics websites serve two audiences with almost nothing in common. Existing customers arrive wanting a tracking number resolved or a quote in under a minute, and prospective clients arrive running a procurement process that may take months. A site that serves only one of them is leaving work on the table.",
    sections: [
      {
        heading: "Tracking and quoting are the daily workload",
        body: "The overwhelming majority of visits to a freight website are people wanting to know where something is or what a movement will cost. Both should be resolved on the first screen without a login, a menu hunt, or a phone call. A tracking field that works, and a quote calculator that handles the dimensions, weight, origin, destination, and service level of your actual pricing model, remove a substantial volume of routine calls from your operations team. Every enquiry the site answers is one your dispatchers do not have to.",
      },
      {
        heading: "Service coverage stated without ambiguity",
        body: "Nothing wastes more time in this sector than an enquiry from outside your network. Rural delivery limits, North and South Island coverage, oversize and dangerous goods handling, cold chain capability, transit times between main centres, and international lanes should all be stated plainly rather than implied by a map with no detail. Being specific about what you do not carry is as valuable as listing what you do. It filters enquiries before they reach a person, and it prevents the quotes that were never going to convert.",
      },
      {
        heading: "Integration with the platforms your customers already run",
        body: "E-commerce clients rarely choose a carrier in isolation. They choose one that fits the shipping platform they already run, which in New Zealand usually means Starshipit or GoSweetSpot, connected to Shopify, WooCommerce, or a similar system. If you are available through those platforms, say so clearly and explain what connecting looks like, because that is a genuine decision factor for a merchant comparing carriers. We also build the technical documentation and API details in a form a developer can act on without needing to open a support ticket first.",
      },
      {
        heading: "Procurement scrutiny and long decision cycles",
        body: "A contract logistics decision involves finance, operations, and often risk, and it can run for months. That audience checks fleet composition, warehouse locations and capacity, transport operator licensing, insurance and liability limits, dangerous goods approvals, health and safety record, and whether you have handled comparable volume. Publishing that material openly moves you through the shortlist stage faster and reduces the tender documentation you complete manually. We build a section pitched at that reader rather than expecting them to infer capability from a courier marketing page.",
      },
    ],
    faqs: [
      {
        q: "What should a freight or logistics website include?",
        a: "Tracking on the first screen, a quote path that reflects your real pricing model, unambiguous service coverage and transit times, integration details for platforms your customers use, and a procurement-facing section covering fleet, facilities, licensing, insurance, and compliance.",
      },
      {
        q: "Can you integrate tracking and quoting with our systems?",
        a: "Where your transport management system exposes an API or feed, yes. Tracking lookups, rate calculation, and booking can all connect to the system you already run rather than duplicating data. What is achievable depends on the specific platform, so it is worth confirming during scoping.",
      },
      {
        q: "How much does a logistics website cost in NZ?",
        a: "In the current New Zealand market, freight and logistics sites run from about $3,000 for a transport operator presence to $30,000 or more once tracking integration, rate calculators, and customer portals are involved. Those are market figures, not a quote.",
      },
    ],
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);
