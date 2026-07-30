"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site.config";
import { track } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Brand",
  "Web Design",
  "Development",
  "Motion / 3D",
  "SEO & AI Search",
  "AI Concierge",
];

// Web3Forms access key. Get a free key at https://web3forms.com (enter the
// studio inbox address, they email you a key), then put it in .env.local:
//   NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-...
// The key is public by design (it only identifies which inbox to deliver to).
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people never see or fill this field. If it has a
    // value, a bot did — pretend to succeed and deliver nothing.
    if (String(data.get("botcheck") || "").length > 0) {
      setStatus("success");
      form.reset();
      setSelected([]);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setError(
        "The form isn't connected yet. Email us directly and we'll reply the same way."
      );
      return;
    }

    setStatus("submitting");
    setError(null);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New enquiry: ${String(data.get("name") || "Website visitor")}`,
      from_name: "AntCrow website",
      // Lets you hit "Reply" in your inbox and write straight back.
      replyto: String(data.get("email") || ""),
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      services: selected.join(", "),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success)
        throw new Error(json?.message || "Something went wrong. Please try again.");
      setStatus("success");
      track("generate_lead", { method: "contact_form" });
      form.reset();
      setSelected([]);
    } catch (err) {
      setStatus("error");
      track("contact_form_error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full border-b border-line bg-transparent pb-3 pt-2 text-lg outline-none transition-colors placeholder:text-ash focus:border-ink";

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[20rem] flex-col items-start justify-center"
        >
          <span className="label text-ash">(Message sent)</span>
          <h3 className="mt-4 font-serif text-display-md">Thank you.</h3>
          <p className="mt-4 max-w-md text-lg text-ash">
            Your message has landed. We'll be in touch within two business days,
            usually much sooner.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 text-sm underline underline-offset-4"
          >
            Send another →
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-10"
        >
          {/* Honeypot — hidden from people, tempting to bots */}
          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <div className="grid gap-10 sm:grid-cols-2">
            <label className="block">
              <span className="label text-ash">Your name *</span>
              <input
                name="name"
                required
                placeholder="Jane Doe"
                className={`mt-3 ${inputClass}`}
              />
            </label>
            <label className="block">
              <span className="label text-ash">Email *</span>
              <input
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className={`mt-3 ${inputClass}`}
              />
            </label>
          </div>

          <label className="block">
            <span className="label text-ash">Company</span>
            <input
              name="company"
              placeholder="Company Ltd."
              className={`mt-3 ${inputClass}`}
            />
          </label>

          <div>
            <span className="label text-ash">What do you need?</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((s) => {
                const active = selected.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(s)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      active
                        ? "border-ink bg-ink text-bone"
                        : "border-line text-ash hover:border-ink hover:text-ink"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="block">
            <span className="label text-ash">Tell us about the project *</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="A few lines about what you're building…"
              className={`mt-3 resize-none ${inputClass}`}
            />
          </label>

          {status === "error" && (
            <p className="text-sm text-flag">
              {error}{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-4"
              >
                Email us directly ↗
              </a>
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            data-cursor="Send"
            data-cursor-theme="dark"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-ink px-8 py-4 text-bone transition-colors hover:bg-ink/85 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
            <span className="transition-transform duration-500 ease-silk group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
