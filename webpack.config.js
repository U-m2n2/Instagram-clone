const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const port = process.env.Port;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "/dist/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
};
