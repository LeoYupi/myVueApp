<template>
  <div>
    <devTable :msg='{factory:"花都新工厂",name:"机加线工控机柜"}'></devTable>
    <sensorTable :msg='{name:"环境温湿度",dev_id:"1000004700080003"}'></sensorTable>
    <temperature></temperature>
    <humidity></humidity>
</div>
</template>
  
  <script>
  import temperature from './components/temperature.vue';
  import humidity from './components/humidity.vue';
  import devTable from '../../../components/devTable.vue';
  import sensorTable from '../../../components/sensorTable.vue';
  
  export default {
    components:{temperature,humidity,devTable,sensorTable}
  }
  </script>