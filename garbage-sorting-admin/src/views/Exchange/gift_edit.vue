<template>
   <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>礼品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加礼品</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-form ref="addGiftForm" :model="addForm" label-width="120px" :rules="addFormRules">
        <el-form-item  prop="gift_id" label="礼品编号：">
          <el-input v-model="addForm.gift_id"></el-input>
        </el-form-item>
        <el-form-item label="礼品名称：">
          <el-input v-model="addForm.gift_name"></el-input>
        </el-form-item>
        <el-form-item label="礼品价格：">
          <el-input v-model="addForm.gift_price"></el-input>
        </el-form-item>
        <el-form-item prop="gift_number" label="礼品数量：">
          <el-input v-model="addForm.gift_number"></el-input>
        </el-form-item>
        <el-form-item label="交换区域：">
          <el-select v-model="addForm.exchange_area" placeholder="请选择" clearable>
            <el-option
              v-for="item in optionExchangeArea"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学生账号限定：">
          <el-select v-model="addForm.stu_account_limit" placeholder="请选择" clearable>
            <el-option
              v-for="item in optionStuAccountLimit"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="领取方式：">
          <el-select v-model="addForm.pickup_method" placeholder="请选择" clearable>
            <el-option
              v-for="item in optionPickedMethod"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提供单位：">
          <el-select v-model="addForm.provide_unit" placeholder="请选择" clearable>
            <el-option
              v-for="item in optionProvideUnit"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input v-model="addForm.gift_note" type="textarea" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item label="上传图片：">
          <el-upload
            ref="uploads"
            action="http://localhost:8888/admin/addGift"
            list-type="picture-card"
            :before-upload="beforeupload"
            :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="editGift">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
   </div>
</template>

<script>
export default {
  data () {
    return {
      addForm: {
        gift_id: '',
        gift_name: '',
        gift_price: '',
        gift_number: '',
        exchange_area: '',
        stu_account_limit: '',
        pickup_method: '',
        provide_unit: '',
        gift_note: ''
      },
      formData: new FormData(),
      // 表单验证规则
      addFormRules: {
        gift_id: [
          { required: true, message: '请输入学生工号', trigger: 'blur' }
        ]
      },
      optionExchangeArea: [{
        value: '杭州市',
        label: '杭州市'
      }],
      optionStuAccountLimit: [{
        value: '不限',
        label: '不限'
      }],
      optionPickedMethod: [{
        value: '自行领取',
        label: '自行领取'
      }],
      optionProvideUnit: [{
        value: '浙江水利水电学院',
        label: '浙江水利水电学院'
      }],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  created () {
    this.getGiftInfo()
  },
  methods: {
    getGiftInfo () {
      this.addForm = this.$route.query.row
      console.log(this.addForm)
    },
    editGift () {
      this.$refs.addGiftForm.validate(async valid => {
        // 前端验证为false 阻止请求
        if (!valid) return
        const that = this // 修改this指向
        that.formData = new FormData()
        this.formData.append('gift_id', this.addForm.gift_id)
        this.formData.append('gift_name', this.addForm.gift_name)
        this.formData.append('gift_price', this.addForm.gift_price)
        this.formData.append('gift_number', this.addForm.gift_number)
        this.formData.append('exchange_area', this.addForm.exchange_area)
        this.formData.append('stu_account_limit', this.addForm.stu_account_limit)
        this.formData.append('pickup_method', this.addForm.pickup_method)
        this.formData.append('provide_unit', this.addForm.provide_unit)
        this.formData.append('gift_note', this.addForm.gift_note)
        this.$refs.uploads.submit() // 提交表单
        this.$refs.uploads.clearFiles()
        const { data: res } = await this.$http.put('http://localhost:8888/admin/editGift', this.formData)
        this.$refs.uploads.submit()
        if (res.meta.status !== 200) return this.$message.error('修改礼品信息失败')
        this.$message.success('修改礼品信息成功')
        this.$router.push('/gift_list')
      })
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleRemove (file) {
      var list = document.querySelectorAll('li')
      for (var i = 0; i < list.length; i++) {
        (function (i) {
          list[i].onclick = function () {
            list[i].remove()
          }
        })(i)
      }
    },
    beforeupload (file) {
      console.log(file)
      this.formData.append('file', file) // 将图片添加到formData中保存
      return false // 阻止自动上传
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
