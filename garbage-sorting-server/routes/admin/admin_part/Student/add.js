const { query } = require('../../../../model/connect')
const assert = require('http-assert')
const _ = require('lodash')
module.exports = async (req, res, next) => {
  try {
    const { stu_id, stu_name, stu_pwd, stu_class, stu_build, stu_floor, stu_room } = req.body
    let stu = await query(`select * from stu_info where stu_id = ?`, [stu_id])
    assert(_.isEmpty(stu), 422, '创建失败')
    await query(`INSERT INTO stu_info(stu_id, stu_pwd, stu_name, stu_class, stu_build, stu_floor, stu_room) values('${stu_id}','${stu_pwd}','${stu_name}','${stu_class}', ${stu_build}, ${stu_floor}, '${stu_room}')`)
    res.send({meta:{ msg:'创建成功', status:200 }})
  } catch (error) {
    next(error)
  }
  

  
}