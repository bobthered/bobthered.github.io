const paletteGenerator = require('@bobthered/tailwindcss-palette-generator');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: paletteGenerator('#FF0040'),
    },
  },
  variants: {},
  plugins: [],
};
