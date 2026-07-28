"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GA_ID, CLARITY_ID, pageview } from "@/lib/analytics";

/**
 * Loads GA4 and Microsoft Clarity (each only when its ID is configured)
 * and reports client-side navigations to GA4, which the App Router does
 * not do on its own. Renders nothing; no-ops entirely when IDs are unset,
 * so the component is safe to ship before the accounts exist.
 */
export default function Analytics() {
  const pathname = usePathname();
  const loaded = useRef(false);
  const firstPath = useRef(true);

  // Inject the scripts once
  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    if (GA_ID) {
      const w = window as unknown as {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag(...args: unknown[]) {
        w.dataLayer!.push(args);
      };
      w.gtag("js", new Date());
      // send_page_view true covers the initial load; SPA navs are manual
      w.gtag("config", GA_ID, { anonymize_ip: true });

      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
    }

    if (CLARITY_ID) {
      const w = window as unknown as {
        clarity?: { (...args: unknown[]): void; q?: unknown[] };
      };
      w.clarity =
        w.clarity ||
        function (...args: unknown[]) {
          (w.clarity!.q = w.clarity!.q || []).push(args);
        };
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
      document.head.appendChild(s);
    }
  }, []);

  // Report SPA navigations (skip the very first: gtag config covers it)
  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    if (GA_ID) pageview(pathname);
  }, [pathname]);

  return null;
}
