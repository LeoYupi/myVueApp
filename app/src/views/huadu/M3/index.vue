<template>
    <div>
      <devTable :msg='{factory:"花都新工厂",name:"机加线CNC M3内喷电机"}'></devTable>
      <sensorTable :msg='{name:"温度传感器",dev_id:"1000004700060003"}'></sensorTable>
      <temperature></temperature>
      <sensorTable :msg='{name:"振动位移传感器",dev_id:"1000004700040003"}'></sensorTable>
      <displacement></displacement>
  </div>
  </template>
    
    <script>

    import devTable from '../../../components/devTable.vue';
    import sensorTable from '../../../components/sensorTable.vue';
    import temperature from './components/temperature.vue';
    import displacement from './components/displacement.vue';
    
    export default {
        components:{devTable,sensorTable,temperature,displacement},
    }
    </script>