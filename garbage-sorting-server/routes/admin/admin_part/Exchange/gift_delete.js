const { query } = require('../../../../model/connect')
module.exports = async (req, res, next) => {
  try {
    const { gift_id } = req.body
    console.log(gift_id)
    await query(`DELETE FROM gift_info where gift_id = '${gift_id}'`)
    res.send({meta:{ msg:'删除成功', status:200 }})
  } catch (error) {
    next(error)
  }
}