<template>
    <div class="component-wrapper">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="传感器名称">
        </el-table-column>
        <el-table-column
          prop="dev_id"
          label="传感器ID">
        </el-table-column>
      </el-table>
  </div> 
</template>

<script>
  export default {
    props:['msg'],
    data() {
      return {
        tableData: [{
          name:this.msg.name,
          dev_id:this.msg.dev_id
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