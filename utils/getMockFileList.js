const glob = require("glob");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async function () {
  try {
    const mockPath = path.resolve(process.cwd(), "./mock/**/*.js");
    const matchFilePath = await promisify(glob)(mockPath);
    return matchFilePath;
    // const mockConfigArray = matchFilePath.map((filePath) => {
    //   return require(filePath);
    // });
    // return Object.assign.apply(null, [{}, ...mockConfigArray]);
  } catch (error) {
    throw error;
  };
};