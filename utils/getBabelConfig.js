const path = require("path");

module.exports = async () => {
  const babelrcModuleResolve = require.resolve("./.babelrc.js", {
    paths: [process.cwd(), path.join(__dirname, "configs")]
  });
  const babelrc = require(babelrcModuleResolve);
  return babelrc;
};