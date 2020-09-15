<h2 align="center">@cyber-tools/spa-cli</h2>

<div align="center">基于webpack的web项目集成开发环境，使用npm进行管理升级，让web项目开发简单化，规范化</div>

<h2 align="center">概览</h2>

1. [Install](#Install)
2. [Introduction](#Introduction)
3. [proxy代理数据](#proxy代理数据)
4. [mock模拟数](#mock模拟数)
5. [project.config.js](#project.config.js)
6. [Commands](#Commands)

<h2 align="center">Install</h2>

可以作为开发依赖安装：

```bash
npm install @cyber-tools/spa-cli --save-dev
```

也可以全局安装：

```bash
npm install @cyber-tools/spa-cli -g
```



<h2 align="center">Introduction</h2>



cyber-spa用于快速构筑项目(不需要自己配置webpack)，只需要覆盖少量配置即进行快速开发，后期依赖npm进行升级，尽可能保证加脚手架的可维护性

- 配置项通过[webpack-merge](https://www.npmjs.com/package/webpack-merge)进行合并
- 集成了webpack等大部分开发依赖
- 通过npm进行维护升级

<h2 align="center">proxy代理数据</h2>
在proxy文件夹中的所有问文件均会在开发模式下运行
代理效果请参考[http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware)的使用文档
使用示例:

```javascript
module.exports={
  "/test1":{
    target:"",
    changeOrigin:true
  },
  "/test2":{
    target:"",
    changeOrigin:true
  },
};
```

<h2 align="center">mock模拟数据</h2>
在mock文件夹中的所有问文件均会在开发模式下运行

返回模拟数据具体的使用请参考[mocker-api](https://www.npmjs.com/package/mocker-api)的使用文档

使用示例:
```javascript
module.exports={
  "GET /test1":(request,response)=>{
    response.send({data:90909});
  },
  "POST /test2":(request,response)=>{
    response.send({data:"kjn"});
  }
};
```

<h2 align="center">plugins项目外挂</h2>
在plugins文件夹中的所有js文件均会加载在index.js入口文件之前，可以在这些文件中写一些脚本，这些脚本会随着项目的运行一起加载，这些文件无论在生产环境还是测试环境都会被加载，可以使用process.env.NODE_ENV来进行区分

<h2 align="center">babel.config.js</h2>
该文件用来覆盖默认的babel配置

默认的babel.config内容入下所示:

```javascript
module.exports = {
  presets: [
    require.resolve("@babel/preset-env"),
    require.resolve("@babel/preset-react")
  ],
  plugins: [
    //装饰器配置使用旧版的stage0
    [require.resolve("@babel/plugin-proposal-decorators"), { legacy: true }],
    //当装饰器配置为legacy:true时需要松散模式
    [require.resolve("@babel/plugin-proposal-class-properties"), { loose: true }],
    [require.resolve("@babel/plugin-transform-runtime")],
    [require.resolve("babel-plugin-import"), {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    }]
  ]
}
```

<h2 align="center">project.config.js</h2>

在项目文件中新建project.config.js来复写构筑工具的默认配置，配置项参考[webpack文档](https://www.webpackjs.com/configuration/)

webpackConfig选项中禁止使用entry和output选项

示例文件:

```javascript

module.exports={
  devServer:{
    port:9000,
    useLocalIp:true
  },
  webpackConfig:{
    
  }
};
```

<h2 align="center">Commands</h2>

开发指令：

```bash
cyber-spa dev
```

打包指令：

``` bash
cyber-spa  build
```

