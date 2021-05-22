const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8080,
    compress: true,
    https: true,
    disableHostCheck: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [
          'url-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});