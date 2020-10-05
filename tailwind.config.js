const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: ['**/*.js'],
  },
  theme: {
    extend: {
      colors: {
        beige: {
          base: '#fae4ca',
          darker: '#afa08d',
          darkest: '#7d7265',
        },
        ygreen: {
          light: '#297d77',
          dark: '#116f68',
        },
      },
      fontFamily: {
        sans: ['PT Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Cormorant', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
