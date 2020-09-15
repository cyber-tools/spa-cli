const path = require("path");
const deepExtend = require("deep-extend");

const basicBabelConfig = require("@/configs/defaultConfig/.babelrc.js");

module.exports = () => {
  const babelrcModuleResolve = require.resolve("./.babelrc.js", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/defaultConfig/")]
  });
  const custmerBabelConfig = require(babelrcModuleResolve);
  return deepExtend(basicBabelConfig, custmerBabelConfig);
};