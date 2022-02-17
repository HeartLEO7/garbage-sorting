const { query } = require('../../../../model/connect')
module.exports = async (req, res) => {
  let giftList = await query(`select * from gift_info`)
  let total = await query(`SELECT count(*) as total from gift_info`)
  res.send({giftList,meta:{ msg:'登录成功', status:200 },total:total[0].total})
}