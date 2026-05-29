import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content.ts"],
  theme: {
    extend: {
      colors: {
        ink: "#0f0f0f",
        paper: "#fafaf7",
        accent: "#2D9E96",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
