<template>
    <van-grid :column-num="2" :gutter="50">
      <van-grid-item icon="photo-o" text="设备管理" to="/alldevice" />
      <van-grid-item icon="photo-o" text="工单管理" to="/form" />
      <van-grid-item icon="photo-o" text="人员管理" to="/personnel_management" />
      <van-grid-item icon="photo-o" text="视频监控" to="/video" />
      <van-grid-item icon="photo-o" text="工序检查" to="/processes" />
      <van-grid-item
        icon="photo-o"
        text="故障处理"
        to="/fault"
        :badge="badgeCount > 0 ? badgeCount : null"
      />
    </van-grid>
  </template>
  
  <script>
  export default {
    data() {
      return {
        badgeCount: 0 // 初始值设为 0
      };
    },
    mounted() {
      // 从 localStorage 中获取表单列表数据并更新 badgeCount
      const storedFormList = JSON.parse(localStorage.getItem('formList')) || [];
      this.badgeCount = storedFormList.length;
    }
  };
  </script>
  