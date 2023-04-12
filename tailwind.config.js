/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#F0F8FF",
      black: "#000000",
      green: "#16A34A",
      footerBg: "#171717",
      grey: "#6B7280",
    },
    fontFamily: {
      sans: ["Oxanium", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
