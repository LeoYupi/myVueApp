<template>
    <div id="chart"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      url:'http://10.112.6.250:8888/static/mino.json',
      levelThreeTechniques:[],
      begin_time:1679474519647000000,
      end_time:'1679474521647000000',
      cylinderurl:'http://10.112.6.250:8888/api/v1/cylinder',
      seriesData:[],
      xAxisData:[],
      cylinderData:[],
    };
  },
  created(){
      this.getData();  
  },
  methods:{
      getData(){  //获取工序信息
          this.$axios.get(this.url,
          ).then(res => {
              //请求成功，触发then中的函数
              console.log('获取工序信息',res)
              this.data=res.data.data
              this.handleData(this.data)
          })
          .catch(error =>
              //请求失败，触发catch中的函数 可省略
              console.log(error)
          )
      },
      handleData(data){ //获取所有levelNum为3的工序并组成一个对象
        console.log('有效工序信息',data)
        for (var i=0;i<data.length;i++) {
          for (var j=0;j<data[i].children.length;j++) {
            for(var k=0;k<data[i].children[j].children.length;k++){
              this.levelThreeTechniques.push(data[i].children[j].children[k])
            }
          }
        }
        // 输出结果
        console.log('所有levelNum为3的工序组成的数组',this.levelThreeTechniques);
        this.getCylinder(this.begin_time,this.end_time)
      },
      getCylinder(begin_time, end_time) {
        var requests = [];

        for (var i = 0; i < this.levelThreeTechniques.length; i++) {
          var request = this.$axios.get(this.cylinderurl, {
            params: {
              dev_id: this.levelThreeTechniques[i].techniqueId,
              begin_time: begin_time,
              end_time: end_time
            }
          });
          requests.push(request);
        }

        Promise.all(requests)
          .then(responses => {
            for (var i = 0; i < responses.length; i++) {
              var res = responses[i].data;
              if (res.data != null) {
                var objects = [];
                for (var j = 0; j < res.data.rows.length; j++) {
                  var object = {
                    time: res.data.rows[j][0],
                    duration: res.data.rows[j][2]
                  };
                  objects.push(object);
                }
                var aDevid = {
                  name: '',
                  devid: res.data.rows[j - 1][1],
                  cylinder: objects
                };
                this.cylinderData.push(aDevid);
              }
            }
          })
          .then(() => {
            console.log('节拍信息',this.cylinderData);
            this.calculateCylinder();
          })
          .catch(error => {
            // 请求失败处理
            console.log(error);
          });
      },
      calculateCylinder() {
        for(var i=0;i<this.cylinderData.length;i++){
          var cylindernamefind=this.levelThreeTechniques.find(technique => technique.techniqueId === this.cylinderData[i].devid);
          this.cylinderData[i].name=cylindernamefind.techniqueName
          // this.cylinderData[0][0].push(cylindername.techniqueName)
        }
        console.log('添加工序名称的节拍',this.cylinderData)
        this.calculateData()
      },
      calculateData(){  //计算两个节拍间的间隔时间以画图
        for (var i=0;i<this.cylinderData.length;i++){
          var _timeLength=this.cylinderData[i].cylinder[0].time-parseInt(this.begin_time)
          console.log(_timeLength)
          this.cylinderData[i].cylinder[0]={
            ...this.cylinderData[i].cylinder[0],
            timeLength:_timeLength
          }
          for(var j=1;j<this.cylinderData[i].cylinder.length;j++){
            var _timeLength=this.cylinderData[i].cylinder[j].time-this.cylinderData[i].cylinder[j-1].time-this.cylinderData[i].cylinder[j-1].duration
            this.cylinderData[i].cylinder[j]={
              ...this.cylinderData[i].cylinder[j],
              timeLength:_timeLength
            }
          }
        }
        console.log('添加间隔时长的节拍',this.cylinderData)
        this.chartOptionCalculate()
      },
      chartOptionCalculate(){

        var maxCylinderLength=0

        for(var i=0;i<this.cylinderData.length;i++){
          this.xAxisData.push(this.cylinderData[i].name)
          if(this.cylinderData[i].cylinder.length>maxCylinderLength){
            maxCylinderLength=this.cylinderData[i].cylinder.length
          }
        }

        for(var i=0;i<maxCylinderLength;i++){
          var emptySeries={
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
              }
            },
            data: []
          }
          var dataSeries={
            name: 'Working',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'inside',
              rotate:'90'
            },
            data: []
          }
          for(var j=0;j<this.cylinderData.length;j++){
            if(this.cylinderData[j].cylinder[i]!=null){
              emptySeries.data.push(this.cylinderData[j].cylinder[i].timeLength)
              dataSeries.data.push(this.cylinderData[j].cylinder[i].duration)
            }
            else{
              emptySeries.data.push(0)
              dataSeries.data.push(0)
            }
          }
          this.seriesData.push(emptySeries)
          this.seriesData.push(dataSeries)
        }
        console.log(this.seriesData)
        this.chart()
      },
      chart() { //画图
        var chartDom = document.getElementById('chart');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: '工序图',
          },
          // tooltip: {
          //   trigger: 'axis',
          //   axisPointer: {
          //     type: 'shadow'
          //   },
          //   formatter: function (params) {
          //     var tar = params[1];
          //     return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          //   }
          // },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: this.xAxisData,
            axisLabel: {
              rotate: 90  // Rotate the x-axis labels by 90 degrees
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: function (value) {
                var minutes = Math.floor(value / 60000000000); // Convert nanoseconds to minutes
                var seconds = Math.floor((value % 60000000000) / 1000000000); // Convert remaining nanoseconds to seconds
                return minutes + ':' + (seconds < 10 ? '0' : '') + seconds; // Format as "min:sec"
              }
            }
          },
          series: this.seriesData,
          dataZoom: [
            {
              type: 'inside', // Use dataZoomInside component
              yAxisIndex: 0   // Specify the index of the y-axis to apply zooming
            }
          ]
        };

        option && myChart.setOption(option);
      }
  }
};
</script>


<style scoped>
  #chart{
    width: 100%;
    height: 500px;
  }
</style>