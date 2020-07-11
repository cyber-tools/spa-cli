const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

const getBasicConfig = require("@/configs/webpack.base");
const getCustmerConfig = require("@/utils/getCustmerConfig");


module.exports = async () => {
  try {
    const custmerConfig = getCustmerConfig();
    const { source, dist } = custmerConfig;
    const computedConfig = webpackMerge(getBasicConfig({ source, dist }), custmerConfig);
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