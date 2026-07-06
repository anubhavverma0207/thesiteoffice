"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Reveal } from "./Reveal";

/**
 * Dark band of client words. One oversized quote at a time,
 * cycled by tap/click — works equally well with a thumb or a cursor.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // No unverified praise: the section only exists once real client
  // quotes are added to lib/data.ts.
  if (testimonials.length === 0) return null;

  const t = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section
      data-cursor-theme="dark"
      className="bg-ink text-bone"
      aria-label="Client testimonials"
    >
      <div className="container-x py-24 md:py-36">
        <Reveal>
          <div className="flex items-center justify-between">
            <span className="label text-bone/50">(Kind words)</span>
            <span className="label text-bone/50">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        <button
          onClick={next}
          data-cursor="Next"
          aria-label="Show next testimonial"
          className="mt-10 block w-full text-left md:mt-14"
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="max-w-4xl font-serif text-2xl leading-snug text-balance sm:text-3xl md:text-5xl md:leading-[1.15]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-bone/60">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-flag" />
                <span className="text-bone">{t.author}</span>
                <span>·</span>
                <span>
                  {t.role}, {t.project}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </button>

        <div className="mt-12 flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ease-silk ${
                i === index ? "w-8 bg-flag" : "w-2 bg-bone/25 hover:bg-bone/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
