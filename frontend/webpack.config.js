var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, 'src');
var destPath = path.join(__dirname, 'dist', 'js');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],
  output: {
    path: destPath,
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /(node_modules|bower_components)/,
      include: srcPath
    }]
  }
};
