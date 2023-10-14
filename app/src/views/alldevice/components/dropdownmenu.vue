<template>
    <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
</template>

<script>
    export default {
        data() {
            return {
                value1: 0,
                option1: [
                    { text: '全部', value: 0 },
                    { text: '电机', value: 1 },
                    { text: '气缸', value: 2 },
                ],
            };
        },
    };
</script>