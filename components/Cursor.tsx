"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * A custom, magnetic-feeling cursor.
 * - A small dot that tracks the pointer instantly.
 * - A larger ring that lags behind with spring physics.
 * - Grows and shows a label when hovering interactive elements.
 * - Theme-aware: over any element marked [data-cursor-theme="dark"]
 *   (footer, dark bands, black buttons) it flips to a light colour.
 */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });

  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;

      const el = target?.closest(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;

      if (el) {
        setHovering(true);
        setLabel(el.getAttribute("data-cursor"));
      } else {
        setHovering(false);
        setLabel(null);
      }

      setDark(!!target?.closest('[data-cursor-theme="dark"]'));
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  const fg = dark ? "#f3f0e9" : "#0b0b0b";
  const border = dark ? "rgba(243,240,233,0.85)" : "rgba(11,11,11,0.7)";
  const labelColor = dark ? "#0b0b0b" : "#f3f0e9";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90] block">
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? (hovering ? 0 : 1) : 0,
          backgroundColor: fg,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 76 : 34,
          height: hovering ? 76 : 34,
          opacity: visible ? 1 : 0,
          borderColor: border,
          backgroundColor: hovering ? fg : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              style={{ color: labelColor }}
              className="text-[0.6rem] uppercase tracking-widelabel"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
