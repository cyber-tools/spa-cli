const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const rules = require("./rules.config.js");


module.exports = ({ source = "src", dist = "dist" }) => ({
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
		contentBase: process.cwd()
	},
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), source)
		},
		extensions: [".css", ".scss", ".less", ".js", ".jsx", ".json"]
	},
	module: { rules },
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