/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Peach: '#E7816B',
          Black: '#1D1C1E',
          White: '#FFFFFF',
          LightPink: '#FDF3F0',
        },
        secondary: {
          LightPeach: '#FFAD9B',
          DarkGrey: '#333136',
          LightGrey: '#F1F3F5'
        },
        },
        fontFamily: {
          'Jost': ['Jost', 'sans-serif'],
        }
      },
    },
  plugins: [],
};