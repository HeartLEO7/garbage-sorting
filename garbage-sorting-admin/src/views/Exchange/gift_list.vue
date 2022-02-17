<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>礼品管理</el-breadcrumb-item>
      <el-breadcrumb-item>礼品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索、添加、下拉框区域 -->
      <el-row :gutter="20">
        <el-col :span="5">
          <el-input placeholder="请输入礼品名称查询" v-model="queryInfo.queryGiftName" clearable @clear="getGiftList">
            <el-button slot="append" icon="el-icon-search" @click="initPageNum();getGiftList()"></el-button>
          </el-input>
        </el-col>
         <el-col :span="2">
          <el-button type="primary" @click="addGift">添加礼品</el-button>
        </el-col>
      </el-row>
      <!-- 学生列表区域 -->
      <el-table :data="giftList" border stripe>
        <el-table-column type="index" :index="indexMethod" label="Id"></el-table-column>
        <el-table-column prop="gift_id" label="礼品编号">
        </el-table-column>
        <el-table-column prop="gift_name" label="礼品名称">
        </el-table-column>
        <el-table-column label="礼品图片">
           <template slot-scope="scope">
            <img :src="scope.row.gift_image" style="height: 100px"/>
            </template>
        </el-table-column>
        <el-table-column prop="gift_price" label="积分值">
        </el-table-column>
        <el-table-column prop="gift_number" label="礼品数量">
        </el-table-column>
        <el-table-column label="操作">
            <!-- 作用域插槽 -->
            <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" @click="editGift(scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" @click="delGift(scope.row)"></el-button>
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
export default {
  data () {
    return {
      // 请求参数
      queryInfo: {
        queryGiftName: '',
        pagenum: 1,
        pagesize: 2
      },
      giftList: [],
      total: 0
    }
  },
  created () {
    this.getGiftList()
  },
  methods: {
    initPageNum () {
      this.queryInfo.pagenum = 1
    },
    async getGiftList () {
      const { data: res } = await this.$http.post('http://localhost:8888/admin/getGiftList', this.queryInfo)
      if (res.meta.status !== 200) return this.$message.error('获取礼品列表失败')
      this.giftList = res.giftList
      this.total = res.total
      this.giftList.forEach(item => {
        item.gift_image = 'http://localhost:8888/images' + item.gift_image
      })
    },
    // 监听pagesize
    async handleSizeChange (val) {
      this.queryInfo.pagesize = val
      this.getGiftList()
    },
    // 监听pagenum
    async handleCurrentChange (val) {
      this.queryInfo.pagenum = val
      this.getGiftList()
    },
    // 解决索引只排序当前页的问题,增加函数自定义索引序号
    indexMethod (index) {
      return (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize + index + 1
    },
    addGift () {
      this.$router.push('/gift_add')
    },
    editGift (row) {
      this.$router.push({ path: `/gift_edit/${row.gift_id}`, query: { row: row } })
    },
    async delGift (row) {
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const { data: res } = await this.$http.post('http://localhost:8888/admin/delGift', row)
        if (res.meta.status !== 200) return this.$message.error('删除学生信息失败')
        this.getGiftList()
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
  }
}
</script>
<style lang="less" scoped>

</style>
