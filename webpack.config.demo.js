/*
 * Copyright (c) 2018, globocom (http://globo.com)
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "./demo/main.js"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "demo/bundle.js"
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
