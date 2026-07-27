import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import LabExhibits from "@/components/LabExhibits";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "The AntCrow Lab: interaction experiments from our studio. Autonomous critters, magnetic buttons, type in motion. Everything here runs in production on this site.",
  alternates: { canonical: "/lab/" },
};

export default function LabPage() {
  return (
    <>
      <header className="container-x pt-36 pb-16 md:pt-48 md:pb-20">
        <span className="label text-ash">(The Lab)</span>
        <AnimatedHeading
          as="h1"
          text="Where we _play._"
          className="mt-6 font-serif text-display-lg"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ash">
            Experiments from the studio floor. Nothing here is a mockup:
            every exhibit is live production code from this site, which is
            the point. If you like how it feels, we can build it for you.
          </p>
        </Reveal>
      </header>

      <section className="container-x pb-24">
        <LabExhibits />
      </section>

      <section className="container-x border-t border-line py-16 text-center md:py-20">
        <Reveal>
          <p className="font-serif text-2xl md:text-3xl">
            Want this level of care on your own site?
          </p>
          <Link
            href="/contact"
            data-cursor="Start"
            data-cursor-theme="dark"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-line py-8">
        <Marquee items={["Experiment", "Refine", "Ship"]} separator="✦" />
      </section>
    </>
  );
}
