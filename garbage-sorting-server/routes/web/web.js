const express = require('express')
//创建网站页面展示路由
const web = express.Router()

// 实现登录功能
web.post('/login',require('./web_part/Login/login'))

// 实现首页礼品兑换模块
web.get('/home_exchange',require('./web_part/Home/exchange'))

// 实现礼品兑换页面的展示
web.get('/getGiftList', require('./web_part/Gift/list'))

// 导出路由
module.exports = web