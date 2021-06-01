<script>
import { computed, onMounted, onUnmounted, reactive } from 'vue';
import * as echarts from "echarts";
import { useStore } from "vuex";
export default {
  name: "echartsBox",
  setup(){
    let echart = echarts;
    const store = useStore();

    const time = computed(()=> store.getters.isTime);
    const male = computed(()=> store.getters.isMale);
    const female = computed(()=> store.getters.isFemale);
    const all = computed(()=> store.getters.isAll);
    const isShow = computed(()=> store.getters.isShow);
    // const init = () => {
    //   store.dispatch('getapiInit');
    // }

    onMounted(() => {
      console.log(isShow.value);
      if(isShow.value === true){
        initChart();
      }
      
      // init();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    function initChart() {
      // console.log(female.value);
      let chart = echart.init(document.getElementById("myEcharts"), "dark");
      // 把配置和数据放这里
      chart.setOption({
        xAxis: {
          type: "category",
          data: time.value,
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        grid: {
            left: '3%',
            right: '4%',
            top:'10%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
          data:['男','女','總人數']
        },
        series: [
          {
            data: male.value,
            name: '男',
            type: "line",
            smooth: true,
          },
          {
            data: female.value,
            name: '女',
            type: "line",
            smooth: true,
          },
          {
            data: all.value,
            name: '總人數',
            type: "line",
            smooth: true,
          },
        ]
      });
      // window.onresize = function() {
      //   //自适应大小
      //   chart.resize();
      // };
    }

    return { initChart , isShow };
  },
};
</script>
<template>
  <div id="RWDpage">
    <!-- <h1>HTML5</h1> -->
    <div class="echarts-box" v-if="isShow">
      <div id="myEcharts" :style="{ width: '1100px', height: '500px' }"></div>
    </div>
    <div class="echarts-box" v-if="!isShow">
      <h1>No Data</h1>
    </div>
  </div>
</template>

<style scoped>
#RWDpage {
  width: 100%;
  height: 850px;
  background-color: rgb(77, 209, 143);
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: #fff;
  font-size: 50px;
}
</style>