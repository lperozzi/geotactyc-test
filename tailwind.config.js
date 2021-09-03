module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {

      'body': ['"IBM Plex Sans Arabic"', 'Arial', 'sans-serif'],
      'display': ['Montserrat', 'Arial', 'sans-serif'],
     },
    colors: {
     geotactyc: {
        light: '#f5af19',
        DEFAULT: '#5c6ac4',
        dark: '#f12711',
     },
     gray: {
        50: '#FAFAFA',
        dark: '#A3A3A3',
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
