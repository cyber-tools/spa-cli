const styleRules = require("@/configs/style.rules");
const getBabelConfig = require("@/utils/getBabelConfig");


module.exports = ({ exclude }) => {
	return [{
		exclude,
		test: /.(js|jsx)$/,
		use: [{
			loader: require.resolve("babel-loader"),
			options: getBabelConfig()
		}]
	}, ...styleRules({ exclude })]
};