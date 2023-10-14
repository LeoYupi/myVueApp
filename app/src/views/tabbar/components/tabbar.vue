<template>
    <van-tabbar route>
      <van-tabbar-item replace to="/tabbar/main" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/tabbar/more" icon="ellipsis" dot v-if="listCount > 0">
        更多
      </van-tabbar-item>
      <van-tabbar-item replace to="/tabbar/more" icon="ellipsis" v-else>更多</van-tabbar-item>
    </van-tabbar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        listCount: 0, // 表单数量
      };
    },
    mounted() {
      const formList = JSON.parse(localStorage.getItem('formList')) || [];
      this.listCount = formList.length;
    //   if (this.listCount > 0) {
    //     this.$notify({
    //       title: '警告',
    //       message: '当前存在故障，请立即处理',
    //       duration: 0,
    //       type: 'warning',
    //       position:'bottom-right',
    //       offset:100,
    //       showClose: false,
    //       onClick: this.handleNotificationClick, // Add onClick handler for the notification
    //     });
    //   }
    },
    // methods: {
    //     handleNotificationClick() {
    //         this.$router.push('/fault'); // Navigate to '/fault' route
    //     },
    // }
  };
  </script>