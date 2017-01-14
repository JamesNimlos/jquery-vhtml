const path = require('path');

module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "jquery-vhtml": "../index.js",
      "jquery": "jquery"
    },
    root: [
      `${__dirname}/node_modules`,
      path.join(__dirname, '../node_modules')
    ]
  },
  resolveLoader: { root: `${__dirname}/node_modules` },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader" },
      { test: /\.json$/, loader: "json-loader" }
    ]
  }
};
