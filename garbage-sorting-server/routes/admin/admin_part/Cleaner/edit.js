const { query } = require('../../../../model/connect')
const _ = require('lodash')
module.exports = async (req, res, next) => {
  try {
    const { cleaner_id, cleaner_name, cleaner_pwd, cleaner_number, cleaner_workplace } = req.body
    await query(`UPDATE cleaner_info SET cleaner_name = '${cleaner_name}',cleaner_pwd = '${cleaner_pwd}',cleaner_number = '${cleaner_number}',cleaner_workplace = '${cleaner_workplace}' WHERE cleaner_id = '${cleaner_id}'`)
    res.send({meta:{ msg:'创建成功', status:200 }})
  } catch (error) {
    next(error)
  }
  
}