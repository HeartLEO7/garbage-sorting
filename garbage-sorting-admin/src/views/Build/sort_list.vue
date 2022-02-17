<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>楼幢管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input placeholder="请输入楼幢号查询" v-model="queryInfo.build_id" clearable @clear="getBuildDetailList">
            <el-button slot="append" icon="el-icon-search" @click="initPageNum();getBuildDetailList()"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 楼幢分类详情区域 -->
      <el-table :data="buildDetailList" border stripe :default-sort = "{prop: 'sort_time', order: 'descending'}">
        <el-table-column type="index" :index="indexMethod" label="Id"></el-table-column>
        <el-table-column prop="build_id" label="楼幢号">
        </el-table-column>
        <el-table-column prop="recover_weight" label="可回收垃圾重量(kg)">
        </el-table-column>
        <el-table-column prop="unrecover_weight" label="不可回收垃圾重量(kg)">
        </el-table-column>
        <el-table-column  prop="sort_time" label="更新时间"  sortable>
          <!-- <template slot-scope="scope" sortable>
            {{scope.row.sort_time | simpleTime}}
          </template> -->
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="showDetail(scope.row)">查看详情</el-button>
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
import dayjs from 'dayjs'
export default {
  data () {
    return {
      queryInfo: {
        build_id: '',
        pagenum: 1,
        pagesize: 2
      },
      buildDetailList: [],
      total: 0,
      flag: true
    }
  },
  created () {
    this.getBuildDetailList()
  },
  mounted () {
    this.formatTime()
  },
  methods: {
    initPageNum () {
      this.queryInfo.pagenum = 1
    },
    async getBuildDetailList () {
      const { data: res } = await this.$http.post('http://localhost:8888/admin/getBuildDetailList', this.queryInfo)
      if (res.meta.status !== 200) return this.$message.error('获取分类详情列表数据失败')
      this.buildDetailList = res.buildDetailList
      this.total = res.total
      this.buildDetailList.forEach(item => {
        item.sort_time = dayjs(item.sort_time).format('YYYY-MM-DD HH:mm:ss')
      })
    },
    // 监听pagesize
    async handleSizeChange (val) {
      this.queryInfo.pagesize = val
      this.getBuildDetailList()
    },
    // 监听pagenum
    async handleCurrentChange (val) {
      this.queryInfo.pagenum = val
      this.getBuildDetailList()
    },
    // 解决索引只排序当前页的问题,增加函数自定义索引序号
    indexMethod (index) {
      return (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize + index + 1
    },
    showDetail (row) {
      this.$router.push({ path: `/build_detail/${row.build_id}`, query: { row: row } })
    }
  },
  computed: {

  }
  // filters: {
  //   simpleTime (times) {
  //     return dayjs(times).format('YYYY-MM-DD HH:mm:ss')
  //   }
  // }
}
</script>
<style lang="less" scoped>

</style>
