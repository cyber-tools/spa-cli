const webpack = require("webpack");
const dotProp = require("dot-prop");
const webpackMerge = require("webpack-merge");
const WebpckDevServer = require("webpack-dev-server");

const getProjectConfig = require("@/utils/getProjectConfig");
const getProxyAssignConfig = require("@/utils/getProxyAssignConfig");
const getMockFileList = require("@/utils/getMockFileList");
const computedDevConfig = require("@/utils/computedDevConfig");
const getBasicConfig = require("@/configs/webpack.base");

module.exports = async () => {
  const { source, dist, exclude, ...custmerConfig } = getProjectConfig();
  const basicConfig = getBasicConfig({ source, dist, exclude });
  const computedConfig = webpackMerge(basicConfig, custmerConfig, { mode: "development" });
  const complier = webpack(computedConfig);
  const devServerConfig = computedDevConfig({
    originDevConfig: computedConfig.devServer,
    proxyAssignConfig: await getProxyAssignConfig(),
    mockFileList: await getMockFileList()
  });
  const server = new WebpckDevServer(complier, devServerConfig);
  server.listen(dotProp.get(computedConfig, "devServer.port"));
};