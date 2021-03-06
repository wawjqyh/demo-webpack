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
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: 2
                }
              ]
            ]
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
