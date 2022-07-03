/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,tsx,ts}"
  ],
  theme: {
    extend: {
      colors:{
        'cusYellow' : '#fcefb4',
        'cusBrown' : '#ffcb69',
        'cusYellowTitle' : '#e85d04',
        'cusHeaderBorder' : '#fae1dd'
      }
    },
    fontFamily: {
      'welcomeTitle' : ["MaplestoryOTFBold", "normal"],
      'welcomeContent' : ["KyoboHand", "normal"],
      'addItem':["SLEIGothicTTF", "normal"],
      //'itemContent2' : ["MYArirang_gothic", "normal"],
      'itemHeader' : ["LeferiPoint-BlackA", "normal"],
      'itemContent' : ["SUIT-Medium", "normal"]
    }
  },
  plugins: [],
}
