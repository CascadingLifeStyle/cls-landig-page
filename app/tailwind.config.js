/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#2f2b2a',
        'secondary-light': '#a0919f',
        'bg-light': '#5dcec3',
        'text-light': '#1b0c44',
        'primary-dark': '#5dcec3',
        'secondary-dark': '#60888e',
        'bg-dark': '#2f2b2a',
        'text-dark': '#5dcec3',
      },
    },
  },
  plugins: [],
};
