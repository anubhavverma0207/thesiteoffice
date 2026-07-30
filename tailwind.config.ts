import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        bone: "#f3f0e9",
        paper: "#faf8f3",
        /**
         * Secondary text. Darkened from #8a857c after an audit.
         *
         * The original value scored 3.46:1 on paper and 3.22:1 on bone.
         * WCAG 2.2 AA requires 4.5:1 for normal-size text, so every
         * body paragraph on the site was failing, on a site that
         * publishes a guide telling people to meet that standard.
         *
         * This value scores 5.06:1 on paper and 4.72:1 on bone, so it
         * passes on both grounds with margin. Do not lighten it without
         * re-running the contrast maths against BOTH backgrounds; bone
         * is the harder of the two.
         */
        ash: "#6f6a60",
        line: "#e0dcd2",
        // Surveyor's orange. Used sparingly: status dots, the scroll
        // progress hairline, selection, one accent.
        flag: "#ff4a00",
        // The crow's beak. Belongs to the logo and the landing intro.
        crow: "#f5a623",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 13vw, 15rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.75rem, 8vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widelabel: "0.22em",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        beacon: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.8)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        beacon: "beacon 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
