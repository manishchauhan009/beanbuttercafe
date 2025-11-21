/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5E3C',   // coffee brown
        accent: '#FACC15',    // warm yellow
        cream: '#FFF7ED',     // soft cream
        dark: '#1F2933',
      },
    },
  },
  plugins: [],
}
