/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        toDoList: {

          "primary": "#FFFFFF",

          "secondary": "#D926AA",

          "accent": "#FCA5A5",

          "neutral": "#F87171",
          
          "info": "#000000",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

