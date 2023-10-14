<template>
  <div>
  <div v-for="(device, index) in devices" :key="index" @click="goToDevice(device.route)">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>设备</span>
      </div>
      <div class="text item">
        <div>设备名称：{{ device.name }}</div>
        <div>工厂位置：{{ device.location }}</div>
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      devices: [
        {
          name: "CNC M3内喷电机",
          location: "花都新工厂",
          route: "/singledevice/huadu/M3"
        },
        {
          name: "工控机柜",
          location: "花都新工厂",
          route: "/singledevice/huadu/gongkongjigui"
        },
        {
          name: "CNC M5内喷电机",
          location: "花都新工厂",
          route: "/singledevice/huadu/M5"
        },
        {
          name: "立体库",
          location: "花都新工厂",
          route: "/singledevice/huadu/litiku"
        },
        {
          name: "工控机柜",
          location: "黄埔示范线",
          route: "/singledevice/huangpu/gongkongjigui"
        },
        {
          name: "外置电机",
          location: "黄埔示范线",
          route: "/singledevice/huangpu/dianji"
        },
        {
          name: "立体库",
          location: "黄埔示范线",
          route: "/singledevice/huangpu/litiku"
        }
      ]
    };
  },
  methods: {
    goToDevice(route) {
      this.$router.push(route);
      console.log(route)
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
