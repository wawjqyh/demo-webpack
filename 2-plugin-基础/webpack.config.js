const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash:5].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello world',
      filename: 'index.html', //打包后的文件名字
      template: 'index.html', //源文件的名字
      inject: 'head' // 页面引用文件的位置
    })
  ]
};
