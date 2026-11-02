/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#FFFFFF',
          dark: '#050505',
          charcoal: '#121212',
          light: '#FAFAFA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'stripe-pattern':
          'repeating-linear-gradient(45deg, transparent, transparent 2px, #ffffff 2px, #ffffff 4px)',
      },
    },
  },
  plugins: [],
};
