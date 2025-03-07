/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle:"#8C6954",
        primaryContent:"#401B13",
        primarySubcontent:"#D99982",
        primaryBase:"#401B13",
        primaryAccent:"#F2C6AC",
        primaryBg:"E4E0E1",
      },
    },
  },
  plugins: [],
}

