/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        MainText: ['Roboto', 'serif'],
        Doctor: ["Architects Daughter"],
        Marker: ["Permanent Marker"]
      },
   
      height: {
        "avh": "100%",
      }
    },
  },
  plugins: [],
}