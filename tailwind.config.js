module.exports = {
  purge: ["./dist/**/*.html", "./dist/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',

          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
