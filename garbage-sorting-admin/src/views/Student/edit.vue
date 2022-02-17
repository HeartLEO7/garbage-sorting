<template>
   <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生中心</el-breadcrumb-item>
      <el-breadcrumb-item>修改学生信息</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-form ref="addStuForm" :model="stuForm" label-width="80px" :rules="stuFormRules">
        <el-form-item  prop="stu_id" label="学工号：">
          <el-input v-model="stuForm.stu_id" disabled></el-input>
        </el-form-item>
        <el-form-item prop="stu_name" label="姓名：">
          <el-input v-model="stuForm.stu_name"></el-input>
        </el-form-item>
        <el-form-item prop="stu_pwd" label="密码：">
          <el-input v-model="stuForm.stu_pwd" show-password></el-input>
        </el-form-item>
        <el-form-item prop="stu_class" label="班级：">
          <el-input v-model="stuForm.stu_class"></el-input>
        </el-form-item>
        <el-form-item label="楼幢：">
          <el-select v-model="stuForm.stu_build" placeholder="请选择楼幢" clearable>
            <el-option
              v-for="item in optionBuild"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="楼层：">
          <el-select v-model="stuForm.stu_floor" placeholder="请选择楼层" clearable>
            <el-option
              v-for="item in optionFloor"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="寝室号：">
          <el-input v-model="stuForm.stu_room"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="editStu">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>

   </div>
</template>

<script>
export default {
  data () {
    return {
      stuForm: {
        stu_id: '',
        stu_name: '',
        stu_pwd: '',
        stu_class: '',
        stu_build: '',
        stu_floor: '',
        stu_room: ''
      },
      // 表单验证规则
      stuFormRules: {
        stu_id: [
          { required: true, message: '请输入学生工号', trigger: 'blur' },
          { min: 9, max: 11, message: '请输入正确的管理员账号！！！', trigger: 'blur' }
        ],
        stu_name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        stu_pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        stu_class: [
          { required: true, message: '请输入班级', trigger: 'blur' }
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
      }],
      optionFloor: [{
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
      }, {
        value: '6',
        label: '6'
      }]
    }
  },
  created () {
    this.getStuInfo()
  },
  methods: {
    getStuInfo () {
      this.stuForm = this.$route.query.row
    },
    editStu () {
      this.$refs.addStuForm.validate(async valid => {
        // 前端验证为false 阻止请求
        if (!valid) return
        const { data: res } = await this.$http.put('http://localhost:8888/admin/editStu', this.stuForm)
        if (res.meta.status !== 200) return this.$message.error('编辑学生信息失败')
        this.$message.success('编辑学生信息成功')
        this.$router.push('/stu_list')
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
