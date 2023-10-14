<template>
    <div>
        <navbar msg="视频监控"></navbar>
        <iframe src="http://10.112.6.250:8888/api/v2/video" :style="{ width: '100%', aspectRatio: '16/9' }"></iframe>
    </div>
</template>

<script>
    import navbar from '../../components/navbar.vue'

    export default {
        name:'',
        components:{navbar},
    }
</script>