<template>
    <div>
    <navbar msg="工单详情"></navbar>
    <van-form @submit="onSubmit">
  <van-field
    v-model="msgreceive.form.describe"
    name="describe"
    label="描述"
    placeholder="描述"
  />
  <van-field
    v-model="msgreceive.form.deviceDetail"
    name="deviceDetail"
    label="设备详情"
    placeholder="设备详情"
  />
  <van-field
    v-model="msgreceive.form.deviceName"
    name="deviceName"
    label="设备名称"
    placeholder="设备名称"
  />
  <van-field
    v-model="msgreceive.form.devicePosition"
    name="devicePosition"
    label="设备位置"
    placeholder="设备位置"
  />
  <van-field
    v-model="msgreceive.form.submitPeople"
    name="submitPeople"
    label="工单创建人"
    placeholder="工单创建人"
    :rules="[{ required: true, message: '请填写您的姓名' }]"
  />
  <van-field
    v-model="msgreceive.form.workNumber"
    name="workNumber"
    label="工号"
    placeholder="工号"
    :rules="[{ required: true, message: '请填写工号' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">修改工单</van-button>
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
        url:"http://47.97.219.99:8018/cloudForm/updateFormById",
        msgreceive:''
    };
  },
  created(){
    this.msgreceive = this.$route.query.abcitem;
    // 使用传递的参数进行处理
    console.log(this.msgreceive);
  },
  methods: {
    onSubmit(values) {
      var param = {
        form:JSON.stringify(this.msgreceive.form),
        id:this.msgreceive.id,
      };
      console.log('submit', values);
      this.$axios({
        method:'PUT',
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