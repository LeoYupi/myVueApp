<template>
    <van-form @submit="onSubmit">
      <van-field
        v-model="position"
        name="故障位置"
        label="故障位置"
        placeholder="故障位置"
        :rules="[{ required: true, message: '请填写故障位置' }]"
      />
      <van-field
        v-model="description"
        name="故障描述"
        label="故障描述"
        placeholder="故障描述"
        :rules="[{ required: true, message: '请填写故障描述' }]"
      />
      <van-field
        v-model="submitPeople"
        name="上报人"
        label="上报人"
        placeholder="上报人"
        :rules="[{ required: true, message: '请填写上报人' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </template>
  
  <script>
  import { Dialog } from 'vant';
  
  export default {
    data() {
      return {
        position: '',
        description: '',
        submitPeople: ''
      };
    },
    methods: {
      onSubmit() {
        const formData = {
          '故障位置': this.position,
          '故障描述': this.description,
          '上报人': this.submitPeople
        };
  
        // 从localStorage中获取已存储的表单数据
        const formList = JSON.parse(localStorage.getItem('formList')) || [];
  
        // 将当前表单数据添加到表单列表中
        formList.push(formData);
  
        // 将更新后的表单列表存储回localStorage
        localStorage.setItem('formList', JSON.stringify(formList));
  
        // 弹出确认弹窗
        Dialog.confirm({
          title: '确认提交',
          message: '是否确认提交表单？'
        })
          .then(() => {
            // 用户点击确认后的操作
            // 路由返回一级
            this.$router.go(-1);

            // 清空表单数据
            this.position = '';
            this.description = '';
            this.submitPeople = '';
          })
          .catch(() => {
            // 用户点击取消后的操作
            // 弹窗消失，不执行其他操作
          });
      }
    }
  };
  </script>
  
  