#!/usr/bin/env node
require("module-alias").addAlias("@", __dirname);
const dotProp = require("dot-prop");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const WebpckDevServer = require("webpack-dev-server");
const getCustmerConfig = require("@/utils/getCustmerConfig");

const basicConfig = require("@/configs/webpack.base");
const custmerConfig = getCustmerConfig();


const computedConfig = webpackMerge(basicConfig, custmerConfig);
const complier = webpack(computedConfig);
const server = new WebpckDevServer(complier, computedConfig.devServer);
server.listen(dotProp.get(computedConfig, "devServer.port") || 8080);


