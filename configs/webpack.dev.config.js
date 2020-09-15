const merge = require("webpack-merge");

const basicWebpackConfig = require("@/configs/webpack.base.config");
const { devServer, webpackConfig: projectWebpackConfig } = require("@/utils/getProjectConfig")();


module.exports = merge(basicWebpackConfig, projectWebpackConfig, {
  devServer,
  mode: "development"
});
