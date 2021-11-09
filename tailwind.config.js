module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(222, 81%, 31%)',
          light: 'hsl(222, 64%, 40%)',
          verylight: 'hsl(222, 44%, 48%)',
          dark: 'hsl(222, 84%, 25%)',
          verydark: 'hsl(222, 89%, 18%)',
        },
        secondaryone: {
          DEFAULT: 'hsl(254, 79%, 32%)',
          light: 'hsl(254, 63%, 42%)',
          verylight: 'hsl(254, 43%, 50%)',
          dark: 'hsl(254, 83%, 26%)',
          verydark: 'hsl(254, 88%, 19%)',
        },
        secondarytwo: {
          DEFAULT: 'hsl(180, 100%, 25%)',
          light: 'hsl(180, 78%, 33%)',
          verylight: 'hsl(180, 52%, 41%)',
          dark: 'hsl(180, 100%, 20%)',
          verydark: 'hsl(180, 100%, 15%)',
        },
        complementary: {
          DEFAULT: 'hsl(40, 100%, 42%)',
          light: 'hsl(40, 96%, 55%)',
          verylight: 'hsl(40, 100%, 66%)',
          dark: 'hsl(40, 100%, 34%)',
          verydark: 'hsl(40, 100%, 26%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
