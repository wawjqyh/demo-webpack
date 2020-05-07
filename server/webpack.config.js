const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',

  devServer: {
    port: 8000
  },

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash:5].js'
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          // fallback,不提取时的操作
          fallback: {
            loader: 'style-loader'
          },

          // 处理css的loader
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'style-[hash:5].min.css'
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html', //打包后的文件名字
      template: 'index.html' //源文件的名字
    })
  ]
};
