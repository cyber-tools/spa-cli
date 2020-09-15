const del = require("del");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

const toast = require("@/utils/toast");
const getBasicConfig = require("@/configs/webpack.base");
const getProjectConfig = require("@/utils/getProjectConfig");


module.exports = async () => {
  try {
    const { source, dist, exclude, ...custmerConfig } = getProjectConfig();
    const basicConfig = getBasicConfig({ source, dist, exclude });
    const computedConfig = webpackMerge(basicConfig, custmerConfig, {
      mode: "production",
      devtool: "none"
    });
    toast.start(["正在移除", dist, "文件夹... ..."].join(""));
    await del([dist]);
    toast.succeed([dist, "文件夹移除成功!"].join(""));
    const complier = webpack(computedConfig);
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