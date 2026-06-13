import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Warm clean paper base + deep green-black ink */
        paper: { DEFAULT: "#F4F2EA", warm: "#FBFAF5", dim: "#ECEAE0" },
        ink: { DEFAULT: "#0C1B14", soft: "#3A4A42", mute: "#6B776F" },
        /* Forest-dark for inverted sections */
        forest: { DEFAULT: "#0B1A12", soft: "#11271B", line: "#1C3A28" },

        /* Brand green (primary) */
        leaf: {
          DEFAULT: "#15A06B",
          deep: "#0B7A50",
          dark: "#075E3D",
          soft: "#E2F4EC",
          50: "#EDF8F2",
          100: "#D5F0E2",
          200: "#A9E2C5",
          300: "#6FCDA0",
          400: "#33B47C",
          500: "#15A06B",
          600: "#0B7A50",
          700: "#0A6342",
          800: "#094E35",
          900: "#08402C",
        },

        /* Fluorescent-protein accent system (used consistently) */
        cyan: { DEFAULT: "#17B6C9", soft: "#DEF6F9", deep: "#0C7E8C" },
        amber: { DEFAULT: "#F4B740", soft: "#FEF3DA", deep: "#B97F09" },
        gold: { DEFAULT: "#C9A227", light: "#E8C547", deep: "#9A7B0A", soft: "#FBF3D4" },
        coral: { DEFAULT: "#FF6B6B", soft: "#FFE5E5", deep: "#D33C3C" },
        violet: { DEFAULT: "#7B6EF6", soft: "#EAE7FE", deep: "#4E3FD1" },

        /* McMaster maroon — used sparingly */
        maroon: {
          DEFAULT: "#7A003C",
          soft: "#F9ECF2",
          deep: "#5E0230",
          light: "#9A1852",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 63% 37% / 42% 45% 55% 58%" },
          "50%": { borderRadius: "58% 42% 37% 63% / 55% 58% 42% 45%" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 42s) linear infinite",
        "marquee-reverse":
          "marquee var(--marquee-duration, 42s) linear infinite reverse",
        float: "float 7s ease-in-out infinite",
        blob: "blob var(--blob-duration, 12s) ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "spin-slow": "spin-slow var(--spin-duration, 40s) linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
