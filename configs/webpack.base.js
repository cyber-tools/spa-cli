const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const babelRules = require("@/configs/babel.rules");
const styleRules = require("@/configs/style.rules");
const resourcesRules = require("@/configs/resources.rules");

module.exports = ({ source, dist, exclude }) => ({
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
		contentBase: path.resolve(process.cwd(), source)
	},
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), source)
		},
		extensions: [".ts", ".js", ".jsx", ".tsx", ".json"]
	},
	module: {
		rules: [
			...babelRules({ exclude }),
			...styleRules({ exclude }),
			...resourcesRules({ exclude })
		]
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