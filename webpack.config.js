const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");


const htmlConfig = {
  template: "src/index.html",
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  },

  inject: true
}


const config = {
  devtool: "source-map",
  watch: true,
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index")
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new ExtractTextPlugin("[name].[contenthash].css"),
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor" }),
    new HtmlWebpackPlugin(htmlConfig),
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"]) },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") }
    ]
  }
}


module.exports = config;
