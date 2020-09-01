const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode 需要设为 production，development 默认不开启，production 默认开启
  mode: 'production',

  stats: 'errors-only',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].js'
  },

  /* optimization: {
    usedExports: true
  }, */

  plugins: [new CleanWebpackPlugin()]
};
