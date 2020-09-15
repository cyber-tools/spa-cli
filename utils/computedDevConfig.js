const apiMocker = require("mocker-api");
const deepExtend = require("deep-extend");


module.exports = function ({ originDevConfig, proxyAssignConfig, mockFileList }) {
  const devServerConfig = deepExtend({}, originDevConfig, {
    proxy: proxyAssignConfig,
    before: (app) => {
      apiMocker(app, mockFileList)
    }
  });
  return devServerConfig;
};