<template>
  <div>
    <navbar msg="工单管理"></navbar>
    <van-button plain type="info" block to="/formCreate">创建工单</van-button>
    <el-empty :image-size="200"  v-if="!this.data.length"></el-empty>
    <div v-for="i in this.data.length" :key="i">
      <el-card class="box-card" @click.native="gotoDetail(data[i - 1])">
        <div slot="header" class="clearfix">
          <span>表单内容</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="deleteItem(data[i - 1].id)">删除</el-button>
        </div>
        <div>
          <!-- 这个东西非常神奇，按照visualKeys的顺序来显示 -->
          <ul>
            <li v-for="(value, key) in visualKeys" :key="key">{{ visualKeys[key] || key }}: {{ data[i - 1].form[key] }}</li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import navbar from '../../components/navbar.vue'
  
  export default {
    components:{navbar},
    data() {
      return {
        url:"http://47.97.219.99:8018/cloudForm/getAllFormByUid/2020210482",
        length:'',
        data: [],
        visualKeys: {
          describe: '描述',
          deviceDetail: '设备详情',
          devicePosition: '设备位置',
          deviceName: '设备名称',
          submitPeople: '创建人',
          workNumber: '工号',
        }
      }
    },
    created(){
        this.getData();
    },
    methods:{
      gotoDetail(item) {
        console.log('goto detail');
        this.$router.push({
          path: '/formChange', // 跳转到名为'formDetail'的路由，确保在路由配置中正确定义了该名称
          query: {
            abcitem: item, // 将参数作为路径参数传递
          }
        });
      },
      deleteItem(formId) {
        // 弹出确认窗口
        if (window.confirm('确定要删除吗？')) {
          // 用户点击确认，执行删除操作的逻辑
          // 可以使用id参数进行删除操作
          
          // 执行删除操作的逻辑
          this.$axios.delete('http://47.97.219.99:8018/cloudForm/deleteFormById', {
            params: {
              id: formId
            }
          })
            .then(response => {
              // 请求成功处理
              console.log(response.data);
              this.getData()
              this.$router.back();
            })
            .catch(error => {
              // 请求失败处理
              console.error(error);
            });
        } else {
          // 用户点击取消，取消删除操作或进行其他处理
        }
      },
      getData() {
        this.$axios.get(this.url,
            {
                headers:{
                'content-type':'x-www-form-urlencoded'
                }
            }
            ).then(res => {
                //请求成功，触发then中的函数
                console.log(res)
                this.data=res.data.data
                console.log(this.data);
                console.log(this.data.length)
                for (let i = 0; i < this.data.length; ++i) { 
                  console.log(this.data[i])
                  console.log(this.data[i].id);
                  // this.data[i].visible = false;
                }
            })
            .catch(error =>
                //请求失败，触发catch中的函数 可省略
                console.log(error)
            )
      },
    }
  }
</script>