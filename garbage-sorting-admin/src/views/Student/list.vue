<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生中心</el-breadcrumb-item>
      <el-breadcrumb-item>学生列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索、添加、下拉框区域 -->
      <el-row :gutter="20">
        <el-col :span="5">
          <el-input placeholder="请输入学生姓名查询" v-model="queryInfo.queryStuName" clearable @clear="getStuList">
            <el-button slot="append" icon="el-icon-search" @click="initPageNum();getStuList()"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-select  v-model="queryInfo.stu_class" placeholder="请选择班级" clearable filterable @change="initPageNum();filterStuList()">
          <el-option
            v-for="item in optionsClass"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="queryInfo.stu_build" placeholder="请选择楼幢" clearable filterable @change="initPageNum();filterStuList()">
          <el-option
            v-for="item in optionsBuild"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="queryInfo.stu_floor" placeholder="请选择楼层" clearable filterable @change="initPageNum();filterStuList()">
          <el-option
            v-for="item in optionsFloor"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="addStu">添加学生</el-button>
        </el-col>
        <el-col :span="2" class="col-2">
          <el-button type="primary" @click="handleDownload">导出</el-button>
        </el-col>
        <el-col :span="2">
          <!-- 批量导入
          <el-button type="primary" @click="handleAdd">批量导入</el-button> -->
          <el-upload ref="upload" action="http://localhost:8888/admin/multiStuAdd" :show-file-list="false"
            class="upload-data" :on-success="multiAddSucc">
              <el-button slot="trigger" icon="el-icon-upload" type="success">批量导入</el-button>
          </el-upload>
        </el-col>
      </el-row>
      <!-- 学生列表区域 -->
      <el-table :data="pageStuList" border stripe>
        <el-table-column type="index" :index="indexMethod" label="Id"></el-table-column>
        <el-table-column prop="stu_id" label="学工号">
        </el-table-column>
        <el-table-column prop="stu_name" label="姓名">
        </el-table-column>
        <el-table-column prop="stu_class" label="班级">
        </el-table-column>
        <el-table-column prop="stu_build" label="所在楼幢">
        </el-table-column>
        <el-table-column prop="stu_floor" label="所在楼层">
        </el-table-column>
        <el-table-column prop="stu_room" label="所在寝室">
        </el-table-column>
        <el-table-column label="操作">
            <!-- 作用域插槽 -->
            <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" @click="editStu(scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" @click="delStu(scope.row)"></el-button>
            </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getElOptions } from '../../utils/tool.js'
export default {
  data () {
    return {
      // 下拉框参数
      optionsClass: [],
      optionsBuild: [],
      optionsFloor: [],
      temp: [],
      flag: true,
      // 请求参数
      queryInfo: {
        queryStuName: '',
        pagenum: 1,
        pagesize: 2,
        stu_class: '',
        stu_build: '',
        stu_floor: ''
      },
      // 主要解决下拉框数据污染问题。
      stuList: [],
      // el-table绑定的数据，实现分页时用该项。
      pageStuList: [],
      total: 0
      // 导入
      // exelData: {
      //   name: '学生中心',
      //   headData: ['stu_id', 'stu_name', 'stu_class', 'stu_build', 'stu_floor', 'stu_room'],
      //   data: [{ stu_id: '学工号', stu_name: '姓名', stu_class: '班级', stu_build: '所在楼幢', stu_floor: '所在楼层', stu_room: '所在寝室' }]
      // }
    }
  },
  created () {
    this.getStuList()
    // this.getElOptions()
  },
  methods: {
    ss () {
      console.log('123')
    },
    // 当模糊查询时和下拉框选择时，初始化pagenum。解决当查询有结果时而pagenum过大，先出现空数据的情况
    initPageNum () {
      this.queryInfo.pagenum = 1
    },
    // async getElOptions () {
    //   const { data: res } = await this.$http.post('http://localhost:8888/admin/getStuList', this.queryInfo)
    //   if (res.meta.status !== 200) return this.$message.error('获取学生列表失败')
    //   this.stuList = res.stuList
    //   this.optionsClass = getElOptions(this.stuList, this.temp, this.optionsClass, 'stu_class')
    //   this.optionsBuild = getElOptions(this.stuList, this.temp, this.optionsBuild, 'stu_build')
    //   this.optionsFloor = getElOptions(this.stuList, this.temp, this.optionsFloor, 'stu_floor')
    // },
    async getStuList () {
      const { data: res } = await this.$http.post('http://localhost:8888/admin/getStuList', this.queryInfo)
      if (res.meta.status !== 200) return this.$message.error('获取学生列表失败')
      this.pageStuList = res.pageStuList
      this.total = res.total
      if (this.flag) {
        this.flag = false
        this.stuList = res.stuList
        this.optionsClass = getElOptions(this.stuList, this.temp, this.optionsClass, 'stu_class')
        this.optionsBuild = getElOptions(this.stuList, this.temp, this.optionsBuild, 'stu_build')
        this.optionsFloor = getElOptions(this.stuList, this.temp, this.optionsFloor, 'stu_floor')
      }
    },
    async filterStuList () {
      this.getStuList()
    },
    // 监听pagesize
    async handleSizeChange (val) {
      this.queryInfo.pagesize = val
      this.getStuList()
    },
    // 监听pagenum
    async handleCurrentChange (val) {
      this.queryInfo.pagenum = val
      this.getStuList()
    },
    // 解决索引只排序当前页的问题,增加函数自定义索引序号
    indexMethod (index) {
      return (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize + index + 1
    },
    addStu () {
      this.$router.push('/stu_add')
    },
    editStu (row) {
      // console.log(row)
      this.$router.push({ path: `/stu_edit/${row.stu_id}`, query: { row: row } })
      // const { data: res } = await this.$http.get('market-edit', { params: { id: id } })
      // const editData = JSON.stringify(res.data)
      // window.sessionStorage.setItem('routeData', editData)
      // this.$router.push('/editmarket')
    },
    async delStu (row) {
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const { data: res } = await this.$http.post('http://localhost:8888/admin/delStu', row)
        if (res.meta.status !== 200) return this.$message.error('删除学生信息失败')
        this.getStuList()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleDownload () {
      const vm = this
      const { export_json_to_excel } = require('@/vendor/Export2Excel')
      require.ensure([], () => {
        const tHeader = [
          '学工号',
          '姓名',
          '班级',
          '所在楼幢',
          '所在楼层',
          '所在寝室'
        ]
        const filterVal = [
          'stu_id',
          'stu_name',
          'stu_class',
          'stu_build',
          'stu_floor',
          'stu_room'
        ]
        const list = vm.stuList
        const data = vm.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '学生表')
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]))
    },
    multiAddSucc (res, file) {
      if (res.meta.status === 200) {
        this.$message({
          message: '批量上传成功',
          type: 'success'
        })
        this.getStuList()
      }
    }
  },
  watch: {
    // 解决elementUi分页删除最后一页数据不刷新回到前一页的情况
    total () {
      if (this.total === (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize && this.total !== 0) {
        this.queryInfo.pagenum -= 1
        this.getStuList()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.col-2{
  width: 6%;
}
</style>
