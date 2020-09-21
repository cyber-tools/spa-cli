const path = require("path");
const merge = require("webpack-merge");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const basicWebpackConfig = require("@/configs/webpack.base.config");
const { dist, publicPath, webpackConfig: projectWebpackConfig } = require("@/utils/getProjectConfig")();

module.exports = merge(basicWebpackConfig, projectWebpackConfig, {
  mode: "production",
  devtool: "none",
  output: {
    publicPath,
    path: path.resolve(process.cwd(), dist),
    filename: "[name].[hash].js"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        extractComments: false
      }),
      new OptimizeCSSAssetsPlugin()
    ],
  },
});