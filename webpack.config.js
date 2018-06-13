const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'nearest.bundled.min.js',
    publicPath: "assets/",
    libraryTarget: 'var',
    library: 'nearest',
  },
  // devtool: 'source-map',
  plugins: new webpack.optimize.UglifyJsPlugin(),
  module: {
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  externals: {
    "THREE": "THREE",
  },
};
