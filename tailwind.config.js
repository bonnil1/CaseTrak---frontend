/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-background': "url('https://www.transparenttextures.com/patterns/diagonal-waves.png')",
      }
    },
  },
  plugins: [
  ],
}

