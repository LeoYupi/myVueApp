<template>
    <div>
        <navbar msg="设备详情"/>
        <router-view/>
    </div>
</template>

<script>
    import navbar from '../../components/navbar.vue'

    export default {
        components:{navbar}
    }
</script>