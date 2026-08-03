import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import { industries } from "@/lib/industries";
import { hreflangFor } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Industries We Build Websites For",
  description:
    "AntCrow builds websites for NZ builders, tradies, hospitality, and professional services: industry-specific design grounded in how each industry's customers actually choose.",
  alternates: {
    canonical: "/industries/",
    languages: hreflangFor("/industries/", "NZ"),
  },
};

export default function IndustriesHub() {
  return (
    <section className="container-x pt-36 pb-24 md:pt-48">
      <header className="max-w-3xl">
        <span className="label text-ash">(Industries)</span>
        <AnimatedHeading
          as="h1"
          text="Built for your _industry._"
          className="mt-6 font-serif text-display-md"
        />
        <Reveal immediate delay={0.15}>
          <p className="mt-8 text-lg text-ash">
            Every industry's customers choose differently. A homeowner vets
            a builder differently to how a diner picks a restaurant or a
            referral checks out a law firm. We design for how your
            customers actually decide.
          </p>
        </Reveal>
      </header>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {industries.map((ind, i) => (
          <Reveal key={ind.slug} delay={i * 0.06}>
            <Link
              href={`/industries/${ind.slug}`}
              data-cursor="Visit"
              className="group block h-full rounded-2xl border border-line p-8 transition-colors hover:border-ink/50"
            >
              <span className="label text-ash">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-serif text-3xl transition-transform duration-500 ease-silk group-hover:translate-x-1 md:text-4xl">
                {ind.name}
              </h2>
              <p className="mt-4 text-ash">{ind.intro.slice(0, 140)}…</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm">
                {ind.h1}
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-14 max-w-2xl text-ash">
          A different industry? The disciplines transfer.{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:text-ink"
          >
            Tell us what you do
          </Link>{" "}
          and we will tell you honestly whether we are the right studio for
          it.
        </p>
      </Reveal>
    </section>
  );
}
