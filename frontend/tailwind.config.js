module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#ffffff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#888888',
          400: '#666666',
          500: '#555555',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        }
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    container: theme => ({
      center: true,
      padding: theme('spacing.4'),
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '720px'
      }
    })
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
