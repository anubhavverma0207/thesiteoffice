"use client";

import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";

/**
 * AI Visibility Tracker.
 * ------------------------------------------------------------------
 * There is no API that will tell you whether ChatGPT recommends your
 * business. Vendors selling "AI visibility scores" are almost all
 * running the same manual prompts you could run yourself, then
 * charging for the spreadsheet. This tool is that spreadsheet, free,
 * with the methodology stated openly.
 *
 * Design decisions worth keeping:
 *  - Runs entirely in the browser. No account, no email, no data sent
 *    anywhere. Results persist in localStorage only.
 *  - Scores PER ENGINE and refuses to produce a single blended number.
 *    Published analysis finds roughly nine in ten cited URLs appear in
 *    only one engine, and Google's own AI Overviews and AI Mode agree
 *    on a small minority of citations. A single "AI visibility score"
 *    would be averaging things that are not comparable, which is
 *    exactly the dishonesty this tool exists to avoid.
 *  - Distinguishes MENTIONED from CITED. An assistant can recommend a
 *    business while citing someone else's page about it. Those are
 *    different problems with different fixes, so they are scored
 *    differently.
 *  - Prompt set is generated from what customers actually type, not
 *    from keywords. Assistants get asked questions, not queries.
 */

type Engine = {
  id: string;
  name: string;
  url: string;
  note: string;
};

const ENGINES: Engine[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    note: "Cites the most sources per answer. Make sure web search is on.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    note: "Always cites. The easiest engine to read results from.",
  },
  {
    id: "google",
    name: "Google AI Mode",
    url: "https://www.google.com/",
    note: "Use AI Mode, or a query that triggers an AI Overview.",
  },
  {
    id: "copilot",
    name: "Copilot",
    url: "https://copilot.microsoft.com/",
    note: "Runs entirely on the Bing index, so it tests Bing coverage.",
  },
];

type Result = "unset" | "absent" | "mentioned" | "cited";

const SCORE: Record<Result, number> = {
  unset: 0,
  absent: 0,
  mentioned: 1,
  cited: 2,
};

const RESULT_LABEL: Record<Exclude<Result, "unset">, string> = {
  absent: "Not there",
  mentioned: "Named",
  cited: "Cited",
};

type PromptSpec = {
  id: string;
  intent: string;
  /** Why this prompt is in the set. Shown so the method is inspectable. */
  why: string;
  build: (b: Business) => string;
};

type Business = {
  name: string;
  what: string;
  city: string;
  competitor: string;
};

/**
 * The prompt set. Five intent types, because they fail for different
 * reasons and therefore need different fixes:
 *
 *   entity      Does the model know you exist at all? If this fails,
 *               nothing else can succeed, and the fix is entity work.
 *   category    Do you appear in a shortlist? The commercial question.
 *   problem     Are you surfaced when the customer describes a need
 *               rather than naming a category?
 *   comparison  Are you present when someone weighs options?
 *   local       Do you appear with a place attached?
 */
