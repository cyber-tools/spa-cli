const webpack = require("webpack");
const dotProp = require("dot-prop");
const deepExtend = require("deep-extend");
const webpackMerge = require("webpack-merge");
const WebpckDevServer = require("webpack-dev-server");

const getBasicConfig = require("@/configs/webpack.base");
const getCustmerConfig = require("@/utils/getCustmerConfig");
const getProxyConfig = require("@/utils/getProxyConfig");

module.exports = () => {
  const { source, dist, exclude, ...custmerConfig } = getCustmerConfig();
  const basicConfig = getBasicConfig({ source, dist, exclude });
  const computedConfig = webpackMerge(basicConfig, custmerConfig, {
    mode: "development"
  });
  const devServerConfig = deepExtend({}, computedConfig.devServer, { proxy: getProxyConfig() });
  console.log(devServerConfig);
  const complier = webpack(computedConfig);
  const server = new WebpckDevServer(complier, devServerConfig);
  server.listen(dotProp.get(computedConfig, "devServer.port"));
};