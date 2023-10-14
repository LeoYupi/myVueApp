<template>
    <div>
        <navbar msg="主页"></navbar>
        <swipe></swipe>
    </div>
</template>
  
<script>
    import navbar from '../../components/navbarFirstPage.vue'
    import swipe from './components/swipe.vue';

    export default {
        name:'',
        components:{navbar,swipe}
    }
</script>