const { query } = require('../../../../model/connect')
const assert = require('http-assert')
const _ = require('lodash')
module.exports = async (req, res, next) => {
  try {
    console.log(req.body)
    const { header_id, header_name, header_pwd, header_number, build_id } = req.body
    let header = await query(`select * from cleaner_info where cleaner_id = ?`, [header_id])
    assert(_.isEmpty(header), 422, '创建失败')
    await query(`INSERT INTO cleaner_info(cleaner_id, cleaner_name, cleaner_pwd, cleaner_number,cleaner_workplace) values(${header_id},'${header_name}','${header_pwd}','${header_number}','${build_id}')`)
    res.send({meta:{ msg:'创建成功', status:200 }})
  } catch (error) {
    next(error)
  }
  

  
}