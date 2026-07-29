"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { track } from "@/lib/analytics";

/**
 * NZ Website Cost Calculator. Runs entirely in the browser, no backend,
 * no email gate.
 *
 * IMPORTANT: every figure here is a published NEW ZEALAND MARKET range,
 * not AntCrow's own pricing. The UI says so in three places (banner,
 * result heading, result body) because visitors otherwise read these as
 * our rates. Keep that framing if you edit the numbers.
 */

type Range = [number, number];

const BASES: { id: string; label: string; note: string; range: Range }[] = [
  {
    id: "presence",
    label: "Simple presence",
    note: "A few pages that introduce the business",
    range: [1000, 4000],
  },
  {
    id: "business",
    label: "Business website",
    note: "Custom design that wins you work",
    range: [2500, 10000],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    note: "Products, payments, and fulfilment",
    range: [5000, 18000],
  },
  {
    id: "platform",
    label: "Web app / platform",
    note: "Accounts, dashboards, custom logic",
    range: [12000, 40000],
  },
];

const ADDONS: { id: string; label: string; note: string; range: Range }[] = [
  {
    id: "cms",
    label: "Content management (CMS)",
    note: "Edit your own content",
    range: [800, 3000],
  },
  {
    id: "copy",
    label: "Professional copywriting",
    note: "Words that sell, written for you",
    range: [600, 3000],
  },
  {
    id: "booking",
    label: "Bookings or payments",
    note: "Appointments, deposits, checkout",
    range: [1000, 4000],
  },
  {
    id: "motion",
    label: "Custom motion & interaction",
    note: "The feel this site has",
    range: [1000, 5000],
  },
  {
    id: "seo",
    label: "SEO & AI search setup",
    note: "Found on Google and cited by AI",
    range: [800, 4000],
  },
  {
    id: "brand",
    label: "Brand identity",
    note: "Logo, type, and visual system",
    range: [1500, 8000],
  },
];

const nzd = (n: number) =>
  new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    maximumFractionDigits: 0,
  }).format(n);

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

export default function CostCalculator() {
  const [base, setBase] = useState("business");
  const [addons, setAddons] = useState<string[]>([]);
  const [pages, setPages] = useState(5);

  const toggle = (id: string) =>
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  const estimate = useMemo(() => {
    const b = BASES.find((x) => x.id === base) ?? BASES[1];
    let [lo, hi] = b.range;
    // Extra pages beyond five add modest scope
    const extraPages = Math.max(0, pages - 5);
    lo += extraPages * 200;
    hi += extraPages * 450;
    for (const a of ADDONS) {
      if (addons.includes(a.id)) {
        lo += a.range[0];
        hi += a.range[1];
      }
    }
    return [roundTo(lo, 500), roundTo(hi, 500)] as Range;
  }, [base, addons, pages]);

  return (
    <div>
      {/* Whose prices these are: stated before anything else */}
      <div className="mb-10 rounded-2xl border-l-4 border-flag bg-paper p-6">
        <p className="font-medium">
          These are New Zealand market rates, not AntCrow&apos;s prices.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          This tool shows what the wider New Zealand market charges, so you
          can budget with real numbers before you talk to anyone. AntCrow
          scopes and prices every project individually.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
      {/* Inputs */}
      <div className="lg:col-span-7">
        <div>
          <span className="label text-ash">1 · What are you building?</span>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {BASES.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setBase(b.id);
                  track("calculator_base", { base: b.id });
                }}
                className={`rounded-2xl border p-5 text-left transition-colors ${
                  base === b.id
                    ? "border-ink bg-ink text-bone"
                    : "border-line hover:border-ink/50"
                }`}
              >
                <span className="block font-serif text-xl">{b.label}</span>
                <span
                  className={`mt-1 block text-sm ${
                    base === b.id ? "text-bone/60" : "text-ash"
                  }`}
                >
                  {b.note}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <span className="label text-ash">
            2 · Roughly how many pages? ({pages >= 20 ? "20+" : pages})
          </span>
          <input
            type="range"
            min={1}
            max={20}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            aria-label="Approximate number of pages"
            className="mt-4 w-full accent-[#ff4a00]"
          />
        </div>

        <div className="mt-10">
          <span className="label text-ash">3 · What else do you need?</span>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {ADDONS.map((a) => {
              const on = addons.includes(a.id);
              return (
                <button
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className={`rounded-2xl border p-4 text-left transition-colors ${
                    on
                      ? "border-ink bg-ink text-bone"
                      : "border-line hover:border-ink/50"
                  }`}
                >
                  <span className="block text-sm font-medium">{a.label}</span>
                  <span
                    className={`mt-0.5 block text-xs ${
                      on ? "text-bone/60" : "text-ash"
                    }`}
                  >
                    {a.note}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="lg:col-span-5">
        <Reveal>
          <div
            data-cursor-theme="dark"
            className="sticky top-28 rounded-2xl bg-ink p-8 text-bone"
          >
            <span className="label text-bone/50">Typical NZ market range</span>
            <p className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {nzd(estimate[0])}
              <span className="text-bone/40"> to </span>
              {nzd(estimate[1])}
            </p>
            <p className="mt-2 text-xs text-bone/45">
              What the market charges, not an AntCrow quote.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-bone/60">
              Based on published New Zealand market pricing in 2026. We
              scope and price every project individually, and will tell
              you honestly when you need less than this.
            </p>
            <Link
              href="/contact"
              data-cursor="Quote"
              onClick={() =>
                track("cta_click", {
                  cta: "calculator_quote",
                  estimate_low: estimate[0],
                  estimate_high: estimate[1],
                })
              }
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-bone px-6 py-3 text-sm text-ink transition-colors hover:bg-bone/85"
            >
              Get an exact quote <span aria-hidden>→</span>
            </Link>
            <p className="mt-4 text-xs text-bone/40">
              Full pricing context:{" "}
              <Link
                href="/guides/website-cost-nz"
                className="underline underline-offset-2 hover:text-bone/70"
              >
                the NZ website cost guide
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
      </div>
    </div>
  );
}
