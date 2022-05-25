module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      gray: '#656565',
      'gray-middle': '#9B9B9B',
      'gray-light': '#B4B4B4',
      'gray-lightest': '#E4E4E4',
    },
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
