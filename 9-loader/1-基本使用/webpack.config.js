const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: [path.resolve(__dirname, './loaders/replaceLoader.js')]
      }
    ]
  },

  plugins: [
    // 打包前删除 dist 目录
    new CleanWebpackPlugin()
  ]
};
