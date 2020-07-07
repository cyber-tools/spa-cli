const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

const basicConfig = require("@/configs/webpack.base");
const getCustmerConfig = require("@/utils/getCustmerConfig");


module.exports = async () => {
  try {
    const custmerConfig = getCustmerConfig();
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