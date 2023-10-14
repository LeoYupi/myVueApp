<template>
    <div>
    <navbar msg="创建工单"></navbar>
    <van-form @submit="onSubmit">
    <van-field
      v-model="form.describe"
      name="describe"
      label="描述"
      placeholder="描述"
    />
    <van-field
      v-model="form.deviceDetail"
      name="deviceDetail"
      label="设备详情"
      placeholder="设备详情"
    />
    <van-field
      v-model="form.deviceName"
      name="deviceName"
      label="设备名称"
      placeholder="设备名称"
    />
    <van-field
      v-model="form.devicePosition"
      name="devicePosition"
      label="设备位置"
      placeholder="设备位置"
    />
    <van-field
      v-model="form.submitPeople"
      name="submitPeople"
      label="工单创建人"
      placeholder="工单创建人"
      :rules="[{ required: true, message: '请填写您的姓名' }]"
    />
    <van-field
      v-model="form.workNumber"
      name="workNumber"
      label="工号"
      placeholder="工号"
      :rules="[{ required: true, message: '请填写工号' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交工单</van-button>
    </div>
  </van-form>
  </div>
</template>

<script>
    import navbar from '../../components/navbar.vue';
    
    export default {
        components:{navbar},
  data() {
    return {
        form:{
            describe: '',
            deviceDetail: '',
            deviceName:'',
            devicePosition:'',
            submitPeople:'',
            workNumber:'',
        },
        url:"http://47.97.219.99:8018/cloudForm/save"
    };
  },
  methods: {
    onSubmit(values) {
      var param = {
        form:JSON.stringify(this.form),
        uid:2020210482,
      };
      console.log('submit', values);
      this.$axios({
        method:'POST',
        url:this.url,
        params:param
      })
      .then(res => {
        console.log(res)
        // 弹出提示窗口
        if (window.confirm('提交成功，是否需要返回上一页')) {
          // 
          history.back()
        } else {
          // 不处理用户点击
        }
      })
    },
  },
};
</script>