/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
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
        oceanGreen: 'hsl(189.71, 43.04%, 69.02%)',
        grayBlue: 'hsl(203, 66%, 15%)',
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)'
      },
      fontFamily: ['Bai Jamjuree', 'sans-serif'],
    },
    daisyui: {
      themes: ["emerald"],
    },
    plugins: [
      require('daisyui')
    ],
  }
}
