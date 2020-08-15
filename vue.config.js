const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
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
    chainWebpack(config) {
      config.plugins.delete('prefetch');
      
      // and this line 
      config.plugin('CompressionPlugin').use(CompressionPlugin);
    }
  }
}