// 1. nginx代理
// 这种方式本地和线上的开发方式都比较简单；
// 本地不需要添加.env.dev和.env.prod配置，以及config.js文件，只需要关系vue.config.js然后做环境地阿里即可；不同的环境，设置不同的代理域名
module.exports = {
  devServer:{
    host: 'localhost',
    port:8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  lintOnSave: false
}