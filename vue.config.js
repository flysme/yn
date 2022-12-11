// vue.config.js
const path = require('path')
// const Components = require('unplugin-vue-components/webpack')
// const { VarletUIResolver } = require('unplugin-vue-components/resolvers')
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css', 'png']
module.exports = {
  // 选项
  devServer: {
    host: '0.0.0.0',
    port: 3003,
    proxy: {
      '/api': {
        target: 'http://103.133.178.195:8890',
        ws: true,
        changeOrigin: true,
      },
      '/foo': {
        target: '<other_url>',
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.join(__dirname, 'src'))
  },
  productionSourceMap: false,
  configureWebpack: (config) => {
    //直接修改配置
    const _plugins = [
      // new CompressionWebpackPlugin({
      //   asset: '[path].gz[query]', // 提示 compression-webpack-plugin@3.0.0的话asset改为filename
      //   algorithm: 'gzip',
      //   test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      //   threshold: 10240,
      //   minRatio: 0.8,
      // }),
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ]
    config.plugins = [...config.plugins, ..._plugins]
  },
}
