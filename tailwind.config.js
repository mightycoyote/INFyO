module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F368F',
          verydark: '#051E59',
        },
        secondaryone: {
          DEFAULT: '#301193',
          verydark: '#1A065B',
        },
        secondarytwo: {
          DEFAULT: '#008080',
          light: '#139696',
          verylight: '#33A0A0',
        },
        complementary: {
          DEFAULT: '#D68E00',
          light: '#FBB220',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
