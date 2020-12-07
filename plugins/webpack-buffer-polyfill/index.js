const webpack = require('webpack');

module.exports = function () {
  return {
    name: 'webpack-buffer-polyfill',
    configureWebpack() {
      return {
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          }),
        ]
      }
    },
  };
}