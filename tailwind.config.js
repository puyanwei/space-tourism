/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "earth-lg": "url('/public/assets/home/background-home-desktop.jpg')",
        "earth-md": "url('/public/assets/home/background-home-tablet.jpg')",
        "earth-sm": "url('/public/assets/home/background-home-mobile.jpg')",
      },
      colors: {
        "space-black": "#0b0d17",
        "space-light-blue": "#d0d6f9",
        "space-white": "#ffffff",
        "space-gray": "#979797",
        "space-dark-gray": "#35373f",
      },
      fontFamily: {
        primary: ["Barlow Condensed", ...fontFamily.sans],
        serif: ["Bellefair", ...fontFamily.serif],
      },
    },
    plugins: [],
  },
}
