<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>楼幢管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类详情</el-breadcrumb-item>
      <el-breadcrumb-item>详情页</el-breadcrumb-item>
    </el-breadcrumb>
     <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-descriptions :title="detailInfo.build_id+'号楼'">
        <el-descriptions-item label="可回收的详情图片">
          <el-image :src="src_recover"></el-image>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions>
        <el-descriptions-item label="不可回收详情图片">
          <el-image :src="src_unrecover"></el-image>
        </el-descriptions-item>
      </el-descriptions>
      <el-button type="primary" @click="back">返回前一页</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detailInfo: {},
      src: 'http://localhost:8888/images'
    }
  },
  created () {
    this.getDetailInfo()
  },
  computed: {
    src_recover () {
      return this.src + this.detailInfo.recover_img
    },
    src_unrecover () {
      return this.src + this.detailInfo.unrecover_img
    }
  },
  methods: {
    getDetailInfo () {
      this.detailInfo = this.$route.query.row
      console.log(this.detailInfo)
    },
    back () {
      this.$router.push('/build_sort_list')
    }
  }
}
</script>
<style lang="less" scoped>
.el-image{
  width: 400px;
  vertical-align: baseline;
}
.el-button{
  margin-left: 50%;
  transform: translate(-50%);
}
</style>
