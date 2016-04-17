var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/client/main.js',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
