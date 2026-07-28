import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Web Design Across New Zealand & Australia",
  description:
    "AntCrow designs and builds custom websites from Auckland for businesses across New Zealand and Australia: Auckland, Wellington, Christchurch, Sydney, and beyond.",
  alternates: {
    canonical: "/locations/",
    languages: { "en-NZ": "/locations/", "x-default": "/locations/" },
  },
};

export default function LocationsHub() {
  return (
    <section className="container-x pt-36 pb-24 md:pt-48">
      <header className="max-w-3xl">
        <span className="label text-ash">(Locations)</span>
        <AnimatedHeading
          as="h1"
          text="Where we _work._"
          className="mt-6 font-serif text-display-md"
        />
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ash">
            One studio, serving clients worldwide, with dedicated coverage
            across New Zealand and Australia. Most projects run remotely
            with video working sessions in your hours; the craft is
            identical wherever you are.
          </p>
        </Reveal>
      </header>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {locations.map((l, i) => (
          <Reveal key={l.slug} delay={i * 0.06}>
            <Link
              href={`/locations/${l.slug}`}
              data-cursor="Visit"
              className="group block h-full rounded-2xl border border-line p-8 transition-colors hover:border-ink/50"
            >
              <span className="label text-ash">{l.country}</span>
              <h2 className="mt-3 font-serif text-3xl transition-transform duration-500 ease-silk group-hover:translate-x-1 md:text-4xl">
                {l.city}
              </h2>
              <p className="mt-4 text-ash">{l.intro.slice(0, 150)}…</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm">
                Web design in {l.city}
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
          Somewhere else? We work with businesses across both countries,
          from Hamilton and Tauranga to Melbourne and Brisbane.{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:text-ink"
          >
            Tell us where you are
          </Link>{" "}
          and what you are building.
        </p>
      </Reveal>
    </section>
  );
}
