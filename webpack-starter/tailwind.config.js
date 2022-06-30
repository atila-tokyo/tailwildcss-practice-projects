/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768',
        lg: '976',
        xl: '1440'
      }
    },
    extend: {
      colors: {
        blueWay: 'hsl(227, 100%, 32%)',
        goodGreen: 'hsl(120, 62%, 23%)',
        grayGreen: 'hsl(120, 24%, 23%)',
        grayBlue: 'hsl(203, 66%, 15%)'
      },
      fontFamily: ['Bai Jamjuree', 'sans-serif'],
    },
  },
  variants: {
    extend:{},
  },
  plugins: [],
}
