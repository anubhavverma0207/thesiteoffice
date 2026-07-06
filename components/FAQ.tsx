"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Faq } from "@/lib/data";
import { Reveal } from "./Reveal";

/**
 * Accordion of plain questions and plain answers.
 * The same copy is emitted as FAQPage JSON-LD by the pages that use it,
 * so search engines and AI assistants can quote it directly.
 */
export default function FAQ({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 0.04}>
            <li className="border-t border-line last:border-b">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                data-cursor={isOpen ? "Close" : "Open"}
                className="group flex w-full items-baseline justify-between gap-6 py-6 text-left md:py-7"
              >
                <span
                  className={`font-serif text-xl transition-colors duration-300 md:text-2xl ${
                    isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"
                  }`}
                >
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`shrink-0 text-2xl leading-none ${
                    isOpen ? "text-flag" : "text-ash"
                  }`}
                  aria-hidden
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 text-ash md:text-lg">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </Reveal>
        );
      })}
    </ul>
  );
}
