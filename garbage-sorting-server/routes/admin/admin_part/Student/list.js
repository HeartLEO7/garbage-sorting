const { query } = require('../../../../model/connect')
module.exports = async (req, res) => {
  const { queryStuName, stu_class, stu_build, stu_floor, pagesize } = req.body
  let pagenum = req.body.pagenum
  pagenum = (pagenum - 1) * pagesize
  console.log(req.body)
  // 多设一个List变量，避免下拉框等数据的污染
  let pageStuList = await query(`select * from stu_info where stu_name like '%${queryStuName}%' and stu_class like '%${stu_class}%' and stu_build like '%${stu_build}%' and stu_floor like '%${stu_floor}%' limit ?,?`,[pagenum,pagesize])

  let stuList = await query(`select * from stu_info where stu_name like '%${queryStuName}%' and stu_class like '%${stu_class}%' and stu_build like '%${stu_build}%' and stu_floor like '%${stu_floor}%'`)

  // 符合条件的数据总数
  let total = await query(`SELECT count(*) as total from stu_info where stu_name like '%${queryStuName}%' and stu_class like '%${stu_class}%' and stu_build like '%${stu_build}%' and stu_floor like '%${stu_floor}%'`)

  res.send({stuList,pageStuList,meta:{ msg:'登录成功', status:200 },total:total[0].total})
}