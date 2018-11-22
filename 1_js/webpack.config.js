const path = require('path');

module.exports = {
  mode: 'production',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].js'
  }
};
