var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['./src/app'],
  output: {
    path: 'dist',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loaders: ['tslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
