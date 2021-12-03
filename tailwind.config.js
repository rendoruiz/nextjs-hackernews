const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'bp360': '360px',
      'bp420': '420px',
      'bp500': '500px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        brandOrange: 'rgb(255, 102, 0)',
        brandAppBackground: 'rgb(218, 224, 230)',
        brandButtonHover: 'rgba(28, 28, 28, 0.08)',
        brandButtonActive: 'rgba(28, 28, 28, 0.24)',
        brandButtonSelected: 'rgb(246, 247, 248)',
        brandButtonOutline: 'rgb(237, 238, 241)',
        brandBorder: 'rgb(204, 204, 204)',
        brandBorderHover: 'rgb(137, 137, 137)',
        brandTextPrimary: 'rgb(34, 34, 34)',
        brandTextSecondary: 'rgb(135, 138, 140)',
        brandTextInfo: 'rgb(120, 124, 126)',
      },
      borderWidth: {
        brandDefault: '1px',
      },
      fontFamily: {
        primary: ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
