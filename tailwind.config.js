/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: { colors: {
      primary: {
        brightOrange: "#E38826",
        darkCyan: "#006970",
        veryDarkCyan: "#004241"
      }, 
      neutral: {
        lightGray: "#F2F2F2"
      }
    },
    fontFamily: {
      main: 
      ["Big Shoulders Display", "serif"],
      body:
      ["Lexend Deca", "serif"]
    }, 
    screens: {
      'xxs': '375px'
    }, 
    fontSize: {
      base: ['0.93rem', '1.563rem'],
      '4xl': ['2.5rem', '1.563rem']
    }
  },
  },
  plugins: [],
}


