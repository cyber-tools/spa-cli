const path = require("path");
const deepExtend = require("deep-extend");

const basicBabelConfig = require("@/configs/defaultConfig/babel.config");

module.exports = () => {
  const babelrcModuleResolve = require.resolve("./babel.config.js", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/defaultConfig/")]
  });
  const custmerBabelConfig = require(babelrcModuleResolve);
  return deepExtend(basicBabelConfig, custmerBabelConfig);
};