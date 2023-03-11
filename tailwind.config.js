/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js,ts}"],
  theme: {
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
    extend: {
      container: {
        maxWidth: "1480px !important",
        padding: "2rem",
      },
      colors: {
        brand: {
          body1: "#666666",
          "xl-lightgray": "#F1F3F8",
          accent: "#3A4DF1",
          accentDark: "#2B38AE",
        },
        black: "#111827",
      },
      transitionProperty: {
        width: "width",
      },
      boxShadow: {
        modal: "0 18px 30px 0 rgba(48, 69, 122, 0.31)",
        carousel: "0px 6px 15px 0px rgba(128, 141, 165, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.93, -0.04, 0.58, 1)",
      },
    },
  },
  plugins: [],
};
