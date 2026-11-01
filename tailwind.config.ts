import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#DC2324",
          "red-hover": "#B81B1C",
          "red-subtle": "#FDF2F2",
          "red-glow": "rgba(220, 35, 36, 0.12)",
        },
        charcoal: {
          950: "#1c1e3e",
          900: "#0E1218",
          850: "#12171F",
          800: "#161C24",
          700: "#222A35",
          600: "#344050",
          500: "#4B5563",
          400: "#6B7280",
          300: "#9CA3AF",
          200: "#CBD1D8",
          100: "#E2E5E9",
          50: "#F0F2F5",
        },
        canvas: {
          warm: "#F8F9FA",
          subtle: "#F0F2F5",
          white: "#FFFFFF",
          border: "#E2E5E9",
          "border-dark": "#222A35",
        },
        industrial: {
          green: "#059669",
          amber: "#D97706",
          blue: "#2563EB",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Barlow", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Barlow", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "IBM Plex Sans Arabic", "Noto Kufi Arabic", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
      },
      boxShadow: {
        none: "none",
        hairline: "0 0 0 1px rgba(0, 0, 0, 0.06)",
        "hairline-dark": "0 0 0 1px rgba(255, 255, 255, 0.08)",
        technical: "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "cream-dots": "url('/images/bg.webp')",
        "cream-pattern": "url('/images/bg.webp')",
      },
    },
  },
  plugins: [],
};

export default config;

