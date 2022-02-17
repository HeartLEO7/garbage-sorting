<template>
  <div class="green-time-contain">
    <div class="green-time-content">
      <div class="green-time-title">
        <div class="title-left">
          <p class="title-name">绿色时光</p>
          <p class="en-title-name">VIDEO ZONE</p>
        </div>
      </div>
      <div class="video-part">
        <div class="video-content">
          <video src="https://www.greenfortune.sh.cn/resource/1585711357118.mp4" controls controlslist></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.green-time-contain{
    position: relative;
    padding-top: 45px;
    margin-top: 100px;
    .green-time-content{
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
      .video-part{
        margin-top: 35px;
        position: relative;
        .video-content{

          video{
            width: 1200px;
            height: 450px;
          }
        }
      }
    }
}
</style>
