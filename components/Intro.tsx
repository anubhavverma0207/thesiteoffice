"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site.config";

/**
 * Cinematic landing intro.
 * The wordmark reveals full-screen and STAYS until the user scrolls
 * (or taps / presses a key). On exit it forces the page back to the very
 * top so the visitor always lands on the hero, never a scrolled position.
 */
const GUARD = 800; // ms: let the reveal play before a scroll can dismiss

const COLORS = [
  "#ff3b30",
  "#ff9f0a",
  "#ffd60a",
  "#30d158",
  "#0a84ff",
  "#5e5ce6",
  "#bf5af2",
  "#ff3b30",
];

function scrollToTop() {
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: number, o?: object) => void } }).lenis;
  if (lenis) lenis.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
}

export default function Intro() {
  const [open, setOpen] = useState(true);
  const canDismiss = useRef(false);

  useEffect(() => {
    // Start at the top and lock scrolling while the intro is visible.
    scrollToTop();
    document.body.style.overflow = "hidden";

    const unlockAt = window.setTimeout(() => {
      canDismiss.current = true;
    }, GUARD);

    const dismiss = () => {
      if (canDismiss.current) setOpen(false);
    };
    window.addEventListener("wheel", dismiss, { passive: true });
    window.addEventListener("touchmove", dismiss, { passive: true });
    window.addEventListener("keydown", dismiss);
    window.addEventListener("click", dismiss);

    return () => {
      window.clearTimeout(unlockAt);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchmove", dismiss);
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("click", dismiss);
    };
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    scrollToTop();
    // Re-assert after Lenis' next frame so nothing snaps it back down.
    window.setTimeout(scrollToTop, 60);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {open && (
        <motion.div
          key="intro"
          data-cursor-theme="dark"
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center overflow-hidden bg-ink text-bone"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* top meta (location only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute inset-x-0 top-0 flex items-center justify-end container-x py-8 label text-bone/45"
          >
            <span className="hidden sm:block">{site.location}</span>
          </motion.div>

          {/* wordmark: rapid colour cycle (outer), reveal (inner) */}
          <motion.div
            initial={{ color: "#f3f0e9" }}
            animate={{ color: COLORS }}
            transition={{
              color: { duration: 2.8, ease: "linear", repeat: Infinity, delay: 1.3 },
            }}
            className="container-x w-full text-center font-serif leading-[0.95]"
          >
            {/* Mobile: stacked rows */}
            <h1 className="md:hidden">
              {site.name.split(" ").map((w, i) => (
                <span key={i} className="reveal-mask text-[20vw]">
                  <motion.span
                    className="block"
                    initial={{ y: "115%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2 + i * 0.12,
                    }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Desktop: single line */}
            <h1 className="hidden md:block">
              <span className="reveal-mask">
                <motion.span
                  className="block whitespace-nowrap text-[7.5vw]"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                >
                  {site.name}
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="mt-8 label text-bone/55"
          >
            Digital design &amp; engineering studio
          </motion.p>

          {/* bottom scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-bone/55"
          >
            <span className="label">Scroll to enter</span>
            <motion.span
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-lg"
            >
              ↓
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
