var path = require('path');
var webpack = require('webpack');
var ExportFilesWebpackPlugin = require('export-files-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/entry'
  ],
  output: {
    path: path.join(process.cwd(), '/dev/static/scripts'),
    pathInfo: true,
    publicPath: 'http://localhost:3000/static/scripts/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'dev/index.html',
      template: 'client/templates/index.tpl',
      title: 'Musi.ly'
    }),
    new ExportFilesWebpackPlugin('dev/index.html')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },  
  module: {
    noParse: /\.min\.js/,   
    loaders: [{
      test: /\.(jsx|js)$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    }]
  }
};