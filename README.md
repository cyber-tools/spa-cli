<h2 align="center">spa-build-core</h2>

<div align="center">基于webpack的web项目集成开发环境</div>

<h2 align="center">概览</h2>

1. [Install](#Install)
2. [Introduction](#Introduction)
3. [Configuration](#Configuration)
4. [Commands](#Commands)

<h2 align="center">Install</h2>

可以作为开发依赖安装：

```bash
npm install normalize-project/spa-build-core --save-dev
```

也可以全局安装：

```bash
npm install normalize-project/spa-build-core -g
```



<h2 align="center">Introduction</h2>



build-core用于快速构筑项目(不需要自己配置webpack)，只需要覆盖少量配置即进行快速开发，后期依赖npm进行升级，尽可能保证加脚手架的可维护性

- 配置项通过[webpack-merge](https://www.npmjs.com/package/webpack-merge)进行合并
- 集成了webpack等大部分开发依赖
- 通过npm进行维护升级

<h2 align="center">Configuration</h2>

在项目文件中新建custmer.config.js来复写构筑工具的默认配置，配置项参考webpack的[配置项](https://www.webpackjs.com/configuration/)

```javascript
const path=require("path");

module.exports={
  entry:path.resolve(__dirname,"index.js"),
  devServer:{
    port:9000,
    useLocalIp:true
  }
};
```

<h2 align="center">Commands</h2>

