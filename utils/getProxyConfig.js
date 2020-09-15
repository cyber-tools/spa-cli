const path = require("path");

module.exports = function () {
  const proxyConfigResolve = require.resolve("./proxy.config", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/defaultConfig/")]
  });
  return require(proxyConfigResolve);
};