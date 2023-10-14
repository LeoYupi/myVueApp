<template>
    <div>
      <devTable :msg='{factory:"黄埔示范线",name:"立体库"}'></devTable>
      <sensorTable :msg='{name:"压缩气体温湿度传感器",dev_id:"1000004700050003"}'></sensorTable>
      <temperature></temperature>
      <humidity></humidity>
      <sensorTable :msg='{name:"压缩气体压力传感器",dev_id:"1000004700100002"}'></sensorTable>
      <pressure></pressure>
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