/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bgDark: "#000",
      bgContrast: "#111",
      textDark: "#1d1d1f",
      light: "#fff"
    },
    extend: {},
  },
  plugins: [],
}