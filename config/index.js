'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
// 1. nginx代理
// 这种方式本地和线上的开发方式都比较简单；
// 本地不需要添加.env.dev和.env.prod配置，以及config.js文件，只需要关系vue.config.js然后做环境地阿里即可；不同的环境，设置不同的代理域名
// 2.配置参考
// baseUrl根路径，已被弃用
// 如果项目中但凡有一个子路径或二级路径，就需要配置publicPath，打包的时候每个页面都会多一个publicPath项，（查看项目是否在根域名下面，如果不在就需要加publicPath配置
// outputDir打包完输出文件夹的名称路径，默认为dist
// indexPath指定根路径的单页面叫什么,如: indexPath:'index1.html'
// filenameHashing主要是帮助我们生成hash，默认为true，会让打包的文件生成hash串，最大的帮助是可以解决缓存问题
// pages用来配置多页面
// lintOnSave做eslint校验，防止写多余的程序，减少性能
// productionSourceMap:false,没有map文件并且其他人看不到我们的源码也可以加速生产环境的构建
// devServer可以指定主机，端口，代理，为什么能在本地起作用:由node.js支持，由node.js启动服务，监听端口
const path = require('path')
// const { config } = require("vue/types/umd");
module.exports = {
  lintOnSave: false,
  dev: {
    host: 'localhost',
    port:8080,
    // 代理
    proxyTable: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    },
    lintOnSave: false,
    productionSourceMap: true,
    // 链式修改webpack的配置
    // 页面之间不进行一次性加载
    chainWebpack: (config) => {
      // config.plugins获取参数
      // config.plugins.delete进行删除
      // 删除预加载，实现真正按需
      config.plugins.delete('prefetch')
    },
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
