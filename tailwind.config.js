/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#008666",
        blue: "#0091B1",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
      },
      keyframes: {
        moveDown: {
          "0%": {
            transform: "translateY(-75vh)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        moveDown: "moveDown 3s ease-out",
      },
    },
  },
  plugins: [],
};
