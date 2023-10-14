<template>
  <div class="navbar-container">
    <van-nav-bar
      title="工序检查"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
