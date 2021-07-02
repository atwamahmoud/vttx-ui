const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', "preload.js"),
          to: path.resolve(__dirname, '.webpack/main', "preload.js")
        }  
      ],
    }),
  ],
  cache: false,
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};