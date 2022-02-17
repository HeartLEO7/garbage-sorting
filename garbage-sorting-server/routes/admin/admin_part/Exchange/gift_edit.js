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
    if(Object.values(files).length>0){
      var inputFile = files.file[0];
      var uploadedPath = inputFile.path;
      var newPath = path.join(__dirname, '../../../../public/images/gift_image/',`${gift_id}.jpg`,)
      fs.rename(uploadedPath,newPath,function(err){
        if(err){
          throw err;
        }
      })
    }
    gift_image = `/gift_image/${gift_id}.jpg`
    await query(`UPDATE gift_info SET gift_name = '${gift_name}', gift_image = '${gift_image}', gift_price = ${gift_price}, exchange_area = '${exchange_area}', stu_account_limit = '${stu_account_limit}', pickup_method = '${pickup_method}',provide_unit = '${provide_unit}',gift_number = ${gift_number},gift_note = '${gift_note}' WHERE gift_id = '${gift_id}'`)
    }
  )
  res.send({meta:{ msg:'创建成功', status:200 }})
}