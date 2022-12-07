// vue.config.js
const path = require('path')
const Components = require('unplugin-vue-components/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')
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
  configureWebpack: {
    plugins: [
      // Components({
      //   resolvers: [
      //     VarletUIResolver({
      //       version: 'vue2',
      //     }),
      //   ],
      //   directives: true,
      // }),
    ],
  },
}
