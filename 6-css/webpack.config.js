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

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // 将打包后的 css 注入到页面中
          { loader: 'css-loader' } // 让 webpack 支持打包 css
        ],
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
  ],

  devServer: {
    port: 3000,
    quiet: true,
    contentBase: path.resolve(__dirname, 'dist')
  }
};
