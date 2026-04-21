import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#008E73",
          bright: "#02c19d",
          light: "#e6f5f1",
        },
        navy: {
          DEFAULT: "#021a62",
          light: "#0a2878",
        },
        charcoal: "#333333",
        silver: "#cccccc",
        "light-gray": "#f5f7f6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #02c19d 0%, #021a62 100%)",
        "grad-hero": "linear-gradient(160deg, #021a62 0%, #012845 55%, #008E73 100%)",
        "grad-teal": "linear-gradient(90deg, #02c19d 0%, #008E73 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
