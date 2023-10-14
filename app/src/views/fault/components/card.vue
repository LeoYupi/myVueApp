<template>
  <div>
    <el-card v-for="(form, index) in formList" :key="index" class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="deleteForm(index)">删除</el-button>
      </div>
      <div v-for="(value, key) in form" :key="key" class="text item">
        {{ key }}: {{ value }}
      </div>
    </el-card>
    <el-empty v-if="formList.length === 0" description="暂无故障"></el-empty>
  </div>
</template>

<script>
import { Dialog } from 'vant';

export default {
  data() {
    return {
      formList: []
    };
  },
  mounted() {
    // 从localStorage中获取表单列表数据并存储到组件的data中
    const storedFormList = JSON.parse(localStorage.getItem('formList')) || [];
    this.formList = storedFormList;
    console.log(this.formList)
  },
  methods: {
    deleteForm(index) {

      Dialog.confirm({
          title: '删除确认',
          message: '是否确认删除表单？'
        })
          .then(() => {
            // 从表单列表中删除对应索引的表单
            this.formList.splice(index, 1);

            // 将更新后的表单列表存储回localStorage
            localStorage.setItem('formList', JSON.stringify(this.formList));
          })
          .catch(() => {
            // 用户点击取消后的操作
            // 弹窗消失，不执行其他操作
          });


    }
  }
};
</script>

<style scoped>
    .text {
      font-size: 14px;
    }
  
    .item {
      margin-bottom: 18px;
    }
  
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  
    .box-card {
      width: 100%;
    }
  </style>