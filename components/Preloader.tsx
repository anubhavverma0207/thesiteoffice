"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site.config";

/**
 * Full-screen intro: a counter races 0 → 100 while the brand mark
 * fades in, then the panel slides away to reveal the site.
 * Runs once per session.
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("intro-seen")) {
      setDone(true);
      return;
    }

    let current = 0;
    const tick = () => {
      const step = current < 80 ? 3 : current < 95 ? 1 : 1;
      current = Math.min(100, current + step);
      setCount(current);
      if (current < 100) {
        timeout = window.setTimeout(tick, current < 80 ? 26 : 60);
      } else {
        window.setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("intro-seen", "1");
        }, 420);
      }
    };
    let timeout = window.setTimeout(tick, 200);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col justify-between bg-ink text-bone container-x py-8"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="label text-bone/60"
          >
            {site.name} · Studio
          </motion.div>

          <div className="flex items-end justify-between">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="font-serif text-[12vw] leading-none md:text-[7vw]"
            >
              {site.tagline.split(" ").slice(0, 3).join(" ")}
            </motion.span>
            <span className="font-sans text-2xl tabular-nums md:text-4xl">
              {count.toString().padStart(3, "0")}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
