const path = require("path");
const merge = require("webpack-merge");
const filterObject = require("filter-obj");

const basicPeojectConfig = require("@/configs/defaultConfig/project.config");


module.exports = function () {
  const custmerFilePathResolve = require.resolve("./project.config", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/defaultConfig/")]
  });
  const custmerConfig = require(custmerFilePathResolve);
  const { webpackConfig, ...otherConfig } = merge(basicPeojectConfig, custmerConfig);
  const purifyWebpackConfig = filterObject(webpackConfig, (keyname) => {
    if (keyname === "entry") {
      return false;
    };
    if (keyname === "output") {
      return false;
    };
    return true;
  });
  return { webpackConfig: purifyWebpackConfig, ...otherConfig };
};