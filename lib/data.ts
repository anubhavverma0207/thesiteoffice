/**
 * Demo content. Swap these arrays for a CMS / database query later;
 * the page components only depend on these shapes.
 */

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "aera-skincare",
    title: "Aera",
    client: "Aera Skincare",
    category: "Brand · E-commerce",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    accent: "#cdbfa7",
  },
  {
    slug: "hale-painting",
    title: "Hale",
    client: "Hale Painting Co.",
    category: "Painting · Brand & Web",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
    accent: "#9fae9a",
  },
  {
    slug: "atlas-coffee",
    title: "Atlas",
    client: "Atlas Coffee Roasters",
    category: "Brand · Commerce",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    accent: "#8c6f57",
  },
  {
    slug: "redford-brickwork",
    title: "Redford",
    client: "Redford Brickwork",
    category: "Masonry · Web",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?auto=format&fit=crop&w=1600&q=80",
    accent: "#b07a5b",
  },
  {
    slug: "studio-flora",
    title: "Flora",
    client: "Studio Flora",
    category: "Art Direction · Web",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    accent: "#b6a6c9",
  },
  {
    slug: "harbor-tech",
    title: "Harbor",
    client: "Harbor Technologies",
    category: "SaaS · Product",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    accent: "#9aa8a0",
  },
];

export type Service = {
  no: string;
  title: string;
  blurb: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    no: "01",
    title: "Brand & Identity",
    blurb:
      "We craft visual systems with intent: typography, motion, and art direction that make a brand unmistakable.",
    deliverables: ["Visual identity", "Logo & wordmark", "Art direction", "Brand guidelines"],
  },
  {
    no: "02",
    title: "Web Design",
    blurb:
      "Editorial, immersive interfaces designed pixel-by-pixel for desire, not templates, never generic.",
    deliverables: ["UX & wireframes", "UI design", "Design systems", "Prototyping"],
  },
  {
    no: "03",
    title: "Development",
    blurb:
      "Hand-built front-ends and resilient back-ends. Fast, accessible, and engineered to scale with you.",
    deliverables: ["Next.js / React", "Headless CMS", "E-commerce", "Performance"],
  },
  {
    no: "04",
    title: "Motion & 3D",
    blurb:
      "Interaction is the product. We choreograph scroll, transitions, and 3D to make sites feel alive.",
    deliverables: ["Interaction design", "WebGL / 3D", "Micro-interactions", "Creative dev"],
  },
];

export type Step = { no: string; title: string; text: string };

export const process: Step[] = [
  {
    no: "01",
    title: "Discover",
    text: "We immerse ourselves in your world (audience, market, ambition) to find the angle no one else sees.",
  },
  {
    no: "02",
    title: "Design",
    text: "Concepts become living interfaces. We design in high fidelity and motion from day one.",
  },
  {
    no: "03",
    title: "Build",
    text: "Engineering and design move together. Clean code, robust architecture, no compromises.",
  },
  {
    no: "04",
    title: "Launch & Evolve",
    text: "We ship, measure, and keep refining. A website is never finished; it grows with you.",
  },
];

// Add real, verifiable numbers here when you have them, then re-introduce a
// stats section. Left empty on purpose so nothing inaccurate is published.
export const stats: { value: string; label: string }[] = [];
