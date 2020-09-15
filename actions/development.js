const webpack = require("webpack");
const dotProp = require("dot-prop");
const WebpckDevServer = require("webpack-dev-server");

const getProxyAssignConfig = require("@/utils/getProxyAssignConfig");
const getMockFileList = require("@/utils/getMockFileList");
const computedDevConfig = require("@/utils/computedDevConfig");
const devWebpackConfig = require("@/configs/webpack.dev.config");

module.exports = async () => {
  const complier = webpack(devWebpackConfig);
  const devServerConfig = computedDevConfig({
    originDevConfig: devWebpackConfig.devServer,
    proxyAssignConfig: await getProxyAssignConfig(),
    mockFileList: await getMockFileList()
  });
  const server = new WebpckDevServer(complier, devServerConfig);
  server.listen(dotProp.get(devWebpackConfig, "devServer.port"));
};