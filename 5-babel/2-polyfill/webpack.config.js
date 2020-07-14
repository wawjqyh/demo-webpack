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
            // useBuiltIns: 'usage' 按需引入 
            presets: [['@babel/preset-env', { useBuiltIns: 'usage' }]]
          }
        },
        exclude: '/node_modules/'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'babel polyfill',
      filename: 'index.html',
      template: 'index.html',
      inject: 'head'
    }),

    new CleanWebpackPlugin()
  ]
};
