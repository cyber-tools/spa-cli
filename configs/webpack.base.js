const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const rulesConfig = require("./rules.config.js");


module.exports = ({ source, dist, exclude }) => ({
	mode: "development",
	devtool: "source-map",
	entry: path.resolve(process.cwd(), source, "index.js"),
	output: {
		path: path.resolve(process.cwd(), dist),
		filename: "[name].[hash].js"
	},
	devServer: {
		open: true,
		host: "127.0.0.1",
		historyApiFallback: true,
		contentBase: process.cwd()
	},
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), source)
		},
		extensions: [".css", ".scss", ".less", ".ts", ".js", ".jsx", ".tsx", ".json"]
	},
	module: {
		rules: rulesConfig({ exclude })
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(process.cwd(), source, "index.html")
		}),
		new MiniCssExtractPlugin({
			filename: "[name][hash:8].css",
			chunkFilename: "[id].css"
		})
	]
});