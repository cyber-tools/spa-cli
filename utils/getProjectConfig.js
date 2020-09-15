const path = require("path");
const deepExtend = require("deep-extend");

const basicConfig = require("@/configs/defaultConfig/project.config");


module.exports = function () {
  const custmerFilePathResolve = require.resolve("./project.config", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/defaultConfig/")]
  });
  const custmerConfig = require(custmerFilePathResolve);
  return deepExtend(basicConfig, custmerConfig);
};