<template>
  <div class="green-subject-contain">
    <div class="green-subject-content">
      <div class="green-subject-title">
        <div class="title-left">
          <p class="title-name">绿色专题</p>
          <p class="en-title-name">GREEN TOPICS</p>
        </div>
        <div class="title-right">
          <p class="action-choose" @click="changeSubject($event)">
            <span class="item-title active" data-index='0'>全部</span>
            <span class="item-title" data-index='1'>绿账行动</span>
            <span class="item-title" data-index='2'>垃圾分类</span>
            <span class="item-title" data-index='3'>惠众绿色</span>
            <span class="item-title" data-index='4'>绿账宝典</span>
            <span class="item-title" data-index='5'>绿色家园</span>
          </p>
        </div>
      </div>
      <div class="action-content">
        <div class="action-content-left">
          <div class="action-content-left-top">
            <img src="https://www.greenfortune.sh.cn/dist/static/img/action.e0daaba.png" alt="">
          </div>
          <div class="action-content-left-bottom">
            <div class="bottom-date">
              <div class="date-day">09</div>
              <div class="date-year">2021-12</div>
            </div>
            <div class="bottom-notice">
              <div class="notice-top">绿色账户浦东新区平台升级维护公告</div>
              <div class="notice-middle"></div>
              <div class="notice-bottom">亲爱的市民朋友:您好，杭州市垃圾分类工作已进入常态化和制度化，同时绿色账户浦东新区平台将于2022年1月始进行页面维护，期间将暂停浦东新区礼品兑换服务，如需兑换可至全市礼品兑换页面操作，望知悉。由此带来的不便，敬请谅解！感谢您对杭州绿色账户的信任与支持!</div>
            </div>
          </div>
        </div>
        <div class="action-content-right">
          <el-collapse v-model="activeName" v-show="collapseId==0" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>0与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="5">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeName" v-show="collapseId==1" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>1实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="5">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeName" v-show="collapseId==2" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>2实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="5">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeName" v-show="collapseId==3" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>3实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="5">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeName" v-show="collapseId==4" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>4实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="5">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-model="activeName" v-show="collapseId==5" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>5实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="5">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: '1',
      collapseId: 0
    }
  },
  methods: {
    changeSubject (e) {
      const list = document.querySelectorAll('.item-title')
      for (let i = 0; i < list.length; i++) {
        list[i].className = 'item-title'
      }
      list[e.target.dataset.index].className = 'item-title active'
      this.collapseId = e.target.dataset.index
    }
  }
}
</script>
<style lang="less" scoped>
.green-subject-contain{
    padding-top: 45px;
    margin-top: 50px;
    position: relative;
    .green-subject-content{
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
        .action-choose{
          position: absolute;
          top: 50px;
          right: 50px;
          .item-title{
          font-size: 14px;
          height: 32px;
          padding: 0 23px;
          display: inline-block;
          background-color: #fff;
          line-height: 32px;
          text-align: center;
          border-radius: 16px;
          margin: 0 5px;
          border: 1px solid #ececec;
          cursor: pointer;
          &:hover{
            background-color: #20a345;
            color: #fff;
            border: 1px solid #20a345;
          }
          }
          .active{
            background-color: #20a345;
            color: #fff;
            border: 1px solid #20a345;
          }
        }
      }
      .action-content{
        margin-top: 35px;
        position: relative;
        .action-content-left{
          display: inline-block;
          width: 475px;
          height: 406px;
          .action-content-left-top{
            width: 100%;
            height: 240px;
            overflow: hidden;
            img{
              width: 100%;
            }
          }
          .action-content-left-bottom{
            width: 100%;
            height: 166px;
            background-color: #6fa007;
            color: #fff;
            .bottom-date{
              display: inline-block;
              width: 109px;
              padding: 20px 0 0 15px;
              text-align: center;
              .date-day{
              height: 100%;
              font-size: 36px;
              font-weight: 700;
              }
            }
            .bottom-notice{
              width: 70%;
              display: inline-block;
              margin-top: 30px;
              .notice-middle{
                border-top: 1px solid #e8ecf3;
                width: 338px;
                margin: 20px 0;
              }
              .notice-bottom{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
          }
        }
        .action-content-right{
          display: inline-block;
          width: 705px;
          height: 406px;
          position: absolute;
          top: 55px;
          right: 0;
          /deep/.el-collapse-item__header{
            font-size: 15px;
          }
          /deep/.el-collapse-item__content{
            display: inline-block;
            font-size: 15px;
            div{
              margin-top: 12px;
            }
          }
        }
      }
    }
}

</style>
