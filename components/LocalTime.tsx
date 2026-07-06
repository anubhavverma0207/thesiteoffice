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
      {time} <span className="opacity-60">Studio time</span>
    </span>
  );
}
