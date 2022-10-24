/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#226da8',
        dark: '#0f172a',
        secondary: '#3bab47',
      },
      fontFamily: {
        'body': ['Work Sans', 'sans-serif'],
      },
      screens: {
        '2xl': '1320px',
        'sm': '360px',
      },
    },
  },
  plugins: [],
}
