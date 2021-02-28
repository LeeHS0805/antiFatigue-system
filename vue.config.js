module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.externals = { // 不会被打包的库
        'vue': 'Vue',
        'vant':'vant',
        'axios': 'axios',
      }
    }
  }
}
