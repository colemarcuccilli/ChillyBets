/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chillyBlue: "#00AEEF", // Cold Blue
        miamiPink: "#FF007A", // Miami Pink
      },
    },
  },
  plugins: [],
};
