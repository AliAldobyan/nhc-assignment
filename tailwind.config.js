/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}", // add if you use pages router too
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
