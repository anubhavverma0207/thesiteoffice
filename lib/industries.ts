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
        a: "Builder websites follow the national market: professionally built sites typically run $3,000 to $15,000 depending on scope, with custom design at the upper part of that range. A builder site usually pays for itself with a single additional job won.",
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
        a: "Professionally built trade websites typically run $3,000 to $10,000 in the current NZ market depending on scope. If it wins you one decent job a month, it has paid for itself.",
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
        a: "Typically $3,000 to $12,000 in the current market depending on scope, with bookings integrations and photography direction at the upper end. We scope each venue individually.",
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
        a: "Typically $5,000 to $20,000 in the current NZ market, reflecting the custom design and content depth credibility demands. We scope each practice individually and will say honestly what your budget achieves.",
      },
      {
        q: "Can you help our firm appear in AI search answers?",
        a: "Yes. Making expertise quotable by AI assistants is one of our six disciplines, and our AI Visibility Audit shows where your firm currently appears in AI answers, with a prioritised plan to improve it.",
      },
    ],
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);
