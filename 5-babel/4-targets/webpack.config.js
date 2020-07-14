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
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  targets: {
                    // browsers: ['> 1%', 'last 2 versions'], // 指定支持哪些浏览器
                    chrome: '52' // 指定chrome版本
                  }
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
      title: 'babel polyfill',
      filename: 'index.html',
      template: 'index.html',
      inject: 'head'
    }),

    new CleanWebpackPlugin()
  ]
};
