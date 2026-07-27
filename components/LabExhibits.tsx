"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import IntroCritters from "./IntroCritters";
import { AnimatedHeading, Reveal } from "./Reveal";

/**
 * The Lab: interaction experiments shown as numbered exhibits.
 * Every exhibit is production code lifted from the site itself,
 * which is the point: the portfolio you can poke.
 */

function ExhibitShell({
  no,
  title,
  note,
  children,
}: {
  no: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <article className="border-t border-line py-14 md:py-20">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="label text-ash">Exhibit {no}</span>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">{title}</h2>
          </div>
          <p className="max-w-sm text-sm text-ash">{note}</p>
        </div>
        {children}
      </article>
    </Reveal>
  );
}

/* 01 · The colony: the intro's ants + crow, in a sandbox */
function ColonyExhibit() {
  return (
    <div
      data-cursor-theme="dark"
      className="relative flex h-[60vh] min-h-[380px] items-center justify-center overflow-hidden rounded-2xl bg-ink text-bone"
    >
      <IntroCritters wordmarkId="lab-wordmark" />
      <div id="lab-wordmark" className="relative z-0 text-center">
        <h1 className="font-serif text-[14vw] leading-none text-[#f5a623] md:text-[8vw]">
          AntCrow
        </h1>
        <p className="mt-4 label text-bone/50">
          Click an ant. Pet the crow.
        </p>
      </div>
    </div>
  );
}

/* 02 · Magnetism: the whole card is the magnetic field */
function MagnetCard({ label, strength }: { label: string; strength: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    // Pull the button toward the cursor from the card's centre
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength * 0.45);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength * 0.45);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-cursor="Pull"
      className="flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-line"
    >
      <motion.span
        style={{ x: sx, y: sy }}
        className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm text-bone"
      >
        {label} · {strength}
      </motion.span>
    </div>
  );
}

function MagnetismExhibit() {
  const variants = [
    { label: "Gentle", strength: 0.2 },
    { label: "Standard", strength: 0.4 },
    { label: "Unreasonable", strength: 0.9 },
  ];
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {variants.map((v) => (
        <MagnetCard key={v.label} label={v.label} strength={v.strength} />
      ))}
    </div>
  );
}

/* 03 · Type in motion: the masked reveal, replayable */
function TypeExhibit() {
  const [run, setRun] = useState(0);
  return (
    <div className="rounded-2xl border border-line px-6 py-12 md:px-12 md:py-16">
      <AnimatedHeading
        key={run}
        as="p"
        text="Words that rise like they were _inevitable._"
        className="font-serif text-display-md text-balance"
      />
      <button
        onClick={() => setRun((n) => n + 1)}
        data-cursor="Again"
        className="group mt-8 inline-flex items-center gap-2 text-sm"
      >
        <span className="relative">
          Play it again
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-flag transition-all duration-500 ease-silk group-hover:w-full" />
        </span>
        <span aria-hidden>↺</span>
      </button>
    </div>
  );
}

/* 04 · The palette: working tokens, click to copy */
function PaletteExhibit() {
  const [copied, setCopied] = useState<string | null>(null);
  const tokens = [
    { name: "Bone", hex: "#f3f0e9", text: "#0b0b0b" },
    { name: "Ink", hex: "#0b0b0b", text: "#f3f0e9" },
    { name: "Ash", hex: "#8a857c", text: "#f3f0e9" },
    { name: "Flag", hex: "#ff4a00", text: "#f3f0e9" },
    { name: "Crow amber", hex: "#f5a623", text: "#0b0b0b" },
  ];
  const copy = (hex: string) => {
    navigator.clipboard?.writeText(hex).then(() => {
      setCopied(hex);
      window.setTimeout(() => setCopied(null), 1200);
    });
  };
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
      {tokens.map((t) => (
        <button
          key={t.hex}
          onClick={() => copy(t.hex)}
          data-cursor="Copy"
          className="group flex h-40 flex-col justify-between rounded-2xl border border-line p-4 text-left transition-transform duration-300 ease-silk hover:-translate-y-1"
          style={{ backgroundColor: t.hex, color: t.text }}
        >
          <span className="text-sm">{t.name}</span>
          <span className="font-mono text-xs opacity-80">
            {copied === t.hex ? "Copied" : t.hex}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function LabExhibits() {
  return (
    <div>
      <ExhibitShell
        no="01"
        title="The colony"
        note="The landing screen's inhabitants, in a sandbox. Autonomous ants with steering behaviour and a crow with a flight path, hand-coded, no libraries."
      >
        <ColonyExhibit />
      </ExhibitShell>

      <ExhibitShell
        no="02"
        title="Magnetism"
        note="Move your cursor around inside each card: the button is pulled toward it, at three strengths. Spring physics, tuned by feel. Desktop only, fingers are not magnetic."
      >
        <MagnetismExhibit />
      </ExhibitShell>

      <ExhibitShell
        no="03"
        title="Type in motion"
        note="Our masked line reveal. Words rise from behind a clip so descenders never smear. Used on every heading of this site."
      >
        <TypeExhibit />
      </ExhibitShell>

      <ExhibitShell
        no="04"
        title="Working palette"
        note="The actual tokens this site is painted with. Click any swatch to copy the hex."
      >
        <PaletteExhibit />
      </ExhibitShell>
    </div>
  );
}
