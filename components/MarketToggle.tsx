"use client";

import { useEffect, useState } from "react";
import {
  MARKETS,
  MARKET_CODES,
  DEFAULT_MARKET,
  STORAGE_KEY,
  guessMarket,
  type MarketCode,
} from "@/lib/markets";

/**
 * Market selector.
 * ------------------------------------------------------------------
 * Switches which country's market research is displayed. It does NOT
 * convert currency, does NOT redirect, and does NOT change the URL.
 *
 * Why not redirect by location, which is the obvious thing to reach for:
 * Googlebot crawls almost entirely from United States IP addresses, so a
 * site that serves different content by location shows the crawler one
 * version and risks the others never being indexed. It also strands real
 * people behind a VPN, travelling, or on a corporate network that exits
 * in another country, with no way to get out. Google's own guidance
 * advises against automatic redirection for exactly this reason.
 *
 * So: guess from the browser's own locale, show the guess, and let the
 * visitor change it. One URL, all content crawlable, nobody trapped.
 *
 * SSR note: the server has no idea which market to render, so the first
 * paint uses the default and this corrects it after mount. That would
 * normally cause a hydration mismatch, hence the mounted flag.
 */

export function useMarket(): [MarketCode, (m: MarketCode) => void, boolean] {
  const [market, setMarketState] = useState<MarketCode>(DEFAULT_MARKET);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let next: MarketCode | null = null;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && (MARKET_CODES as string[]).includes(saved)) {
        next = saved as MarketCode;
      }
    } catch {
      // Storage blocked. Fall through to the locale guess.
    }
    setMarketState(next ?? guessMarket());
    setMounted(true);
  }, []);

  const setMarket = (m: MarketCode) => {
    setMarketState(m);
    try {
      window.localStorage.setItem(STORAGE_KEY, m);
    } catch {
      // A visitor who cannot persist the choice can still change it for
      // this visit, which is the part that matters.
    }
  };

  return [market, setMarket, mounted];
}

export default function MarketToggle({
  market,
  onChange,
  className = "",
}: {
  market: MarketCode;
  onChange: (m: MarketCode) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="label text-ash">Showing rates for</span>
      <div
        role="group"
        aria-label="Choose which country's market rates to show"
        className="flex gap-2"
      >
        {MARKET_CODES.map((code) => {
          const m = MARKETS[code];
          const active = market === code;
          return (
            <button
              key={code}
              onClick={() => onChange(code)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active
                  ? "border-ink bg-ink text-bone"
                  : "border-line text-ash hover:border-ink hover:text-ink"
              }`}
            >
              {m.country}
              <span className="ml-1.5 opacity-70">{m.currency}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
