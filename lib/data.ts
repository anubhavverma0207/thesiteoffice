/**
 * Demo content. Swap these arrays for a CMS / database query later;
 * the page components only depend on these shapes.
 */

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "aera-skincare",
    title: "Aera",
    client: "Aera Skincare",
    category: "Brand · E-commerce",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    accent: "#cdbfa7",
  },
  {
    slug: "hale-painting",
    title: "Hale",
    client: "Hale Painting Co.",
    category: "Painting · Brand & Web",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
    accent: "#9fae9a",
  },
  {
    slug: "atlas-coffee",
    title: "Atlas",
    client: "Atlas Coffee Roasters",
    category: "Brand · Commerce",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    accent: "#8c6f57",
  },
  {
    slug: "redford-brickwork",
    title: "Redford",
    client: "Redford Brickwork",
    category: "Masonry · Web",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?auto=format&fit=crop&w=1600&q=80",
    accent: "#b07a5b",
  },
  {
    slug: "studio-flora",
    title: "Flora",
    client: "Studio Flora",
    category: "Art Direction · Web",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    accent: "#b6a6c9",
  },
  {
    slug: "harbor-tech",
    title: "Harbor",
    client: "Harbor Technologies",
    category: "SaaS · Product",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    accent: "#9aa8a0",
  },
];

export type Service = {
  no: string;
  title: string;
  blurb: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    no: "01",
    title: "Brand & Identity",
    blurb:
      "We craft visual systems with intent: typography, motion, and art direction that make a brand unmistakable.",
    deliverables: ["Visual identity", "Logo & wordmark", "Art direction", "Brand guidelines"],
  },
  {
    no: "02",
    title: "Web Design",
    blurb:
      "Editorial, immersive interfaces designed pixel-by-pixel for desire, not templates, never generic.",
    deliverables: ["UX & wireframes", "UI design", "Design systems", "Prototyping"],
  },
  {
    no: "03",
    title: "Development",
    blurb:
      "Hand-built front-ends and resilient back-ends. Fast, accessible, and engineered to scale with you.",
    deliverables: ["Next.js / React", "Headless CMS", "E-commerce", "Performance"],
  },
  {
    no: "04",
    title: "Motion & 3D",
    blurb:
      "Interaction is the product. We choreograph scroll, transitions, and 3D to make sites feel alive.",
    deliverables: ["Interaction design", "WebGL / 3D", "Micro-interactions", "Creative dev"],
  },
  {
    no: "05",
    title: "SEO & AI Search",
    blurb:
      "Your website has two audiences now: humans, who feel, and AI, which cites. We engineer visibility for Google and for the AI assistants your customers ask instead.",
    deliverables: [
      "Technical SEO",
      "Structured data",
      "Answer engine optimisation (AEO)",
      "AI citation monitoring",
      "Analytics & reporting",
    ],
  },
  {
    no: "06",
    title: "AI Concierges & Agents",
    blurb:
      "A concierge, not a chatbot. We design and build assistants trained on your business that answer, book, and act, in your brand's voice.",
    deliverables: [
      "Custom AI concierges",
      "Knowledge base design",
      "Guardrails & tone of voice",
      "Managed hosting",
    ],
  },
];

// Entry offer shown on the Services page. Presented as a service for now;
// add a `price` line back here when you are ready to publish one.
export const auditOffer = {
  name: "AI Visibility Audit",
  turnaround: "Delivered in 10 working days",
  blurb:
    "A focused report on how visible your business is where customers now ask: ChatGPT, Perplexity, Gemini, and Google's AI Overviews. You get an evidence pack, a competitor comparison, and a prioritised fix list your team (or ours) can act on.",
  includes: [
    "AI citation presence across the major assistants",
    "Entity recognition: how AI understands your brand",
    "Content structure: what is quotable, what is invisible",
    "Trust signals (EEAT) and where they leak",
    "Technical readiness: schema, speed, machine readability",
    "Head-to-head against three competitors",
  ],
} as const;

