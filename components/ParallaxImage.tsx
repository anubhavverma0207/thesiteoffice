"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Image that drifts vertically as it passes through the viewport.
 * Uses an oversized inner image so the parallax never reveals edges.
 *
 * Responsive delivery
 * ------------------------------------------------------------------
 * This previously rendered a bare <img src>, which meant every visitor
 * downloaded whatever width the source URL happened to specify. On the
 * homepage that was three images at 547KB, 389KB and 342KB, served in
 * full to phones displaying them a few hundred pixels wide. An audit
 * flagged roughly 850KB of that as waste on a mobile viewport.
 *
 * We cannot use next/image here: the site is a static export with no
 * image optimisation server. What we can do is ask the source CDN for
 * the right size. Unsplash accepts a `w` query parameter, so we rewrite
 * the URL across a set of widths and let the browser pick using
 * `sizes`. That is the same mechanism next/image uses, minus the server.
 *
 * `sizes` must describe the CSS layout width, not the image's natural
 * width. Get it wrong and the browser silently picks badly. The default
 * below assumes the common case in this codebase: full width on mobile,
 * roughly half the viewport once the layout goes two-column.
 */

const WIDTHS = [480, 768, 1080, 1440, 1920];

/** Rewrite a CDN URL to a specific width, if it supports the parameter. */
function atWidth(src: string, w: number) {
  // Only rewrite hosts we know accept a width parameter. Anything else is
  // returned untouched rather than corrupted with a param it ignores.
  if (!/images\.unsplash\.com/.test(src)) return null;
  try {
    const u = new URL(src);
    u.searchParams.set("w", String(w));
    return u.toString();
  } catch {
    return null;
  }
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  amount = 14,
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
  priority?: boolean;
  /** CSS layout width of the image. Override when the layout differs. */
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  const srcSet =
    WIDTHS.map((w) => {
      const u = atWidth(src, w);
      return u ? `${u} ${w}w` : null;
    })
      .filter(Boolean)
      .join(", ") || undefined;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        // fetchPriority high on the hero image tells the browser this is
        // the likely LCP candidate and to stop treating it as one request
        // among many.
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        style={{ y }}
        className="absolute inset-0 h-[128%] w-full -translate-y-[12%] object-cover"
      />
    </div>
  );
}
