const heroColors = {
  'hero-red': '#ff0000',
  'hero-yellow': '#f5f500',
  'hero-blue': '#0000dc' 
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: heroColors,
      borderColor: heroColors,
      ringColor: heroColors
    },
  },
  plugins: [],
}
