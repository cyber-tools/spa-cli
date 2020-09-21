

module.exports = ({ publicPath, exclude }) => ([{
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.(css|scss|less)$/, /\.html$/, /\.json$/].concat(exclude),
  options: {
    name: "resources/[hash:8].[ext]",
    publicPath
  }
}])