module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['ui-sans-serif', '', ...],
       'serif': ['ui-serif', 'Georgia', ...],
       'mono': ['ui-monospace', 'SFMono-Regular', ...],
       'display': ['Oswald', ...],
       'body': ['"Open Sans"', ...],
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
