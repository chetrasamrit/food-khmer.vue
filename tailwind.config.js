/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        khmer: ['"Battambang"', 'sans-serif'], // add khmer
      },
    },
  },
  plugins: [],
}
