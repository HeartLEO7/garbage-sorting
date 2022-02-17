<template>
  <el-row>
      <el-col :span="8">
        <el-image
        :src="url"
        ></el-image>
      </el-col>
      <el-col :span="16">
        <!-- 搜索框+登录---row -->
        <el-row class="header-right-top">
          <!-- 搜索框 -->
          <el-col :span="7" :push="8">
            <div class="search-area">
              <div class="el-input">
                <input type="text" autocomplete="off" placeholder="请输入您要查找的文章关键词">
              </div>
              <div class="search_btn">
              </div>
            </div>
          </el-col>
          <!-- 登录 每日签到 -->
          <el-col :span="9" :push="8">
            <div class="login-area">
              <span style="margin-right:15px;color:#67C23A;" v-if="loginFlag">{{stu_name}}</span>
              <el-button v-if="loginFlag === false" type="success" plain size="small" @click="login">登录</el-button>
              <el-button v-else type="success" plain size="small" @click="logout">退出</el-button>
              <el-button type="success" plain size="small">每日签到</el-button>
            </div>
          </el-col>
        </el-row>
        <!-- 导航条---row -->
        <el-row class="header-right-bottom">
          <el-col :span="15" :push="6">
            <el-menu :default-active="activeIndex" mode="horizontal" :active-text-color="color" router @select="handleSelect">
              <el-menu-item index="home">首页</el-menu-item>
              <el-menu-item index="exchange">礼品兑换</el-menu-item>
              <el-menu-item index="personal">个人中心</el-menu-item>
              <el-submenu index="4">
                <template slot="title" class="bgc">绿环保</template>
                <el-menu-item index="4-1">绿行动</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title" class="bgc">绿互动</template>
                <el-menu-item index="5-1">积分捐赠</el-menu-item>
                <el-menu-item index="5-2">公益志愿</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      url: require('@/assets/image/logo.jpg'),
      activeIndex: '',
      color: '#4BA95D',
      loginFlag: false,
      stu_name: ''
    }
  },
  created () {
    // 解决当切换导航条时，需点击两下才切换颜色的问题
    if (window.sessionStorage.getItem('index') === null) window.sessionStorage.setItem('index', 'home')
    this.activeIndex = window.sessionStorage.getItem('index')
    if (localStorage.stu_id !== undefined) {
      this.loginFlag = true
      this.stu_name = localStorage.stu_name
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    logout () {
      window.localStorage.clear()
      this.$router.push('/login')
    },
    handleSelect (path) {
      this.activeIndex = path
      window.sessionStorage.setItem('index', path)
    }
  },
  watch: {
    $route (to, from) {
      console.log(to.path)
    }
  }
}
</script>

<style lang="less" scoped>
.el-image {
  padding: 30px 0 0 150px;
}
.header-right-top{
  padding: 32px 30px 0;
  .search-area{
    width: 245px;
    border-bottom: 1px solid #eee;
    display: inline-block;
    text-align: left;
    .el-input{
      display: inline-block;
      width: 80%;
      height: 30px;
      input[type="text"]{
        border: none;
        line-height: 28px;
        width: 100%;
        outline: none;
      }
      input::placeholder{
        color: #ccc;
      }
    }
    .search_btn {
    background-image: url('../../assets/image/search.png');
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    cursor: pointer;
}
  }
  .login-area{
    .el-button{
      border-radius: 12px;
      font-size: 14px;
    }
    .is-plain{
      background: #fff;
      border-color: #67C23A;
    }
    .el-button--success{
      color: #67C23A;
    }
  }
}
.header-right-bottom{
  >.el-col{
    margin-top: 35px;
  }
  .el-menu.el-menu--horizontal{
    border: none;
  }
  .el-menu--horizontal>.el-menu-item,
  /deep/.el-menu--horizontal>.el-submenu .el-submenu__title{
    font-size: 20px;
    color: black;
  }
}
</style>
