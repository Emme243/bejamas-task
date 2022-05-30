module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
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
      borderWidth: {
        3: '3px',
      },
      gridTemplateAreas: {
        'featured-artwork': ['name button', 'image image'],
      },
      gridTemplateColumns: {
        'featured-artwork': '1fr 1fr',
      },
      gridTemplateRows: {
        'featured-artwork': 'auto auto',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas'), require('@tailwindcss/line-clamp')],
};
