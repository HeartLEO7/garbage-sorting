<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>楼幢管理</el-breadcrumb-item>
      <el-breadcrumb-item>楼幢卫生</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索、添加、下拉框区域 -->
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input placeholder="请输入负责人姓名查询" v-model="queryInfo.queryHeaderName" clearable @clear="getBuildList">
            <el-button slot="append" icon="el-icon-search" @click="initPageNum();getBuildList()"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-select  v-model="queryInfo.build_id" placeholder="请选择楼幢" clearable filterable @change="initPageNum();filterBuildList()">
          <el-option
            v-for="item in optionsBuild"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addBuild">添加分责人</el-button>
        </el-col>
      </el-row>
      <!-- 楼幢列表区域 -->
      <el-table :data="pageBuildList" border stripe>
        <el-table-column type="index" :index="indexMethod" label="Id"></el-table-column>
        <el-table-column prop="header_id" label="职工号">
        </el-table-column>
        <el-table-column prop="header_name" label="负责人">
        </el-table-column>
        <el-table-column prop="header_number" label="职工手机号">
        </el-table-column>
        <el-table-column prop="build_id" label="楼幢号">
        </el-table-column>
        <el-table-column prop="sort_condition" label="卫生情况">
        </el-table-column>
        <el-table-column label="更新时间">
          <template slot-scope="scope">
            {{scope.row.sort_time | simpleTime}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
            <!-- 作用域插槽 -->
            <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" @click="editBuild(scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" @click="delBuild(scope.row)"></el-button>
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
import dayjs from 'dayjs'
export default {
  data () {
    return {
      // 下拉框参数
      optionsBuild: [],
      temp: [],
      flag: true,
      // 请求参数
      queryInfo: {
        queryHeaderName: '',
        pagenum: 1,
        pagesize: 2,
        build_id: ''
      },
      // 主要解决下拉框数据污染问题。
      buildList: [],
      // el-table绑定的数据，实现分页时用该项。
      pageBuildList: [],
      total: 0
    }
  },
  created () {
    this.getBuildList()
  },
  methods: {
    // 当模糊查询时，初始化pagenum。解决当查询有结果时而pagenum过大，先出现空数据的情况
    initPageNum () {
      this.queryInfo.pagenum = 1
    },
    async getBuildList () {
      const { data: res } = await this.$http.post('http://localhost:8888/admin/getBuildList', this.queryInfo)
      if (res.meta.status !== 200) return this.$message.error('获取楼幢信息列表失败')
      this.pageBuildList = res.pageBuildList
      // console.log(this.pageBuildList)
      this.total = res.total
      if (this.flag) {
        this.flag = false
        this.buildList = res.buildList
        this.optionsBuild = getElOptions(this.buildList, this.temp, this.optionsBuild, 'build_id')
      }
    },
    async filterBuildList () {
      this.getBuildList()
    },
    // 监听pagesize
    async handleSizeChange (val) {
      this.queryInfo.pagesize = val
      this.getBuildList()
    },
    // 监听pagenum
    async handleCurrentChange (val) {
      this.queryInfo.pagenum = val
      this.getBuildList()
    },
    // 解决索引只排序当前页的问题,增加函数自定义索引序号
    indexMethod (index) {
      return (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize + index + 1
    },
    addBuild () {
      this.$router.push('/build_add')
    },
    editBuild (row) {
      this.$router.push({ path: `/build_edit/${row.header_id}`, query: { row: row } })
    },
    async delBuild (row) {
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const { data: res } = await this.$http.post('http://localhost:8888/admin/delBuild', row)
        if (res.meta.status !== 200) return this.$message.error('删除学生信息失败')
        this.getBuildList()
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
        this.getBuildList()
      }
    }
  },
  filters: {
    simpleTime (times) {
      return dayjs(times).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
