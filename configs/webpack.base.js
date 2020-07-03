const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: path.resolve(process.cwd(), "./src/index.js"),
	output: {
		path: path.resolve(process.cwd(), "./dist/"),
		filename: "[name].[hash].js"
	},
	devServer: {
		// open: true,
		host: "127.0.0.1",
		contentBase: process.cwd()
	},
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), "./src")
		},
		extensions: [".css", ".scss", ".less", ".js", ".jsx", ".json"]
	},
	module: {
		rules: require("./rules.config.js")
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name][hash:8].css",
			chunkFilename: "[id].css"
		})
	]
};