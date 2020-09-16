const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getPostcssConfig = require("@/utils/getPostcssConfig");

const postcssConfig = getPostcssConfig();

module.exports = ({ exclude }) => ([{
  exclude,
  test: /\.scss$/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: true }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssConfig
  }, {
    loader: require.resolve("sass-loader")
  }]
}, {
  test: /\.scss$/,
  include: /node_modules/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: true
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: false }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssConfig
  }, {
    loader: require.resolve("sass-loader")
  }]
}, {
  exclude,
  test: /\.less$/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: {
      modules: true
    }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssConfig
  }, {
    loader: require.resolve("less-loader"),
    options: {}
  }]
}, {
  test: /\.less$/,
  include: /node_modules/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: false }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssConfig
  }, {
    loader: require.resolve("less-loader"),
    options: {}
  }]
}, {
  exclude,
  test: /\.css$/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: true }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssConfig
  }]
}, {
  test: /\.css$/,
  include: /node_modules/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: true,
      reloadAll: true,
      esModule: false
    }
  }, {
    loader: require.resolve("css-loader"),
    options: { modules: true }
  }, {
    loader: require.resolve("postcss-loader"),
    options: postcssConfig
  }]
}])