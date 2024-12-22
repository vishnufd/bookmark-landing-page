/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'custom-font': ["Rubik"],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blue_color: 'hsl(231, 69%, 60%)',
        red_color: 'hsl(0, 94%, 66%)',
        gray_color: 'hsl(229, 8%, 60%)',
        dark_blue: 'hsl(229, 31%, 21%)',
      }
    },
  },
  plugins: [],
}

