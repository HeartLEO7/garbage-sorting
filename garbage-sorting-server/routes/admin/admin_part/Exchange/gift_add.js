const { query } = require('../../../../model/connect')
const assert = require('http-assert')
const path = require('path')
const _ = require('lodash')
const formidable = require('formidable'); 
const multiparty = require("multiparty");
const fs = require('fs')
module.exports =  (req, res, next) => {
  let gift_id
  let form = new multiparty.Form();
  form.uploadDir = path.join(__dirname, '../../../../public/images/gift_image/');
  form.parse(req, async function (err, fields, files) {
    gift_id = fields.gift_id[0]
    gift_name = fields.gift_name[0]
    gift_price = fields.gift_price[0]
    gift_number = fields.gift_number[0]
    exchange_area = fields.exchange_area[0]
    stu_account_limit = fields.stu_account_limit[0]
    pickup_method = fields.pickup_method[0]
    provide_unit = fields.provide_unit[0]
    gift_note = fields.gift_note[0]
    var inputFile = files.file[0];
    var uploadedPath = inputFile.path;
    var newPath = path.join(__dirname, '../../../../public/images/gift_image/',`${gift_id}.jpg`,)
    fs.rename(uploadedPath,newPath,function(err){
      if(err){
        throw err;
       }
    })
    gift_image = `/gift_image/${gift_id}.jpg`
    await query(`INSERT INTO gift_info(gift_id, gift_name, gift_image, gift_price, exchange_area, stu_account_limit, pickup_method,provide_unit,gift_number,gift_note) values('${gift_id}','${gift_name}','${gift_image}',${gift_price}, '${exchange_area}', '${stu_account_limit}', '${pickup_method}', '${provide_unit}', ${gift_number}, '${gift_note}')`)
    }
  )
  res.send({meta:{ msg:'创建成功', status:200 }})
  


  // // const { gift_id } = req.body
  // // console.log('----------'+ gift_id)
  // let form = new formidable.IncomingForm();
  // form.encoding = 'utf-8';            // 编码方式
  // form.keepExtensions = true;         // 保存后缀名
  // form.uploadDir = path.join(__dirname, '../../../../public/images/gift_image/');
  
  // form.parse(req,(error,fields,files)=>{
  //   // console.log(files)
  //   let oldPath = files.file.filepath
  //   let imgname = files.file.originalFilename
  //   console.log(imgname)
  //   // let userImgname = imgname.replace(/[^.]+/, 'zhuyu') //把扩展名前的文件名给替换掉
  //   // console.log(userImgname)
  // });
  // res.send('ok')


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