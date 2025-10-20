/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        // sfpro: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
