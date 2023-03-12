/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      width: {
        '32': '32rem',
        '50': '50rem'
      },
      colors: {
        'onigiri-blue': '#282a36',
        'blue-blue': 'rgb(0, 172, 255)'
      },
      minHeight: {
        '3rem': '3rem',
      },
      boxShadow: {
        'shadow-navbar-item': "inset 200px 0 0 0 white",
      },
      keyframes: {
        tickerh: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      screens: {
        'micro': '320px',
        // => @media (min-width: 320px) { ... }


      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
