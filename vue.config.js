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
    // chainWebpack(config) {
    //   config.plugins.delete('prefetch');
      
    //   // and this line 
    //   config.plugin('CompressionPlugin').use(CompressionPlugin);
    // },
    // chainWebpack: config => {

    //   config.module
    //   .rule('images')
    //     .use('url-loader')
    //       .loader('url-loader')
    //       .tap(options => Object.assign(options, { limit: 10240 }))

    //   // remove the prefetch plugin
    //   config.plugins.delete('prefetch')
  
    //   // or:
    //   // modify its options:
    //   config.plugin('prefetch').tap(options => {
    //     options[0].fileBlacklist = options[0].fileBlacklist || []
    //     options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
    //     return options
    //   })
    // }
  
  
  }
}