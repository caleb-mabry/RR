const CompressionPlugin = require('compression-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  pwa: {
    name: 'ripping-resource',
    iconPaths: {
      favicon32: 'favicon.png',
      favicon16: 'favicon.png'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },

    configureWebpack: {
      plugins: [
        new HtmlWebpackPlugin(),
        new PreloadWebpackPlugin()
      ]
    }
  }
}