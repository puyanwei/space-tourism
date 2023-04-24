/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "space-black": "#0b0d17",
        "space-light-blue": "#d0d6f9",
        "space-white": "#ffffff",
        "space-gray": "#979797",
        "space-dark-gray": "#35373f",
      },
      fontFamily: {
        bellefair: ["var(--font-bellefair)", ...fontFamily.sans],
        barlow: ["var(--font-barlow)", ...fontFamily.sans],
      },
    },
    plugins: [],
  },
}
