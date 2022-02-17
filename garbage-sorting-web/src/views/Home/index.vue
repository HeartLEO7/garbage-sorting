<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <div class="home-contain">
        <!-- 走马灯 -->
        <Carousel/>
        <!-- 三层floor -->
        <div class="part-box">
          <!-- 礼品兑换区域 -->
          <Exchange/>
          <!-- 绿色专题 -->
          <GreenSubject/>
          <!-- 绿色时光 -->
          <GreenTime/>
        </div>
      </div>
    </el-main>
    <!-- footer_company -->
    <el-footer>
     <FooterCompany/>
    </el-footer>
    <!-- footer-end -->
    <FooterEnd/>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Carousel from './Carousel'
import Exchange from './Exchange'
import GreenSubject from './GreenSubject'
import GreenTime from './GreenTime'
import FooterCompany from '@/components/Footer/footer_comany.vue'
import FooterEnd from '@/components/Footer/footer_end.vue'
export default {
  components: {
    Header,
    Carousel,
    Exchange,
    GreenSubject,
    GreenTime,
    FooterCompany,
    FooterEnd
  }
}
</script>

<style lang="less" scoped>
.el-header{
  width: 100%;
}
.el-main{
  padding: 0;
  height: 2532px;
  .home-contain{
    position: relative;
  }
}
.part-box{
  position: absolute;
  height: 1900px;
  left: 50%;
  transform: translate(-50%);
  width: 90%;
  background-color: #fff;
  top: 470px;
  z-index: 2;
}
.el-footer{
  width: 100%;
  height: 760px !important;
  background-image: url(https://www.greenfortune.sh.cn/dist/static/img/bottomback.b23537b.png);
  background-repeat: no-repeat;
}

</style>
