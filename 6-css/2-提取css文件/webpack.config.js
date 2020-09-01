const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'none',
  stats: 'errors-only',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:5].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' }
        ],
        exclude: '/node_modules/'
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new OptimizeCssPlugin({})],

    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'style222',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
          priority: 20
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      esModule: true
    }),

    new HtmlWebpackPlugin({
      title: 'css',
      filename: 'index.html',
      template: 'index.html',
      inject: 'head'
    })
  ],

  devServer: {
    port: 3000,
    quiet: true,
    contentBase: path.resolve(__dirname, 'dist')
  }
};
