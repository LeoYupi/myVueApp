<template>
    <div>
      <devTable :msg='{factory:"花都新工厂",name:"机加线CNC M5内喷电机"}'></devTable>
      <sensorTable :msg='{name:"非接触式温度传感器",dev_id:"1000004700070003"}'></sensorTable>
      <temperature></temperature>
      <sensorTable :msg='{name:"振动烈度传感器",dev_id:"1000004700030003"}'></sensorTable>
      <intensity></intensity>
      <sensorTable :msg='{name:"电流传感器",dev_id:"1000004700020003"}'></sensorTable>
      <current></current>
  </div>
  </template>
    
    <script>

    import devTable from '../../../components/devTable.vue';
    import sensorTable from '../../../components/sensorTable.vue';
    import temperature from './components/temperature.vue';
    import intensity from './components/intensity.vue';
    import current from './components/current.vue';
    
    export default {
        components:{devTable,sensorTable,temperature,intensity,current},
    }
    </script>