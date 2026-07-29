"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { track } from "@/lib/analytics";

/**
 * Website Health Check: a 16-point self-audit that scores a business
 * website across speed, trust, search, and AI readiness. Fully
 * client-side, free, no email gate. Honest by design: it measures the
 * owner's answers, so results are framed as a checklist, not a scan.
 */

type Answer = "yes" | "no" | "unsure";

type Check = {
  id: string;
  category: string;
  question: string;
  fix: string;
};

const CHECKS: Check[] = [
  // Speed & mobile
  {
    id: "speed",
    category: "Speed & mobile",
    question: "Does your site load in under 3 seconds on a phone?",
    fix: "Slow loading loses visitors before they see anything. Compress images, cut unused scripts, and consider modern static hosting.",
  },
  {
    id: "mobile",
    category: "Speed & mobile",
    question: "Is everything easy to read on a phone without zooming?",
    fix: "Most visitors are on mobile. Text should be legible and buttons tappable without pinching or squinting.",
  },
  {
    id: "noscroll",
    category: "Speed & mobile",
    question: "Does every page fit the screen without sideways scrolling?",
    fix: "Horizontal scrolling on mobile signals a broken layout to visitors and to Google's mobile checks.",
  },
  {
    id: "weight",
    category: "Speed & mobile",
    question: "Do images look sharp without pages feeling heavy?",
    fix: "Serve images in modern formats (WebP/AVIF) sized to their containers, not full-resolution originals.",
  },
  // Trust & conversion
  {
    id: "clarity",
    category: "Trust & conversion",
    question: "Can a stranger tell what you do within 5 seconds of landing?",
    fix: "The first screen should say what you do, who for, and why you. Clever-but-vague headlines cost enquiries.",
  },
  {
    id: "cta",
    category: "Trust & conversion",
    question: "Is a contact action visible without scrolling?",
    fix: "A visible call, enquiry, or booking action on the first screen turns interest into contact.",
  },
  {
    id: "real",
    category: "Trust & conversion",
    question: "Do you show real work and real people, not just stock photos?",
    fix: "Customers vet you before contacting you. Real projects and real faces convert; generic stock quietly erodes trust.",
  },
  {
    id: "fresh",
    category: "Trust & conversion",
    question: "Is the content current (no stale dates, old prices, dead links)?",
    fix: "Outdated content tells visitors nobody is home. Review key pages quarterly; stale pages also lose search and AI visibility.",
  },
  // Search visibility
  {
    id: "brandsearch",
    category: "Search visibility",
    question: "Does your site come up first when you Google your business name?",
    fix: "If your own name does not find you, customers referred by word of mouth cannot either. Check indexing in Google Search Console.",
  },
  {
    id: "titles",
    category: "Search visibility",
    question: "Does each page have its own descriptive title (browser tab text)?",
    fix: "Page titles are the strongest on-page search signal. Every page should say what it is, not repeat the homepage title.",
  },
  {
    id: "gbp",
    category: "Search visibility",
    question: "Is your Google Business Profile claimed and up to date?",
    fix: "The profile is the biggest factor in appearing on Google Maps and local results, and it feeds AI answers too.",
  },
  {
    id: "reviews",
    category: "Search visibility",
    question: "Do you have recent public reviews (Google or an industry platform)?",
    fix: "Review recency matters more than totals now. Build a habit: ask every happy customer at the moment the job is done.",
  },
  // AI readiness
  {
    id: "static",
    category: "AI readiness",
    question: "Does your content appear even with JavaScript turned off?",
    fix: "Most AI assistants read raw HTML only. If your content needs JavaScript to appear, you are invisible to them.",
  },
  {
    id: "answers",
    category: "AI readiness",
    question: "Do key pages answer questions directly near the top?",
    fix: "AI engines quote pages that answer plainly and early. Bury the answer under storytelling and they quote someone else.",
  },
  {
    id: "schema",
    category: "AI readiness",
    question: "Does your site have structured data and a sitemap?",
    fix: "Structured data tells machines who you are and what you offer; a sitemap tells them what to read. Both are table stakes.",
  },
  {
    id: "nap",
    category: "AI readiness",
    question: "Are your business details identical everywhere online?",
    fix: "AI assistants cross-check your name, phone, and details across the web. Inconsistency reads as risk; consistency reads as trust.",
  },
];

const CATEGORIES = Array.from(new Set(CHECKS.map((c) => c.category)));

