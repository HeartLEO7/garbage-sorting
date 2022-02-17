<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>清洁工中心</el-breadcrumb-item>
      <el-breadcrumb-item>清洁工列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索、添加、下拉框区域 -->
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input placeholder="请输入清洁工姓名查询" v-model="queryInfo.queryCleanerName" clearable @clear="getCleanerList">
            <el-button slot="append" icon="el-icon-search" @click="initPageNum();getCleanerList()"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="queryInfo.cleaner_workplace" placeholder="请选择工作楼幢" clearable filterable @change="initPageNum();filterStuList()">
          <el-option
            v-for="item in optionsBuild"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addCleaner">添加清洁工</el-button>
        </el-col>
      </el-row>
      <!-- 学生列表区域 -->
      <el-table :data="pageCleanerList" border stripe>
        <el-table-column type="index" :index="indexMethod" label="Id"></el-table-column>
        <el-table-column prop="cleaner_id" label="职工号">
        </el-table-column>
        <el-table-column prop="cleaner_name" label="姓名">
        </el-table-column>
        <el-table-column prop="cleaner_number" label="职工手机号">
        </el-table-column>
        <el-table-column label="工作楼幢">
          <template slot-scope="scope">
            <span v-if="scope.row.cleaner_workplace == 0">垃圾站</span>
            <span v-else>{{scope.row.cleaner_workplace+'号楼'}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
            <!-- 作用域插槽 -->
            <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" @click="editCleaner(scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" @click="delCleaner(scope.row)"></el-button>
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
      optionsBuild: [],
      temp: [],
      flag: true,
      // 请求参数
      queryInfo: {
        queryCleanerName: '',
        pagenum: 1,
        pagesize: 2,
        cleaner_workplace: ''
      },
      // 主要解决下拉框数据污染问题。
      cleanerList: [],
      // el-table绑定的数据，实现分页时用该项。
      pageCleanerList: [],
      total: 0
    }
  },
  created () {
    this.getCleanerList()
    // this.getElOptions()
  },
  methods: {
    // 当模糊查询时和下拉框选择时，初始化pagenum。解决当查询有结果时而pagenum过大，先出现空数据的情况
    initPageNum () {
      this.queryInfo.pagenum = 1
    },
    async getCleanerList () {
      const { data: res } = await this.$http.post('http://localhost:8888/admin/getCleanerList', this.queryInfo)
      if (res.meta.status !== 200) return this.$message.error('获取学生列表失败')
      this.pageCleanerList = res.pageCleanerList
      this.total = res.total
      if (this.flag) {
        this.flag = false
        this.cleanerList = res.cleanerList
        this.optionsBuild = getElOptions(this.cleanerList, this.temp, this.optionsBuild, 'cleaner_workplace')
      }
    },
    async filterStuList () {
      this.getCleanerList()
    },
    // 监听pagesize
    async handleSizeChange (val) {
      this.queryInfo.pagesize = val
      this.getCleanerList()
    },
    // 监听pagenum
    async handleCurrentChange (val) {
      this.queryInfo.pagenum = val
      this.getCleanerList()
    },
    // 解决索引只排序当前页的问题,增加函数自定义索引序号
    indexMethod (index) {
      return (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize + index + 1
    },
    addCleaner () {
      this.$router.push('/cleaner_add')
    },
    editCleaner (row) {
      // console.log(row)
      this.$router.push({ path: `/cleaner_edit/${row.cleaner_id}`, query: { row: row } })
      // const { data: res } = await this.$http.get('market-edit', { params: { id: id } })
      // const editData = JSON.stringify(res.data)
      // window.sessionStorage.setItem('routeData', editData)
      // this.$router.push('/editmarket')
    },
    async delCleaner (row) {
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const { data: res } = await this.$http.post('http://localhost:8888/admin/delCleaner', row)
        if (res.meta.status !== 200) return this.$message.error('删除学生信息失败')
        this.getCleanerList()
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
    }
  },
  watch: {
    // 解决elementUi分页删除最后一页数据不刷新回到前一页的情况
    total () {
      if (this.total === (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize && this.total !== 0) {
        this.queryInfo.pagenum -= 1
        this.getCleanerList()
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
