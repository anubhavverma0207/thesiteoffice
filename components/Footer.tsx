"use client";

import Link from "next/link";
import { site } from "@/lib/site.config";
import Magnetic from "./Magnetic";
import LocalTime from "./LocalTime";
import { AnimatedHeading } from "./Reveal";

function scrollToTop() {
  const lenis = (
    window as unknown as { lenis?: { scrollTo: (t: number) => void } }
  ).lenis;
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bone" data-cursor-theme="dark">
      <div className="container-x pt-24 pb-10 md:pt-32">
        {/* Big CTA */}
        <div className="flex flex-col gap-10 border-b border-bone/15 pb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label text-bone/50">Have an idea?</span>
            <AnimatedHeading
              as="h2"
              text="Let's build something rare."
              className="mt-5 font-serif text-display-md text-balance"
            />
          </div>
          <Magnetic>
            <Link
              href="/contact"
              data-cursor="Start"
              className="flex h-32 w-32 items-center justify-center rounded-full border border-bone/40 text-center text-sm uppercase tracking-widelabel transition-colors hover:bg-bone hover:text-ink md:h-40 md:w-40"
            >
              Start a<br />project
            </Link>
          </Magnetic>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 pt-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl">{site.name}</div>
            <p className="mt-4 max-w-xs text-sm text-bone/60">{site.tagline}</p>
          </div>

          <div>
            <div className="label text-bone/60">Menu</div>
            <ul className="mt-5 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-bone/80 hover:text-bone">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-bone/80 hover:text-bone">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-bone/80 hover:text-bone">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="label text-bone/60">
              {site.social.length > 0 ? "Social" : "Explore"}
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {site.social.length > 0 ? (
                site.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-bone/80 hover:text-bone"
                    >
                      {s.label}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <Link href="/guides" className="text-bone/80 hover:text-bone">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/glossary"
                      className="text-bone/80 hover:text-bone"
                    >
                      Glossary
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare" className="text-bone/80 hover:text-bone">
                      Comparisons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools/website-cost-calculator"
                      className="text-bone/80 hover:text-bone"
                    >
                      Cost calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools/website-health-check"
                      className="text-bone/80 hover:text-bone"
                    >
                      Website health check
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides/website-cost-nz"
                      className="text-bone/80 hover:text-bone"
                    >
                      Website cost guide (NZ)
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <div className="label text-bone/60">Contact</div>
            <ul className="mt-5 space-y-2 text-sm text-bone/80">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-bone"
                >
                  Email us
                  <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bone">
                  Start a project
                </Link>
              </li>
              <li className="text-bone/50">Serving clients worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-bone/15 pt-6 text-xs text-bone/60 md:flex-row md:items-center md:justify-between">
          {/* The trademark claim lives here, in the legal line, so the
              logo itself can stay clean everywhere else. */}
          <span>
            {`© ${year} ${site.name}`}
            <sup className="align-super text-[0.8em]">™</sup>
            {". All rights reserved. · "}
            <Link href="/privacy" className="hover:text-bone/80">
              Privacy
            </Link>
          </span>
          <LocalTime className="text-bone/60" />
          <button
            onClick={scrollToTop}
            data-cursor="Top"
            className="self-start text-left text-bone/60 transition-colors hover:text-bone md:self-auto"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      {/* Giant wordmark: hollow type, fills on hover.
          The accessible name must contain the visible text. It previously
          read "Back to top" while the button visibly says "AntCrow",
          which fails WCAG 2.5.3 Label in Name and breaks voice control:
          someone saying "click AntCrow" would not activate it. */}
      <button
        onClick={scrollToTop}
        aria-label={`${site.name}, back to top`}
        data-cursor="Top"
        className="block w-full overflow-hidden pb-4 text-bone/90"
      >
        <span className="text-outline block select-none whitespace-nowrap text-center font-serif text-[12.5vw] leading-none tracking-tightest transition-colors duration-700 hover:text-bone hover:[-webkit-text-stroke-width:0px]">
          {site.name}
          {/* Same beak as the header, scaled to the display type */}
          <span
            aria-hidden
            className="ml-[0.05em] inline-block h-[0.17em] w-[0.26em] bg-crow align-[0.26em] [-webkit-text-stroke-width:0px]"
            style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
          />
        </span>
      </button>
    </footer>
  );
}
