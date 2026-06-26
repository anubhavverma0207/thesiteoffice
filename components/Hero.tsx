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

  const lines = ["Websites that feel", "utterly inevitable."];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 pb-10 container-x"
    >
      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex items-start justify-between"
      >
        <span className="label max-w-[12rem] text-ash">
          Digital design &amp; engineering studio
        </span>
        <span className="hidden label text-ash md:block">{site.location}</span>
      </motion.div>

      {/* Headline */}
      <motion.div style={{ y: yTitle, opacity }}>
        <h1 className="font-serif text-display-lg">
          {lines.map((l, i) => (
            <span key={i} className="reveal-mask">
              <motion.span
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className="block"
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
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
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="flex items-center justify-center"
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
      </motion.div>
    </section>
  );
}
