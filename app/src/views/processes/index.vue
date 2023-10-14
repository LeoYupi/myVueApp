<template>
    <div>
        <navbar msg="工序检查"></navbar>
        <!-- <tree></tree> -->
        <!-- 返回顶部按钮 -->
        <!-- <div class="back-to-top" @click="scrollToTop">
            <el-button icon="el-icon-arrow-up"></el-button>
        </div> -->
        <chart></chart>
    </div>
  </template>
  
  <script>
  import navbar from '../../components/navbar.vue'
  import chart from './components/chart.vue';
  // import tree from './components/tree.vue'
  
  export default {
    components: {
      navbar,
      // tree,
      chart
    },
    // methods: {
    //   scrollToTop() {
    //     // 使用滚动行为平滑滚动到页面顶部
    //     window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth'
    //     });
    //   }
    // }
  };
  </script>
  
  <!-- <style>
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
  </style> -->
  