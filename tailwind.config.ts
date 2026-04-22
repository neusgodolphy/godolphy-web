import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Godolphy brand palette
        violet: {
          DEFAULT: "#631CFF",
          dark: "#331378",
          light: "#E8E8FF",
        },
        yellow: {
          brand: "#EEFE3A",
        },
        blue: {
          brand: "#1A1AFF",
          zodiac: "#0E1649",
          rock: "#02021E",
        },
        gray: {
          body: "#696871",
          heading: "#333333",
          border: "#E8E8E8",
          light: "#FAF8FB",
        },
      },
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display": ["90px", { lineHeight: "93.96px", fontWeight: "700" }],
        "h1": ["64px", { lineHeight: "76.8px", fontWeight: "600" }],
        "h2": ["55px", { lineHeight: "66px", fontWeight: "600" }],
        "h3": ["35px", { lineHeight: "36.54px", fontWeight: "400" }],
        "subtitle": ["20px", { lineHeight: "30px" }],
        "body": ["17px", { lineHeight: "26.92px" }],
      },
      maxWidth: {
        container: "1320px",
      },
    },
  },
  plugins: [],
};
export default config;
