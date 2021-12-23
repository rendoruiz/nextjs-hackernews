const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'bp420': '420px',
      ...defaultTheme.screens,
      'bp960': '960px',
    },
    extend: {
      colors: {
        brandOrange: 'rgb(255, 102, 0)',
        brandAppBackground: 'rgb(218, 224, 230)',
        brandObjectBackground: 'rgb(255, 255, 255)',
        brandButtonHover: 'rgba(28, 28, 28, 0.08)',
        brandButtonActive: 'rgba(28, 28, 28, 0.24)',
        brandButtonSelected: 'rgb(246, 247, 248)',
        brandButtonOutline: 'rgb(237, 238, 241)',
        brandButtonInlineText: 'rgb(68, 78, 89)',
        brandBorder: 'rgb(204, 204, 204)',
        brandBorderHover: 'rgb(137, 137, 137)',
        brandTextPrimary: 'rgb(34, 34, 34)',
        brandTextSecondary: 'rgb(135, 138, 140)',
        brandTextLinkVisited: 'rgb(165, 164, 164)',
        brandTextInfo: 'rgb(120, 124, 126)',

        brandDarkAppBackground: 'rgb(3, 3, 3)',
        brandDarkObjectBackground: 'rgb(26, 26, 27)',
        brandDarkBorder: 'rgb(52, 53, 54)',
        brandDarkBorderHover: 'rgb(129, 131, 132)',
        brandDarkBorderSeparator: 'rgb(84, 84, 82)',
        brandDarkTextPrimary: 'rgb(207, 208, 202)',
        brandDarkTextSecondary: 'rgb(129, 131, 132)',
        brandDarkTextLinkVisited: 'rgb(129, 131, 132)',
        brandDarkButtonHover: 'rgba(215, 218, 220, 0.08)',
        brandDarkButtonActive: 'rgba(215, 218, 220, 0.24)',
        brandDarkButtonSelected: 'rgb(39, 39, 41)',
        brandDarkButtonOutline: 'rgb(53, 53, 53)',
      },
      borderWidth: {
        brandDefault: '1px',
      },
      boxShadow: {
        transientObject: '0 2px 4px 0 rgba(28, 28, 28, 0.2)',
      },
      fontFamily: {
        primary: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        xs2: ['0.625rem', '1'],
        xs3: ['0.5rem', '1'],
      },
    },
  },
  plugins: [],
}
