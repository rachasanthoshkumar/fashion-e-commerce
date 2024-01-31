/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg' : '@src/images/content.png'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors:{
        'poorple': '#9f9bdd',
        'oorange':'#ff6d21'
      }
    },
  },
  plugins: [],
}

