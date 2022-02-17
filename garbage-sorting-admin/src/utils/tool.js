// 获取下拉框的值并去重
export function getElOptions (arrOriginal, arrTemp, arrFinal, option) {
  arrTemp = []
  arrFinal = []
  arrOriginal.forEach(item => {
    arrTemp.push(item[option])
  })
  arrTemp = arrTemp.filter((item, index) => {
    return arrTemp.indexOf(item) === index
  })
  arrTemp.forEach(item => {
    arrFinal.push({ value: item, label: item })
  })
  return arrFinal
}

// 手机号码验证
export function isvalidPhone (str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}
