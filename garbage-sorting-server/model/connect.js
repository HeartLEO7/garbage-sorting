const mysql = require('mysql')
let pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'garbage_sorting'
})

let query = function(sql, values){
  return new Promise((resolve, reject)=>{
      pool.getConnection((err, connection)=>{
          if(err){
              reject(err)
          }else{
            connection.query(sql, values, (err, rows)=>{
              if(err){
                reject(err)
              }else{
                resolve(rows)
              }
                connection.release()
             })
          }
      })
  })
}
module.exports = { query }