const PROMPTS: PromptSpec[] = [
  {
    id: "entity-1",
    intent: "Entity",
    why: "Tests whether the model has formed any confident understanding of your business. If this returns a hedge or an invention, every other result is downstream of that.",
    build: (b) => `What is ${b.name}? What do they do?`,
  },
  {
    id: "entity-2",
    intent: "Entity",
    why: "Tests whether the model can describe you accurately rather than merely recognise the name. Watch for invented details, which indicate low confidence.",
    build: (b) =>
      `Tell me about ${b.name}. Who runs it, where do they operate, and what do they specialise in?`,
  },
  {
    id: "category-1",
    intent: "Category",
    why: "The core commercial query. Being absent here is the gap that costs money.",
    build: (b) => `Who are the best ${b.what} companies in ${b.city}?`,
  },
  {
    id: "category-2",
    intent: "Category",
    why: "A shortlist request. Assistants answer these with three to five names, which is the field you are competing to enter.",
    build: (b) =>
      `Recommend three ${b.what} companies in ${b.city} and explain why each one.`,
  },
  {
    id: "problem-1",
    intent: "Problem",
    why: "Customers describe a problem rather than naming a category. This tests whether you surface without the category keyword being present.",
    build: (b) =>
      `My business website looks dated and does not bring in enquiries. Who in ${b.city} could help me fix it?`,
  },
  {
    id: "problem-2",
    intent: "Problem",
    why: "Tests the buying-process question, where being cited as a source of guidance builds authority even without a direct recommendation.",
    build: (b) =>
      `How do I choose a ${b.what} company in ${b.city}, and what should I ask before hiring one?`,
  },
  {
    id: "comparison-1",
    intent: "Comparison",
    why: "Direct comparison against a named competitor. Reveals how the model positions you relative to them, including on price and specialism.",
    build: (b) =>
      `How does ${b.name} compare to ${b.competitor}? Which would suit a small business better?`,
  },
  {
    id: "comparison-2",
    intent: "Comparison",
    why: "Tests whether you appear in an alternatives list, which is often where a customer is when they are closest to switching.",
    build: (b) => `What are the alternatives to ${b.competitor} in ${b.city}?`,
  },
  {
    id: "local-1",
    intent: "Local",
    why: "Tests whether you are attached to a place in the model's understanding. A business with no geographic anchor is hard to recommend locally.",
    build: (b) => `I am in ${b.city}. Who should I talk to about ${b.what}?`,
  },
  {
    id: "local-2",
    intent: "Local",
    why: "Tests cost-question authority. These are extremely high volume, and being the cited source builds the trust that later recommendations rest on.",
    build: (b) => `How much does ${b.what} cost in ${b.city}?`,
  },
];

const STORAGE_KEY = "antcrow.ai-visibility-tracker.v1";

