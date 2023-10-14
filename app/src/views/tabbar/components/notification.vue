<template>
    <el-button
      plain
      @click="open">
      不会自动关闭
      </el-button>
  </template>
  
  <script>
    export default {
      methods: {  
        open() {
          this.$notify({
            title: '警告',
            message: '当前存在故障，请立即处理',
            duration: 0,
            type:'warning'
          });
        }
      }
    }
  </script>