import { faqs, services, process, auditOffer } from "./data";
import { site } from "./site.config";

/**
 * Ask the Crow: the concierge's knowledge and matching logic.
 *
 * Works in two modes:
 *  - Local (default): answers come from this curated knowledge base.
 *    Zero backend, zero cost, honest microcopy ("the studio's own notes").
 *  - Live LLM: set NEXT_PUBLIC_CONCIERGE_URL to an endpoint (for example a
 *    Cloudflare Worker proxying the Claude API) and the UI will POST
 *    { message, history } and expect { reply }. The local base then acts
 *    as the offline fallback.
 */

export type KnowledgeEntry = {
  /** Display question (also used for suggestion chips when `suggest`). */
  q: string;
  /** Extra match words beyond the question text itself. */
  keywords?: string[];
  a: string;
  suggest?: boolean;
};

const servicesList = services.map((s) => s.title).join(", ");
const processList = process.map((p) => `${p.title.toLowerCase()}`).join(", ");

export const knowledge: KnowledgeEntry[] = [
  // Curated conversions of the public FAQ
  ...faqs.map((f) => ({ q: f.q, a: f.a })),

  {
    q: "What services do you offer?",
    keywords: ["services", "offer", "do", "capabilities", "help", "everything"],
    a: `Six disciplines under one roof: ${servicesList}. Most projects combine a few of them. Tell us what you are trying to achieve and we will tell you what it takes.`,
    suggest: true,
  },
  {
    q: "What is the AI Visibility Audit?",
    keywords: ["audit", "visibility", "report", "geo"],
    a: `${auditOffer.blurb} ${auditOffer.turnaround}.`,
    suggest: true,
  },
  {
    q: "How do I start a project?",
    keywords: ["start", "begin", "contact", "book", "call", "enquiry", "quote", "hire"],
    a: "Use the form on the contact page and tell us what you are building; we reply within two business days, usually much sooner. Prefer email? Every page has an Email us link that opens your mail app.",
    suggest: true,
  },
  {
    q: "Where are you based?",
    keywords: ["based", "located", "location", "country", "city", "zealand", "australia", "remote", "timezone"],
    a: "AntCrow serves clients worldwide, with deep coverage of New Zealand and Australia. Projects run remotely with regular video check-ins in your time zone, wherever you are.",
  },
  {
    q: "What is your process?",
    keywords: ["process", "method", "steps", "work", "how", "approach", "antcrow method"],
    a: `We call it the AntCrow Method: ${processList}. Many disciplined steps, one sharp eye on the whole. The ants build, the crow watches.`,
  },
  {
    q: "Who or what are you?",
    keywords: ["who", "you", "crow", "bird", "name", "ant", "mascot", "real", "human"],
    a: "I am the studio crow. I sit on the wordmark, keep an eye on the ants, and answer questions from the studio's own notes. For anything I cannot answer, a human reads every message sent through the contact page.",
  },
  {
    q: "Do you build e-commerce?",
    keywords: ["ecommerce", "e-commerce", "shop", "store", "shopify", "commerce", "sell", "products"],
    a: "Yes. We design and build e-commerce from brand to checkout, engineered for speed and findability. Commerce work is part of our Development discipline.",
  },
  {
    q: "What technology do you use?",
    keywords: ["technology", "tech", "stack", "nextjs", "react", "cms", "framework", "wordpress"],
    a: "Hand-built front-ends on Next.js and React, headless CMS where content changes often, and motion crafted per project. No page builders, no templates. This site is our own stack in production.",
  },
  {
    q: "What is the Lab?",
    keywords: ["lab", "playground", "experiments", "exhibits"],
    a: "The Lab is our public playground: live interaction experiments from this site, including the ants and crow from the landing screen. Everything there is production code you can poke.",
  },
  {
    q: "Where do you work? Which cities do you serve?",
    keywords: ["auckland", "wellington", "christchurch", "sydney", "melbourne", "city", "cities", "serve", "area", "areas"],
    a: "We serve clients worldwide, with dedicated coverage of Auckland, Wellington, Christchurch, and Sydney (see the Locations pages), and projects everywhere else run remotely with video sessions in your hours.",
  },
  {
    q: "Do you have a website cost calculator?",
    keywords: ["calculator", "estimate", "estimator", "tool", "budget"],
    a: "Yes, and it is free with no email required. The calculator at /tools/website-cost-calculator shows what the wider New Zealand market charges for a project like yours, from about $1,000 upward. Those are market figures rather than our prices: we scope and quote every project individually.",
  },
  {
    q: "Do you have a website health check?",
    keywords: ["health", "check", "audit", "score", "grade", "test", "checkup"],
    a: "Yes, free and two minutes long. The website health check at /tools/website-health-check scores your site out of 100 across speed, trust, search visibility, and AI readiness, and gives you a prioritised fix list. No email required.",
  },
  {
    q: "Which industries do you build for?",
    keywords: ["industry", "industries", "builders", "construction", "tradies", "trades", "cafe", "restaurant", "hospitality", "law", "lawyer", "accountant", "consultant"],
    a: "We have dedicated experience with builders and construction (our team also runs CheckMyBuilder), tradies, hospitality, and professional services like law and accounting firms. Other industries are welcome too: the disciplines transfer.",
  },
];

export const suggestions = knowledge
  .filter((k) => k.suggest)
  .map((k) => k.q)
  .concat(["What is AEO (answer engine optimisation)?"]);

const STOP = new Set([
  "the", "a", "an", "is", "are", "was", "do", "does", "did", "you", "your",
  "i", "we", "our", "my", "me", "it", "of", "to", "in", "on", "for", "and",
  "or", "what", "whats", "how", "much", "can", "with", "about", "tell",
]);

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

/**
 * Score every entry against the visitor's message; return the best answer
 * or null when nothing clears the confidence bar.
 */
export function localAnswer(message: string): string | null {
  const query = tokens(message);
  if (query.length === 0) return null;

  let best: { score: number; a: string } | null = null;
  for (const entry of knowledge) {
    const bagArr = tokens(entry.q).concat(entry.keywords ?? []);
    const bag = new Set(bagArr);
    let score = 0;
    for (const t of query) {
      if (bag.has(t)) score += 2;
      else if (bagArr.some((b) => b.startsWith(t) || t.startsWith(b))) score += 1;
    }
    if (!best || score > best.score) best = { score, a: entry.a };
  }
  return best && best.score >= 2 ? best.a : null;
}

export const fallbackAnswer =
  "That one is beyond my notes. Send it through the contact page and a human will reply within two business days, or try asking about our services, process, pricing, or the AI Visibility Audit.";
