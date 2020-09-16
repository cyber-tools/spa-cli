const path = require("path");
const babelConfig = require("@cyber-config/babel-config");

module.exports = ({ exclude }) => ([{
  exclude,
  test: /.(js|jsx)$/,
  use: [{
    loader: require.resolve("babel-loader"),
    options: babelConfig
  }]
}])