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
        'primary-light': '#1b0c44',
        'secondary-light': '#A84A0C',
        'bg-light': 'white',
        'text-light': '#1b0c44',
        'primary-dark': '#fff',
        'secondary-dark': '#A84A0C',
        'bg-dark': '#1b0c44',
        'text-dark': 'white',
      },
    },
  },
  plugins: [],
};
