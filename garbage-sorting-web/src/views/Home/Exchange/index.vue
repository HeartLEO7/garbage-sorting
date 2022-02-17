<template>
  <div class="exchange-contain">
    <div class="exchange-content">
      <div class="part-title">
        <div class="title-left">
          <p class="title-name">礼品兑换</p>
          <p class="en-title-name">REDEEM GIFT</p>
        </div>
        <div class="title-right">
          <el-button type="text">查看更多 ></el-button>
        </div>
      </div>
      <div class="part-content">
        <div class="part-exchange-goods-area">
          <div class="exchange-goods-contain">
            <a href="" v-for="item in exchangeList" :key="item.gift_id" @click.prevent="goDetail(item)">
              <div class="goods_list">
                <div class="goods_img">
                  <img :src="item.gift_image" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">{{item.gift_name}}</p>
                  <p class="goods_detail_price">{{item.gift_price}}积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">{{item.provide_unit}}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      exchangeList: []
    }
  },
  created () {
    this.getExchangeList()
  },
  methods: {
    async getExchangeList () {
      const { data: res } = await this.$http.get('http://localhost:8888/web/home_exchange')
      if (res.meta.status !== 200) return false
      this.exchangeList = res.giftList
      this.exchangeList.forEach(item => {
        item.gift_image = 'http://localhost:8888/images' + item.gift_image
      })
    },
    goDetail (row) {
      this.$router.push({ path: '/exchange_detail', query: { row: row } })
    }
  }
}
</script>
<style lang="less" scoped>
.exchange-contain{
    padding-top: 45px;
    .exchange-content{
      margin: 0 60px;
      .title-left{
        display: inline-block;
        .title-name{
          font-size: 24px;
        }
        .en-title-name{
          font-size: 14px;
          margin-top: 9px;
          color: #666;
        }
      }
      .title-right{
        display: inline-block;
        position: absolute;
        top: 50px;
        right: 50px;
        .el-button{
          font-size: 18px;
        }
        .el-button--text{
          color: #000;
        }
        .el-button--text:hover{
          color: forestgreen;
        }
      }
      .part-content{
        margin-top: 35px;
        position: relative;
        .part-exchange-goods-area{
          width: 100%;
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          .exchange-goods-contain{
            height: 415px;
            padding-top: 2px;
            white-space: nowrap;
            transition: all .3s;
            .goods_list{
              display: inline-block;
              margin-right: 15px;
              width: 300px;
              border: 1px solid transparent;
              transition: all 1s;
              &:hover{
                border: 1px solid green;
                box-shadow: #ccc 2px 2px 20px;
              }
              .goods_img{
                height: 210px;
                overflow: hidden;
                text-align: center;
              }
              .goods_detail{
                padding: 20px 20px 12px;
                .goods_detail_title{
                  font-size: 16px;
                  color: #333;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
                .goods_detail_price{
                  font-size: 20px;
                  color: #20a345;
                  line-height: 24px;
                  margin:10px 0;
                }
                .get{
                  font-size: 14px;
                  color: #666;
                    img{
                      width: 16px;
                      height: 16px;
                      vertical-align: bottom;
                    }
                    span{
                      padding-left: 5px;
                    }
                }
                .goods_detail_offer{
                  font-size: 14px;
                  color: #888;
                  margin-top: 15px;
                  padding-bottom: 20px;
                }
              }
            }
          }
        }
      }
    }
}
</style>
