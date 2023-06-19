const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const pages = ["index", "blog", "about", "contacts"];

module.exports = {
  mode: "development",
  target: "web",
  devtool: "source-map",

  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  output: {
    filename: "[name].[hash-8].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(?:ico|gif|png|jpeg|jpg|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name]-[hash:5][ext]",
        },
      },
      //{
      // test: /\.(woff|woff2|eot|ttf|otf)$/,
      // type: "asset/resource",
      // generator: {
      //   filename: "fonts/[name]-[hash:5][ext]",
      // },
      //},
    ],
  },

  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),

  devServer: {
    compress: false,
    open: true,
    port: 3000,
    hot: true,
  },
};
