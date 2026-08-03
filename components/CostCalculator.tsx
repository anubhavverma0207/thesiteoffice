"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { track } from "@/lib/analytics";
import MarketToggle, { useMarket } from "./MarketToggle";
import { MARKETS, type MarketCode } from "@/lib/markets";

/**
 * Website Cost Calculator. Runs entirely in the browser, no backend,
 * no email gate.
 *
 * IMPORTANT: every figure here is a published MARKET range for the
 * selected country, not AntCrow's own pricing. The UI says so in three
 * places (banner, result heading, result body) because visitors
 * otherwise read these as our rates. Keep that framing if you edit
 * the numbers.
 *
 * The two markets carry SEPARATE RESEARCH. Nothing here is converted
 * between currencies: Australia is a different, larger market, and an
 * Australian figure has to be an Australian measurement. See
 * lib/markets.ts for the full reasoning.
 */

type Range = [number, number];

const TIERS: { id: string; label: string; note: string }[] = [
  {
    id: "presence",
    label: "Simple presence",
    note: "A few pages that introduce the business",
  },
  {
    id: "business",
    label: "Business website",
    note: "Custom design that wins you work",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    note: "Products, payments, and fulfilment",
  },
  {
    id: "platform",
    label: "Web app / platform",
    note: "Accounts, dashboards, custom logic",
  },
];

/**
 * NZ ranges: published New Zealand market pricing.
 * AU ranges: consensus bands across seven published Australian agency
 * pricing guides, all cited on /guides/website-cost-australia.
 *
 * The Australian entry-level band is deliberately wide. Published
 * Australian guides put a small business site anywhere from $500 to
 * $20,000, a fortyfold spread, and narrowing that to look tidier would
 * misrepresent the market. The guide explains why.
 */
const BASE_RANGES: Record<MarketCode, Record<string, Range>> = {
  NZ: {
    presence: [1000, 4000],
    business: [2500, 10000],
    ecommerce: [5000, 18000],
    platform: [12000, 40000],
  },
  AU: {
    presence: [1500, 10000],
    business: [5000, 15000],
    ecommerce: [10000, 40000],
    platform: [30000, 150000],
  },
};

/** Cost per extra page beyond five, [low, high], per market. */
const PER_PAGE: Record<MarketCode, Range> = {
  NZ: [200, 450],
  AU: [300, 650],
};

const ADDON_META: { id: string; label: string; note: string }[] = [
  {
    id: "cms",
    label: "Content management (CMS)",
    note: "Edit your own content",
  },
  {
    id: "copy",
    label: "Professional copywriting",
    note: "Words that sell, written for you",
  },
  {
    id: "booking",
    label: "Bookings or payments",
    note: "Appointments, deposits, checkout",
  },
  {
    id: "motion",
    label: "Custom motion & interaction",
    note: "The feel this site has",
  },
  {
    id: "seo",
    label: "SEO & AI search setup",
    note: "Found on Google and cited by AI",
  },
  {
    id: "brand",
    label: "Brand identity",
    note: "Logo, type, and visual system",
  },
];

/**
 * Add-on ranges exist for New Zealand only, and that is deliberate.
 *
 * The Australian research turned up published ranges for whole projects
 * but nothing sourceable for individual add-ons. We could estimate them,
 * or scale the New Zealand numbers, and either would produce figures
 * that look precise and cannot be defended. So in the Australian market
 * the calculator shows the build range alone and says why.
 *
 * If sourced Australian add-on data is found later, add an AU key here
 * and the UI picks it up with no further change.
 */
const ADDON_RANGES: Partial<Record<MarketCode, Record<string, Range>>> = {
  NZ: {
    cms: [800, 3000],
    copy: [600, 3000],
    booking: [1000, 4000],
    motion: [1000, 5000],
    seo: [800, 4000],
    brand: [1500, 8000],
  },
};

const money = (n: number, market: MarketCode) =>
  new Intl.NumberFormat(MARKETS[market].locale, {
    style: "currency",
    currency: MARKETS[market].currency,
    maximumFractionDigits: 0,
    currencyDisplay: "narrowSymbol",
  }).format(n);

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

