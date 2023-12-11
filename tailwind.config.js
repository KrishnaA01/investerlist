/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transparent: 'transparent',
      blue: '#006fb4',
      red: '#e1001a',
      grey: '#787878',
    },
    fontFamily: {

    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

