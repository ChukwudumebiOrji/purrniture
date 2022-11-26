/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        grayBg: "#E6E6E6",
        orange53: "#EF9145",
      },
      fontSize: {
        authH1: "31px",
      },
    },
  },
  plugins: [],
}
