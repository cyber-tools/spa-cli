#!/usr/bin/env node
require("module-alias/register");
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const WebpckDevServer = require("webpack-dev-server");


const basicConfig = require("@/configs/webpack.base");
const custmerConfig = require(path.resolve(process.cwd(), "./custmer.config"));


const computedConfig = webpackMerge(basicConfig, custmerConfig);
const complier = webpack(computedConfig);
const server = new WebpckDevServer(complier, computedConfig.devServer);
server.listen(8080);


