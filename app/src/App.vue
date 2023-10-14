<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        listCount: 0, // 表单数量
      };
    },
    mounted() {
      if (this.$route.path !== '/fault') {
        const formList = JSON.parse(localStorage.getItem('formList')) || [];
        this.listCount = formList.length;
        if (this.listCount > 0) {
          this.$notify({
            title: '警告',
            message: '当前存在故障，请立即处理',
            duration: 0,
            type: 'warning',
            position: 'bottom-right',
            offset: 100,
            showClose: false,
            onClick: this.handleNotificationClick, // Add onClick handler for the notification
          });
        }
      }
    },
    methods: {
        handleNotificationClick() {
            this.$router.push('/fault'); // Navigate to '/fault' route
        },
    }
  }
</script>

