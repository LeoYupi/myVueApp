<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="工号"
        width="50"
        :align="'center'"
        prop="workNumber">
      </el-table-column>
      <el-table-column
        label="姓名"
        width="100"
        :align="'center'"
        prop="name">
      </el-table-column>
      <el-table-column
        label="状态"
        width="50"
        :align="'center'"
        prop="state">
      </el-table-column>
      <el-table-column label="操作" :align="'center'">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleWork(scope.$index, scope.row)">在岗</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleLeave(scope.$index, scope.row)">请假</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script>
    export default {
      data() {
        return {
          tableData: [{
            state: '在岗',
            name: '张三',
            workNumber:'1'
          }, {
            state: '在岗',
            name: '李四',
            workNumber:'2'
          }, {
            state: '在岗',
            name: '王五',
            workNumber:'3'
          }, {
            state: '在岗',
            name: '赵六',
            workNumber:'4'
          }]
        }
      },
      methods: {
        handleWork(index, row) {
          this.$confirm('确认将员工状态切换为在岗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            console.log(index, row);
            this.tableData[index].state='在岗'
            console.log(index, row);
            this.$message({
              type: 'success',
              message: '切换成功!',
              offset:50
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });          
          });
        },
        handleLeave(index, row) {
          this.$confirm('确认将员工状态切换为请假?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            console.log(index, row, this.tableData);
            this.tableData[index].state='请假'
            console.log(index, row);
            this.$message({
              type: 'success',
              message: '切换成功!',
              offset:50
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });          
          });
        }
      }
    }
  </script>