/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      maxSm: { max: "640px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
