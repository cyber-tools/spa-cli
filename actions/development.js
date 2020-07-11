const dotProp = require("dot-prop");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const WebpckDevServer = require("webpack-dev-server");

const getBasicConfig = require("@/configs/webpack.base");
const getCustmerConfig = require("@/utils/getCustmerConfig");


module.exports = () => {
  const custmerConfig = getCustmerConfig();
  const { source, dist } = custmerConfig;
  const computedConfig = webpackMerge(getBasicConfig({ source, dist }), custmerConfig);
  const complier = webpack(computedConfig);
  const server = new WebpckDevServer(complier, computedConfig.devServer);
  server.listen(dotProp.get(computedConfig, "devServer.port") || 8080);
};