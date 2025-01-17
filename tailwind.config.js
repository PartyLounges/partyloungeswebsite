/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "menu-width": "14rem",
        "menu-padding": "2rem",
      },
      fontFamily: {
        'red-hat-display': ['Futura', 'sans-serif'],
        'proximanova-bold': ['proximanova-bold', 'ui-sans-serif'],
      },
      colors: {
        // Custom theme colors
        'theme-brown': '#7C6344',
        'theme-white': '#D9D9D9',
        'theme-black': '#000000',
        'theme-cream-brown': '#E8DEC5',
        'aboutExperience-theme': "#D9D9D94D"
        // "light-brown": "#f5e9df",
      },
      padding: {
        // Logical padding for mobile-first design
        '5p': '5%',
        '8p': '8%',
        '10p': '10%',
      },
      screens: {
        // Mobile-first breakpoints
        tablet: '640px',
        desktop: '1024px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.theme-black'), // Default text color
            fontFamily: theme('fontFamily.red-hat-display'),

            // Anchor (link) styles
            a: {
              color: theme('colors.theme-brown'),
              textDecoration: 'underline',
              fontWeight: 'bold',
              '&:hover': {
                color: theme('colors.theme-white'),
                backgroundColor: theme('colors.theme-brown'),
              },
            },

            // Headers
            h1: {
              fontSize: theme('fontSize.2xl'),
              fontWeight: 'bold',
              color: theme('colors.theme-brown'),
              fontFamily: theme('fontFamily.red-hat-display'),
            },
            h2: {
              fontSize: theme('fontSize.xl'),
              fontWeight: 'bold',
              color: theme('colors.theme-brown'),
              fontFamily: theme('fontFamily.red-hat-display'),
            },
            h3: {
              fontSize: theme('fontSize.lg'),
              fontWeight: 'semibold',
              color: theme('colors.theme-brown'),
              fontFamily: theme('fontFamily.red-hat-display'),
            },
            h4: {
              fontSize: theme('fontSize.base'),
              fontWeight: 'medium',
              color: theme('colors.theme-brown'),
              fontFamily: theme('fontFamily.red-hat-display'),
            },

            // Paragraph
            p: {
              fontSize: theme('fontSize.base'),
              lineHeight: '1.6',
              color: theme('colors.theme-black'),
            },

            // Lists
            ul: {
              paddingLeft: theme('spacing.4'),
              listStyleType: 'disc',
              color: theme('colors.theme-black'),
            },
            ol: {
              paddingLeft: theme('spacing.4'),
              listStyleType: 'decimal',
              color: theme('colors.theme-black'),
            },
            li: {
              marginBottom: theme('spacing.2'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
};
