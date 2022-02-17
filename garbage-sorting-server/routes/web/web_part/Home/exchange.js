const { query } = require('../../../../model/connect')
module.exports = async (req, res) => {
  let giftList = await query(`SELECT * FROM gift_info ORDER BY RAND() LIMIT 4`)
  res.send({giftList,meta:{ msg:'登录成功', status:200 }})
}