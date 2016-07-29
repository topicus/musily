var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: '/static/scripts/',
  port: 3000,
  contentBase: './dev',
  inline: true,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5000',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  },
  proxy: {
    '/filter': 'http://localhost:5000'
  } 
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});