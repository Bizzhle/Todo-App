module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'desktop-dark': "url('images/bg-desktop-dark.jpg')",
        'desktop-light': "url('images/bg-desktop-light.jpg')",
        'mobile-dark': "url('images/bg-mobile-dark.jpg')",
        'mobile-light': "url('images/bg-mobile-light.jpg')",
      }),
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'background': 'linear-gradient(90deg, rgba(192,88,243,1) 30%, rgba(87,221,255,1) 70%)',
        light: {
          'v-l-gray': 'hsl(0, 0%, 98%)',
          'v-l-grayish-blue': 'hsl(236, 33%, 92%)',
          'l-grayish-blue': 'hsl(233, 11%, 84%)',
          'd-grayish-blue': 'hsl(236, 9%, 61%)',
          'v-d-grayish-blue': 'hsl(235, 19%, 35%)',
        },
        dark: {
          'v-d-blue': 'hsl(235, 21%, 11%)',
          'v-d-d-blue': 'hsl(235, 24%, 19%)',
          'l-grayish-blue': 'hsl(234, 39%, 85%)',
          'l-grayish-blue-hover': 'hsl(236, 33%, 92%)',
          'd-grayish-blue': 'hsl(234, 11%, 52%)',
          'v-d-grayish-blue': 'hsl(233, 14%, 35%)',
        }

      },
      fontFamily: {
        'josefin-sans': '"Josefin Sans", sans-serif',
      },
      fontSize: {
        
        base: '18px',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
