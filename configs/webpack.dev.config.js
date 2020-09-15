const merge = require("webpack-merge");

const basicWebpackConfig = require("@/configs/webpack.base.config");
const { source, dist, exclude, ...projectConfig } = require("@/utils/getProjectConfig")();

module.exports = merge(basicWebpackConfig, projectConfig, { mode: "development" });