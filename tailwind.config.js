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
    fontFamily: {
      sans: [
        "SF Pro Display",
        "Helvetica Neue",
        "Helvetica",
        "sans-serif"
      ]
    },
    fontSize: {
      xs: ".75rem", //== 12px
      sm: ".875rem", //== 14px
      base: "1.0625rem", //== 17px
      lg: ["1.1875rem", "1.21"], //== 19px
      xl: "1.31255rem", //== 21px
      "2xl": "1.5rem", //== 24px
      "3xl": "1.75rem", //== 28px
      "4xl": "2.5rem", //== 40px
      "5xl": ["4.5rem", "1.05"], //== 72px
    },
    extend: {},
  },
  plugins: [],
}