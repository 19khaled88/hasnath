/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      'sm-1': '640px',
      // => @media (min-width: 640px) { ... }

      'md-1': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg-1': '1024px',
      // => @media (min-width: 1280px) { ... }

      'xl-1':'1280px'
    },
  },
  plugins: [require("daisyui")],
}
