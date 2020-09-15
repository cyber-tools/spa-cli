const webpack = require("webpack");
const dotProp = require("dot-prop");
const webpackMerge = require("webpack-merge");
const WebpckDevServer = require("webpack-dev-server");

const getBasicConfig = require("@/configs/webpack.base");
const getCustmerConfig = require("@/utils/getCustmerConfig");
const getProxyConfig = require("@/utils/getProxyConfig");
const getMockFileList = require("@/utils/getMockFileList");
const computedDevConfig = require("@/utils/computedDevConfig");

module.exports = async () => {
  const { source, dist, exclude, ...custmerConfig } = getCustmerConfig();
  const basicConfig = getBasicConfig({ source, dist, exclude });
  const computedConfig = webpackMerge(basicConfig, custmerConfig, { mode: "development" });
  const complier = webpack(computedConfig);
  const devServerConfig = computedDevConfig({
    originDevConfig: computedConfig.devServer,
    proxyConfig: getProxyConfig(),
    mockFileList: await getMockFileList()
  });
  const server = new WebpckDevServer(complier, devServerConfig);
  server.listen(dotProp.get(computedConfig, "devServer.port"));
};