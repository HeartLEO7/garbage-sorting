<template>
  <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatr_box">
                <img src="../../assets/logo.png" alt="">
            </div>
          <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" label-width="80px" class="login_from" :model="loginForm" :rules="loginFormRules">
                <!-- 账号 -->
                <el-form-item prop="account" label="账号：">
                    <el-input v-model="loginForm.account" prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item  prop="password" label="密码：">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="checkLogin">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        account: '2020b31056',
        password: '123456'
      },
      // 表单验证规则
      loginFormRules: {
        account: [
          { required: true, message: '请输入管理员账号', trigger: 'blur' },
          { message: '请输入正确的管理员账号', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    checkLogin () {
      this.$refs.loginFormRef.validate(async valid => {
        // 前端验证为false 阻止请求
        if (!valid) return
        const { data: res } = await this.$http.post('http://localhost:8888/admin/login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error({ message: '账号或密码错误', duration: 0 })
        localStorage.token = res.token
        localStorage.name = res.name
        this.$message.success({
          message: '登录成功',
          center: true
        })
        this.$router.push('/home')
      })
    }
  }
}

</script>

<style lang="less" scoped>
.login_container {
    background-color: #303133;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatr_box {
        height: 130px;
        width: 130px;
        border: solid 1px #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}
.btns {
    display: flex;
    justify-content: flex-end;
}
.login_from {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    // .el-input--prefix .el-input__inner {
    //   padding-left: 10px;
    // }
}
</style>
