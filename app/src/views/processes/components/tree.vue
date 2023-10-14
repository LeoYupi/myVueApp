<template>
    <div>
    <el-input
        placeholder="输入关键字搜索相应工序"
        v-model="filterText">
    </el-input>
    <el-tree
        class="filter-tree"
        :data="data"
        :default-expand-all="true"
        :props="defaultProps"
        :expand-on-click-node="false"
        :filter-node-method="filterNode"
        ref="tree"
        @check-change="handleCheckChange">
    </el-tree>
    </div>
</template>

<script>
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    data() {
      return {
        filterText: '',
        data:[],
        defaultProps: {
          children: 'children',
          label: 'techniqueName'
        },
        url:'http://10.112.6.250:8888/static/mino.json'
      };
    },
    created(){
        this.getData();
    },
    methods:{
        handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.techniqueName.indexOf(value) !== -1;
        },
        getData(){
            this.$axios.get(this.url,
            ).then(res => {
                //请求成功，触发then中的函数
                console.log(res)
                this.data=res.data.data
            })
            .catch(error =>
                //请求失败，触发catch中的函数 可省略
                console.log(error)
            )
        }
    }
  };
</script>