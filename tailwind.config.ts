import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gold: '#D4AF37',      // Primary color
        base100: '#F3F4F6',   // Navbar color
        black: '#000000',     // Page background
        white: '#FFFFFF',     // Text and highlights
        gray: '#2F4F4F', // Portfolio/secondary
        beige: '#F5F5DC',     // Soft sections
        red: '#8B0000',       // Alerts/highlights
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: [ {brand: {
      primary: '#D4AF37',      // Gold
      secondary: '#F5F5DC',    // Beige
      accent: '#2F4F4F',       // Slate Gray
      neutral: '#F3F4F6',      // Base-100
      'base-100': '#000000',   // Black
      info: '#8B0000',         // Rich Red
      success: '#D4AF37',      // Use gold for success elements
      warning: '#F5F5DC',      // Muted beige for soft warnings
      error: '#8B0000',        // Rich red for errors
    }},"luxury", "dark", "cupcake"],
  },
};
export default config;
