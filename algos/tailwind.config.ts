import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
      animation: {
        "gradient-x": "gradient-x 3s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 0%" },
          "100%": { "background-position": "0% 0%" },
        },
        "glow-pulse": {
          "0%, 100%": { "box-shadow": "0 0 10px rgba(255,255,255,0.3)" },
          "50%": { "box-shadow": "0 0 20px rgba(255,255,255,0.7)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
