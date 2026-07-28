import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Will AI Recommend Your Business? An NZ Guide to AI Search Visibility",
  description:
    "New Zealand customers now ask ChatGPT, Perplexity, and Google's AI Overviews who to buy from. This guide explains how AI assistants choose which NZ businesses to recommend, and how to become one of them.",
  alternates: {
    canonical: "/guides/ai-search-visibility-nz/",
    languages: {
      "en-NZ": "/guides/ai-search-visibility-nz/",
      "x-default": "/guides/ai-search-visibility-nz/",
    },
  },
};

const aiFaqs = [
  {
    q: "What is AI search visibility?",
    a: "AI search visibility is whether AI assistants like ChatGPT, Perplexity, Gemini, and Google's AI Overviews mention or recommend your business when customers ask questions you should win: best options near me, who to hire, what something costs. It sits alongside classic SEO and is measured by asking the assistants and tracking whether and how you appear.",
  },
  {
    q: "How do AI assistants decide which NZ businesses to recommend?",
    a: "They lean on sources they trust: established directories and review platforms, well-structured business websites they can read, consistent business information across the web, and recent, credible content. A business that is machine-readable, well-reviewed, and consistently described everywhere is far more likely to be named than one with a beautiful but unreadable website.",
  },
  {
    q: "Does my website affect AI recommendations?",
    a: "Strongly. AI crawlers read raw HTML, so content that only appears after JavaScript runs is invisible to most of them. Direct answers near the top of a page, structured data, and consistent business details all raise the odds of being cited. Fast, static, machine-readable pages are the technical foundation.",
  },
  {
    q: "Is AI search traffic actually worth anything?",
    a: "Yes, and disproportionately so. Industry measurements through 2025 and 2026 consistently found visitors arriving from AI assistants convert at several times the rate of traditional search visitors, because they arrive pre-qualified: the assistant already matched them to you. Volumes are lower than Google today, but the visitors are the ones who buy.",
  },
  {
    q: "How do I find out where my business stands?",
    a: "Ask the assistants your customers use the questions they would ask, and note who gets named. For a systematic version, our AI Visibility Audit measures your presence across the major assistants, compares you with three competitors, and gives you a prioritised fix list.",
  },
];

const steps = [
  {
    no: "01",
    title: "Be readable by machines",
    text: "AI crawlers read raw HTML and mostly do not run JavaScript. Static, fast, semantic pages with structured data are the entry ticket. If your content only exists after scripts run, you are invisible to most assistants.",
  },
  {
    no: "02",
    title: "Answer questions directly",
    text: "AI engines quote pages that answer plainly, near the top, with specifics. Pages that bury the answer under storytelling get skipped. Direct answers, honest prices and ranges, and clear FAQs are what get cited.",
  },
  {
    no: "03",
    title: "Be consistent everywhere",
    text: "Assistants cross-check your name, location, and details across directories, maps, reviews, and your own site. Inconsistency reads as risk. One identical business record everywhere reads as trustworthy.",
  },
  {
    no: "04",
    title: "Earn third-party mentions",
    text: "Most AI recommendations lean on independent sources: directories, review platforms, and published lists. Being credibly present where AI already looks matters as much as your own website.",
  },
  {
    no: "05",
    title: "Keep it fresh",
    text: "Stale pages lose AI visibility measurably. Updated dates, current-year content, and periodic refreshes keep you quotable. Set a quarterly review rhythm and hold it.",
  },
];

export default function AiVisibilityGuide() {
  return (
    <>
      <article className="container-x pt-36 pb-24 md:pt-48">
        <header className="max-w-3xl">
          <span className="label text-ash">(Guide · Updated July 2026)</span>
          <AnimatedHeading
            as="h1"
            text="Will AI recommend your _business?_"
            className="mt-6 font-serif text-display-md text-balance"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed">
              When a New Zealand customer asks ChatGPT or Google&apos;s AI
              answers who to use, <strong>the assistant names a handful of
              businesses and everyone else is invisible.</strong> Which
              side of that line you land on is not luck: AI assistants
              choose based on how readable, consistent, and credibly
              recommended your business is across the web. All of it can be
              engineered. That is what this guide covers.
            </p>
          </Reveal>
        </header>

        {/* The five levers */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl md:text-4xl">
            The five things AI assistants reward
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.05}>
                <div className="flex h-full flex-col gap-3 border-t border-line pt-5">
                  <span className="label text-ash">{s.no}</span>
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-ash">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="mt-16 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl">
              Why this matters more in New Zealand
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ash">
              New Zealand markets are compact: for most local services and
              niches, an AI assistant recommends only a few names, and the
              pool of businesses doing this work properly is still small.
              That is the opportunity. Early movers in a compact market can
              become the default answer in a way that is much harder to
              achieve in larger countries, and much harder for competitors
              to displace later.
            </p>
          </section>
        </Reveal>

        {/* Audit CTA */}
        <Reveal>
          <section
            data-cursor-theme="dark"
            className="mt-16 rounded-2xl bg-ink px-8 py-12 text-bone md:px-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-3.5 py-1.5 label text-bone/80">
              <span className="h-1.5 w-1.5 animate-beacon rounded-full bg-flag" />
              Where do you stand?
            </span>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl">
              The AI Visibility Audit
            </h2>
            <p className="mt-4 max-w-xl text-bone/70">
              We measure how the major AI assistants currently see your
              business, compare you head-to-head with three competitors,
              and hand you a prioritised fix list. Delivered in 10 working
              days.
            </p>
            <Link
              href="/contact"
              data-cursor="Book"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3.5 text-sm text-ink transition-colors hover:bg-bone/85"
            >
              Book an audit <span aria-hidden>→</span>
            </Link>
          </section>
        </Reveal>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl md:text-4xl">
            AI search visibility, explained
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQ items={aiFaqs} />
          </div>
        </section>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline:
                "Will AI Recommend Your Business? An NZ Guide to AI Search Visibility",
              datePublished: "2026-07-28",
              dateModified: "2026-07-28",
              author: { "@id": `${site.url}/#organization` },
              publisher: { "@id": `${site.url}/#organization` },
              mainEntityOfPage: `${site.url}/guides/ai-search-visibility-nz/`,
            },
            {
              "@type": "FAQPage",
              mainEntity: aiFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
    </>
  );
}
