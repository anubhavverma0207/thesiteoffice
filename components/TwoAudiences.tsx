"use client";

import Link from "next/link";
import { AnimatedHeading, Reveal } from "./Reveal";

/**
 * The thesis band: every website now has two audiences,
 * humans (who feel) and AI (which cites). This framing is the
 * studio's positioning, so it gets its own dark section.
 */
const columns = [
  {
    label: "Audience one",
    title: "Humans",
    text: "They decide in seconds and remember how it felt. Editorial design, motion, and typography that make your brand impossible to confuse with anyone else's.",
    points: ["Art direction", "Motion & interaction", "Story and craft"],
  },
  {
    label: "Audience two",
    title: "AI",
    text: "ChatGPT, Perplexity, and Google's AI answers read structure, not style. Machine-readable pages, structured data, and quotable answers put you in the response.",
    points: ["Structured data", "Quotable content", "Machine-readable HTML"],
  },
];

export default function TwoAudiences() {
  return (
    <section data-cursor-theme="dark" className="bg-ink text-bone">
      <div className="container-x py-24 md:py-36">
        <span className="label text-bone/50">(The thesis)</span>
        <AnimatedHeading
          as="h2"
          text="Your website has two audiences _now._"
          className="mt-5 max-w-4xl font-serif text-display-md text-balance"
        />
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-bone/70">
            Humans discover brands emotionally. AI discovers brands
            structurally. We build for both: sites made for humans to feel
            and for AI to cite.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          {columns.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="border-t border-bone/20 pt-8">
                <span className="label text-bone/45">{c.label}</span>
                <h3 className="mt-3 font-serif text-4xl md:text-5xl">
                  {c.title}
                  {i === 1 && (
                    <span className="ml-3 inline-block h-2.5 w-2.5 rounded-full bg-flag align-middle" />
                  )}
                </h3>
                <p className="mt-5 max-w-md text-bone/70">{c.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-bone/25 px-4 py-1.5 text-sm text-bone/75"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <Link
            href="/services"
            data-cursor="Services"
            className="group mt-14 inline-flex items-center gap-3 text-sm text-bone/85 hover:text-bone"
          >
            <span className="relative">
              How we build for both
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-flag transition-all duration-500 ease-silk group-hover:w-full" />
            </span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
