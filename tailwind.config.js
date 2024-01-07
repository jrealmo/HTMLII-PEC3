/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(164, 207, 236)',
        secondary: '#344280bf',
        shoutout: 'rgb(89, 127, 89)',
      },
    },
  },
  plugins: [],
};