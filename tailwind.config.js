/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'h1-mobile': '28px',
      },
      lineHeight: {
        'mobile-body': '1.6',
      },
    },
  },
  plugins: [],
}
