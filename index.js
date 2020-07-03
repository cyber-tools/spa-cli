#!/usr/bin/env node
require("module-alias/register");

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const WebpckDevServer = require("webpack-dev-server");

const postGenerate = require("@/actions/postGenerate");
postGenerate();


const basicConfig = require("@/configs/webpack.base.js");
const custmerConfig = require(path.resolve(process.cwd(), "./custmer.config.js"));
const computedConfig = webpackMerge(basicConfig, custmerConfig);
const complier = webpack(computedConfig);
const server = new WebpckDevServer(complier, computedConfig.devServer);
server.listen(8080);

// 根据文件后缀名填充文件内容
const autoComplate = require("@/actions/autoComplate");
const autoGenerate = require("@/actions/autoGenerate");
fs.watch(path.join(process.cwd(), "./src/"), { recursive: true }, (eventType, filename) => {
  autoComplate(eventType, filename);
  autoGenerate(eventType, filename);
});
