const { query } = require('../../../../model/connect')
module.exports = async (req, res) => {
  const { queryHeaderName, build_id, pagesize } = req.body
  let pagenum = req.body.pagenum
  pagenum = (pagenum - 1) * pagesize
  // 多设一个List变量，避免下拉框等数据的污染
  let pageBuildList = await query(`select * from build_info where header_name like '%${queryHeaderName}%'  and build_id like '%${build_id}%' limit ?,?`,[pagenum,pagesize])

  let buildList = await query(`select * from build_info where header_name like '%${queryHeaderName}%'  and build_id like '%${build_id}%'`)

  // 符合条件的数据总数
  let total = await query(`SELECT count(*) as total from build_info where header_name like '%${queryHeaderName}%' and build_id like '%${build_id}%'`)

  res.send({buildList,pageBuildList,meta:{ msg:'登录成功', status:200 },total:total[0].total})
}