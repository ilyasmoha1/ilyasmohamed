/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#057061',
          50: '#eefcf9',
          100: '#d5f7f1',
          200: '#b0efe4',
          300: '#7ce2d3',
          400: '#43cdbd',
          500: '#1eb3a4',
          600: '#057061', // Main brand color
          700: '#0b7367',
          800: '#0e5c54',
          900: '#114c46',
          950: '#062d2a',
        },
      },
    },
  },
  plugins: [],
}