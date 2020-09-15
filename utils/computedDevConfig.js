const apiMocker = require("mocker-api");
const deepExtend = require("deep-extend");


module.exports = function ({ originDevConfig, proxyConfig, mockFileList }) {
  const devServerConfig = deepExtend({}, originDevConfig, {
    proxy: proxyConfig,
    before: (app) => {
      apiMocker(app, mockFileList)
    }
  });
  return devServerConfig;
};