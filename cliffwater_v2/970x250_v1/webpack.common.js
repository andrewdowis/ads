const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../deploy/970x250_v1"),
    filename: "js/bundle.js",
    libraryTarget: "var",
    library: "CliffWater",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,

          // Translates CSS into CommonJS
          "css-loader",

          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // {
      //   test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "assets/fonts/[name][ext]",
      //   },
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./style/main.css",
    }),
  ],
}