export type Step = { no: string; title: string; text: string };

export const process: Step[] = [
  {
    no: "01",
    title: "Discover",
    text: "We immerse ourselves in your world (audience, market, ambition) to find the angle no one else sees.",
  },
  {
    no: "02",
    title: "Design",
    text: "Concepts become living interfaces. We design in high fidelity and motion from day one.",
  },
  {
    no: "03",
    title: "Build",
    text: "Engineering and design move together. Clean code, robust architecture, no compromises.",
  },
  {
    no: "04",
    title: "Launch & Evolve",
    text: "We ship, measure, and keep refining. A website is never finished; it grows with you.",
  },
];

// Add real, verifiable numbers here when you have them, then re-introduce a
// stats section. Left empty on purpose so nothing inaccurate is published.
export const stats: { value: string; label: string }[] = [];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  project: string;
};

// Left empty on purpose: only real client quotes, used with permission,
// belong here. The homepage section renders nothing while this is empty.
// Shape when you add one:
//   { quote: "…", author: "Full Name", role: "Owner", project: "Company" }
export const testimonials: Testimonial[] = [];

export type Faq = { q: string; a: string };

// Written as direct answers on purpose: this is what search engines and
// AI assistants quote. Keep answers short, factual, and self-contained.
export const faqs: Faq[] = [
  {
    q: "What does AntCrow do?",
    a: "AntCrow is a web design and development studio. We handle the full journey under one roof: brand identity, UX and UI design, custom development, e-commerce, SEO, and ongoing support after launch.",
  },
  {
    q: "Do you handle SEO and AI search optimisation?",
    a: "Yes. Every site ships with technical SEO built in: fast loading, semantic markup, structured data, sitemaps, and per-page metadata. We also optimise for answer engines (AEO), so AI assistants like ChatGPT, Claude, Perplexity, and Google's AI Overviews can find, understand, and cite your business.",
  },
  {
    q: "How long does a website take to build?",
    a: "Most projects take 4 to 8 weeks from kickoff to launch. A focused brand-plus-website project sits at the shorter end; larger e-commerce or product builds run longer. We agree on a timeline before any work starts.",
  },
  {
    q: "How much does a website cost?",
    a: "Across the New Zealand market in 2026, professionally built websites run from about $1,000 for simple freelancer work to $15,000 or more for custom design, with e-commerce from around $5,000. Those are market rates, not ours: AntCrow scopes and prices every project individually. Tell us your budget and goals, and we will tell you honestly what that budget can achieve.",
  },
  {
    q: "Do you work with clients worldwide?",
    a: "Yes. AntCrow serves clients worldwide, with deep coverage of New Zealand and Australia. All projects run remotely with regular video check-ins in your time zone, wherever you are.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. We start with an audit of your current site to see what is working and what is not, then rebuild from a solid foundation rather than patching over problems.",
  },
  {
    q: "What happens after launch?",
    a: "We stay on. Hosting setup, analytics, performance monitoring, content updates, and continuous improvement are all part of how we work. A website is never finished; it grows with your business.",
  },
  {
    q: "Why do I need a studio when AI can build a website?",
    a: "AI tools generate a website. A studio makes yours the one people remember and the one AI engines cite. We use AI where it is strong and craft where it matters: positioning, art direction, motion, structured content, and engineering that generators cannot reason about. And we ship exactly what was designed, no shortcuts.",
  },
  {
    q: "What is AEO (answer engine optimisation)?",
    a: "AEO is making your website quotable by AI assistants like ChatGPT, Perplexity, and Google's AI Overviews. In practice it means direct answers near the top of each page, clean structured data, machine-readable HTML, and content AI engines can safely cite. It matters because AI referrals convert several times better than classic search traffic.",
  },
  {
    q: "What is an AI concierge?",
    a: "An assistant on your website trained on your business: your services, pricing logic, availability, and voice. Unlike a scripted chatbot, a concierge understands context, answers real questions, and hands over to a human the moment it should. We design, build, and manage them for clients.",
  },
];
