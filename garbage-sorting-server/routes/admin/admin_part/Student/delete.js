const { query } = require('../../../../model/connect')
module.exports = async (req, res, next) => {
  try {
    const { stu_id } = req.body
    await query(`DELETE FROM stu_info where stu_id = '${stu_id}'`)
    res.send({meta:{ msg:'删除成功', status:200 }})
  } catch (error) {
    next(error)
  }
  

  
}