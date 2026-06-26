import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Marquee from "@/components/Marquee";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects: brand, web design, and development for ambitious companies.",
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <header className="container-x pt-36 pb-16 md:pt-48 md:pb-24">
        <span className="label text-ash">(Selected work · 2023 / 2025)</span>
        <AnimatedHeading
          as="h1"
          text="Work we're proud of."
          className="mt-6 font-serif text-display-lg"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ash">
            A selection of recent collaborations across commerce, property,
            finance, and culture. Each one designed and built from the ground
            up.
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
