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
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "3xl": "1.75rem",
        "2xs": "0.675rem",
      },
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
          blank: "#D9D9D9",
        },
        black: "#111827",
      },
      transitionProperty: {
        width: "width",
      },
      boxShadow: {
        modal: "0 18px 30px 0 rgba(48, 69, 122, 0.31)",
        carousel: "0px 6px 15px 0px rgba(128, 141, 165, 0.5)",
        "brand-sm": "0px 3px 5px 0px rgba(102, 102, 102, 0.2)",
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
