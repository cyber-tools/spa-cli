const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

const getBasicConfig = require("@/configs/webpack.base");
const getCustmerConfig = require("@/utils/getCustmerConfig");


module.exports = async () => {
  try {
    const { source, dist, ...custmerConfig } = getCustmerConfig();
    const basicConfig = getBasicConfig({ source, dist });
    const computedConfig = webpackMerge(basicConfig, custmerConfig);
    const complier = webpack(computedConfig);
    await new Promise((resolve, reject) => {
      complier.run((error, stat) => {
        error ? reject(error) : resolve();
      });
    });
  } catch (error) {
    throw error;
  }
};