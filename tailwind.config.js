/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        primary: {
          100: '#fcf7c5',
          DEFAULT: '#f3c31c',
        },
        secondary: '#CB0A0A',
        black: {
          100: '#333333',
          200: '#141413',
          300: '#7D8087',
          DEFAULT: '#000000',
        },
        white: {
          100: '#F7F7F7',
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        'work-sans': ['var(--font-work-sans)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 0px)',
        sm: 'calc(var(--radius) - 0px)',
      },
      boxShadow: {
        100: '7px 7px 0px 0px rgb(0, 0, 0)',
        200: '7px 7px 0px 0px rgb(0, 0, 0)',
        300: '5px 5px 0px 0px #f3c31c',
        400: '7px 7px 0px 0px #ffffff',
        500: '10px 10px 0px 0px #f3c31c',
        600: '5px 5px 0px 0px rgb(0, 0, 0)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

module.exports = config;
