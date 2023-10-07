/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        "Poppins":"Poppins"
      },
      keyframes:{
        errorAnime:{
        'from':{
          opacity:'0',
          top:'-10%'
        },
        'to':{
          opacity:'1',
          top:'0'
        }
      },
        exitAnime:{
        'from':{
          opacity:'1',
          top:'0'
        },
        'to':{
          opacity:'0',
          top:'-10%'
        }
      }
      }

    },
  },
  plugins: [],
}

