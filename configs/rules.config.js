const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getBabelConfig = require("@/utils/getBabelConfig");

const { presets, ...otherConfig } = getBabelConfig();


module.exports = [{
	test: /\.(ts|tsx)$/,
	exclude: /node_modules/,
	use: [{
		loader: require.resolve("babel-loader"),
		options: {
			presets: [
				...presets,
				require.resolve("@babel/preset-typescript")
			],
			...otherConfig
		}
	}]
}, {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: [{
		loader: require.resolve("babel-loader"),
		options: { presets, ...otherConfig }
	}]
}, {
	test: /\.scss$/,
	include: /node_modules/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: false }
	}, {
		loader: require.resolve("sass-loader")
	}]
}, {
	test: /\.scss$/,
	exclude: /node_modules/,
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
	include: /node_modules/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: false }
	}, {
		loader: require.resolve("less-loader"),
		options: {}
	}]
}, {
	test: /\.less$/,
	exclude: /node_modules/,
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
	include: /node_modules/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: true }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: false }
	}]
}, {
	test: /\.css$/,
	exclude: /node_modules/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: true }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: true }
	}]
}]