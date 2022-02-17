const { query } = require('../../../../model/connect')
module.exports = async (req, res, next) => {
  try {
    const { cleaner_id } = req.body
    console.log(req.body)
    await query(`DELETE FROM cleaner_info where cleaner_id = '${cleaner_id}'`)
    res.send({meta:{ msg:'删除成功', status:200 }})
  } catch (error) {
    next(error)
  }
  

  
}