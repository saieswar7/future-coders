/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "Poppins":["Poppins","Serif"]
      }
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    }
  },
  plugins: [],
}