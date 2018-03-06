/*
 * Copyright (c) 2018, globocom (http://globo.com)
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "."
  ],
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "my-image-plugin.js",
    library: "my-image-plugin",
    libraryTarget: "umd"
  },
  externals: {
    "megadraft": "Megadraft",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};
