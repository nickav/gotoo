var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, 'src');
var destPath = path.join(__dirname, 'dist', 'js');

module.exports = {
  entry: './src/js/index',
  output: {
    path: destPath,
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /(node_modules|bower_components)/,
      include: srcPath
    }]
  }
};
