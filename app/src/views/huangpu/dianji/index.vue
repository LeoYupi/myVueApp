<template>
    <div>
      <devTable :msg='{factory:"黄埔示范线",name:"外置电机"}'></devTable>
      <sensorTable :msg='{name:"电流传感器",dev_id:"1000004700020003"}'></sensorTable>
      <current></current>
  </div>
  </template>
    
<script>

    import devTable from '../../../components/devTable.vue';
    import sensorTable from '../../../components/sensorTable.vue';
    import current from './components/current.vue';
    
    export default {
        components:{devTable,sensorTable,current},
    }
</script>