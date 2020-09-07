const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";


module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "js", "index"),
    homepage: path.resolve(__dirname, "src", "js", "homepage", "index"),
  },
  output: {
    path: __dirname + '/dist',
    filename: "./js/[name].[chunkhash].js",
    publicPath: '../'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          "postcss-loader",
        ],

      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "./vendor/[name].[ext]",
        },
      },
      {
        test: /\.(png|jpg|gif|ico|svg|webp)$/,
        use: [
          "file-loader?name=./images/[name].[ext]",
          {
            loader: "image-webpack-loader",
            options: {
              publicPath: '../',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.[contenthash].css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, "src", "pages", "main.html"),
      filename: "pages/main.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, "src", "pages", "homepage.html"),
      filename: "pages/homepage.html",
      chunks: ["homepage"],
    }),
    new WebpackMd5Hash(),

    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
