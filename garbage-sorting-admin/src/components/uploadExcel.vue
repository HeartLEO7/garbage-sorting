<template>
  <div>
    <el-button type="primary" @click="handleAdd">批量导入</el-button>
      <el-dialog title="批量导入Excel" :visible.sync="isShow" width="30%" center  :before-close="handleClose">
        <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx,.xls" @change="handleClick" >
        <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
              将excel文件拖到此处或
        <el-button :loading="loading" style="margin-left:16px;" size="mini" type="primary" :disabled="isDisabled" @click="handleUpload">点击导入
        </el-button>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="uploadTemplate">下载模板</el-button>
          <el-button type="primary" @click="submit()">确 定</el-button>
        </span>
      </el-dialog>
  </div>

</template>
<script>
import XLSX from 'xlsx'

export default {
  props: {
    beforeUpload:Function,//eslint-disable-line
    onSuccess:Function,//eslint-disable-line
    exelData: Object
  },
  data () {
    return {
      // 批量导入
      isShow: false,
      loading: false,
      istrue: true,
      excelData: {
        header: null,
        results: null
      },
      isDisabled: true
    }
  },
  methods: {
    formatJson_2 (filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          return v[j]
        })
      )
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleAdd () {
      this.isShow = true
      if (localStorage.getItem('excelDisable') === 'true') {
        this.isDisabled = false
      }
    },
    uploadTemplate () {
      import('@/vendor/Export2Excel.js').then(excel => {
        const tableData = this.formatJson_2(this.exelData.headData, this.exelData.data)
        excel.export_json_to_excel({
          header: this.exelData.headData,
          data: tableData || [], // 具体数据 必填
          filename: this.exelData.name, // 非必填
          autoWidth: true, // 非必填
          bookType: 'xlsx'// 非必填
        })
      })
      this.isDisabled = false
      localStorage.setItem('excelDisable', true)
    },
    handleUpload () {
      this.$refs['excel-upload-input'].click()
    },
    handleDrop (e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.loading) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('Only support uploading one file!')
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isExcel(rawFile)) {
        this.$message.error(
          'Only supports upload .xlsx, .xls, .csv suffix files'
        )
        return false
      }
      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover (e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    generateData ({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      this.onSuccess && this.onSuccess(this.excelData)
    },
    submit () {
      this.$emit('submit', this.excelData)
    },
    handleClick (e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return
      this.upload(rawFile)
    },
    upload (rawFile) {
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel
      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile)
      if (before) {
        this.readerData(rawFile)
      }
    },
    readerData (rawFile) {
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          this.loading = false
          this.isShow = false
          resolve()
        }

        reader.readAsArrayBuffer(rawFile)
      })
    },
    getHeaderRow (sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    isExcel (file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
</script>
<style lang="less" scoped>
.excel-upload-input {
  display:none;
  z-index:-9999;
}
.drop{
  border:2pxdashed#bbb;
  height:160px;
  line-height:160px;
  margin:0auto;
  font-size:24px;
  border-radius:5px;
  text-align:center;
  color:#bbb;
  position:relative;
}
</style>
