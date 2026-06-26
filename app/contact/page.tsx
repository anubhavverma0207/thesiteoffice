import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}. Tell us what you're building.`,
};

export default function ContactPage() {
  return (
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
                <span className="label text-ash">Email</span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-lg underline underline-offset-4"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <span className="label text-ash">Phone</span>
                <p className="mt-2 text-lg">{site.phone}</p>
              </div>
              <div>
                <span className="label text-ash">Studios</span>
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
  );
}
