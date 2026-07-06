"use client";

import { motion } from "framer-motion";

/**
 * Remounts on every route change, giving each page a soft rise-in.
 * Kept subtle so it layers cleanly under each page's own reveals.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
