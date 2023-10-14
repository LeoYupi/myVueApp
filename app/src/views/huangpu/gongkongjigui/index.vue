<template>
    <div>
      <devTable :msg='{factory:"黄埔示范线",name:"工控机柜"}'></devTable>
      <sensorTable :msg='{name:"环境温湿度",dev_id:"1000004700080004"}'></sensorTable>
      <temperature></temperature>
      <humidity></humidity>
  </div>
  </template>
    
<script>

    import devTable from '../../../components/devTable.vue';
    import sensorTable from '../../../components/sensorTable.vue';
    import temperature from './components/temperature.vue';
    import humidity from './components/humidity.vue';
    
    export default {
        components:{devTable,sensorTable,temperature,humidity},
    }
</script>