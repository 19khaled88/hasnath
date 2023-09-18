/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      flexBasis: {
        20: '20%',
        80: '80%',
      },
      height: {
        '90': '90%',
      },
      colors:{
        sideMenuBg:'#181818',
        bodyBg:'#fff',
        titleColor:'#2b2b2b',
        hoverColor:'#262626',
        textColor:'#e2e2e2',
        colorOne:'#f6eff4',
        colorTow:'#fbf0ef',
        colorThree:'#f1fcf0',
        colorFour:'#fcf8ef',
        gradient:'linear-gradient(rgb(56,194,166),rgb(124,83,151))'

      }
    },
    screens: {
      'sm-1': '640px',
      // => @media (min-width: 640px) { ... }

      'md-1': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg-1': '1024px',
      // => @media (min-width: 1280px) { ... }

      'xl-1': '1280px',
    },
  },
  plugins: [require('daisyui')],
}
