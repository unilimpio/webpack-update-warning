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
          xlighter: '#00GGHH',
          lighter: '#00AAFF',
          default: '#0FFAAB',
          normal: '#0G6D3F',
          darker: '#077775',
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
        },

        ukraine: {
            blue: '#0159BA',
            yellow: '#FFD600',
        }
      },

      backgroundImage: theme => ({



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
