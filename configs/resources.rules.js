

module.exports = ({ exclude }) => ([{
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.(css|scss|less)$/, /\.html$/, /\.json$/].concat(exclude),
  options: {
    name: "resources/[name].[hash:8].[ext]"
  }
}])