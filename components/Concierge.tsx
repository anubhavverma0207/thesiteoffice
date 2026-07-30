"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { localAnswer, fallbackAnswer, suggestions } from "@/lib/concierge";
import { site } from "@/lib/site.config";
import { track } from "@/lib/analytics";

/**
 * Ask the Crow: the studio concierge.
 * Bespoke, branded, never a generic chat bubble. Answers instantly from
 * the studio's own notes; if NEXT_PUBLIC_CONCIERGE_URL is set it asks a
 * live model instead (Cloudflare Worker proxy) and falls back gracefully.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_CONCIERGE_URL ?? "";

type Msg = { role: "you" | "crow"; text: string };

function CrowGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="14" cy="16" r="9" fill="currentColor" />
      <path d="M21 13 L31 15.5 L21 18 Z" fill="#f5a623" />
      <circle cx="16.5" cy="13.5" r="1.8" fill="#f3f0e9" />
      <circle cx="17" cy="13.8" r="0.9" fill="#0b0b0b" />
    </svg>
  );
}

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [atFooter, setAtFooter] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  /**
   * Stand down at the footer.
   * ----------------------------------------------------------------
   * The launcher is position: fixed, so on a phone it sat directly on
   * top of the giant footer wordmark, and on shorter screens over the
   * footer links as well. A floating button covering navigation is a
   * genuine obstruction, not only an aesthetic problem.
   *
   * Rather than nudging the offset and hoping, the launcher withdraws
   * once the footer is actually on screen. The footer contains its own
   * contact route, so nothing is lost by getting out of the way there.
   *
   * The observer is attached to the footer element rather than to a
   * scroll position, so it keeps working regardless of page length.
   */
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const io = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      // Fire a little before the footer's top edge arrives, so the
      // button is already gone rather than fading out under a thumb.
      { rootMargin: "0px 0px -12% 0px", threshold: 0 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  // Greet once when first opened
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "crow",
          text: "Caw. I am the studio crow. Ask me what we do, how we work, or what things cost. A human reads everything sent through the contact page; I handle the quick questions.",
        },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, thinking]);

  async function ask(raw: string) {
    const question = raw.trim();
    if (!question || thinking) return;
    setInput("");
    setMessages((m) => [...m, { role: "you", text: question }]);
    setThinking(true);
    track("concierge_question");

    let reply: string | null = null;

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: question,
            history: messages.slice(-6),
          }),
        });
        if (res.ok) {
          const json = (await res.json()) as { reply?: string };
          reply = json.reply ?? null;
        }
      } catch {
        reply = null; // fall through to local notes
      }
    }

    if (!reply) reply = localAnswer(question) ?? fallbackAnswer;

    // A beat of "thought" so answers feel considered, not canned
    const delay = ENDPOINT ? 0 : 450 + Math.min(900, question.length * 18);
    window.setTimeout(() => {
      setThinking(false);
      setMessages((m) => [...m, { role: "crow", text: reply as string }]);
    }, delay);
  }

  const asked = new Set(
    messages.filter((m) => m.role === "you").map((m) => m.text)
  );
  const chips = suggestions.filter((s) => !asked.has(s)).slice(0, 3);

  return (
    <>
      {/* Launcher */}
      <AnimatePresence>
        {!open && !atFooter && (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => {
              setOpen(true);
              track("concierge_open");
            }}
            data-cursor="Caw?"
            aria-label="Ask the Crow: open the studio concierge"
            className="group fixed bottom-5 right-5 z-[55] flex items-center gap-3 rounded-full border border-bone/25 bg-ink py-3 pl-4 pr-5 text-bone shadow-lg shadow-ink/25 transition-transform duration-300 ease-silk hover:-translate-y-0.5 md:bottom-8 md:right-8"
          >
            <CrowGlyph className="h-6 w-6 text-bone" />
            <span className="text-sm">Ask the Crow</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            data-cursor-theme="dark"
            className="fixed inset-x-3 bottom-3 z-[55] flex max-h-[80vh] flex-col overflow-hidden rounded-2xl border border-bone/15 bg-ink text-bone shadow-2xl shadow-ink/40 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[400px]"
            role="dialog"
            aria-label="Ask the Crow, studio concierge"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-bone/15 px-5 py-4">
              <div className="flex items-center gap-3">
                <CrowGlyph className="h-7 w-7 text-bone" />
                <div>
                  <div className="font-serif text-lg leading-tight">
                    Ask the Crow
                  </div>
                  <div className="text-[0.7rem] uppercase tracking-widelabel text-bone/60">
                    {ENDPOINT ? "Studio concierge" : "Instant studio notes"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close the concierge"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/20 text-bone/70 transition-colors hover:border-bone/50 hover:text-bone"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              data-lenis-prevent
              className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={m.role === "you" ? "flex justify-end" : "flex"}
                >
                  <div
                    className={
                      m.role === "you"
                        ? "max-w-[85%] rounded-2xl rounded-br-md bg-bone px-4 py-2.5 text-sm text-ink"
                        : "max-w-[85%] rounded-2xl rounded-bl-md border border-bone/15 px-4 py-2.5 text-sm text-bone/90"
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {thinking && (
                <div className="flex">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-bone/15 px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ opacity: [0.25, 1, 0.25] }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                          delay: d * 0.18,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-flag"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {chips.length > 0 && (
              <div className="flex flex-wrap gap-2 px-5 pb-3">
                {chips.map((s) => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    className="rounded-full border border-bone/20 px-3.5 py-1.5 text-xs text-bone/70 transition-colors hover:border-bone/50 hover:text-bone"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="border-t border-bone/15 p-3"
            >
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, process, pricing…"
                  aria-label="Your question"
                  className="w-full rounded-full border border-bone/20 bg-transparent px-4 py-2.5 text-sm text-bone outline-none transition-colors placeholder:text-bone/60 focus:border-bone/50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || thinking}
                  aria-label="Send question"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bone text-ink transition-opacity disabled:opacity-40"
                >
                  →
                </button>
              </div>
              <p className="mt-2 px-2 text-[0.65rem] text-bone/60">
                Quick answers from the studio&apos;s notes. Something bigger?{" "}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="underline underline-offset-2 hover:text-bone/70"
                >
                  Talk to a human
                </Link>{" "}
                or{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline underline-offset-2 hover:text-bone/70"
                >
                  email us
                </a>
                .
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
