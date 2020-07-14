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

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // preset 只能编译新规范的语法，但是不能编译函数和方法
            // 比如箭头函数会编译，Promise函数不会编译
            presets: [['@babel/preset-env']]
          }
        },
        exclude: '/node_modules/'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'babel presets',
      filename: 'index.html',
      template: 'index.html',
      inject: 'head'
    }),

    new CleanWebpackPlugin()
  ]
};
