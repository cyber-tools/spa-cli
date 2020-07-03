const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [{
	test: /.(js|jsx)$/,
	exclude: /node_modules/,
	use: [{
		loader: require.resolve("babel-loader"),
		options: {
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
	}]
}, {
	// 第三方less文件不走css-module
	test: /.less$/,
	include: /node_modules/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: false }
	}, {
		loader: require.resolve("less-loader"),
		options: {
			// modifyVars: {},
			// javascriptEnabled: true,
		}
	}]
}, {
	test: /.less$/,
	exclude: /node_modules/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: true }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: true }
	}, {
		loader: require.resolve("less-loader"),
		options: {
			// modifyVars: {},
			// javascriptEnabled: true,
		}
	}]
}, {
	test: /.css$/,
	include: /node_modules/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: true }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: false }
	}]
}, {
	test: /.css$/,
	exclude: /node_modules/,
	use: [{
		loader: MiniCssExtractPlugin.loader,
		options: { esModule: true }
	}, {
		loader: require.resolve("css-loader"),
		options: { modules: true }
	}]
}]