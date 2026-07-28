import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Marquee from "@/components/Marquee";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Concept studio projects across brand, web design, and development: the standard of craft every AntCrow client build receives.",
  alternates: {
    canonical: "/work/",
    languages: { "en-NZ": "/work/", "x-default": "/work/" },
  },
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <header className="container-x pt-36 pb-16 md:pt-48 md:pb-24">
        <span className="label text-ash">(Concept work)</span>
        <AnimatedHeading
          as="h1"
          text="Work we're _proud_ of."
          className="mt-6 font-serif text-display-lg"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ash">
            Concept studio projects that show our range across commerce,
            trades, and culture: the level of craft every client build gets.
            Your brand could be next.
          </p>
        </Reveal>
      </header>

      {/* Grid */}
      <section className="container-x pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:gap-y-24">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "sm:mt-24" : ""}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-8">
        <Marquee items={["Your brand next", "Let's talk"]} separator="✦" />
      </section>
    </>
  );
}
