"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

const services = ["Brand", "Web Design", "Development", "Motion / 3D"];

// Web3Forms access key. Get a free key at https://web3forms.com (enter your
// email, they email you a key). Paste it between the quotes below.
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

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
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New enquiry from The Site Office website",
      from_name: "The Site Office",
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
      form.reset();
      setSelected([]);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full border-b border-line bg-transparent pb-3 pt-2 text-lg outline-none transition-colors placeholder:text-ash/60 focus:border-ink";

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

          {status === "error" && <p className="text-sm text-red-700">{error}</p>}

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
