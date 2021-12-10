const proxy = require('http-proxy-middleware')

//配置代理 文件名字不能改变
module.exports = function (app) {
  app.use(
    proxy('/api1', { //遇见'api1'前缀的请求,就会触发该代理配置
      target: 'http://localhost:5000', //请求转发给谁
      // changeOrigin: true,//控制服务器收到的请求头中 Host字段的值
      pathRewrite: { '^/api1': '' } //重写请求路径(必须)
    })
  )
}