const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  stats: 'errors-only',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.[hash:5].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '预加载',
      filename: 'index.html',
      template: 'index.html',
      inject: 'head'
    }),

    new CleanWebpackPlugin()
  ],

  devServer: {
    port: 3000,
    quiet: true,
    contentBase: path.resolve(__dirname, 'dist')
  }
};
