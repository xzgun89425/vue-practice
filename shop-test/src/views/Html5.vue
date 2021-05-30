<script>
import { onMounted, onUnmounted } from 'vue';
import * as echarts from "echarts";
export default {
  name: "echartsBox",
  setup(){
    let echart = echarts;

    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"), "dark");
      // 把配置和数据放这里
      chart.setOption({
        xAxis: {
          type: "category",
          data: [
            "週一",
            "週二",
            "週三",
            "週四",
            "週五",
            "週六",
            "週日",
          ]
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        legend: {
          data:['男','女']
        },
        series: [
          {
            data: [2,3,5,4,1,6,6],
            name: '男',
            type: "line",
            smooth: true,
          },
          {
            data: [5,1,7,2,3,4,5],
            name: '女',
            type: "line",
            smooth: true,
          },
        ]
      });
      window.onresize = function() {
        //自适应大小
        chart.resize();
      };
    }

    return { initChart };
  },
};
</script>
<template>
  <div id="RWDpage">
    <!-- <h1>HTML5</h1> -->
    <div class="echarts-box">
      <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
    </div>
  </div>
</template>

<style scoped>
#RWDpage {
  width: 100%;
  height: 500px;
  background-color: blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: #fff;
  font-size: 50px;
}
</style>
