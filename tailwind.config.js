/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'you-cream': '#FFFDF5',
        'you-green': {
          light: '#A9E5B9',
          DEFAULT: '#8AD4A0',
          dark: '#6CB484'
        }
      }
    },
  },
  plugins: [],
}
