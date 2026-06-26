"use client";

import Link from "next/link";
import { site } from "@/lib/site.config";
import Magnetic from "./Magnetic";
import { AnimatedHeading } from "./Reveal";

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
            <div className="label text-bone/40">Menu</div>
            <ul className="mt-5 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-bone/80 hover:text-bone">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label text-bone/40">Social</div>
            <ul className="mt-5 space-y-2 text-sm">
              {site.social.map((s) => (
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
              ))}
            </ul>
          </div>

          <div>
            <div className="label text-bone/40">Contact</div>
            <ul className="mt-5 space-y-2 text-sm text-bone/80">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-bone">
                  {site.email}
                </a>
              </li>
              <li>{site.phone}</li>
              <li className="text-bone/50">{site.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-bone/15 pt-6 text-xs text-bone/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.legalName}. All rights reserved.
          </span>
          <span className="label text-bone/35">Designed &amp; built in-house</span>
        </div>
      </div>
    </footer>
  );
}
