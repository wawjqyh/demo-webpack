const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.[hash:5].js'
  },

  devtool: 'eval',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello world',
      filename: 'index.html', //打包后的文件名字
      template: 'index.html', //源文件的名字
      inject: 'head' // 页面引用文件的位置
    }),

    // 打包前删除 dist 目录
    new CleanWebpackPlugin()
  ]
};
