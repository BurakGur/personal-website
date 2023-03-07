module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#ffffff',
          100: '#f6f8fa',
          200: '#eaeaea',
          300: '#999999',
          400: '#777777',
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
    typography: theme => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.pink.600'),
            '&:hover': {
              color: theme('colors.pink.700')
            }
          },
          'h2,h3,h4': {
            'margin-top': theme('spacing.6'),
            'margin-bottom': theme('spacing.3'),
            fontWeight: theme('fontWeight.semibold')
          },
          h3: {
            'font-size': theme('fontSize.xl')
          },
          p: {
            'margin-bottom': theme('spacing.5')
          },
          pre: {
            backgroundColor: 'rgb(40, 44, 52)',
            borderRadius: theme('borderRadius.lg'),
            padding: theme('padding.4'),
            'margin-top': theme('margin.6'),
            'margin-bottom': theme('margin.6'),
            fontSize: theme('fontSize.sm')
          }
        }
      },
      dark: {
        css: {
          color: theme('colors.gray.200'),
          a: {
            color: theme('colors.pink.400'),
            '&:hover': {
              color: theme('colors.pink.600')
            }
          },
          blockquote: {
            borderLeftColor: theme('colors.gray.700'),
            color: theme('colors.gray.300')
          },
          'h2,h3,h4,p': {
            color: theme('colors.gray.100')
          }
        }
      }
    }),
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
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