export default function CostCalculator() {
  const [market, setMarket, marketReady] = useMarket();
  const [base, setBase] = useState("business");
  const [addons, setAddons] = useState<string[]>([]);
  const [pages, setPages] = useState(5);

  const m = MARKETS[market];
  const addonRanges = ADDON_RANGES[market];
  const hasAddons = Boolean(addonRanges);

  const toggle = (id: string) =>
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  const estimate = useMemo(() => {
    const ranges = BASE_RANGES[market];
    let [lo, hi] = ranges[base] ?? ranges.business;
    // Extra pages beyond five add modest scope
    const extraPages = Math.max(0, pages - 5);
    const [perLo, perHi] = PER_PAGE[market];
    lo += extraPages * perLo;
    hi += extraPages * perHi;
    if (addonRanges) {
      for (const a of ADDON_META) {
        if (addons.includes(a.id)) {
          const r = addonRanges[a.id];
          if (r) {
            lo += r[0];
            hi += r[1];
          }
        }
      }
    }
    return [roundTo(lo, 500), roundTo(hi, 500)] as Range;
  }, [base, addons, pages, market, addonRanges]);

  return (
    <div>
      {/* Market selection first: the figures below are meaningless until
          you know which country's market they describe. */}
      <MarketToggle
        market={market}
        onChange={setMarket}
        className="mb-6"
      />

      {/* Whose prices these are: stated before anything else */}
      <div className="mb-10 rounded-2xl border-l-4 border-flag bg-paper p-6">
        <p className="font-medium">
          These are {m.adjective} market rates, not AntCrow&apos;s prices.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          This tool shows what the wider {m.country} market charges, so you
          can budget with real numbers before you talk to anyone. AntCrow
          scopes and prices every project individually.
          {market === "AU" && (
            <>
              {" "}
              Australian agencies commonly quote exclusive of GST, which is
              10 percent.
            </>
          )}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
      {/* Inputs */}
      <div className="lg:col-span-7">
        <div>
          <span className="label text-ash">1 · What are you building?</span>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {TIERS.map((b) => (
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
          {hasAddons ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ADDON_META.map((a) => {
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
          ) : (
            /* Saying "we do not have this data" is better than inventing it.
               See ADDON_RANGES for the reasoning. */
            <div className="mt-4 rounded-2xl border border-line bg-paper p-6">
              <p className="text-sm leading-relaxed text-ash">
                We have not found sourced {m.adjective} pricing for individual
                add-ons such as copywriting, bookings, or brand identity. The
                published {m.adjective} guides quote whole projects rather than
                components, so the range shown here covers the build only.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ash">
                We could estimate them, or convert the New Zealand figures, and
                either would give you a number that looks precise and cannot be
                defended. When sourced {m.adjective} data exists, it will appear
                here.
              </p>
              <button
                onClick={() => setMarket("NZ")}
                className="mt-4 text-sm text-ink underline underline-offset-4"
              >
                See the New Zealand breakdown instead
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Result */}
      <div className="lg:col-span-5">
        <Reveal>
          <div
            data-cursor-theme="dark"
            className="sticky top-28 rounded-2xl bg-ink p-8 text-bone"
          >
            <span className="label text-bone/50">
              Typical {market} market range
            </span>
            <p
              className="mt-4 font-serif text-4xl leading-tight md:text-5xl"
              /* The figure changes after mount once the market is resolved
                 from the visitor's locale, so it is announced politely
                 rather than read out mid-update. */
              aria-live="polite"
            >
              {money(estimate[0], market)}
              <span className="text-bone/60"> to </span>
              {money(estimate[1], market)}
              <span className="ml-2 align-middle text-base text-bone/50">
                {m.currency}
              </span>
            </p>
            <p className="mt-2 text-xs text-bone/60">
              What the market charges, not an AntCrow quote.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-bone/60">
              Based on published {m.adjective} market pricing in 2026.
              {market === "AU"
                ? " Australian sources disagree widely at the entry level, so the lower band is deliberately broad."
                : ""}{" "}
              We scope and price every project individually, and will tell you
              honestly when you need less than this.
            </p>
            {!marketReady && (
              <p className="mt-3 text-xs text-bone/40">
                Checking your region…
              </p>
            )}
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
            <p className="mt-4 text-xs text-bone/60">
              Full pricing context:{" "}
              <Link
                href={
                  market === "AU"
                    ? "/guides/website-cost-australia"
                    : "/guides/website-cost-nz"
                }
                className="underline underline-offset-2 hover:text-bone/70"
              >
                the {market} website cost guide
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
      </div>
    </div>
  );
}
