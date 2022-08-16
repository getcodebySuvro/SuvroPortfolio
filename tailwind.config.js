/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  darkMode : 'class',
  theme: {
    extend: {
      animation:{
        slideright : "slideright 1s linear",
        blob: "blob 4s ease-in-out infinite",
        lineUp :  "lineUp 2s ease-out infinite" ,
      },
      keyframes:{
        slideright:{
          "0%":{
            transform : "translateX(-10px)",
            
          },
          "100%":{
            transform:"translateX(0px)",
            
          },
        },

        blob:{
          "0%" :{ transform:"translate(0px,0px) scale(1)",},
          "33%" :{transform : "translate(30px,-50px) scale(1.2)",},
          "66" : {transform:"translate (-30px,20px) scale(0.9)",},
          "100%" :{ transform : "translate(0px,0px) scale(1)",},
        },

        lineUp:{
          "0%" :{transform :"translateY(80%)",},
          "50%" :{transform :"translateY(40%)",},
          "100%" :{transform :"translateY(0%)",},
        },
      }
    },
  },
  plugins: [],
}
