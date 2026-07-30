"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site.config";

/**
 * The studio clock. Renders nothing on the server (static export),
 * then ticks every 30s once mounted. Time zone comes from site.config.
 */
export default function LocalTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-NZ", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: site.timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className={className} suppressHydrationWarning>
      {/* No nested opacity here. The callers already pass a dimmed colour
          such as text-bone/60, and an inner opacity-60 multiplies with it
          (0.6 x 0.6 = 0.36 effective), which dropped this label to 2.99:1
          against the ink background and failed WCAG AA. The label reads as
          secondary from its size and position; it does not need to be
          faded as well. */}
      {time} <span>Studio time</span>
    </span>
  );
}
