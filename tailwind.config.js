const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.tsx"],
  darkMode: false, // or "media" or "class"
  theme: {
    colors: {
      ...colors,
      primary: {
        "50": "#f6fafb",
        "100": "#ebf6f9",
        "200": "#d1eaf3",
        "300": "#aed6ed",
        "400": "#75b4e3",
        "500": "#438cd6",
        "600": "#2f68bd",
        "700": "#1a4788",
        "800": "#243e6d",
        "900": "#1d3254",
      },
      shamrock: {
        "50": "#eef8f8",
        "100": "#d8f6f3",
        "200": "#aeefe5",
        "300": "#95e4d3",
        "400": "#2dd0bd",
        "500": "#10b59e",
        "600": "#0e9881",
        "700": "#147a69",
        "800": "#165f54",
        "900": "#154d45",
      },
      royalblue: {
        "50": "#f5f9fc",
        "100": "#e8f2fc",
        "200": "#cdddfa",
        "300": "#afc3f9",
        "400": "#8797f9",
        "500": "#6e6ed5",
        "600": "#4448f4",
        "700": "#3839df",
        "800": "#2d2eb2",
        "900": "#24268b",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}