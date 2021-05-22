const path = require('path');
module.exports = {
  entry: {
    App1: './src/js/index.js',
  },
  output: {
    path: __dirname + '/',
    filename: 'dist/[name]/[name]_bundle.js'
  },
  resolve: {
    alias: {
      modules: path.join(__dirname, 'node_modules'),
      common: path.join(__dirname, 'common')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      'last 4 versions'
                    ]
                  },
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
