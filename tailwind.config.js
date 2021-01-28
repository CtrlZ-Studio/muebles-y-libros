const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      red: colors.red,
      transparent: 'transparent',
      current: 'currentColor'
    },

    fontFamily: {
      body: ['Arial', 'sans-serif'],
      heading: ['Otto', 'serif']
    },

    extend: {
      zIndex: {
        '-1': '-1',
        99: 99,
        100: 100,
        999: 999,
        1000: 1000
      }
    }
  },

  variants: {
    extend: {}
  },

  plugins: []
};
