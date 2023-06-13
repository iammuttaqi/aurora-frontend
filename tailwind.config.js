/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "node_modules/preline/dist/*.js"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
    },
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
