const path = require("path");
const glob = require("glob");
const { promisify } = require("es6-promisify");

module.exports = async function () {
  try {
    const matchPath = path.resolve(process.cwd(), "./proxy/**/*.js");
    const matchPathList = await promisify(glob)(matchPath);
    const proxyConfigList = matchPathList.map((filePath) => {
      return require(filePath);
    });
    return Object.assign.apply({}, [{}, ...proxyConfigList]);
  } catch (error) {
    throw error;
  };
  // const proxyConfigResolve = require.resolve("./proxy.config", {
  //   paths: [process.cwd(), path.resolve(__dirname, "../configs/defaultConfig/")]
  // });
  // return require(proxyConfigResolve);
};