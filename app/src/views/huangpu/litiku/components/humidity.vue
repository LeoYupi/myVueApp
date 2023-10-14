<template>
  <div>
    <div id="myChart2"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      showData: [],
      xList:[],
      yList:[],
      receiveValue: [],
      receiveValueIndex: 0,
      chartPointLength:10,
      timer: 'timer',
      url:"http://10.112.6.250:8888/api/v1/sensor/",
      dev_id:"1000004700050003",
      begin_time:'1679393271064000000',
      end_time:'1679413271063000000',
    }
  },
  created(){
      this.getData();
  },
  beforeDestroy() {
      if (this.timer) {
      clearInterval(this.timer);
      }
  },
  methods:{
    getData() {
      this.$axios.get(this.url,
          {
              params:
              {
                  dev_id:this.dev_id,
                  begin_time:this.begin_time,
                  end_time:this.end_time
              }
          }
          ).then(res => {
              //请求成功，触发then中的函数
              console.log(res)
              for (var i=0;i<res.data.data.length;i++)
                  this.receiveValue.push(res.data.data.rows[i][2])
              console.log(this.receiveValue)
              for (var i = this.receiveValueIndex; i < this.chartPointLength + this.receiveValueIndex; i++)
                  this.showData.push(this.nextData(i,new Date(Date.now() - (this.chartPointLength - i - 1) * 1000)))
              this.receiveValueIndex += this.chartPointLength;
              this.startPushParam()
          })
          .catch(error =>
              //请求失败，触发catch中的函数 可省略
              console.log(error)
          )
    },

    startPushParam() {
      this.timer = setInterval(this.handlerData, 1000)
    },

    handlerData() {
      this.showData.push(this.nextData(this.receiveValueIndex, new Date()))
      this.receiveValueIndex += 1
      this.showData.shift()
      this.xList = this.showData.map(function (item) {
          return item[0];
      });
      this.yList  = this.showData.map(function (item) {
          return item[1];
      });
      this.drawLine()
    },

    nextData(i, date) {
      const formattedDate = new Date(date).toLocaleTimeString('en-US', { hour12: false });
      return [formattedDate, this.receiveValue[i]];
    },  

    drawLine(){
        var chartDom = document.getElementById('myChart2');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            // Make gradient line here
            visualMap:{
                  show: false,
                  type: 'continuous',
                  seriesIndex: 0,
                  min: 40,
                  max: 50,
                  inRange: {
                      // 选中范围中的视觉配置
                      color: ['red','yellow', 'green', 'yellow','red'], // 定义了图形颜色映射的颜色列表，
                  },
                  outOfRange: {
                      color: 'red'
                  }
            },
            title:{
                left: 'center',
                text: '湿度',
                top:  '10%'
            },
            tooltip: {
              trigger: 'axis'
            },
            xAxis:{
                  data: this.xList,
            },
            yAxis:{
              max:50,
              min:35
            },
            grid:{
              top:'20%'
            },
            series:{
                type: 'line',
                showSymbol: false,
                data: this.yList
            }
        };

        option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
  #myChart2{
    width: 100%;
    height: 300px;
  }
</style>