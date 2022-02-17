// token基于jwt令牌
const jwt = require('jsonwebtoken')
const { query } = require('../../../../model/connect')
const assert = require('http-assert')
const _ = require('lodash')
module.exports = async (req, res, next) => {
  try {
    const { account,password } = req.body
    // 1. 根据账号查找相关管理员
    const user = await query('select * from stu_info where stu_id = ?', [account])
    // 2. 判断用户是否存在
    assert(!_.isEmpty(user), 422, '用户不存在')
    // 3. 校验密码
    assert(_.isEqual(password,user[0].stu_pwd), 422, '密码错误')
    // 4. 登录成功生成token返回客户端 第一个参数是组 第二个参数为私钥（自定义）
    const token = jwt.sign({account},'zhuyu')
    res.send({token,meta:{ msg:'登录成功', status:200 },stu_id:user[0].stu_id,stu_name:user[0].stu_name})
  } catch (error) {
    next(error)
  }
}