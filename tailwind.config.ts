import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", md: "2rem", lg: "3rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Semantic tokens — values come from CSS vars set in app/layout.tsx
        // from siteConfig.colors. Use as bg-primary, text-accent/50, etc.
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-dark": "rgb(var(--color-accent-dark) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.05), 0 4px 12px -4px rgba(15,23,42,0.08)",
        "card-hover": "0 8px 20px -8px rgba(15,23,42,0.18), 0 2px 6px rgba(15,23,42,0.06)",
        glow: "0 0 24px -4px rgb(var(--color-accent) / 0.45)",
      },
      backgroundImage: {
        "hero-dark":
          "radial-gradient(120% 80% at 50% 0%, rgb(var(--color-primary) / 0.18) 0%, transparent 60%), linear-gradient(180deg, rgb(var(--color-dark)) 0%, rgb(var(--color-primary-dark) / 0.4) 100%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}

export default config
