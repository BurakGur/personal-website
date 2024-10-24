const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
      serif: ['var(--font-lora)']
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
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      });
    })
  ]
};
