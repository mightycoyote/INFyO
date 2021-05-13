module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F368F',
          light: '#254DA8',
          verylight: '#4565B0',
          dark: '#0A2A75',
          verydark: '#051E59',
        },
        secondaryone: {
          DEFAULT: '#301193',
          light: '#4727AD',
          verylight: '#6248B5',
          dark: '#250B78',
          verydark: '#1A065B',
        },
        secondarytwo: {
          DEFAULT: '#008080',
          light: '#139696',
          verylight: '#33A0A0',
          dark: '#006868',
          verydark: '#004F4F',
        },
        complementary: {
          DEFAULT: '#D68E00',
          light: '#FBB220',
          verylight: '#FFC551',
          dark: '#AE7400',
          verydark: '#845800',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
