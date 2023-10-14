<template>
    <div>
        <navbar msg="设备管理"></navbar>
        <card></card>
    </div>
</template>

<script>
    import navbar from '../../components/navbar.vue'
    import card from './components/card.vue';

    export default {
        components:{navbar,card}
    }
</script>