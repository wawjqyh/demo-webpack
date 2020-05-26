const path = require('path');

module.exports = {
  mode: 'none',

  entry: {
    // 一个 chunk 多个文件，打包后会输出到一个 bundle
    // app: ["./src/index1.js", "./src/index2.js"],

    // 多个入口，打包会输出 bundle
    app1: './src/index1.js',
    app2: './src/index2.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),

    // 指定 bundle 名
    // filename: 'app.js',

    // 使用模板替换字符串，可以输出多个 bundle
    filename: '[name].min.[hash:5].js'
  }
};
