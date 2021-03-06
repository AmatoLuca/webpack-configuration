const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
let target = "web";

if (process.env.NODE_ENV === "production") target = "browserslist";

module.exports = {
  mode: mode,
  target: target,

  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, 
            options: { publicPath: "" },
          },
          "css-loader", 
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
};