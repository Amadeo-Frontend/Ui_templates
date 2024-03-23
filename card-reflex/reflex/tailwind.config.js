/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space_grotesk:["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

