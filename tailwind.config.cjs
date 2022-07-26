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
      backgroundColor: {...heroColors, 'dots-color': '#ff0000'},
      borderColor: heroColors,
      ringColor: heroColors,
      fontFamily: {
        bangers: ['Bangers', 'cursive']
      },
      backgroundImage: {
        'dots-pattern': `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.9' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");`
      },
      boxShadow: {
        'hard-border': '-19px 20px 0px -1px rgba(0,0,0,1);'
      }
    },
  },
  plugins: [],
}
