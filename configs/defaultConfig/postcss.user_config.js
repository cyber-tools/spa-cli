const dotProp = require("dot-prop");
const { postcss } = require("@/utils/getProjectConfig")();

const px2viewportConfig = dotProp.get(postcss, "px2viewport");


module.exports = {
  ident: "postcss",
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: { flexbox: "no-2009" },
      stage: 3
    }),
    require("postcss-aspect-ratio-mini")({}),
    px2viewportConfig ? require("postcss-px-to-viewport")(px2viewportConfig) : undefined,
    px2viewportConfig ? require("postcss-viewport-units")({}) : undefined,
  ].filter(Boolean),
  sourceMap: true
};