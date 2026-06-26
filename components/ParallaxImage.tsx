"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Image that drifts vertically as it passes through the viewport.
 * Uses an oversized inner image so the parallax never reveals edges.
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  amount = 14,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        style={{ y }}
        className="absolute inset-0 h-[128%] w-full -translate-y-[12%] object-cover"
      />
    </div>
  );
}
