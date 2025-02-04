/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('../src/Components/Feedback/fb.jpg')",
      },
      fontFamily:{
        monoton:['Monoton'],
        rubik:'Rye'
      }
    },
  },
  plugins: [],
}
