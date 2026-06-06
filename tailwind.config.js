/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      colors: {
        magic: {
          900: '#1e1b4b',
          800: '#312e81',
          100: '#e0e7ff',
        }
      },
      fontSize: {
        'xs': ['1.0rem', { lineHeight: '1.5rem' }],
        'sm': ['1.15rem', { lineHeight: '1.7rem' }],
        'base': ['1.25rem', { lineHeight: '1.9rem' }],
        'lg': ['1.4rem', { lineHeight: '2.1rem' }],
        'xl': ['1.6rem', { lineHeight: '2.3rem' }],
        '2xl': ['1.9rem', { lineHeight: '2.6rem' }],
        '3xl': ['2.4rem', { lineHeight: '3.0rem' }],
        '4xl': ['3.0rem', { lineHeight: '3.6rem' }],
        '5xl': ['4.0rem', { lineHeight: '1.1' }],
      }
    },
  },
  plugins: [],
}
