const colors = require('tailwindcss/colors')

module.exports = {

  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {

      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '70%': '70%',
        '60%': '60%',
        '50%': '50%',
       '40%': '40%',
       '30%': '30%',
       '25%': '25%',
       '16': '4rem',

      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '75': '0.75',
        '85': '0.85',
       },
      colors: {
        primary: {
          xlighter: '#00B9FF',
          lighter: '#00A0DD',
          default: '#0F4B8F',
          normal: '#0F4B8F',
          darker: '#075985',
        },

        secondary: {
          lighter: '#80CC49',
          default: '#76BC43',
          darker: '#68A63B',
        },

        neutral: {
          lighter: '#CBD5E1',
          default: '#B9CBE6',
          darker: '#64748B',
        }
      },

      backgroundImage: theme => ({

        'hero-banner-2': "url('/images/hero/hero-banner-2.jpg')",
        'hero-banner-3': "url('/images/hero/hero-banner-3.jpg')",

        
        'hero-banner-4': "url('/images/hero/hero-banner-4.jpg')",
        'hero-banner-5': "url('/images/hero/hero-banner-5.jpg')",
        'logouni' : "url('/images/logo-unilimpio.svg')",

        'blog-banner': "url('/images/hero/blog-banner.jpg')",


       })






    }
  },

  variants: {

    extend: {
      fontFamily: ['hover', 'focus'],

      backgroundColor: ['active'],

    }

  },

  plugins: [
    require('@tailwindcss/forms'),
  ]
};
