<template>
    <div>
      <devTable :msg='{factory:"花都新工厂",name:"机加线立体库"}'></devTable>
      <sensorTable :msg='{name:"压缩空气温度",dev_id:"1000004700050004"}'></sensorTable>
      <temperature></temperature>
      <humidity></humidity>
      <!-- <sensorTable :msg='{name:"压缩空气压力",dev_id:"1000004700100001"}'></sensorTable>
      <pressure></pressure> -->
  </div>
  </template>
    
<script>

    import devTable from '../../../components/devTable.vue';
    import sensorTable from '../../../components/sensorTable.vue';
    import temperature from './components/temperature.vue';
    import humidity from './components/humidity.vue';
    import pressure from './components/pressure.vue'
    
    export default {
        components:{devTable,sensorTable,temperature,humidity,pressure},
    }
</script>