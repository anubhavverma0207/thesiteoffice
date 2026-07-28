/**
 * Analytics helpers. Safe everywhere: every function no-ops when the
 * relevant tool is absent (IDs unset, script blocked, or server-side).
 *
 * Configuration (all optional, all NEXT_PUBLIC_ because this is a static
 * export and the values are public by nature):
 *   NEXT_PUBLIC_GA_ID       GA4 measurement id, e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_CLARITY_ID  Microsoft Clarity project id
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";

type Gtag = (...args: unknown[]) => void;

const gtag = (): Gtag | undefined =>
  typeof window === "undefined"
    ? undefined
    : (window as unknown as { gtag?: Gtag }).gtag;

/** Send a GA4 event. `params` keys should be snake_case. */
export function track(name: string, params?: Record<string, unknown>) {
  gtag()?.("event", name, params ?? {});
}

/** Report an SPA navigation to GA4 (App Router does not do this itself). */
export function pageview(path: string) {
  gtag()?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
