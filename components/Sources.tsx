/**
 * Cited sources block.
 * ------------------------------------------------------------------
 * In the Princeton GEO research (KDD 2024), adding cited sources was
 * the single highest-performing content modification tested, ahead of
 * adding statistics and well ahead of any tone or fluency change. The
 * mechanism is intuitive: outbound citation is what makes a page read
 * as evidence rather than as assertion, and retrieval systems are in
 * the business of finding evidence.
 *
 * It is also the honest thing to do. Every factual claim on this site
 * about market rates, standards, or how a third-party system behaves
 * should be traceable to something a reader can go and check. If a
 * claim cannot be sourced, the correct fix is to soften or remove the
 * claim, not to publish it unsourced.
 *
 * Keep `publisher` accurate and `title` verbatim where practical, so
 * the reference stays useful if the URL ever moves.
 */

export type Source = {
  title: string;
  publisher: string;
  href: string;
  /** Optional: year or date of the source, if it is time-sensitive. */
  date?: string;
};

export default function Sources({
  items,
  heading = "Sources",
  note,
}: {
  items: Source[];
  heading?: string;
  note?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16 max-w-3xl border-t border-line pt-8">
      <h2 className="label text-ash">{heading}</h2>
      {note && <p className="mt-4 text-sm text-ash">{note}</p>}
      <ol className="mt-5 space-y-3 text-sm">
        {items.map((s, i) => (
          <li key={s.href} className="flex gap-3">
            <span aria-hidden className="shrink-0 tabular-nums text-ash">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-ash">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-4 hover:text-ash"
              >
                {s.title}
              </a>
              {". "}
              {s.publisher}
              {s.date ? `, ${s.date}` : ""}
              {"."}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
