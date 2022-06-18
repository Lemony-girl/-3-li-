// defineConfig 提示语法
const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  // babel node_moudles 进行转移，安全性，缺点：耗时长
  transpileDependencies: true,
  // 关闭eslint,build serve 将不会进行eslint检查
  lintOnSave: false,
  // 写原生webpack的配置项
  configureWebpack: {
    devServer: {
      open: true,
      port: 3000,
      host: "localhost"
    }
  }
})