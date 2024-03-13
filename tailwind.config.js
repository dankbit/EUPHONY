/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:[],
  darkMode:false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily:{
        poppins : ["Poppins", "sans-serif"],
       },
       height:{
        "1/10" : "10%",
        "9/10" : "99%",
       },
       backgroundColor:{
        "app-black":"#121212",
       },
    },
  },
  variants:{
    extend:{},
  },
  plugins: [],
};
