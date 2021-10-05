const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDEV = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/index.tsx",
  mode: isDEV ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ 
            isDEV ? 'style-loader' : MiniCssExtractPlugin.loader,
           "css-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".tsx", ".ts"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public/"),
    host: process.env.HOST,
    port: process.env.PORT,
    hotOnly: true,
    overlay: true, // capturing compilation related warnings and errors and show them instead of showing my actual website.
    stats: "errors-only",
    open: true, // Open the page in browser
  },
  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            title: "Title"
        }),
    ]
};