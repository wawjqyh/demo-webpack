const path = require('path');

module.exports = {
  mode: 'none',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'header',
              insertInto: '#app',
              singleton: true
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
};
