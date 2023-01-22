/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        // ragnarok: ["Baron Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
