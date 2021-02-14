const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      'accent-dark': '#1818d6',
      'accent-medium': '#5252e0',
      'accent-light': '#c5c5f5',
      white: '#F2F2F2',
      black: '#0D0D0D',
      gray: colors.trueGray,
      transparent: 'transparent',
      current: 'currentColor'
    },

    fontFamily: {
      body: ['Volte', 'sans-serif'],
      heading: ['Voyage', 'serif'],
      signature: ['Quentin', 'serif']
    },

    extend: {
      zIndex: {
        '-1': '-1',
        99: 99,
        100: 100,
        999: 999,
        1000: 1000
      },

      maxHeight: {
        'full-50': '50%',
        'full-75': '75%',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },

      minHeight: {
        'screen-50': '50vh',
        'screen-75': '75vh'
      },

      width: {
        '2xl': '32rem'
      },

      height: {
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)'
      }
    }
  },

  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    }
  },

  plugins: []
};
