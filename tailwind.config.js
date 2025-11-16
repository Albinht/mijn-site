/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        serif: ['var(--font-merriweather)', 'Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        brand: {
          primary: '#F7D8FA',
          secondary: '#D9EDFF',
          accent: '#0059FF',
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            maxWidth: 'none',
            h1: {
              fontFamily: 'var(--font-merriweather), Georgia, Times New Roman, serif',
              color: theme('colors.gray.900'),
              fontWeight: '700',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
              lineHeight: 1.2,
            },
            h2: {
              fontFamily: 'var(--font-merriweather), Georgia, Times New Roman, serif',
              color: theme('colors.gray.900'),
              fontWeight: '700',
              fontSize: '1.5rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              lineHeight: 1.3,
              '&:hover a': {
                opacity: 1,
              },
            },
            h3: {
              fontFamily: 'var(--font-merriweather), Georgia, Times New Roman, serif',
              color: theme('colors.gray.800'),
              fontWeight: '700',
              fontSize: '1.25rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
              lineHeight: 1.4,
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: theme('colors.gray.700'),
            },
            a: {
              color: theme('colors.purple.600'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '2px',
              },
            },
            ul: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '1.5em',
              '& > li': {
                marginTop: '0.5em',
                marginBottom: '0.5em',
                paddingLeft: '0.5em',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '0.75em',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: theme('colors.purple.500'),
                },
              },
            },
            ol: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '1.5em',
              counterReset: 'counter',
              '& > li': {
                counterIncrement: 'counter',
                marginTop: '0.75em',
                marginBottom: '0.75em',
                paddingLeft: '0.5em',
                position: 'relative',
                '&::before': {
                  content: 'counter(counter) "."',
                  position: 'absolute',
                  left: '-1.5em',
                  color: theme('colors.purple.600'),
                  fontWeight: '600',
                },
              },
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: theme('colors.gray.700'),
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.purple.500'),
              quotes: '"\u201C" "\u201D"',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              paddingLeft: '1.5em',
              'p:first-of-type::before': {
                content: 'open-quote',
              },
              'p:last-of-type::after': {
                content: 'close-quote',
              },
            },
            code: {
              color: theme('colors.purple.600'),
              fontWeight: '500',
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            pre: {
              backgroundColor: theme('colors.gray.50'),
              borderRadius: '0.5rem',
              padding: '1.25rem',
              overflowX: 'auto',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              fontSize: '0.9em',
              lineHeight: 1.6,
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            '> :first-child': {
              marginTop: '0',
            },
            '> :last-child': {
              marginBottom: '0',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
