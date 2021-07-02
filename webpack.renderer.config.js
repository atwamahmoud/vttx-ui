const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push({
  test: /\.css$/,
  use: [{loader: "style-loader"}, {loader: "css-loader"}],
});

module.exports = {
  module: {
    rules,
  },
  cache: false,
  // historyApiFallback: {
  //   index: `${publicPath}/app.html`,  // Added this
  //   verbose: true,
  //   disableDotRule: false
  // },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
