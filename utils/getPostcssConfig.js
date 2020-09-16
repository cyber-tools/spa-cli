const path = require("path");
const basicPostCssConfig = require("@/configs/defaultConfig/postcss.config");

module.exports = () => {
  const postcssModuleResolve = require.resolve("./postcss.config.js", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/defaultConfig/")]
  });
  const postcssConfig = require(postcssModuleResolve);
  if (postcssConfig instanceof Function) {
    return postcssConfig(basicPostCssConfig);
  };
  return postcssConfig;
};