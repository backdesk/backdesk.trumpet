var webpack = require('webpack');

module.exports = {
  entry: './public/scripts/client.js',

  output: {
    path: __dirname + '/build',
    filename: 'client.min.js'
  },

  module: {
    loaders: [
      { test: /\.html$/, loader: 'underscore-template-loader' }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      Backbone: 'backbone'
    })
  ]
};