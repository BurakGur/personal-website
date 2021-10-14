module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    container: (theme) => ({
      center: true,
      padding: theme('spacing.4'),
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '720px',
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}