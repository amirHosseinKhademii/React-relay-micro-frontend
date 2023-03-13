/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("pcg-commons/tailwind.config"),
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
