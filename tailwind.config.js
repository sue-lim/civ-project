/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        rose: "#BF307F",
        navy: "#0B0320",
        deepPurple: "#2E266D",
        midPurple: "#413B52",
        blackish: "#333333",
        white: "#FFFFFF",
        black: "#000000",
      },
      screens: {
        sm: "300px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};