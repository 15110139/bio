/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-green": "#A7D2CB",
        "color-pink": "#fee8ef",
        "color-red-pink": "#FA7070",
        "color-white-dark": "#efefef˝",
        "color-white": "#ffffff",
        "color-fb": "#3b5998",
        "color-yellow": "#ffc85a",
        "color-dark":"#2d2d2d",
        "color-blue-dark":"#b0b5f7"
      },
      backgroundImage: {
        'default': "url('/assets/background.jpg')",
      }
    },
  },
};
