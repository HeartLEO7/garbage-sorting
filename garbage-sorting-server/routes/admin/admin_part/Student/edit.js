const { query } = require('../../../../model/connect')
const assert = require('http-assert')
const _ = require('lodash')
module.exports = async (req, res, next) => {
  try {
    const { stu_id, stu_name, stu_pwd, stu_class, stu_build, stu_floor, stu_room } = req.body
    await query(`UPDATE stu_info SET stu_name = '${stu_name}',stu_pwd = '${stu_pwd}',stu_class = '${stu_class}',stu_build = '${stu_build}',stu_floor = '${stu_floor}',stu_room = '${stu_room}' WHERE stu_id = '${stu_id}'`)
    res.send({meta:{ msg:'创建成功', status:200 }})
  } catch (error) {
    next(error)
  }
  

  
}