
module.exports = {
  ident: "postcss",
  plugins: () => [
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: { flexbox: "no-2009" },
      stage: 3
    }),
    require("postcss-aspect-ratio-mini")({}),
    require("postcss-px-to-viewport")({
      viewportWidth: 750,
      viewportHeight: 1624,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false,
    }),
    require("postcss-viewport-units")({}),
  ],
  sourceMap: true
};