"use client";

import { useEffect, useRef } from "react";

/**
 * IntroCritters — the AntCrow landing-screen inhabitants.
 *
 * A small colony of reddish-black ants wanders the intro overlay on organic
 * paths, while a crow soars in, laps the screen, and perches on the wordmark.
 * Lives ONLY inside the Intro overlay: when the visitor scrolls to enter,
 * everything slides away with it.
 *
 * Restraint rules:
 *  - Desktop: ~5 ants (cap 6). Mobile: ~3 smaller ants (cap 4).
 *  - Disabled entirely for prefers-reduced-motion.
 *  - Critters never block content; clicking one plays (and does NOT dismiss
 *    the intro — we stop propagation).
 */

const ANT_SVG = `
<svg viewBox="0 0 22 12" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;overflow:visible">
  <g>
    <line class="ac-leg l1" x1="7"  y1="6" x2="3"  y2="11"/>
    <line class="ac-leg l2" x1="10" y1="6" x2="8"  y2="11"/>
    <line class="ac-leg l3" x1="13" y1="6" x2="12" y2="11"/>
    <line class="ac-leg l1" x1="7"  y1="6" x2="5"  y2="1"/>
    <line class="ac-leg l2" x1="10" y1="6" x2="10" y2="1"/>
    <line class="ac-leg l3" x1="13" y1="6" x2="14" y2="1"/>
  </g>
  <ellipse cx="5"  cy="6" rx="3" ry="2.3" fill="#2a120a"/>
  <ellipse cx="5"  cy="5.4" rx="2.2" ry="1.2" fill="#4a1f10" opacity=".8"/>
  <ellipse cx="10" cy="6" rx="2.3" ry="1.9" fill="#7a3b1e"/>
  <circle  cx="15" cy="5.6" r="2.1" fill="#8a4423"/>
  <circle  cx="14.4" cy="5" r="0.7" fill="#b86a3a" opacity=".8"/>
  <line x1="16.4" y1="4.4" x2="19" y2="2" stroke="#6e3a24" stroke-width="1"/>
  <line x1="17"   y1="5.2" x2="20" y2="4.2" stroke="#6e3a24" stroke-width="1"/>
</svg>`;

const CROW_SVG = `
<svg viewBox="0 0 96 78" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;width:100%;height:100%;display:block">
  <g class="ac-wingB"><path d="M18 36 Q34 10 62 20 Q46 28 40 42 Z" fill="#070707" stroke="#242424" stroke-width="1"/></g>
  <path d="M14 48 Q28 30 50 34 Q68 37 66 50 Q62 62 42 60 Q22 58 14 48 Z" fill="#101010" stroke="#2b2b2b" stroke-width="1"/>
  <path d="M10 54 L22 51 L16 60 Z" fill="#0a0a0a"/>
  <g class="ac-wingF"><path d="M20 40 Q40 16 70 26 Q52 34 44 48 Z" fill="#161616" stroke="#2e2e2e" stroke-width="1"/></g>
  <g class="ac-head">
    <circle cx="62" cy="38" r="11" fill="#101010" stroke="#2b2b2b" stroke-width="1"/>
    <path d="M71 36 L86 39 L71 43 Z" fill="#f5a623"/>
    <circle cx="64.5" cy="35.5" r="2.1" fill="#f3f0e9"/>
    <circle cx="65" cy="35.8" r="1.05" fill="#000"/>
    <circle class="ac-lid" cx="64.5" cy="35.5" r="2.2" fill="#101010"/>
  </g>
  <line x1="40" y1="60" x2="40" y2="68" stroke="#f5a623" stroke-width="1.6"/>
  <line x1="50" y1="60" x2="50" y2="68" stroke="#f5a623" stroke-width="1.6"/>
</svg>`;

const CSS = `
.ac-critter{position:absolute;left:0;top:0;pointer-events:auto;cursor:pointer;will-change:transform}
.ac-ant{filter:drop-shadow(0 0 1.5px rgba(245,166,35,.55)) drop-shadow(0 1px 1px rgba(0,0,0,.7))}
.ac-leg{stroke:#6e3a24;stroke-width:1.1;stroke-linecap:round;transform-origin:center;animation:ac-legwiggle .16s infinite alternate ease-in-out}
.ac-leg.l2{animation-delay:.05s}.ac-leg.l3{animation-delay:.1s}
@keyframes ac-legwiggle{from{transform:rotate(-16deg)}to{transform:rotate(16deg)}}
.ac-crow{filter:drop-shadow(0 2px 3px rgba(0,0,0,.55))}
.ac-crow.flying .ac-wingF{animation:ac-flapF .30s infinite alternate ease-in-out}
.ac-crow.flying .ac-wingB{animation:ac-flapB .30s infinite alternate ease-in-out}
@keyframes ac-flapF{from{transform:rotate(-34deg)}to{transform:rotate(18deg)}}
@keyframes ac-flapB{from{transform:rotate(26deg)}to{transform:rotate(-14deg)}}
.ac-wingF,.ac-wingB{transform-origin:50% 45%}
.ac-lid{opacity:0}
.ac-crow.blink .ac-lid{opacity:1}
.ac-head{transform-origin:60% 55%;transition:transform .35s ease}
.ac-crow.tilt .ac-head{transform:rotate(-10deg)}
`;

