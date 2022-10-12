const path = require("path");

module.exports = {
  name: "webpack-setting",
  mode: "development",
  devtool: "eval",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", ["@babel/preset-react", {runtime: "automatic"}]],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
