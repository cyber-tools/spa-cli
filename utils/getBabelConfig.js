const path = require("path");

module.exports = async () => {
  const babelrcModuleResolve = require.resolve("./babelrc.js", {
    paths: [process.cwd(), path.relative(__dirname, "confins")]
  });
  const babelrc = require(babelrcModuleResolve);
  console.log("babelrc==>", babelrc);
  return babelrc;
};