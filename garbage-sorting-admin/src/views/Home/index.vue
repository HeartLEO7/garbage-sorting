<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../../assets/logo.png" alt="" class="logo">
        <span>校园垃圾分类工作平台</span>
        <span>
          <el-tag
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type"
            @click="go"
            style="cursor:pointer;">
            {{tag.name}}
          </el-tag>
        </span>

      </div>
      <span v-bind="loginUser" class="loginUser">当前用户：{{loginUser.name}}</span>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#4093ef" unique-opened router :default-active="$route.path">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-user-solid"></i>
                <!-- 模块标题 -->
                <span>学生中心</span>
              </template>
              <!-- 二次菜单组 -->
              <el-menu-item-group>
                <el-menu-item :index="indexGroup.stuIndex.list">
                  <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-menu"></i>
                    <span>学生列表</span>
                  </template>
                </el-menu-item>
                <el-menu-item :index="indexGroup.stuIndex.add">
                  <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-menu"></i>
                    <span>添加学生</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
          </el-submenu>

          <!-- 2 -->
          <el-submenu index="2">
                    <!-- 一级菜单模板区域 -->
                    <template slot="title">
                        <!-- 图标 -->
                        <i class="el-icon-user-solid"></i>
                        <!-- 模块标题 -->
                        <span>清洁工中心</span>
                    </template>
                    <!-- 二次菜单组 -->
                    <el-menu-item-group>
                        <!-- :route="{ path: '/salechance', query: { username: loginUser.username } } -->
                        <el-menu-item :index="indexGroup.cleanerIndex.list">
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-menu"></i>
                            <span>清洁工列表</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item :index="indexGroup.cleanerIndex.add">
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-menu"></i>
                            <span>添加清洁工</span>
                            </template>
                        </el-menu-item>
                    </el-menu-item-group>
          </el-submenu>

          <!-- 3 -->
          <el-submenu index="3">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-s-home"></i>
              <!-- 模块标题 -->
              <span>楼幢管理</span>
            </template>
            <!-- 二次菜单组 -->
            <el-menu-item-group>
              <el-menu-item :index="indexGroup.buildIndex.list_hygienic">
                <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <span>楼幢卫生</span>
                </template>
              </el-menu-item>
               <el-menu-item :index="indexGroup.buildIndex.add">
                <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <span>添加负责人</span>
                </template>
              </el-menu-item>
              <el-menu-item :index="indexGroup.buildIndex.list_sort">
                <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <span>分类详情</span>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 4 -->
          <el-submenu index="4">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-s-goods"></i>
              <!-- 模块标题 -->
              <span>礼品管理</span>
            </template>
            <!-- 二次菜单组 -->
            <el-menu-item-group>
              <el-menu-item :index="indexGroup.exchangeIndex.gift_list">
                <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <span>礼品列表</span>
                </template>
              </el-menu-item>
               <el-menu-item :index="indexGroup.exchangeIndex.gift_add">
                <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <span>添加礼品</span>
                </template>
              </el-menu-item>
              <el-menu-item :index="indexGroup.buildIndex.list_sort">
                <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <span>分类详情</span>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>
        <!-- 右侧内容主题区域 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      indexGroup: {
        stuIndex: {
          list: '/stu_list',
          add: '/stu_add'
        },
        cleanerIndex: {
          list: '/cleaner_list',
          add: '/cleaner_add'
        },
        buildIndex: {
          list_hygienic: '/build_hygienic_list',
          add: '/build_add',
          list_sort: '/build_sort_list'
        },
        exchangeIndex: {
          gift_list: '/gift_list',
          gift_add: '/gift_add'
        }
      },
      loginUser: {
        name: ''
      },
      tags: [],
      tagsObj: {},
      tagsTemp: []
    }
  },
  created () {
    this.getLoginUserName()
  },
  methods: {
    logout () {
      window.localStorage.clear()
      this.$router.push('/login')
    },
    getLoginUserName () {
      this.loginUser.name = localStorage.name
    },
    // createTag (name, e) {
    //   this.tagsTemp.push({ name: name, type: '', index: e.index })
    //   this.tags.push({ name: name, type: '', index: e.index })
    //   this.tagsTemp = this.tagsTemp.slice(-3)
    //   for (var i = 0; i < this.tagsTemp.length; i++) {
    //     if (!this.tagsObj[this.tagsTemp[i].index]) {
    //       this.tags.push(this.tagsTemp[i])
    //       this.tagsObj[this.tagsTemp[i].index] = true
    //     }
    //   }
    //   this.tags = this.tags.slice(-3)
    //   console.log(this.tags)
    //   // if (this.tags.length === 0) {
    //   //   this.tags.push({ name: name, type: '', index: e.index })
    //   //   console.log('oneeeeeeeeeeee')
    //   // } else {
    //   //   for (var i = 0; i < this.tags.length; i++) {
    //   //     if (e.index !== this.tags[i].index && i === this.tags.length - 1) {
    //   //       this.tags.push({ name: name, type: '', index: e.index })
    //   //     }
    //   //   }
    //   // }
    //   // for (var i = 0; i < this.tags.length; i++) {
    //   //   // if (e.index !== this.tags[i].index && i === this.tags.length - 1) {
    //   //   //   this.tags.push({ name: name, type: '', index: e.index })
    //   //   // }
    //   //   console.log('------------')
    //   // }
    //   // console.log(this.tags)
    //   // this.tags.push({ name: name, type: '', index: e.index })
    //   // console.log(this.tags)
    //   // this.tagTemp.push(e.index)
    //   // this.tagTemp = this.tagTemp.filter((item, index) => {
    //   //   return this.tagTemp.indexOf(item) === index
    //   // })
    //   // this.tags = []
    //   // this.tagTemp.forEach(item => {
    //   //   this.tags.push({ name: name, type: '', index: item })
    //   // })
    //   // this.tags.slice(-3)
    // },
    go () {
      console.log('ok')
    }
  },
  watch: {
    $route (to, from) {
      console.log(to.path)
    }
  }
}
</script>

<style lang="less">
.home-container {
    height: 100%;
}
.logo {
    height: 60px;
    width: 59px;
}
.el-header {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    background-color: #373d41;
    align-items: center;
    color: #fff;
    font-size: 20px;
    .el-tag{
      margin-left:100px;
    }
    > div {
        display: flex;
        align-items: center;
        span {
            margin-left: 15px;
        }

    }
    .loginUser {
          position: absolute;
          font-size: 16px;
          top: 20px;
          right: 120px;
        }
}

.el-aside {
    background-color: #333744;
    .el-menu {
        border-right: none;
    }
}
.el-main {
    background-color: #EAEDF1;
}
</style>
