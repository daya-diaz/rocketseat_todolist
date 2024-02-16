/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        blueDark: '#1E6F9F',
        blue: '#4EA8DE',
        purpleDark: '#5E60CE',
        purple: '#8284FA',
        gray100: '#F2F2F2',
        gray200: '#D9D9D9',
        gray300: '#808080',
        gray400: '#333333',
        gray500: '#262626',
        gray600: '#1A1A1A',
        gray700: '#0D0D0D',
        danger: '#E25858',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

