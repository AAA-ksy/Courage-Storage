/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'cusYellow' : '#fcefb4',
        'cusBrown' : '#ffcb69',
        'cusYelloTitle' : '#e85d04'
      }
    },
    fontFamily: {
      'welcomeTitle' : ["MaplestoryOTFBold", "normal"],
      'welcomeContent' : ["KyoboHand", "normal"]
    }
  },
  plugins: [],
}
