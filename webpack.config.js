var path = require('path');

module.exports = {
  entry: './src/vuex-subscriptions-plugin.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vuex-subscriptions-plugin.js',
    library: 'VuexSubscriptionsPlugin',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      { test: /\.js$/, include: [/src/], use: ['babel-loader']}
    ]
  }
};
