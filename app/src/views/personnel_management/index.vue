<template>
    <div>
      <navbar msg="人员管理"/>
      <tablelet/>
  </div>
  </template>
    
    <script>
    import navbar from '../../components/navbar.vue'
    import tablelet from './components/tablelet.vue'
    
    export default {
      components:{navbar,tablelet}
    }
    </script>