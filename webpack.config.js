var webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname);
const SRC_DIR = path.resolve(__dirname);

console.log('BUILD_DIR', BUILD_DIR);
console.log('SRC_DIR', SRC_DIR);

module.exports = {
  entry: {
    app: SRC_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
  ]
};
