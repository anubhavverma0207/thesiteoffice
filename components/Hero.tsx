"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site.config";

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 1, delay: 0.2 + i * 0.12, ease: [0.33, 1, 0.68, 1] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const lines: React.ReactNode[] = [
    "Websites that feel",
    <>
      utterly <em className="font-light italic">inevitable.</em>
    </>,
  ];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 pb-8 container-x md:pt-28 md:pb-10"
    >
      {/* Top meta row. CSS entrance: paints without waiting for hydration. */}
      <div
        className="fade-up flex items-start justify-between"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="label max-w-[12rem] text-ash">
          Digital design &amp; engineering studio
        </span>
        <span className="hidden label text-ash md:block">{site.location}</span>
      </div>

      {/* Headline. The scroll-linked parallax stays in Framer Motion, since
          it responds to input rather than running on load, and it does not
          hide anything at scroll position zero. */}
      <motion.div style={{ y: yTitle, opacity }}>
        <h1 className="font-serif text-display-lg">
          {lines.map((l, i) => (
            <span key={i} className="reveal-mask">
              <span
                className="hero-rise block"
                style={{ animationDelay: `${0.05 + i * 0.1}s` }}
              >
                {l}
              </span>
            </span>
          ))}
        </h1>

        {/* This block contains the LCP element. Delay kept deliberately
            short: every millisecond here is a millisecond of blank space
            for someone on a slow connection. */}
        <div
          className="fade-up mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="max-w-md text-base text-ash md:text-lg">
            {site.name} partners with ambitious companies to design and build
            websites that look like nothing else, and perform like everything
            should.
          </p>
          <Link
            href="/work"
            data-cursor="See work"
            className="group inline-flex items-center gap-3 self-start text-sm"
          >
            <span className="relative">
              Explore selected work
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ink transition-transform duration-500 ease-silk group-hover:scale-x-0" />
            </span>
            <span className="transition-transform duration-500 ease-silk group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div
        className="fade-up flex items-center justify-center"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="flex flex-col items-center gap-2 text-ash">
          <span className="label">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </div>
      </div>
    </section>
  );
}
