const express = require('express')
const app = express()
// 导入管理端路由
const admin = require('./routes/admin/admin')
const web = require('./routes/web/web')
const expressJwt = require('express-jwt')

// 数据库连接
require('./model/connect')

// 跨域中间件
// 处理json数据
// 处理post请求参数
app.use(require('cors')())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(__dirname + '/public'));
// app.use(expressJwt({
//   secret: 'zhuyu', // 签名的密钥 或 PublicKey
//   algorithms:['HS256'],
// }).unless({
//   path: ['/', '/admin/login'] // 指定路径不经过 Token 解析
// }))

// 配置管理端路由
app.use('/admin', admin)
app.use('/web', web)

// 错误处理函数
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.send({
      meta:{
        message: '无效的token',
        status: '10011'
      }
    })
  } else {
    res.send({
      meta:{
        message: err.message,
        status: err.statusCode
      }
    })
  }

})

// 设置端口号
// app.listen(8888,() => {
//   console.log('服务器启动成功')
// })

var server = app.listen(8888,'0.0.0.0',()=>{
  var host = server.address().address
  var port = server.address().port
  console.log("地址为http://%s:%s",host,port)
})