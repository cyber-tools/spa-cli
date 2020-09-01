const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getBabelConfig = require("@/utils/getBabelConfig");



module.exports = ({ exclude }) => ([{
	exclude,
	test: /\.(js|jsx)$/,
	use: [{
		loader: require.resolve("babel-loader"),
		options: getBabelConfig()
	}]
}, {
	test: /\.scss$/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: false }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: false }
	}, {
		loader: require.resolve("sass-loader")
	}]
}, {
	exclude,
	test: /\.module.scss$/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: false }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: true }
	}, {
		loader: require.resolve("sass-loader")
	}]
}, {
	// 第三方less文件不走css-module
	test: /\.less$/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: false }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: false }
	}, {
		loader: require.resolve("less-loader"),
		options: {}
	}]
}, {
	exclude,
	test: /\.module.less$/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: true }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: true }
	}, {
		loader: require.resolve("less-loader"),
		options: {}
	}]
}, {
	test: /\.css$/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: true }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: false }
	}]
}, {
	exclude,
	test: /\.module.css$/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: true }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: true }
	}]
}]);