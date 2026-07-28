import type { Metadata } from "next";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { services, process, faqs, auditOffer } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand, web design, development, and motion: a full-service studio for ambitious digital products.",
  alternates: {
    canonical: "/services/",
    languages: { "en-NZ": "/services/", "x-default": "/services/" },
  },
};

const serviceImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=80",
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <header className="container-x pt-36 pb-20 md:pt-48 md:pb-28">
        <span className="label text-ash">(Services)</span>
        <AnimatedHeading
          as="h1"
          text="Everything you need to launch and _grow._"
          className="mt-6 font-serif text-display-lg text-balance"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ash">
            From the first sketch to the final deploy, we handle brand, design,
            and engineering under one roof. Built for humans to feel and for AI
            to cite, because your website has two audiences now.
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

      {/* Productized entry offer: the AI Visibility Audit */}
      <section
        data-cursor-theme="dark"
        className="border-t border-line bg-ink text-bone"
      >
        <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-3.5 py-1.5 label text-bone/80">
              <span className="h-1.5 w-1.5 animate-beacon rounded-full bg-flag" />
              Where to start
            </span>
            <AnimatedHeading
              as="h2"
              text="AI Visibility _Audit._"
              className="mt-6 font-serif text-display-md"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-bone/70">{auditOffer.blurb}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-sm text-bone/55">{auditOffer.turnaround}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/contact"
                data-cursor="Book"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3.5 text-sm text-ink transition-colors hover:bg-bone/85"
              >
                Book an audit <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <span className="label text-bone/45">What you get</span>
            <ul className="mt-5">
              {auditOffer.includes.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <li className="flex items-baseline gap-4 border-t border-bone/15 py-4 last:border-b">
                    <span className="label text-bone/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-bone/85">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x border-t border-line py-24 md:py-36">
        <div className="mb-14">
          <span className="label text-ash">(How we work · The AntCrow Method)</span>
          <AnimatedHeading
            as="h2"
            text="A clear path, every time."
            className="mt-4 font-serif text-display-md"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ash">
              We call it the AntCrow Method: many disciplined steps, one sharp
              eye on the whole. The ants build. The crow watches.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
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

      {/* FAQ */}
      <section className="container-x border-t border-line py-24 md:py-36">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="label text-ash">(Questions)</span>
            <AnimatedHeading
              as="h2"
              text="Asked, _answered._"
              className="mt-4 font-serif text-display-md"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xs text-ash">
                The things every client asks before we start. Anything else,
                just ask.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
