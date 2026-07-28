import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/data";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}. Tell us what you're building.`,
  alternates: {
    canonical: "/contact/",
    languages: { "en-NZ": "/contact/", "x-default": "/contact/" },
  },
};

export default function ContactPage() {
  return (
    <>
    <section className="container-x pt-36 pb-28 md:pt-48">
      <div className="grid gap-16 md:grid-cols-12">
        {/* Left: intro + details */}
        <div className="md:col-span-4">
          <span className="label text-ash">(Contact)</span>
          <AnimatedHeading
            as="h1"
            text="Let's start."
            className="mt-6 font-serif text-display-lg"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xs text-lg text-ash">
              Tell us about your project and we'll get back within two business
              days.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12 space-y-8">
              <div>
                <span className="label text-ash">Prefer email?</span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg underline underline-offset-4"
                >
                  Email us
                  <span aria-hidden>↗</span>
                </a>
              </div>
              <div>
                <span className="label text-ash">Reach</span>
                <p className="mt-2 text-lg">{site.location}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <div className="md:col-span-7 md:col-start-6">
          <ContactForm />
        </div>
      </div>
    </section>

    {/* Common questions, so nobody has to wait for a reply to learn the basics */}
    <section className="container-x border-t border-line py-20 md:py-28">
      <span className="label text-ash">(Before you ask)</span>
      <AnimatedHeading
        as="h2"
        text="Quick _answers._"
        className="mt-4 font-serif text-display-md"
      />
      <div className="mt-10 max-w-3xl">
        <FAQ items={faqs.slice(1, 4)} />
      </div>
    </section>
    </>
  );
}
