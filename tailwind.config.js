module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "1fr",
      },
    },
  },
  variants: {},
  plugins: [],
};
