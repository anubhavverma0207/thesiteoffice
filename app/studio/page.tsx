import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import Marquee from "@/components/Marquee";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Studio",
  description: `Meet ${site.name}, a design and engineering studio building extraordinary websites.`,
};

const values = [
  {
    no: "01",
    title: "Craft over speed",
    text: "We'd rather do less, better. Every detail is deliberate, because the details are the design.",
  },
  {
    no: "02",
    title: "Design and code, together",
    text: "No hand-off gap. Designers and engineers sit side by side from day one, so the build matches the vision.",
  },
  {
    no: "03",
    title: "Partners, not vendors",
    text: "We invest in your business like it's our own, and stay long after launch to help it grow.",
  },
];

const disciplines = ["Design", "Engineering", "Motion", "Strategy"];

export default function StudioPage() {
  return (
    <>
      {/* Header */}
      <header className="container-x pt-36 pb-16 md:pt-48 md:pb-20">
        <span className="label text-ash">(The studio)</span>
        <AnimatedHeading
          as="h1"
          text="A studio built on craft, curiosity, and care."
          className="mt-6 font-serif text-display-lg text-balance"
        />
      </header>

      {/* Wide image */}
      <Reveal>
        <ParallaxImage
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
          alt="Inside the studio"
          className="aspect-[16/9] w-full bg-line"
          amount={12}
          priority
        />
      </Reveal>

      {/* Manifesto */}
      <section className="container-x py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="label text-ash">(Our belief)</span>
          </div>
          <div className="md:col-span-8">
            <AnimatedHeading
              as="p"
              text="We started this studio because the web was full of forgettable websites. We make the opposite: sites with a point of view, engineered to last and designed to be felt."
              className="font-serif text-3xl leading-snug text-balance md:text-5xl md:leading-[1.15]"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x pb-24">
        <div className="grid gap-px md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.no} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 border-t border-line pt-6 md:pr-8">
                <span className="label text-ash">{v.no}</span>
                <h3 className="font-serif text-3xl">{v.title}</h3>
                <p className="text-ash">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* People */}
      <section className="container-x py-24 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="label text-ash">(The people)</span>
            <AnimatedHeading
              as="h2"
              text="Senior people, on every project."
              className="mt-4 font-serif text-display-md"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg text-ash">
                Every project is led by senior people. The designers and
                engineers who pitch your project are the same people who build
                it. No layers of account managers, no juniors learning on your
                budget, no work handed off to strangers.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {disciplines.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-line px-4 py-2 text-sm text-ash"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/contact"
                data-cursor="Say hello"
                className="group mt-10 inline-flex items-center gap-3 text-sm"
              >
                <span className="relative">
                  Work with us
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 ease-silk group-hover:w-full" />
                </span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
              alt="The studio at work"
              className="aspect-[4/5] w-full bg-line"
              amount={10}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-8">
        <Marquee items={["Craft", "Curiosity", "Care"]} separator="✦" />
      </section>
    </>
  );
}