export default function AiVisibilityTracker() {
  const [business, setBusiness] = useState<Business>({
    name: "",
    what: "web design",
    city: "Auckland",
    competitor: "",
  });
  const [results, setResults] = useState<Record<string, Result>>({});
  const [started, setStarted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Restore any previous run. This is a tool people come back to over
  // weeks, so losing the baseline on refresh would defeat the purpose.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as {
        business: Business;
        results: Record<string, Result>;
      };
      if (saved.business?.name) {
        setBusiness(saved.business);
        setResults(saved.results ?? {});
        setStarted(true);
      }
    } catch {
      // Corrupted storage is not worth surfacing to the user.
    }
  }, []);

  useEffect(() => {
    if (!started) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ business, results })
      );
    } catch {
      // Private browsing, quota, or storage disabled. Not fatal.
    }
  }, [business, results, started]);

  const prompts = useMemo(
    () =>
      PROMPTS.map((p) => ({
        ...p,
        text: p.build({
          ...business,
          name: business.name || "your business",
          competitor: business.competitor || "your main competitor",
        }),
      })),
    [business]
  );

  const key = (promptId: string, engineId: string) => `${promptId}:${engineId}`;

  const perEngine = useMemo(
    () =>
      ENGINES.map((e) => {
        const scores = PROMPTS.map(
          (p) => SCORE[results[key(p.id, e.id)] ?? "unset"]
        );
        const answered = PROMPTS.filter(
          (p) => (results[key(p.id, e.id)] ?? "unset") !== "unset"
        ).length;
        const total = scores.reduce((a, b) => a + b, 0);
        const max = PROMPTS.length * 2;
        return {
          engine: e,
          total,
          max,
          answered,
          pct: max === 0 ? 0 : Math.round((total / max) * 100),
        };
      }),
    [results]
  );

  const totalAnswered = perEngine.reduce((a, e) => a + e.answered, 0);
  const totalCells = PROMPTS.length * ENGINES.length;

  function setResult(promptId: string, engineId: string, value: Result) {
    setResults((prev) => ({ ...prev, [key(promptId, engineId)]: value }));
  }

  function reset() {
    setResults({});
    setStarted(false);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  async function copyReport() {
    const lines: string[] = [
      `AI visibility baseline: ${business.name}`,
      `Recorded: ${new Date().toISOString().slice(0, 10)}`,
      `Category: ${business.what}. Market: ${business.city}.`,
      "",
      "Score per engine (scored separately on purpose: engines cite different sources):",
      ...perEngine.map(
        (e) =>
          `- ${e.engine.name}: ${e.total}/${e.max} (${e.pct}%), ${e.answered}/${PROMPTS.length} prompts recorded`
      ),
      "",
      "Detail:",
    ];
    prompts.forEach((p) => {
      lines.push("", `[${p.intent}] ${p.text}`);
      ENGINES.forEach((e) => {
        const r = results[key(p.id, e.id)] ?? "unset";
        lines.push(
          `  ${e.name}: ${
            r === "unset"
              ? "not recorded"
              : RESULT_LABEL[r as Exclude<Result, "unset">]
          }`
        );
      });
    });
    lines.push(
      "",
      "Scoring: Cited = 2, Named = 1, Not there = 0.",
      "Method: antcrow.com/tools/ai-visibility-tracker"
    );
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard blocked */
    }
  }

  // ---------------------------------------------------------------- setup
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-line p-6 md:p-8">
          <h2 className="font-serif text-2xl md:text-3xl">
            Set up your baseline
          </h2>
          <p className="mt-4 text-ash">
            Four details. Nothing is sent anywhere: this runs entirely in your
            browser and saves only to this device.
          </p>

          <div className="mt-8 space-y-5">
            <Field
              label="Business name"
              value={business.name}
              placeholder="e.g. Hale Painting Co."
              onChange={(v) => setBusiness((b) => ({ ...b, name: v }))}
            />
            <Field
              label="What you do"
              value={business.what}
              placeholder="e.g. web design, plumbing, accounting"
              onChange={(v) => setBusiness((b) => ({ ...b, what: v }))}
            />
            <Field
              label="Main market"
              value={business.city}
              placeholder="e.g. Auckland"
              onChange={(v) => setBusiness((b) => ({ ...b, city: v }))}
            />
            <Field
              label="A competitor you would be compared to"
              value={business.competitor}
              placeholder="e.g. a rival firm customers also consider"
              onChange={(v) => setBusiness((b) => ({ ...b, competitor: v }))}
            />
          </div>

          <button
            onClick={() => setStarted(true)}
            disabled={!business.name.trim() || !business.what.trim()}
            className="mt-8 w-full rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Generate my prompt set
          </button>
          {!business.name.trim() && (
            <p className="mt-3 text-center text-sm text-ash">
              A business name is required to generate the prompts.
            </p>
          )}
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-flag bg-paper p-6 md:p-8">
          <p className="font-medium text-ink">How this works, honestly</p>
          <p className="mt-3 leading-relaxed text-ash">
            No API tells you whether ChatGPT recommends your business. Every
            tool claiming an AI visibility score is running prompts and reading
            the answers, which is what this does, except you keep the result and
            pay nothing. It takes about twenty minutes and gives you a real
            baseline to measure future work against.
          </p>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------- tracker
  return (
    <div>
      {/* Scoreboard */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {perEngine.map((e) => (
          <Reveal key={e.engine.id}>
            <div className="h-full rounded-2xl border border-line p-6">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-serif text-xl">{e.engine.name}</span>
                <span className="font-serif text-3xl tabular-nums">
                  {e.pct}%
                </span>
              </div>
              <div
                className="mt-4 h-1 w-full overflow-hidden rounded-full bg-line"
                role="img"
                aria-label={`${e.engine.name}: ${e.total} of ${e.max}`}
              >
                <div
                  className="h-full bg-flag transition-all duration-700 ease-silk"
                  style={{ width: `${e.pct}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-ash">
                {e.total}/{e.max} points · {e.answered}/{PROMPTS.length} recorded
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-sm text-ash">
        Scored separately for each engine on purpose. Published analysis finds
        roughly nine in ten cited pages appear in only one engine, so a single
        blended score would average things that are not comparable.
      </p>

      {/* Prompts */}
      <div className="mt-14 space-y-8">
        {prompts.map((p, i) => (
          <Reveal key={p.id}>
            <section className="rounded-2xl border border-line p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="label text-ash">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-widelabel text-ash">
                  {p.intent}
                </span>
              </div>

              <p className="mt-4 font-serif text-xl leading-snug md:text-2xl">
                &ldquo;{p.text}&rdquo;
              </p>

              <details className="group mt-3">
                <summary className="cursor-pointer text-sm text-ash underline-offset-4 hover:underline">
                  Why this prompt
                </summary>
                <p className="mt-2 text-sm text-ash">{p.why}</p>
              </details>

              <div className="mt-6 space-y-4">
                {ENGINES.map((e) => {
                  const current = results[key(p.id, e.id)] ?? "unset";
                  return (
                    <div
                      key={e.id}
                      className="flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0">
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-ink underline underline-offset-4"
                        >
                          {e.name} ↗
                        </a>
                        <p className="mt-0.5 text-xs text-ash">{e.note}</p>
                      </div>
                      {/* Buttons rather than a select: on a phone this is one
                          tap instead of three, and the whole exercise is 40
                          decisions long. */}
                      <div
                        role="group"
                        aria-label={`${e.name} result for prompt ${i + 1}`}
                        className="flex shrink-0 gap-2"
                      >
                        {(["absent", "mentioned", "cited"] as const).map((r) => (
                          <button
                            key={r}
                            onClick={() =>
                              setResult(p.id, e.id, current === r ? "unset" : r)
                            }
                            aria-pressed={current === r}
                            className={`flex-1 whitespace-nowrap rounded-full border px-3.5 py-2 text-xs transition-colors sm:flex-none ${
                              current === r
                                ? "border-ink bg-ink text-bone"
                                : "border-line text-ash hover:border-ink hover:text-ink"
                            }`}
                          >
                            {RESULT_LABEL[r]}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ash">
          {totalAnswered} of {totalCells} recorded. Saved to this device only.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={copyReport}
            className="rounded-full bg-ink px-6 py-3 text-sm text-bone transition-colors hover:bg-ink/85"
          >
            {copied ? "Copied" : "Copy report"}
          </button>
          <button
            onClick={reset}
            className="rounded-full border border-line px-6 py-3 text-sm text-ash transition-colors hover:border-ink hover:text-ink"
          >
            Start over
          </button>
        </div>
      </div>

      {/* What to do with the result */}
      <Reveal>
        <section className="mt-12 rounded-2xl border-l-4 border-flag bg-paper p-6 md:p-8">
          <h2 className="font-serif text-2xl">Reading your result</h2>
          <ul className="mt-5 space-y-4 text-ash">
            <li>
              <strong className="text-ink">Entity prompts failing.</strong> The
              model does not confidently know what your business is. Nothing
              else can work until that is fixed. Start with consistent
              descriptions of yourself everywhere you appear, and structured
              data that states who you are.
            </li>
            <li>
              <strong className="text-ink">
                Named but not cited.
              </strong>{" "}
              The model recommends you but quotes someone else. Your reputation
              is working and your website is not being used as evidence. That is
              a content structure problem: answers need to be self-contained and
              factual enough to quote.
            </li>
            <li>
              <strong className="text-ink">
                Strong in one engine, absent in another.
              </strong>{" "}
              Normal, and usually an indexing gap rather than a quality one.
              Absent in Copilot almost always means a Bing coverage problem,
              since Copilot runs entirely on the Bing index.
            </li>
            <li>
              <strong className="text-ink">Absent everywhere.</strong> Almost
              always an off-site problem rather than an on-site one. Published
              correlations put brand mentions and community presence well ahead
              of anything on your own website.
            </li>
          </ul>
        </section>
      </Reveal>
    </div>
  );
}

function Field({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="label text-ash">{label}</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-ash focus:border-ink"
      />
    </label>
  );
}
