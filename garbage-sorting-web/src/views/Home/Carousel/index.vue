<template>
  <el-carousel indicator-position="outside" height="1066px">
    <el-carousel-item v-for="item in imgUrl" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: ['https://www.greenfortune.sh.cn/dist/static/img/banner.887631b.png', 'https://www.greenfortune.sh.cn/dist/static/img/lvbanner13.bcf0bd2.jpg', 'https://www.greenfortune.sh.cn/dist/static/img/lvbanner12.16ce6ec.jpg', 'https://www.greenfortune.sh.cn/dist/static/img/lvbanner14.2f44c5e.jpg']
    }
  }
}
</script>
<style lang="less" scoped>
.el-carousel{
  margin-top: 102px;
}
img{
    width: 100%;
  }
/deep/.el-carousel__arrow{
  top: 25%;
}
</style>
