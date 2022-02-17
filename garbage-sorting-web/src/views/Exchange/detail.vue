<template>
  <div>
    <Header/>
    <div class="main">
      <div class="top">
        <div class="goods_left">
          <img :src="giftInfo.gift_image" alt="" />
          <p>{{giftInfo.gift_note}}</p>
        </div>
        <div class="goods_right">
          <p class="goods_title">{{giftInfo.gift_name}}</p>
          <div class="goods_price"><p>礼品分值：<span>{{giftInfo.gift_price}}</span></p></div>
          <p class="goods_text">礼品编号：{{giftInfo.gift_id}}</p>
          <p class="goods_text">兑换区域：{{giftInfo.exchange_area}}</p>
          <p class="goods_text">学生账号限定：{{giftInfo.stu_account_limit}}</p>
          <p class="goods_text">领取方式：{{giftInfo.pickup_method}}</p>
          <p class="goods_text">提供单位：{{giftInfo.provide_unit}}</p>
          <p class="goods_text">数量：<el-input-number size="mini" v-model="num"></el-input-number><span>礼品剩余数量:{{giftInfo.gift_number}}</span></p>
          <div class="exchange_btn"><el-button type="success" style="font-size:18px">立即兑换</el-button><el-button type="text" style="text-align:left;font-size:12px">查看更多兑换礼品</el-button></div>
        </div>
      </div>
    </div>
    <el-footer>
     <FooterCompany/>
    </el-footer>
    <FooterEnd/>
  </div>
</template>
<script>
import Header from '@/components/Header'
import FooterCompany from '@/components/Footer/footer_comany.vue'
import FooterEnd from '@/components/Footer/footer_end.vue'
export default {
  components: {
    Header,
    FooterCompany,
    FooterEnd
  },
  data () {
    return {
      num: 1,
      giftInfo: []
    }
  },
  created () {
    this.getGiftInfo()
  },
  methods: {
    getGiftInfo () {
      this.giftInfo = this.$route.query.row
      console.log(this.giftInfo)
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  width: 1280px;
  // background-color: pink;
  // height: 1000px;
  .top{
    padding: 50px 0 0 10px;
    .goods_left{
      display: inline-block;
      img{
        width: 480px;
        height: 350px;
      }
      p{
        font-size: 12px;
      }
    }
    .goods_right{
      display: inline-block;
      position: relative;
      left: 50px;
      bottom: 0px;
      .goods_title{
        font-size: 18px;
        color: #333;
      }
      .goods_price{
        width: 715px;
        height: 77px;
        line-height: 77px;
        margin: 30px 0 25px;
        background: hsla(0,0%,96%,.3);
        padding-left: 20px;
        font-size: 18px;
        color: #333;
        span{
          font-size: 48px;
          color: #20a345;
        }
      }
      .goods_text{
        font-size: 12px;
        color: #333;
        margin-top: 10px;
        .el-input-number{
          margin: 0 15px;
        }
      }
      p:last-child{
        margin-top: 20px;
      }
      .exchange_btn{
        margin-top: 20px;
        .el-button{
        width: 200px;
        height: 50px;
      }
      .el-button--success{
         background-color: #20A345;
        border-color: #20A345;
      }
      .el-button--text,.el-button--text:focus{
        color: #20A345;
      }
      }
    }
  }
}
.el-footer{
  width: 100%;
  height: 760px !important;
  background-image: url(https://www.greenfortune.sh.cn/dist/static/img/bottomback.b23537b.png);
  background-repeat: no-repeat;
  .footer-area{
    position: relative;
    top: 150px;
  }
}
</style>
