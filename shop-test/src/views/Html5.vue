<script>
import { reactive } from 'vue';
export default {
  setup(){
    return{
    
    }
  },
  // chartData :{
  //   columns : ['日期','男','女'],
  //   rows : [
  //     {'日期':'1/1','男':5,'女':10},
  //     {'日期':'1/2','男':5,'女':10},
  //     {'日期':'1/3','男':5,'女':10},
  //     {'日期':'1/4','男':5,'女':10},
  //     {'日期':'1/5','男':5,'女':10},
  //   ]
  // }
  
};
</script>
<template>
  <div id="RWDpage">
    <h1>HTML5</h1>
    <!-- <ve-line :data="chartData"></ve-line> -->
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
