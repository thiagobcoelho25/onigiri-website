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
      boxShadow: {
        'shadow-navbar-item': "inset 200px 0 0 0 white",
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
