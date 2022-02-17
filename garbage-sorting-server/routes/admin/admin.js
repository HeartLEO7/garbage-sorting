const express = require('express')
//创建后台页面展示路由
const admin = express.Router()

admin.get('/zhuyu', (req,res) => {
  res.send('ok')
})

//实现登录功能
admin.post('/login', require('./admin_part/Login/login'))

// 实现学生列表展示
admin.post('/getStuList', require('./admin_part/Student/list'))
// 实现添加学生功能
admin.post('/addStu', require('./admin_part/Student/add'))
// 实现学生信息编辑功能
admin.put('/editStu', require('./admin_part/Student/edit'))
// 实现删除学生信息功能 (delete接收不到参数？？？)
admin.post('/delStu', require('./admin_part/Student/delete'))
// 实现学生信息批量上传
admin.post('/multiStuAdd',require('./admin_part/Student/multi_add'))

// 实现清洁工列表展示功能
admin.post('/getCleanerList', require('./admin_part/Cleaner/list'))
// 实现清洁工的添加
admin.post('/addCleaner',require('./admin_part/Cleaner/add'))
// 实现清洁工信息的修改
admin.put('/editCleaner', require('./admin_part/Cleaner/edit'))
// 实现删除清洁工信息的修改
admin.post('/delCleaner', require('./admin_part/Cleaner/delete'))

// 实现楼幢卫生列表展示
admin.post('/getBuildList',require('./admin_part/Build/hygienic_list'))
// 实现楼幢负责人的添加
admin.post('/addBuild',require('./admin_part/Build/add'))
// 实现楼幢负责人信息的修改
admin.put('/editBuild',require('./admin_part/Build/edit'))
// 实现删除负责人信息功能
admin.post('/delBuild', require('./admin_part/Build/delete'))
// 实现分类详情列表展示
admin.post('/getBuildDetailList', require('./admin_part/Build/sort_detail_list'))

// 实现礼品列表模块
admin.post('/getGiftList',require('./admin_part/Exchange/gift_list'))
// 实现礼品增加功能
admin.post('/addGift', require('./admin_part/Exchange/gift_add'))
// 实现礼品修改功能
admin.put('/editGift', require('./admin_part/Exchange/gift_edit'))
// 实现删除礼品信息的功能
admin.post('/delGift', require('./admin_part/Exchange/gift_delete'))

// 导出路由
module.exports = admin