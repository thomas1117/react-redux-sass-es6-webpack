var path = require('path');
var webpack = require('webpack');

function fromRootDir(matchPath) {
    return new RegExp(process.cwd() + matchPath);
}

module.exports = {
  entry: './src/app.js',
  output:{
    path: path.join(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
        {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
};

