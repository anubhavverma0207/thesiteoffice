import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import { Reveal, AnimatedHeading } from "@/components/Reveal";
import { projects, services } from "@/lib/data";
import { site } from "@/lib/site.config";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Marquee */}
      <section className="border-y border-line py-8">
        <Marquee
          items={["Brand", "Web Design", "Development", "Motion", "Strategy"]}
        />
      </section>

      {/* Manifesto */}
      <section className="container-x py-24 md:py-40">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="label text-ash">(About the studio)</span>
            <AnimatedHeading
              as="h2"
              text="We are a studio with outsized ambition, obsessed with craft, allergic to the generic."
              className="mt-6 font-serif text-display-md text-balance"
            />
          </div>
          <div className="flex flex-col justify-end gap-8 md:col-span-4 md:col-start-9">
            <Reveal>
              <p className="text-lg text-ash">
                Every brand deserves a website that feels considered down to the
                last pixel. We blend editorial design, fluid motion, and solid
                engineering to build digital experiences people remember.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/studio"
                data-cursor="About"
                className="group inline-flex items-center gap-3 text-sm"
              >
                <span className="relative">
                  Meet the studio
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 ease-silk group-hover:w-full" />
                </span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-x py-12 md:py-20">
        <div className="mb-12 flex items-end justify-between border-b border-line pb-6">
          <div>
            <span className="label text-ash">(Selected work)</span>
            <h2 className="mt-3 font-serif text-display-md">Recent projects</h2>
          </div>
          <Link
            href="/work"
            data-cursor="All work"
            className="hidden text-sm md:inline-flex md:items-center md:gap-2"
          >
            View all <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "sm:mt-24" : ""}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:hidden">
          <Link href="/work" className="text-sm underline underline-offset-4">
            View all work →
          </Link>
        </div>
      </section>

      {/* Services preview */}
      <section className="container-x py-24 md:py-40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="label text-ash">(What we do)</span>
            <AnimatedHeading
              as="h2"
              text="Capabilities"
              className="mt-4 font-serif text-display-md"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xs text-ash">
                Four disciplines, one team. We take you from a blank page to a
                living, breathing website.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ul>
              {services.map((s, i) => (
                <Reveal key={s.no} delay={i * 0.05}>
                  <li className="group flex items-start gap-6 border-t border-line py-8 transition-colors last:border-b hover:bg-ink/[0.02]">
                    <span className="label pt-2 text-ash">{s.no}</span>
                    <div className="flex-1">
                      <h3 className="font-serif text-3xl transition-transform duration-500 ease-silk group-hover:translate-x-2 md:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-md text-ash">{s.blurb}</p>
                    </div>
                    <span className="hidden pt-3 text-xl text-ash transition-all duration-500 ease-silk group-hover:translate-x-1 group-hover:text-ink md:block">
                      →
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <Link
                href="/services"
                data-cursor="Services"
                className="mt-10 inline-flex items-center gap-3 text-sm"
              >
                <span>Explore all services</span>
                <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing marquee */}
      <section className="border-t border-line py-8">
        <Marquee
          items={[`Build with ${site.name}`, "Let's make it", "Unforgettable"]}
          separator="·"
        />
      </section>
    </>
  );
}
