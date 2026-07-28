"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { track } from "@/lib/analytics";

/**
 * NZ Website Cost Calculator. Runs entirely in the browser, no backend,
 * no email gate. Ranges mirror the published market brackets in the
 * cost guide; output is an indicative estimate, never a quote.
 */

type Range = [number, number];

const BASES: { id: string; label: string; note: string; range: Range }[] = [
  {
    id: "presence",
    label: "Simple presence",
    note: "A few pages that introduce the business",
    range: [3000, 6000],
  },
  {
    id: "business",
    label: "Business website",
    note: "Custom design that wins you work",
    range: [5000, 12000],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    note: "Products, payments, and fulfilment",
    range: [8000, 18000],
  },
  {
    id: "platform",
    label: "Web app / platform",
    note: "Accounts, dashboards, custom logic",
    range: [15000, 40000],
  },
];

const ADDONS: { id: string; label: string; note: string; range: Range }[] = [
  {
    id: "cms",
    label: "Content management (CMS)",
    note: "Edit your own content",
    range: [1500, 3000],
  },
  {
    id: "copy",
    label: "Professional copywriting",
    note: "Words that sell, written for you",
    range: [1000, 3000],
  },
  {
    id: "booking",
    label: "Bookings or payments",
    note: "Appointments, deposits, checkout",
    range: [1500, 4000],
  },
  {
    id: "motion",
    label: "Custom motion & interaction",
    note: "The feel this site has",
    range: [1500, 5000],
  },
  {
    id: "seo",
    label: "SEO & AI search setup",
    note: "Found on Google and cited by AI",
    range: [1500, 4000],
  },
  {
    id: "brand",
    label: "Brand identity",
    note: "Logo, type, and visual system",
    range: [2500, 8000],
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
            <span className="label text-bone/50">Indicative NZ range</span>
            <p className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {nzd(estimate[0])}
              <span className="text-bone/40"> to </span>
              {nzd(estimate[1])}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-bone/60">
              An honest market estimate based on published New Zealand
              pricing in 2026, not a quote. Your actual price depends on
              scope, and a good studio will tell you when you need less
              than you think.
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
  );
}
