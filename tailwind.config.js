/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [`./src/**/*.{tsx, ts}`],
  theme: {
    extend: {
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
