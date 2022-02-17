const { query } = require('../../../../model/connect')
const assert = require('http-assert')
const _ = require('lodash')
const fs = require('fs');
const XLSX = require('xlsx');
const formidable = require('formidable'); 
module.exports = async (req, res, next) => {
  let form = new formidable.IncomingForm();
  let xlsxJson;
  form.encoding = 'utf-8';            // 编码方式
  form.uploadDir = 'public/tmp';      // 临时上传路径
  form.keepExtensions = true;         // 保存后缀名
  form.parse(req, function (err, fields, files) {
    var sourceFileName = files.file.newFilename;
    var tempPath = files.file.filepath;
    var targetPath = 'public/upload/' + sourceFileName;
    fs.renameSync(tempPath, targetPath);
    const workbook = XLSX.readFile(targetPath);
    const sheetNames = workbook.SheetNames;
    const worksheet = workbook.Sheets[sheetNames[0]];
    xlsxJson = XLSX.utils.sheet_to_json(worksheet);
    xlsxJson.forEach(async item => {
      await query(`INSERT INTO stu_info(stu_id, stu_pwd, stu_name, stu_class, stu_build, stu_floor, stu_room) values('${item.stu_id}','${item.stu_pwd}','${item.stu_name}','${item.stu_class}', ${item.stu_build}, ${item.stu_floor}, '${item.stu_room}')`)
    })
  })
  res.send({meta:{ msg:'创建成功', status:200 }})


  // try {
  //   const { stu_id, stu_name, stu_pwd, stu_class, stu_build, stu_floor, stu_room } = req.body
  //   let stu = await query(`select * from stu_info where stu_id = ?`, [stu_id])
  //   assert(_.isEmpty(stu), 422, '创建失败')
  //   await query(`INSERT INTO stu_info(stu_id, stu_pwd, stu_name, stu_class, stu_build, stu_floor, stu_room) values('${stu_id}','${stu_pwd}','${stu_name}','${stu_class}', ${stu_build}, ${stu_floor}, '${stu_room}')`)
  //   res.send({meta:{ msg:'创建成功', status:200 }})
  // } catch (error) {
  //   next(error)
  // }
  


}