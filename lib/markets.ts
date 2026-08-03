/**
 * Market selection.
 * ------------------------------------------------------------------
 * READ THIS BEFORE ADDING A MARKET OR CHANGING A NUMBER.
 *
 * This is NOT a currency converter. It never takes a New Zealand figure
 * and multiplies it by an exchange rate.
 *
 * Every price on this site is published MARKET RESEARCH: what agencies
 * and freelancers in that country actually charge. Australia is a larger
 * and more expensive market than New Zealand, so an Australian range is
 * a different measurement, not the same measurement in different money.
 * Converting NZD to AUD would produce a number that is precise, wrong,
 * and impossible to source.
 *
 * So each market carries its own researched ranges, each traceable to
 * its own sources. If you cannot source a range for a market, that
 * market does not get that range. Leave it out rather than estimating.
 *
 * The other rule, unchanged from everywhere else on this site: these are
 * MARKET rates, never AntCrow's prices. Any UI built on this must say so.
 */

export type MarketCode = "NZ" | "AU";

export type Market = {
  code: MarketCode;
  /** Country name as it appears in prose */
  country: string;
  /** Adjective form, e.g. "New Zealand market rates" */
  adjective: string;
  currency: "NZD" | "AUD";
  /** Shown against figures so NZ$ and AU$ are never confused */
  symbol: string;
  /** BCP 47 tag, used for number formatting and hreflang */
  locale: string;
  /**
   * Country codes whose visitors should default to this market. Used only
   * as an initial guess from the browser's own locale; it never redirects
   * and never changes the URL, and the visitor can always override it.
   */
  defaultFor: string[];
};

export const MARKETS: Record<MarketCode, Market> = {
  NZ: {
    code: "NZ",
    country: "New Zealand",
    adjective: "New Zealand",
    currency: "NZD",
    symbol: "NZ$",
    locale: "en-NZ",
    defaultFor: ["NZ"],
  },
  AU: {
    code: "AU",
    country: "Australia",
    adjective: "Australian",
    currency: "AUD",
    symbol: "AU$",
    locale: "en-AU",
    defaultFor: ["AU"],
  },
};

export const MARKET_CODES: MarketCode[] = ["NZ", "AU"];

/** The market assumed when we have no signal at all. */
export const DEFAULT_MARKET: MarketCode = "NZ";

export const STORAGE_KEY = "antcrow.market";

/**
 * Guess a market from the browser's own locale.
 *
 * Deliberately NOT IP geolocation. Google crawls almost entirely from
 * United States addresses, so anything keyed to IP shows the crawler one
 * version and may leave the others unindexed, and it traps real people
 * behind VPNs or travelling. This reads what the browser already
 * volunteers, changes nothing about the URL, and is only ever a starting
 * position the visitor can change.
 */
export function guessMarket(): MarketCode {
  if (typeof navigator === "undefined") return DEFAULT_MARKET;

  const tags = [navigator.language, ...(navigator.languages ?? [])].filter(
    Boolean
  );

  for (const tag of tags) {
    // "en-AU" -> "AU". Region is the last subtag when it is two letters.
    const region = tag.split("-").pop()?.toUpperCase();
    if (!region || region.length !== 2) continue;
    for (const code of MARKET_CODES) {
      if (MARKETS[code].defaultFor.includes(region)) return code;
    }
  }

  // Time zone is a weaker but useful fallback: many browsers report a
  // bare "en" with no region.
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    if (/^Australia\//.test(tz)) return "AU";
    if (/^Pacific\/(Auckland|Chatham)/.test(tz)) return "NZ";
  } catch {
    // Intl unavailable or restricted. Fall through.
  }

  return DEFAULT_MARKET;
}

/**
 * hreflang for a page, derived from which markets it actually serves.
 *
 * Most pages here serve both countries from one URL, and declaring the
 * same URL under several hreflang tags is exactly how you say that. What
 * would be wrong is declaring en-AU on a page about the New Zealand
 * Privacy Act, or en-NZ on a page of Australian market pricing: that
 * tells search engines the page is relevant to an audience it is not
 * written for.
 *
 * So scope follows the content:
 *   "NZ"    New Zealand specific: NZ law, NZ pricing, NZ cities
 *   "AU"    Australia specific
 *   "both"  everything else, which is most of the site
 *
 * x-default is always present and always points at the same URL, since
 * there is only one version and no redirecting.
 */
export function hreflangFor(
  path: string,
  scope: "NZ" | "AU" | "both" = "both"
): Record<string, string> {
  const langs: Record<string, string> = {};
  if (scope === "NZ" || scope === "both") langs["en-NZ"] = path;
  if (scope === "AU" || scope === "both") langs["en-AU"] = path;
  langs["x-default"] = path;
  return langs;
}

/** Format a whole-dollar amount for a market. No cents: these are ranges. */
export function formatMoney(amount: number, market: Market): string {
  return `${market.symbol}${amount.toLocaleString(market.locale, {
    maximumFractionDigits: 0,
  })}`;
}

export function formatRange(
  range: [number, number],
  market: Market
): string {
  return `${formatMoney(range[0], market)} to ${formatMoney(range[1], market)}`;
}
