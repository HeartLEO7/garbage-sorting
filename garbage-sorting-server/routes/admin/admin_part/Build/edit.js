const { query } = require('../../../../model/connect')
const _ = require('lodash')
module.exports = async (req, res, next) => {
  try {
    const { header_id, header_name, header_pwd, header_number, build_id } = req.body
    await query(`UPDATE build_info SET header_name = '${header_name}',header_pwd = '${header_pwd}',header_number = '${header_number}',build_id = '${build_id}' WHERE header_id = '${header_id}'`)
    res.send({meta:{ msg:'创建成功', status:200 }})
  } catch (error) {
    next(error)
  }
  

  
}