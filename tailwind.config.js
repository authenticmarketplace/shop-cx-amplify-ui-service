module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primaryDark': '#1d1d1d',
        'drywhite': '#ece9e6',
        'coolgrey': '#f1f3f8',
        'netgrey': '#141414'
       },
       borderRadius: {
         '50': '50%'
       },
       'height': {
         'thirty': '30%',
         'seventy': '70%',
         '90p': '90%'
       },
       fontFamily: {
         'brand': ['Rubik', 'sans-serif']
       },
       'boxShadow': {
         'bump': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'
       },
       'screens': {
         '1sm': '375px'
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
