module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '750px',
        xl: '750px',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
