const del = require("del");
const webpack = require("webpack");

const toast = require("@/utils/toast");
const { dist } = require("@/utils/getProjectConfig")();
const webpackProdConfig = require("@/configs/webpack.prod.config");

module.exports = async () => {
  try {
    toast.start(["正在移除", dist, "文件夹... ..."].join(""));
    await del([dist]);
    toast.succeed([dist, "文件夹移除成功!"].join(""));
    const complier = webpack(webpackProdConfig);
    toast.start("代码构筑中,请稍后... ...");
    await new Promise((resolve, reject) => {
      complier.run((error, stat) => {
        error ? reject(error) : resolve();
      });
    });
    toast.succeed("构筑成功!");
  } catch (error) {
    toast.fail("构筑过程中发生错误!");
    throw error;
  }
};