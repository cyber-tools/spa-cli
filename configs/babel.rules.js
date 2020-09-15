const getBabelConfig = require("@/utils/getBabelConfig");

module.exports = ({ exclude }) => ([{
  exclude,
  test: /.(js|jsx)$/,
  use: [{
    loader: require.resolve("babel-loader"),
    options: getBabelConfig()
  }]
}])