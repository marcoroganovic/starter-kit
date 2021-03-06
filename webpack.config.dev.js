const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  devtool: "inline-source-map",
  entry: [
    path.resolve(__dirname, "src/index")
  ],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
      { test: /\.sass$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
    ]
  }
}

module.exports = config;
