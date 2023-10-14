<template>
  <div class="component-wrapper">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="factory"
        label="工厂名称"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="设备名称"
        >
      </el-table-column>
    </el-table>
    <div class="component-wrapper">
      <el-divider><i class="el-icon-cpu"></i></el-divider>
    </div>
  </div>
</template>

<script>
  export default {
    props:['msg'],
    data() {
      return {
        tableData: [{
          factory:this.msg.factory,
          name:this.msg.name
        }]
      }
    }
  }
</script>

<style scoped>
.component-wrapper {
  margin-top: 20px; /* 调整此处的数值来定义顶部留白的大小 */
}
</style>