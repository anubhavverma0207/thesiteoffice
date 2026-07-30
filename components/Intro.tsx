"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site.config";
import IntroCritters from "@/components/IntroCritters";

/**
 * Cinematic landing intro.
 * Plays ONCE per browser session: the wordmark reveals full-screen and stays
 * until the visitor scrolls (or taps / presses a key). After it is dismissed we
 * remember it (sessionStorage) so navigating between pages, refreshing, or
 * landing directly on a deep page does not replay it. A new tab / new session
 * gets the moment again.
 *
 * The overlay is client-only (never in the static HTML), so a "seen" load shows
 * no flash of the intro at all.
 */
/**
 * ms before a scroll can dismiss the intro. Exists so a visitor who is
 * already scrolling as the page lands does not blink past the moment
 * entirely. Trimmed from 800ms because the reveal itself is now much
 * quicker, so holding them longer would just feel like a stuck page.
 */
const GUARD = 550;
const SEEN_KEY = "tso_intro_seen";

/**
 * ms since navigation after which the intro is abandoned.
 *
 * The overlay is client-only, so it cannot exist until React hydrates.
 * Measured first-appearance, with the critters following ~35ms behind:
 *
 *   fast desktop      404ms
 *   2x slower CPU    1231ms
 *   mid-range phone  4328ms
 *   slow phone       5444ms
 *
 * On the slower two, the visitor has already been reading the actual page
 * for seconds when a black screen drops over it and demands a scroll to
 * get back. That is not a cinematic opening, it is a page hijack.
 *
 * So if hydration was slow, the moment is simply skipped and marked as
 * seen. The flourish is worth having when it is instant and worth losing
 * when it is not. This is deliberately biased toward not interrupting
 * someone who is already reading.
 */
const MAX_HYDRATION_WAIT = 1200;

function scrollToTop() {
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: number, o?: object) => void } }).lenis;
  if (lenis) lenis.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
}

export default function Intro() {
  const [open, setOpen] = useState(false);
  const canDismiss = useRef(false);

  useEffect(() => {
    // Already seen this session? Never show it again.
    if (sessionStorage.getItem(SEEN_KEY) === "1") return;

    // Too late to be an opening. performance.now() here is ms since
    // navigation start, so it measures exactly how long hydration took.
    // Mark it seen so a later route change does not spring it either.
    if (performance.now() > MAX_HYDRATION_WAIT) {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
      return;
    }

    setOpen(true);
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
    // Remember for the rest of the session so it never replays.
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
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
          <IntroCritters />

{/* top meta (location only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="absolute inset-x-0 top-0 flex items-center justify-end container-x py-8 label text-bone/60"
          >
            <span className="hidden sm:block">{site.location}</span>
          </motion.div>

          {/* wordmark: rapid colour cycle (outer), reveal (inner) */}
          <motion.div
            initial={{ color: "#f5a623" }}
            animate={{ color: "#f5a623" }}
            transition={{
              color: { duration: 2.8, ease: "linear", repeat: Infinity, delay: 1.3 },
            }}
            id="intro-wordmark"
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
                      duration: 0.85,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.04 + i * 0.07,
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
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                >
                  {site.name}
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-8 label text-bone/55"
          >
            Digital design &amp; engineering studio
          </motion.p>

          {/* bottom scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
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
