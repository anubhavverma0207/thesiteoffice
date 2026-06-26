import type { Metadata } from "next";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { services, process } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand, web design, development, and motion: a full-service studio for ambitious digital products.",
};

const serviceImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <header className="container-x pt-36 pb-20 md:pt-48 md:pb-28">
        <span className="label text-ash">(Services)</span>
        <AnimatedHeading
          as="h1"
          text="Everything you need to launch and grow."
          className="mt-6 font-serif text-display-lg text-balance"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ash">
            From the first sketch to the final deploy, we handle brand, design,
            and engineering under one roof, so nothing gets lost in translation.
          </p>
        </Reveal>
      </header>

      {/* Service blocks */}
      <section>
        {services.map((s, i) => (
          <div key={s.no} className="border-t border-line">
            <div className="container-x grid items-center gap-10 py-16 md:grid-cols-12 md:py-24">
              <div className="md:col-span-5">
                <span className="font-serif text-7xl text-line md:text-8xl">
                  {s.no}
                </span>
                <AnimatedHeading
                  as="h2"
                  text={s.title}
                  className="mt-2 font-serif text-display-md"
                />
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-md text-lg text-ash">{s.blurb}</p>
                </Reveal>
                <Reveal delay={0.15}>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-line px-4 py-2 text-sm text-ash"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ParallaxImage
                  src={serviceImages[i]}
                  alt={s.title}
                  className="aspect-[5/4] w-full"
                  amount={10}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="container-x border-t border-line py-24 md:py-36">
        <div className="mb-14">
          <span className="label text-ash">(How we work)</span>
          <AnimatedHeading
            as="h2"
            text="A clear path, every time."
            className="mt-4 font-serif text-display-md"
          />
        </div>
        <div className="grid gap-px md:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 border-t border-line pt-6">
                <span className="label text-ash">{step.no}</span>
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="text-sm text-ash">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
