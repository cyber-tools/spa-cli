const path = require("path");
const glob = require("glob");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const pluginsPath = path.resolve(process.cwd(), "./plugins/**/*.js");
    const pluginsFilePath = await promisify(glob)(pluginsPath);
    return pluginsFilePath;
  } catch (error) {
    throw error;
  }
};