function grade(pct: number): { label: string; note: string } {
  if (pct >= 85)
    return {
      label: "Strong",
      note: "Your website is in better shape than most. The remaining items below are your edge.",
    };
  if (pct >= 60)
    return {
      label: "Solid, with gaps",
      note: "A good foundation with real gaps. The fixes below are ranked; the top ones matter most.",
    };
  if (pct >= 35)
    return {
      label: "Needs work",
      note: "Your website is likely costing you enquiries. The good news: every item below is fixable.",
    };
  return {
    label: "At risk",
    note: "Customers and search engines are both struggling with this site. Start with the first three fixes below.",
  };
}

export default function HealthCheck() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [done, setDone] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === CHECKS.length;

  const result = useMemo(() => {
    const yes = CHECKS.filter((c) => answers[c.id] === "yes").length;
    const pct = Math.round((yes / CHECKS.length) * 100);
    const fixes = CHECKS.filter((c) => answers[c.id] !== "yes");
    const byCategory = CATEGORIES.map((cat) => {
      const items = CHECKS.filter((c) => c.category === cat);
      const catYes = items.filter((c) => answers[c.id] === "yes").length;
      return { cat, score: catYes, total: items.length };
    });
    return { pct, fixes, byCategory, ...grade(pct) };
  }, [answers]);

  const setAnswer = (id: string, value: Answer) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  if (done) {
    return (
      <div>
        <Reveal>
          <div
            data-cursor-theme="dark"
            className="rounded-2xl bg-ink p-8 text-bone md:p-12"
          >
            <span className="label text-bone/50">Your result</span>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="font-serif text-6xl md:text-7xl">
                {result.pct}
                <span className="text-3xl text-bone/50">/100</span>
              </span>
              <span className="font-serif text-3xl">{result.label}</span>
            </div>
            <p className="mt-4 max-w-xl text-bone/70">{result.note}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {result.byCategory.map((c) => (
                <div
                  key={c.cat}
                  className="rounded-xl border border-bone/15 p-4"
                >
                  <div className="text-sm text-bone/60">{c.cat}</div>
                  <div className="mt-1 font-serif text-2xl">
                    {c.score}/{c.total}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {result.fixes.length > 0 && (
          <section className="mt-12">
            <h2 className="font-serif text-3xl">
              Your fix list, in priority order
            </h2>
            <ul className="mt-6 space-y-6">
              {result.fixes.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.04}>
                  <li className="flex gap-5 border-t border-line pt-5">
                    <span className="label pt-1 text-flag">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium">
                        {c.question}
                        {answers[c.id] === "unsure" && (
                          <span className="ml-2 rounded-full border border-line px-2 py-0.5 text-xs text-ash">
                            worth checking
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-sm text-ash">{c.fix}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>
        )}

        <Reveal>
          <section className="mt-12 rounded-2xl border border-line p-8">
            <h2 className="font-serif text-2xl md:text-3xl">
              Want this done properly?
            </h2>
            <p className="mt-3 max-w-xl text-ash">
              This checklist covers what you can see. Our AI Visibility
              Audit measures what you cannot: how ChatGPT, Perplexity, and
              Google&apos;s AI answers actually see your business, compared
              against three competitors.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                data-cursor="Book"
                data-cursor-theme="dark"
                onClick={() => track("cta_click", { cta: "healthcheck_audit" })}
                className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm text-bone transition-colors hover:bg-ink/85"
              >
                Book an AI Visibility Audit <span aria-hidden>→</span>
              </Link>
              <button
                onClick={() => {
                  setAnswers({});
                  setDone(false);
                }}
                className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
              >
                Start over ↺
              </button>
            </div>
          </section>
        </Reveal>
      </div>
    );
  }

  return (
    <div>
      {CATEGORIES.map((cat) => (
        <section key={cat} className="mt-10 first:mt-0">
          <h2 className="label text-ash">{cat}</h2>
          <ul className="mt-4 space-y-5">
            {CHECKS.filter((c) => c.category === cat).map((c) => (
              <li
                key={c.id}
                className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="max-w-xl">{c.question}</p>
                <div className="flex shrink-0 gap-2">
                  {(
                    [
                      ["yes", "Yes"],
                      ["no", "No"],
                      ["unsure", "Not sure"],
                    ] as [Answer, string][]
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() => setAnswer(c.id, value)}
                      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                        answers[c.id] === value
                          ? "border-ink bg-ink text-bone"
                          : "border-line text-ash hover:border-ink hover:text-ink"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-12 flex flex-wrap items-center gap-5">
        <button
          onClick={() => {
            setDone(true);
            track("healthcheck_complete");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          disabled={!allAnswered}
          data-cursor="Score"
          data-cursor-theme="dark"
          className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-all hover:bg-ink/85 disabled:opacity-40"
        >
          Get my score <span aria-hidden>→</span>
        </button>
        <span className="text-sm text-ash">
          {answeredCount}/{CHECKS.length} answered
        </span>
      </div>
    </div>
  );
}
