/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#28395d",
        accentshade: "#0ebdfe",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        orbitron: ["Orbitron", "comic sans"],
      },
    },
  },
  plugins: [],
};
