const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.yellow,
      neutral: colors.slate,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
