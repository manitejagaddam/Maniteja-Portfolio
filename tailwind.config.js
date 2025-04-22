/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        gray: {
          950: '#0a0a0a',
          900: '#121212',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
          500: '#4a4a4a',
          400: '#9a9a9a',
          300: '#b5b5b5',
          200: '#d1d1d1',
          100: '#e5e5e5',
        },
        purple: {
          900: '#341f97',
          800: '#4527a0',
          700: '#5e35b1',
          600: '#7045c4',
          500: '#805ad5',
          400: '#9c7ee6',
          300: '#b794f4',
          200: '#d4bcfc',
          100: '#e9ddfd',
        },
        teal: {
          900: '#0f766e',
          800: '#115e59',
          700: '#0f766e',
          600: '#0d9488',
          500: '#14b8a6',
          400: '#2dd4bf',
          300: '#5eead4',
          200: '#99f6e4',
          100: '#ccfbf1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 10px rgba(128, 90, 213, 0.5), 0 0 20px rgba(128, 90, 213, 0.3), 0 0 30px rgba(128, 90, 213, 0.1)',
      },
    },
  },
  plugins: [],
};