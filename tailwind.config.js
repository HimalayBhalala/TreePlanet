/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {
      fontFamily : {
        Jost : ["Jost", "sans-serif"],
        Roboto : ["Roboto", "sans-serif"],
        Italian : ["Italianno", "cursive"]
      },
      keyframes : {
        move:{
          "50%":{
            transform:"translateY(-1rem)"
          }
        },
        rotating: {
          "0%":{
            transform:"rotate(0deg)"
          },
          "100%":{
            transform:"rotate(360deg)"
          }
        },
        scaling: {
          "0%":{
            transform:"scale(0.4)"
          },
          "40%":{
            transform:"scale(0.5)"
          },
          "100%":{
            transform:"scale(1)"
          }
        }
      },
      animation : {
        MovingY : "move 3s linear infinite",
        Rotating : "rotating 3s linear infinite",
        Scaling : "scaling 3s linear infinite"
      },
      container:{
        center: true,
      },
    },
  },
  plugins: [],
}

