/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,ts}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
      },
      colors: {
        brand: {
          body1: "#666666",
          "xl-lightgray": "#F1F3F8",
          accent: "#3A4DF1",
        },
        black: "#111827",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
