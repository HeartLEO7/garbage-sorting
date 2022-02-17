<template>
  <div>
    <Header/>
    <div class="main">
    <el-container>
     <el-aside width="200px">
      <el-menu default-active="/record" router>
        <el-menu-item index="/record">
          <span slot="title">兑换记录</span>
        </el-menu-item>
        <el-menu-item index="/message">
          <span slot="title">留言中心</span>
        </el-menu-item>
      </el-menu>
     </el-aside>
     <el-main>
       <router-view></router-view>
     </el-main>
    </el-container>
    </div>

  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>
.main{
  margin-top: 40px;
  width: 1280px;
  .el-menu-item.is-active{
    color:#67C23A;
  }
}

</style>
