const path = require("path");

module.exports = {
  mode: "none",

  entry: {
    app: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:5].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    // browsers: ["> 1%", "last 2 versions"]
                    chrome: "52"
                  }
                }
              ]
            ]
          }
        },
        exclude: "/node_modules/"
      }
    ]
  }
};
