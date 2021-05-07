module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F368F',
        },
        secondaryone: {
          DEFAULT: '#301193',
        },
        secondarytwo: {
          DEFAULT: '#008080',
        },
        complementary: {
          DEFAULT: '#D68E00',
        },
        body: {
          DEFAULT: 'rgba( 26, 6, 91,1)',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