type Ant = {
  el: HTMLDivElement;
  x: number; y: number; ang: number; speed: number;
  tx: number; ty: number; pauseUntil: number; dead: boolean;
};
type Pt = { x: number; y: number };

export default function IntroCritters() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mobile = window.innerWidth < 760;
    const TARGET = mobile ? 3 : 5;
    const MAX = mobile ? 4 : 6;
    const antW = mobile ? 18 : 22;
    const antH = mobile ? 10 : 12;
    const crowW = mobile ? 70 : 96;
    const crowH = mobile ? 57 : 78;

    let alive = true;
    const timers: number[] = [];
    const intervals: number[] = [];
    const ants: Ant[] = [];
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const later = (fn: () => void, ms: number) => { timers.push(window.setTimeout(fn, ms)); };
    const every = (fn: () => void, ms: number) => { intervals.push(window.setInterval(fn, ms)); };

    const style = document.createElement("style");
    style.textContent = CSS;
    root.appendChild(style);

    /* ---------------- ants ---------------- */
    function spawnAnt() {
      if (!alive || ants.length >= MAX) return;
      const el = document.createElement("div");
      el.className = "ac-critter ac-ant";
      el.style.width = antW + "px";
      el.style.height = antH + "px";
      el.innerHTML = ANT_SVG;
      root!.appendChild(el);
      const edge = Math.floor(Math.random() * 4);
      const a: Ant = {
        el,
        x: edge === 0 ? -30 : edge === 1 ? window.innerWidth + 30 : rand(0, window.innerWidth),
        y: edge === 2 ? -30 : edge === 3 ? window.innerHeight + 30 : rand(0, window.innerHeight),
        ang: 0, speed: rand(26, 44) / 1000,
        tx: 0, ty: 0, pauseUntil: 0, dead: false,
      };
      pickTarget(a);
      a.ang = Math.atan2(a.ty - a.y, a.tx - a.x);
      ants.push(a);
      el.addEventListener("click", (e: MouseEvent) => {
        e.stopPropagation(); // playing with an ant must not dismiss the intro
        if (a.dead) return;
        a.dead = true; a.speed = 0.5;
        a.tx = a.x + Math.cos(a.ang) * 2000;
        a.ty = a.y + Math.sin(a.ang) * 2000;
        later(() => { el.remove(); const i = ants.indexOf(a); if (i > -1) ants.splice(i, 1); }, 2500);
      });
    }
    function pickTarget(a: Ant) {
      a.tx = rand(30, window.innerWidth - 30);
      a.ty = rand(40, window.innerHeight - 40);
    }
    let last = performance.now();
    function antTick(t: number) {
      if (!alive) return;
      const dt = Math.min(50, t - last); last = t;
      for (const a of ants) {
        const legs = a.el.querySelectorAll<SVGLineElement>(".ac-leg");
        if (t < a.pauseUntil && !a.dead) { legs.forEach(l => { l.style.animationPlayState = "paused"; }); continue; }
        legs.forEach(l => { l.style.animationPlayState = "running"; });
        const dx = a.tx - a.x, dy = a.ty - a.y, dist = Math.hypot(dx, dy);
        if (dist < 8 && !a.dead) {
          if (Math.random() < 0.4) a.pauseUntil = t + rand(600, 2200);
          pickTarget(a); continue;
        }
        const want = Math.atan2(dy, dx);
        let d = want - a.ang;
        while (d > Math.PI) d -= 2 * Math.PI;
        while (d < -Math.PI) d += 2 * Math.PI;
        a.ang += d * Math.min(1, dt / 300);
        a.ang += Math.sin(t / 300 + a.x) * 0.02;
        a.x += Math.cos(a.ang) * a.speed * dt;
        a.y += Math.sin(a.ang) * a.speed * dt;
        a.el.style.transform = `translate(${a.x}px,${a.y}px) rotate(${a.ang}rad)`;
      }
      requestAnimationFrame(antTick);
    }
    requestAnimationFrame(antTick);
    function antLoop() {
      if (!alive) return;
      if (ants.length < TARGET) spawnAnt();
      later(antLoop, rand(2500, 6000));
    }

    /* ---------------- crow ---------------- */
    let crow: HTMLDivElement | null = null;
    let crowState: "off" | "flying" | "perched" = "off";
    let perch: Pt = { x: 0, y: 0 };

    function perchPoint(): Pt {
      const wrap = document.getElementById("intro-wordmark");
      if (wrap) {
        const h1s = Array.from(wrap.querySelectorAll("h1"));
        const visible = h1s.find(h => h.getBoundingClientRect().height > 0);
        if (visible) {
          const range = document.createRange();
          range.selectNodeContents(visible);
          const r = range.getBoundingClientRect();
          if (r.width > 0) return { x: r.right - crowW * 0.78, y: r.top - crowH * 0.74 };
        }
      }
      return { x: window.innerWidth * 0.62, y: window.innerHeight * 0.3 };
    }
    function setCrow(x: number, y: number, angleRad: number, facing: number) {
      if (!crow) return;
      const deg = angleRad * 57.29578;
      crow.style.transform = `translate(${x}px,${y}px) scaleX(${facing}) rotate(${facing * deg}deg)`;
    }
    function flyPath(pts: Pt[], dur: number, done?: () => void) {
      const t0 = performance.now();
      const pos = (k: number): Pt => {
        const n = pts.length - 1, f = k * n, i = Math.min(n - 1, Math.floor(f)), u = f - i;
        const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(n, i + 2)];
        const cr = (a: number, b: number, c: number, d2: number, u2: number) =>
          0.5 * ((2 * b) + (-a + c) * u2 + (2 * a - 5 * b + 4 * c - d2) * u2 * u2 + (-a + 3 * b - 3 * c + d2) * u2 * u2 * u2);
        return { x: cr(p0.x, p1.x, p2.x, p3.x, u), y: cr(p0.y, p1.y, p2.y, p3.y, u) };
      };
      let prev = pos(0);
      function step(t: number) {
        if (!alive || !crow) return;
        const k = Math.min(1, (t - t0) / dur);
        const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        const p = pos(e);
        const vx = p.x - prev.x, vy = p.y - prev.y;
        const facing = vx >= 0 ? 1 : -1;
        const ang = Math.atan2(vy, Math.abs(vx)) * 0.45;
        setCrow(p.x, p.y, ang, facing);
        prev = p;
        if (k < 1) requestAnimationFrame(step);
        else if (done) done();
      }
      requestAnimationFrame(step);
    }
    function land() {
      if (!alive || !crow) return;
      crowState = "perched";
      crow.classList.remove("flying");
      perch = perchPoint();
      setCrow(perch.x, perch.y, 0, 1);
      later(takeOff, rand(14000, 26000));
    }
    function takeOff() {
      if (!alive || !crow || crowState !== "perched") return;
      crowState = "flying";
      crow.classList.add("flying");
      perch = perchPoint();
      const lap: Pt[] = [perch,
        { x: perch.x - rand(200, 380), y: perch.y - rand(100, 180) },
        { x: window.innerWidth * rand(0.12, 0.25), y: rand(90, 200) },
        { x: window.innerWidth * rand(0.35, 0.55), y: rand(60, 140) },
        { x: window.innerWidth * rand(0.7, 0.85), y: rand(140, 260) },
        { x: perch.x + rand(100, 200), y: perch.y - rand(60, 120) },
        perch];
      flyPath(lap, rand(5200, 6800), land);
    }
    function crowArrive() {
      if (!alive || crow) return;
      crow = document.createElement("div");
      crow.className = "ac-critter ac-crow flying";
      crow.style.width = crowW + "px";
      crow.style.height = crowH + "px";
      crow.innerHTML = CROW_SVG;
      root!.appendChild(crow);
      crow.addEventListener("click", (e: MouseEvent) => {
        e.stopPropagation(); // petting the crow must not dismiss the intro
        takeOff();
      });
      every(() => { if (crow && crowState === "perched") { crow.classList.add("blink"); later(() => crow && crow.classList.remove("blink"), 140); } }, 4200);
      every(() => { if (crow && crowState === "perched") { crow.classList.add("tilt"); later(() => crow && crow.classList.remove("tilt"), 900); } }, 11000);
      crowState = "flying";
      perch = perchPoint();
      flyPath([{ x: -160, y: rand(80, 200) },
        { x: window.innerWidth * 0.3, y: rand(60, 160) },
        { x: window.innerWidth * 0.7, y: rand(120, 260) },
        perch], 2800, land);
    }

    /* ---------------- boot ---------------- */
    later(crowArrive, 2000);
    const stagger = mobile ? [1500, 3200, 5200] : [1200, 2600, 4200, 6000, 8000];
    stagger.forEach(t => later(spawnAnt, t));
    later(antLoop, 9000);

    return () => {
      alive = false;
      timers.forEach(t => window.clearTimeout(t));
      intervals.forEach(i => window.clearInterval(i));
      root.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    />
  );
}
