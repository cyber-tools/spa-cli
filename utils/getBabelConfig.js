const path = require("path");

module.exports = () => {
  const babelrcModuleResolve = require.resolve("./.babelrc.js", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs")]
  });
  const babelrc = require(babelrcModuleResolve);
  return babelrc;
};