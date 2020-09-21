const path = require("path");

module.exports = {
  dist: "dist",
  source: "src",
  publicPath: "./",
  exclude: [/node_modules/],
  devServer: {
    port: 8000,
    open: true,
    useLocalIp: true,
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd(), "src")
  },
  webpackConfig: {

  },
  postcss: {
    px2viewport: {
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1624, // (Number) The height of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    }
  }
};