<template>
  <div>
    <div class="navbar-container">
      <van-nav-bar
          :title="pageTitle"
      >
        <template #right>
          <van-icon name="user-o" size="18" color="#000000"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="navbar-placeholder"></div>
  </div>
</template>

<script>
export default {
    props:{
      msg:String
    },
    data(){
      return{
        pageTitle:this.msg
      }
    }
};
</script>

<style scoped>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.navbar-placeholder {
        height: 50px; /* 设置与 navbar 相同的高度 */
    }
</style>