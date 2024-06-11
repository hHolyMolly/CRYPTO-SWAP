/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',

        yellow: {
          200: 'var(--yellow-200)',
          300: 'var(--yellow-300)',
          600: 'var(--yellow-600)',
          800: 'var(--yellow-800)',
        },
      },
    },
    screens: {
      sm: '375px',
      md: '425px',
      lg: '640px',
      xl: '768px',

      'any-hover': { raw: '(hover: hover)' },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
