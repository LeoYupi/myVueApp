<template>
    <div>
        <navbar msg="故障处理"></navbar>
        <van-button plain type="info" block to="/faultSubmit">手动上报</van-button>
        <card></card>
    </div>
</template>

<script>
    import navbar from '../../components/navbar.vue'
    import card from './components/card.vue';

    export default {
        components:{navbar,card},
        mounted() {
            this.$notify.closeAll(); // Clear all notifications when entering the '/fault' route
        },
    };
</script>