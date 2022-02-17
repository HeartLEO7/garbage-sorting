<template>
  <div class="footer-area">
    <div class="footer-contain-company">
            <div class="footer-part footer-left">
              <p class="footer-part-title">惠众绿色理事单位</p>
              <p class="footer-part-text">杭州市资源利用和垃圾分类管理事务中心</p>
              <p class="footer-part-text">杭州城投环境(集团)有限公司</p>
              <p class="footer-part-text">杭州老港固废综合开发有限公司</p>
              <p class="footer-part-text">中国银行杭州分行</p>
              <p class="footer-part-text">支付宝(中国)网络技术有限公司</p>
              <p class="footer-part-text">杭州程胜环保科技有限公司</p>
            </div>
            <div class="footer-part footer-middle">
              <p class="footer-part-title">惠众绿色理事单位</p>
              <p class="footer-part-text">杭州市资源利用和垃圾分类管理事务中心</p>
              <a href="#">申请加入</a>
            </div>
            <div class="footer-part footer-middle">
              <p class="footer-part-title">惠众绿色理事单位</p>
              <p class="footer-part-text">杭州市资源利用和垃圾分类管理事务中心</p>
            </div>
            <div class="footer-part footer-right">
              <p class="footer-part-title">惠众绿色理事单位</p>
              <p class="footer-part-text">杭州市资源利用和垃圾分类管理事务中心</p>
              <p class="footer-part-text">杭州城投环境(集团)有限公司</p>
              <p class="footer-part-text">杭州老港固废综合开发有限公司</p>
              <p class="footer-part-text">中国银行杭州分行</p>
            </div>
          </div>
          <div class="footer-contain-code">
            <div class="code-part"><img src="@/assets/image/code.png" alt=""><p>学生版绿色账户APP</p></div>
            <div class="code-part"><img src="@/assets/image/code.png" alt=""><p>学生版绿色账户APP</p></div>
            <div class="code-part"><img src="@/assets/image/code.png" alt=""><p>学生版绿色账户APP</p></div>
            <div class="code-part"><img src="@/assets/image/code.png" alt=""><p>学生版绿色账户APP</p></div>
            <div class="code-part"><img src="@/assets/image/code.png" alt=""><p>学生版绿色账户APP</p></div>
            <div class="code-part"><img src="@/assets/image/code.png" alt=""><p>学生版绿色账户APP</p></div>
            <div class="code-part"><img src="@/assets/image/code.png" alt=""><p>学生版绿色账户APP</p></div>
          </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.footer-contain-company{
    width: 100%;
    height: 260px;
    margin-top: 150px;
    .footer-part{
      display: inline-block;
      vertical-align: top;
      text-align: left;
      color: #fff;
      .footer-part-title{
        font-size: 16px;
      }
      .footer-part-text{
        font-size: 12px;
        margin-top: 10px;
      }
    }
    .footer-left{
      margin-left: 170px;
    }
    .footer-middle,.footer-right{
      margin-left: 90px;
      a{
        border: 1px solid #fff;
        text-decoration: none;
        color: #fff;
        width: 140px;
        height: 30px;
        display: inline-block;
        text-align: center;
        line-height: 30px;
        margin-top: 30px;
      }
    }
}
.footer-contain-code{
    width: 100%;
    height: 180px;
    margin-top: 10px;
    text-align: center;
    .code-part{
      display: inline-block;
      margin: 0 20px;
      p{
        color: #fff;
        padding-top: 15px;
      }
      img{
        width: 136px;
        height: 136px;
      }
    }
}
</style>
