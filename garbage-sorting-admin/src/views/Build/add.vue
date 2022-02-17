<template>
   <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>楼幢管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加负责人</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-form ref="addBuildForm" :model="addForm" label-width="80px" :rules="addFormRules">
        <el-form-item  prop="header_id" label="职工号：">
          <el-input v-model="addForm.header_id"></el-input>
        </el-form-item>
        <el-form-item prop="header_name" label="姓名：">
          <el-input v-model="addForm.header_name"></el-input>
        </el-form-item>
        <el-form-item prop="header_pwd" label="密码：">
          <el-input v-model="addForm.header_pwd" show-password></el-input>
        </el-form-item>
        <el-form-item prop="header_number" label="手机号：">
          <el-input v-model="addForm.header_number"></el-input>
        </el-form-item>
        <el-form-item label="派楼幢：">
          <el-select v-model="addForm.build_id" placeholder="请选择楼幢" clearable>
            <el-option
              v-for="item in optionBuild"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="addBuild">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>

   </div>
</template>

<script>
import { isvalidPhone } from '../../utils/tool'
export default {
  data () {
    var validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入电话号码'))
      } else if (!isvalidPhone(value)) {
        callback(new Error('请输入正确的11位手机号码'))
      } else {
        callback()
      }
    }
    return {
      addForm: {
        header_id: '',
        header_name: '',
        header_pwd: '',
        header_number: '',
        build_id: ''
      },
      // 表单验证规则
      addFormRules: {
        header_id: [
          { required: true, message: '请输入职工号', trigger: 'blur' },
          { min: 7, max: 10, message: '请输入正确的职工账号！！！', trigger: 'blur' }
        ],
        header_name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        header_pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        header_number: [
          { required: true, validator: validPhone, trigger: 'blur' }
        ]
      },
      optionBuild: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }]
    }
  },
  created () {
  },
  methods: {
    addBuild () {
      this.$refs.addBuildForm.validate(async valid => {
        // 前端验证为false 阻止请求
        if (!valid) return
        const { data: res } = await this.$http.post('http://localhost:8888/admin/addBuild', this.addForm)
        console.log(res)
        if (res.meta.status !== 200) return this.$message.error('新增负责人信息失败')
        this.$message.success('新增负责人信息成功')
        this.$router.push('/build_hygienic_list')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-form{
  .el-form-item{
    .el-input{
      width: 19%;
    }
  }
}
</style>
