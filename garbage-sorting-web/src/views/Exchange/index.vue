<template>
  <div>
    <Header/>
    <div class="part-area">
      <div class="part-content">
        <div class="part-exchange-goods-area">
          <div class="exchange-goods-contain">
              <a href="" v-for=" item in giftList" :key="item.gift_id" @click.prevent="goDetail(item)">
              <div class="goods_list">
                <div class="goods_img">
                  <img :src="item.gift_image">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">{{item.gift_name}}</p>
                  <p class="goods_detail_price">{{item.gift_price}}积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">{{item.provide_unit}}</p>
                </div>
              </div>
              </a>
            <!-- <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a> -->
          </div>
        </div>
      </div>
      <!-- <div class="part-content">
        <div class="part-exchange-goods-area">
          <div class="exchange-goods-contain">
            <router-link :to="'exchange_datail'">
              <a href="">
                <div class="goods_list">
                  <div class="goods_img">
                    <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                  </div>
                  <div class="goods_detail">
                    <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                    <p class="goods_detail_price">10086积分</p>
                    <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                    <p class="goods_detail_offer">绿色账户提供</p>
                  </div>
                </div>
              </a>
            </router-link>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="part-content">
        <div class="part-exchange-goods-area">
          <div class="exchange-goods-contain">
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
            <a href="">
              <div class="goods_list">
                <div class="goods_img">
                  <img src="https://www.greenfortune.sh.cn/images/20211119100349_327.jpg" alt="">
                </div>
                <div class="goods_detail">
                  <p class="goods_detail_title">【双十二秒杀】云南三七护龈美白牙膏</p>
                  <p class="goods_detail_price">100积分</p>
                  <p class="get"><img src="@/assets/image/get.png" alt=""><span>领取</span></p>
                  <p class="goods_detail_offer">绿色账户提供</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div> -->
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
      giftList: [],
      total: 0
    }
  },
  created () {
    this.getGiftList()
  },
  methods: {
    async getGiftList () {
      const { data: res } = await this.$http.get('http://localhost:8888/web/getGiftList')
      console.log(this.giftList)
      if (res.meta.status !== 200) return this.$message.error('获取礼品列表失败')
      this.giftList = res.giftList
      this.total = res.total
      this.giftList.forEach(item => {
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
.part-area{
  width: 1519px;
  padding-left: 150px;
  padding-right: 100px;
  height: 1000px;
   .part-content{
        margin-top: 35px;
        position: relative;
        .part-exchange-goods-area{
          width: 100%;
          display: inline-block;
          vertical-align: middle;
          // overflow: hidden;
          .exchange-goods-contain{
            height: 415px;
            padding-top: 2px;
            // white-space: nowrap;
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
                img{
                  width: 300px;
                  height: 210px;
                }
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
