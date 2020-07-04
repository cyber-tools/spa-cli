const path = require("path");

module.exports = function () {
  const custmerFilePathResolve = require.resolve("./custmer.config.js", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/")]
  });
  return require(custmerFilePathResolve);
};