const { query } = require('../../../../model/connect')
module.exports = async (req, res, next) => {
  try {
    const { header_id } = req.body
    await query(`DELETE FROM build_info where header_id = '${header_id}'`)
    res.send({meta:{ msg:'删除成功', status:200 }})
  } catch (error) {
    next(error)
  }
  

  
}