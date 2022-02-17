<template>
  <el-container>
    <el-header>
      <div class="logo">
        <img src="@/assets/image/logo.jpg" alt="" @click="goHome">
      </div>
    </el-header>
    <el-main>
      <div class="login_form_contain">
        <div class="login_background">
        </div>
        <img src="https://www.greenfortune.sh.cn/dist/static/img/loginbackground-write.8e18ee2.png">
        <!-- 登录表单 -->
        <div class="login_form">
          <p>欢迎登录校园账户</p>
          <el-form label-width="80px" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
            <el-form-item label="账号：" prop="account">
              <el-input v-model="loginForm.account" placeholder="请输入您的学号"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input v-model="loginForm.password" placeholder="请输入您的密码" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="Login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
    <el-footer>
      <FooterEnd/>
    </el-footer>
  </el-container>
</template>
<script>
import FooterEnd from '@/components/Footer/footer_end.vue'
export default {
  components: {
    FooterEnd
  },
  data () {
    return {
      loginForm: {
        account: '2020b31056',
        password: '123456'
      },
      // 表单验证规则
      loginFormRules: {
        account: [
          { required: true, message: '请输入学生账号', trigger: 'blur' },
          { message: '请输入正确的管理员账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    Login () {
      this.$refs.loginFormRef.validate(async valid => {
        // 前端验证为false 阻止请求
        if (!valid) return false
        const { data: res } = await this.$http.post('http://localhost:8888/web/login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('账号或密码错误')
        localStorage.token = res.token
        localStorage.stu_id = res.stu_id
        localStorage.stu_name = res.stu_name
        this.$message.success({
          message: '登录成功'
        })
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.el-header{
  width: 100%;
  .logo{
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    background-color: #fff;
    padding-left: 325px;
    img{
      cursor: pointer;
      width: 150px;
    }

}
}

.el-main{
  padding: 0;
  .login_form_contain{
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: #F6F7FB;
    .login_background{
      width: 100%;
      height: 100%;
      background-image: url(https://www.greenfortune.sh.cn/dist/static/img/loginbackground-back.363957f.png);
      background-position: 50%;
      background-repeat: no-repeat
    }
    img{
      position: absolute;
      width: 95vh;
      height: 63vh;
      top: 10vh;
      left: 10vh;
    }
    .login_form{
      p{
        font-size: 20px;
        text-align: center;
        margin-top: 75px;
      }
      position: absolute;
      background-color: #fff;
      top: 60px;
      right: 125px;
      width: 486px;
      height: 450px;
      .el-form{
        padding: 40px 48px;
        .el-button{
          font-size: 18px;
          text-align: center;
          width: 200px;
          height: 50px;
          margin: 10px 0 0 20px;
        }
      }
    }
  }
}
.el-footer{
  padding-top: 20px;
}
</style>
