const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Archivo Narrow", ...defaultTheme.fontFamily.serif],
      secondary: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "primary-100": "#2231AA",
        "primary-200": "#3C48AA",
        "primary-300": "#666DAA",
        "primary-400": "#A4ADF8",
        "primary-500": "#E1E4FF",
        "secondary-100": "#2231AA",
        "secondary-200": "#3C48AA",
        "secondary-300": "#666DAA",
        "secondary-400": "#FFD9C8",
      },
    },
  },
  plugins: [],
};
