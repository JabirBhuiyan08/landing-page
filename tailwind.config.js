/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#02011b", // Custom dark color
      },
      animation:{
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes:{
        wiggle:{
          '0%,100%':{transform:'rotate(-3deg)'},
          '50%':{transform:'rotate(3deg)'}
        }
      },
      
    },
  },
  plugins: [require("daisyui")],
};
