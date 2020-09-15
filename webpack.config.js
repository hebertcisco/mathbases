const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'math.bases.js'
  }
};

module.exports = config;