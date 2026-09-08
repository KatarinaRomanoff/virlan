/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0C",
        panel: "#141414",
        line: "#444444",
        accent: "#E5A93B",
        muted: "#A1A1AA",
        offwhite: "#ECECF0",
      },
      fontFamily: {
        serif: [
          '"Instrument Serif"',
          "Georgia",
          "'Times New Roman'",
          "serif",
        ],
        sans: [
          "Geist",
          "-apple-system",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
