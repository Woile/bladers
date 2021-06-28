module.exports = {
  purge: ["./public/**/*.html", "./pages/**/*.js"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "1fr",
      },
      colors: {
        orange: '#ed8936',
      }
    },
  },
  variants: {},
  plugins: [],
};
