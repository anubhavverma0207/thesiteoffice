import { Reveal } from "./Reveal";

/**
 * Long-form content renderer.
 * ------------------------------------------------------------------
 * Guides are stored as blocks rather than as HTML strings so that the
 * same content can be rendered to a page, summarised into structured
 * data, and emitted as plain text for machine-readable surfaces
 * without three copies drifting apart.
 *
 * The block set is deliberately small. Every type here exists because
 * it correlates with being retrieved and cited:
 *
 *   stat    Pages carrying many concrete data points are cited far
 *           more than pages of adjectives. Each stat carries its own
 *           source, because an unsourced number is a liability.
 *   quote   Named, credentialed quotes measurably outperform
 *           anonymous assertion.
 *   table   Comparison intent is answered better by a table than by
 *           prose, and tables survive extraction into an answer.
 *   h2/p    Sections of roughly 120 to 180 words between headings are
 *           the sweet spot in the citation data: long enough that a
 *           retrieved chunk stands alone, short enough to stay one
 *           idea. Aim for that when writing, not for a word count.
 *
 * Headings are written as topical statements rather than as questions.
 * The largest available dataset finds question-phrased headings are
 * mildly counterproductive for citation, despite being the single most
 * repeated piece of AEO advice. Use a question heading only where a
 * reader genuinely searches that way.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
      /** Right-align numeric columns by index */
      numeric?: number[];
    }
  | { type: "callout"; title: string; body: string }
  | {
      type: "quote";
      text: string;
      attribution: string;
      role?: string;
      href?: string;
    }
  | { type: "stat"; value: string; label: string; source?: string }
  | { type: "statGroup"; items: { value: string; label: string }[] };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function headingsOf(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id ?? slugify(b.text), text: b.text }));
}

/** Plain-text rendering, used for machine-readable surfaces. */
export function blocksToText(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case "p":
          return b.text;
        case "h2":
        case "h3":
          return `\n## ${b.text}\n`;
        case "ul":
        case "ol":
          return b.items.map((i) => `- ${i}`).join("\n");
        case "table":
          return [
            b.caption ?? "",
            b.headers.join(" | "),
            ...b.rows.map((r) => r.join(" | ")),
          ]
            .filter(Boolean)
            .join("\n");
        case "callout":
          return `${b.title}: ${b.body}`;
        case "quote":
          return `"${b.text}" ${b.attribution}${b.role ? `, ${b.role}` : ""}`;
        case "stat":
          return `${b.value} ${b.label}`;
        case "statGroup":
          return b.items.map((i) => `${i.value} ${i.label}`).join("\n");
      }
    })
    .join("\n\n");
}

export default function GuideBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-3xl">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <Reveal key={i}>
                <h2
                  id={b.id ?? slugify(b.text)}
                  className="mt-16 scroll-mt-28 font-serif text-3xl text-balance md:text-4xl"
                >
                  {b.text}
                </h2>
              </Reveal>
            );

          case "h3":
            return (
              <Reveal key={i}>
                <h3 className="mt-10 font-serif text-2xl">{b.text}</h3>
              </Reveal>
            );

          case "p":
            return (
              <Reveal key={i}>
                <p className="mt-5 text-lg leading-relaxed text-ash">{b.text}</p>
              </Reveal>
            );

          case "ul":
            return (
              <Reveal key={i}>
                <ul className="mt-6 space-y-3">
                  {b.items.map((item) => (
                    <li key={item} className="flex gap-3 text-lg text-ash">
                      <span
                        aria-hidden
                        className="mt-3 h-1 w-1 shrink-0 rounded-full bg-flag"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );

          case "ol":
            return (
              <Reveal key={i}>
                <ol className="mt-6 space-y-4">
                  {b.items.map((item, n) => (
                    <li key={item} className="flex gap-4 text-lg text-ash">
                      <span
                        aria-hidden
                        className="shrink-0 tabular-nums font-serif text-xl text-line"
                      >
                        {String(n + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            );

          case "table":
            return (
              <Reveal key={i}>
                <figure className="mt-10">
                  {/* Wide tables scroll inside their own container so the
                      page body never scrolls sideways on a phone. */}
                  <div className="overflow-x-auto rounded-2xl border border-line">
                    <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-line bg-paper">
                          {b.headers.map((h, hi) => (
                            <th
                              key={h}
                              scope="col"
                              className={`px-5 py-4 font-medium text-ink ${
                                b.numeric?.includes(hi) ? "text-right" : ""
                              }`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className="border-b border-line last:border-0"
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`px-5 py-4 text-ash ${
                                  b.numeric?.includes(ci)
                                    ? "text-right tabular-nums"
                                    : ""
                                } ${ci === 0 ? "text-ink" : ""}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {b.caption && (
                    <figcaption className="mt-3 text-sm text-ash">
                      {b.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            );

          case "callout":
            return (
              <Reveal key={i}>
                <aside className="mt-10 rounded-2xl border-l-4 border-flag bg-paper p-6 md:p-8">
                  <p className="font-medium text-ink">{b.title}</p>
                  <p className="mt-3 leading-relaxed text-ash">{b.body}</p>
                </aside>
              </Reveal>
            );

          case "quote":
            return (
              <Reveal key={i}>
                <figure className="mt-12 border-l-2 border-ink pl-6 md:pl-8">
                  <blockquote>
                    <p className="font-serif text-2xl leading-snug text-balance md:text-3xl">
                      {b.text}
                    </p>
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-ash">
                    {b.href ? (
                      <a
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink underline underline-offset-4"
                      >
                        {b.attribution}
                      </a>
                    ) : (
                      <span className="text-ink">{b.attribution}</span>
                    )}
                    {b.role && `, ${b.role}`}
                  </figcaption>
                </figure>
              </Reveal>
            );

          case "stat":
            return (
              <Reveal key={i}>
                <div className="mt-10 border-t border-line pt-6">
                  <div className="font-serif text-display-md text-ink">
                    {b.value}
                  </div>
                  <p className="mt-2 max-w-md text-ash">{b.label}</p>
                  {b.source && (
                    <p className="mt-2 text-xs text-ash">{b.source}</p>
                  )}
                </div>
              </Reveal>
            );

          case "statGroup":
            return (
              <Reveal key={i}>
                <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
                  {b.items.map((s) => (
                    <div key={s.label}>
                      <div className="font-serif text-4xl text-ink md:text-5xl">
                        {s.value}
                      </div>
                      <p className="mt-2 text-sm text-ash">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
        }
      })}
    </div>
  );
}
