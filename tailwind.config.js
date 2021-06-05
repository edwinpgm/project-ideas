module.exports = {
  purge: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
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
  options: {
    whitelist: ['text-green-500', 'text-yellow-500', 'text-purple-500'],
  },
};
