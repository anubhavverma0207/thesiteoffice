"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site.config";
import Magnetic from "./Magnetic";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape + lock background scroll while the overlay is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open
            ? "bg-bone/80 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            data-cursor="Home"
            data-cursor-theme={open ? "dark" : undefined}
            className={`font-serif text-2xl tracking-tightest transition-colors duration-300 md:text-3xl ${
              open ? "text-bone" : "text-ink"
            }`}
          >
            {site.name}
            <sup className="ml-0.5 align-super text-[0.5em]">®</sup>
          </Link>

          <div className="flex items-center gap-5 md:gap-7">
            {!open && (
              <Magnetic>
                <Link
                  href="/contact"
                  data-cursor="Let's talk"
                  data-cursor-theme="dark"
                  className="hidden rounded-full bg-ink px-5 py-2.5 text-sm text-bone transition-colors hover:bg-ink/85 sm:inline-flex"
                >
                  Start a project
                </Link>
              </Magnetic>
            )}

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              data-cursor-theme={open ? "dark" : undefined}
              className={`flex items-center gap-3 text-xs uppercase tracking-widelabel transition-colors duration-300 ${
                open ? "text-bone" : "text-ink"
              }`}
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 block h-px w-6 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-6 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-cursor-theme="dark"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink text-bone container-x pt-24 pb-10 md:pt-32"
          >
            <nav className="mt-6 flex flex-col md:mt-10">
              {[...site.nav, { label: "Start a project", href: "/contact" }].map(
                (item, i) => (
                  <div key={item.href} className="overflow-hidden pb-[0.12em] -mb-[0.12em]">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.28 + i * 0.07,
                        duration: 0.8,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline gap-4 py-1 md:gap-6"
                      >
                        <span className="text-xs text-bone/40 md:text-sm">
                          0{i + 1}
                        </span>
                        <span className="font-serif text-[15vw] leading-[1.04] transition-opacity duration-300 group-hover:opacity-50 md:text-[8vw]">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                )
              )}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="grid grid-cols-2 gap-8 border-t border-bone/15 pt-8 md:grid-cols-4"
            >
              <div>
                <div className="label text-bone/40">Email</div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-sm text-bone/85 hover:text-bone"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <div className="label text-bone/40">Studios</div>
                <p className="mt-2 text-sm text-bone/85">{site.location}</p>
              </div>
              <div className="col-span-2">
                <div className="label text-bone/40">Social</div>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                  {site.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-bone/85 hover:text-bone"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
