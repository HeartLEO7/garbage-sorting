const { query } = require('../../../../model/connect')
module.exports = async (req, res) => {
  const { queryGiftName, pagesize } = req.body
  let pagenum = req.body.pagenum
  pagenum = (pagenum - 1) * pagesize
  // 多设一个List变量，避免下拉框等数据的污染
  let giftList = await query(`select * from gift_info where gift_name like '%${queryGiftName}%' limit ?,?`,[pagenum,pagesize])

  // let stuList = await query(`select * from stu_info where stu_name like '%${queryStuName}%' and stu_class like '%${stu_class}%' and stu_build like '%${stu_build}%' and stu_floor like '%${stu_floor}%'`)

  // 符合条件的数据总数
  let total = await query(`SELECT count(*) as total from gift_info where gift_name like '%${queryGiftName}%'`)

  res.send({giftList,meta:{ msg:'登录成功', status:200 },total:total[0].total})
}