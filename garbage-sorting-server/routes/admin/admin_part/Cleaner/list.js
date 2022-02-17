const { query } = require('../../../../model/connect')
module.exports = async (req, res) => {
  const { queryCleanerName, cleaner_workplace, pagesize } = req.body
  let pagenum = req.body.pagenum
  pagenum = (pagenum - 1) * pagesize
  // 多设一个List变量，避免下拉框等数据的污染
  let pageCleanerList = await query(`select * from cleaner_info where cleaner_name like '%${queryCleanerName}%'  and cleaner_workplace like '%${cleaner_workplace}%' limit ?,?`,[pagenum,pagesize])

  let cleanerList = await query(`select * from cleaner_info where cleaner_name like '%${queryCleanerName}%'  and cleaner_workplace like '%${cleaner_workplace}%'`)

  // 符合条件的数据总数
  let total = await query(`SELECT count(*) as total from cleaner_info where cleaner_name like '%${queryCleanerName}%' and cleaner_workplace like '%${cleaner_workplace}%'`)

  res.send({cleanerList,pageCleanerList,meta:{ msg:'登录成功', status:200 },total:total[0].total})
}