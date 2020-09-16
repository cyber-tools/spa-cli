// const path = require("path");

module.exports = {
  presets: [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env")
  ],
  plugins: [
    //装饰器配置使用旧版的stage0
    [require.resolve("@babel/plugin-proposal-decorators"), { legacy: true }],
    //当装饰器配置为legacy:true时需要松散模式
    [require.resolve("@babel/plugin-proposal-class-properties"), { loose: true }],
    [require.resolve("@babel/plugin-transform-runtime")],
    [require.resolve("babel-plugin-import"), {
      libraryName: "antd-mobile",
      libraryDirectory: "es",
      style: true
    }]
  ]
};