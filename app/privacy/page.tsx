import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedHeading, Reveal } from "@/components/Reveal";
import { site } from "@/lib/site.config";
import { hreflangFor } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How AntCrow collects, uses, and protects personal information: contact form details, analytics, and your rights under the New Zealand Privacy Act 2020.",
  alternates: {
    canonical: "/privacy/",
    languages: hreflangFor("/privacy/"),
  },
};

const sections = [
  {
    heading: "What we collect",
    body: "When you use the contact form we collect the details you choose to give us: your name, email address, company, the services you are interested in, and your message. When you browse the site we collect standard usage information through analytics tools (pages visited, approximate location, device and browser type). Questions typed into the Ask the Crow assistant are processed to generate an answer and may be counted in aggregate; do not include sensitive personal information in them.",
  },
  {
    heading: "How we use it",
    body: "Contact details are used to respond to your enquiry and discuss your project, nothing else. Usage information is used in aggregate to understand how the site performs and improve it. We do not sell personal information, and we do not use your information for third-party advertising.",
  },
  {
    heading: "Who processes it",
    body: "Form submissions are delivered to our studio inbox by Web3Forms. Site analytics are provided by Google Analytics and Microsoft Clarity, which set cookies or similar identifiers and process usage data on our behalf; their processing is governed by their own privacy policies. Our website is hosted on Render.",
  },
  {
    heading: "Cookies",
    body: "The site uses analytics cookies to measure visits and improve the experience. You can block or clear cookies in your browser settings at any time; the site keeps working without them.",
  },
  {
    heading: "How long we keep it",
    body: "Enquiry emails are kept for as long as needed to manage our relationship with you, then deleted. Aggregate analytics data is retained according to the analytics providers' standard retention settings.",
  },
  {
    heading: "Your rights",
    body: "Under the New Zealand Privacy Act 2020 you may ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Email us and we will act on it promptly. If you are not satisfied with our response, you may complain to the Office of the Privacy Commissioner (privacy.org.nz).",
  },
];

export default function PrivacyPage() {
  return (
    <article className="container-x pt-36 pb-24 md:pt-48">
      <header className="max-w-3xl">
        <span className="label text-ash">(Privacy · Updated July 2026)</span>
        <AnimatedHeading
          as="h1"
          text="Privacy, _plainly._"
          className="mt-6 font-serif text-display-md"
        />
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-ash">
            This statement explains what personal information {site.name}{" "}
            collects through this website, why, and the rights you have over
            it. Written to be read, not skimmed past.
          </p>
        </Reveal>
      </header>

      <div className="mt-14 max-w-3xl space-y-12">
        {sections.map((s) => (
          <Reveal key={s.heading}>
            <section>
              <h2 className="font-serif text-2xl md:text-3xl">{s.heading}</h2>
              <p className="mt-4 leading-relaxed text-ash">{s.body}</p>
            </section>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-14 max-w-3xl border-t border-line pt-8 text-ash">
          Questions about any of this?{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4 hover:text-ink"
          >
            Email us
          </a>{" "}
          or use the{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:text-ink"
          >
            contact form
          </Link>
          .
        </p>
      </Reveal>
    </article>
  );
}
