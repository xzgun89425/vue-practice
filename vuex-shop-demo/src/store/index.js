import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    apiArr: [],
 
    //-----
    timeArr: [],
    maleArr:[],
    femaleArr:[],
    allArr: [],
    isShow: false,
    //-----
    timeArr_1: [],
    maleArr_1:[],
    femaleArr_1:[],
    allArr_1: [],
    isShow_1: false,
    //-----
    timeArr_2: [],
    maleArr_2:[],
    femaleArr_2:[],
    allArr_2: [],
    isShow_2: false,
    //-----
    timeArr_3: [],
    maleArr_3:[],
    femaleArr_3:[],
    allArr_3: [],
    isShow_3: false,
    //-----
    timeArr_4: [],
    maleArr_4:[],
    femaleArr_4:[],
    allArr_4: [],
    isShow_4: false,
    //-----
    timeArr_5: [],
    maleArr_5:[],
    femaleArr_5:[],
    allArr_5: [],
    isShow_5: false,
    //-----
    timeArr_6: [],
    maleArr_6:[],
    femaleArr_6:[],
    allArr_6: [],
    isShow_6: false,
    //-----
    timeArr_7: [],
    maleArr_7:[],
    femaleArr_7:[],
    allArr_7: [],
    isShow_7: false,
  },
  mutations: {
    init(state,payload){
      state.apiArr = payload;

      state.timeArr = [];
      state.maleArr = [];
      state.femaleArr = [];
      state.allArr = [];
      state.isShow = false;

      state.timeArr_1 = [];
      state.maleArr_1 = [];
      state.femaleArr_1 = [];
      state.allArr_1 = [];
      state.isShow_1 = false;

      state.timeArr_2 = [];
      state.maleArr_2 = [];
      state.femaleArr_2 = [];
      state.allArr_2 = [];
      state.isShow_2 = false;

      state.timeArr_3 = [];
      state.maleArr_3 = [];
      state.femaleArr_3 = [];
      state.allArr_3 = [];
      state.isShow_3 = false;

      state.timeArr_4 = [];
      state.maleArr_4 = [];
      state.femaleArr_4 = [];
      state.allArr_4 = [];
      state.isShow_4 = false;

      state.timeArr_5 = [];
      state.maleArr_5 = [];
      state.femaleArr_5 = [];
      state.allArr_5 = [];
      state.isShow_5 = false;

      state.timeArr_6 = [];
      state.maleArr_6 = [];
      state.femaleArr_6 = [];
      state.allArr_6 = [];
      state.isShow_6 = false;

      state.timeArr_7 = [];
      state.maleArr_7 = [];
      state.femaleArr_7 = [];
      state.allArr_7 = [];
      state.isShow_7 = false;
      //--0
      for (let index = 0; index < state.apiArr.range0.length; index++) {
        state.timeArr.push(state.apiArr.range0[index].time);
        state.maleArr.push(state.apiArr.range0[index].male);
        state.femaleArr.push(state.apiArr.range0[index].female);
        state.allArr.push(state.apiArr.range0[index].all);
      }
      if(state.apiArr.range0.length !== 0){
        state.isShow = true;
      }
      //--1
      for (let index = 0; index < state.apiArr.range1.length; index++) {
        state.timeArr_1.push(state.apiArr.range1[index].time);
        state.maleArr_1.push(state.apiArr.range1[index].male);
        state.femaleArr_1.push(state.apiArr.range1[index].female);
        state.allArr_1.push(state.apiArr.range1[index].all);
      }
      if(state.apiArr.range1.length !== 0){
        state.isShow_1 = true;
      }
      //--2
      for (let index = 0; index < state.apiArr.range2.length; index++) {
        state.timeArr_2.push(state.apiArr.range2[index].time);
        state.maleArr_2.push(state.apiArr.range2[index].male);
        state.femaleArr_2.push(state.apiArr.range2[index].female);
        state.allArr_2.push(state.apiArr.range2[index].all);
      }
      if(state.apiArr.range2.length !== 0){
        state.isShow_2 = true;
      }
      //--3
      for (let index = 0; index < state.apiArr.range3.length; index++) {
        state.timeArr_3.push(state.apiArr.range3[index].time);
        state.maleArr_3.push(state.apiArr.range3[index].male);
        state.femaleArr_3.push(state.apiArr.range3[index].female);
        state.allArr_3.push(state.apiArr.range3[index].all);
      }
      if(state.apiArr.range3.length !== 0){
        state.isShow_3 = true;
      }
      //--4
      for (let index = 0; index < state.apiArr.range4.length; index++) {
        state.timeArr_4.push(state.apiArr.range4[index].time);
        state.maleArr_4.push(state.apiArr.range4[index].male);
        state.femaleArr_4.push(state.apiArr.range4[index].female);
        state.allArr_4.push(state.apiArr.range4[index].all);
      }
      if(state.apiArr.range4.length !== 0){
        state.isShow_4 = true;
      }
      //--5
      for (let index = 0; index < state.apiArr.range5.length; index++) {
        state.timeArr_5.push(state.apiArr.range5[index].time);
        state.maleArr_5.push(state.apiArr.range5[index].male);
        state.femaleArr_5.push(state.apiArr.range5[index].female);
        state.allArr_5.push(state.apiArr.range5[index].all);
      }
      if(state.apiArr.range5.length !== 0){
        state.isShow_5 = true;
      }
      //--6
      for (let index = 0; index < state.apiArr.range6.length; index++) {
        state.timeArr_6.push(state.apiArr.range6[index].time);
        state.maleArr_6.push(state.apiArr.range6[index].male);
        state.femaleArr_6.push(state.apiArr.range6[index].female);
        state.allArr_6.push(state.apiArr.range6[index].all);
      }
      if(state.apiArr.range6.length !== 0){
        state.isShow_6 = true;
      }
      //--7
      for (let index = 0; index < state.apiArr.range7.length; index++) {
        state.timeArr_7.push(state.apiArr.range7[index].time);
        state.maleArr_7.push(state.apiArr.range7[index].male);
        state.femaleArr_7.push(state.apiArr.range7[index].female);
        state.allArr_7.push(state.apiArr.range7[index].all);
      }
      if(state.apiArr.range7.length !== 0){
        state.isShow_7 = true;
      }

      
    }
  },
  actions: {
    getapiInit({commit}){
      axios.get(`/api/?start_day=2021-05-30 00:00:00&days=1`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data);   
       });
    },
    getapiInit30({commit}){
      axios.get(`/api/?start_day=2021-05-30 00:00:00&days=1&mins=30`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data);   
       });
    },
    getapiInit60({commit}){
      axios.get(`/api/?start_day=2021-05-30 00:00:00&days=1&mins=60`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data);   
       });
    },

    getapiInit2({commit}){
      axios.get(`/api/?start_day=2021-06-01 00:00:00&days=1`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data); 
       });
    },
    getapiInit230({commit}){
      axios.get(`/api/?start_day=2021-06-01 00:00:00&days=1&mins=30`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data);   
       });
    },
    getapiInit260({commit}){
      axios.get(`/api/?start_day=2021-06-01 00:00:00&days=1&mins=60`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data);   
       });
    },

    getapiInit3({commit}){
      axios.get(`/api/?start_day=2021-06-02 00:00:00&days=1`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data);
       });
    },
    getapiInit330({commit}){
      axios.get(`/api/?start_day=2021-06-02 00:00:00&days=1&mins=30`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data);   
       });
    },
    getapiInit360({commit}){
      axios.get(`/api/?start_day=2021-06-02 00:00:00&days=1&mins=60`)
       .then((res)=>{
         console.log(res.data);
         commit("init", res.data);   
       });
    },
  },
  getters: {
    isgetapi(state){
      return state.apiArr;
    },//------0
    isTime(state){
      return state.timeArr;
    },
    isMale(state){
      return state.maleArr;
    },
    isFemale(state){
      return state.femaleArr;
    },
    isAll(state){
      return state.allArr;
    },
    isShow(state){
      return state.isShow;
    },//------1
    isTime1(state){
      return state.timeArr_1;
    },
    isMale1(state){
      return state.maleArr_1;
    },
    isFemale1(state){
      return state.femaleArr_1;
    },
    isAll1(state){
      return state.allArr_1;
    },
    isShow1(state){
      return state.isShow_1;
    },//------2
    isTime2(state){
      return state.timeArr_2;
    },
    isMale2(state){
      return state.maleArr_2;
    },
    isFemale2(state){
      return state.femaleArr_2;
    },
    isAll2(state){
      return state.allArr_2;
    },
    isShow2(state){
      return state.isShow_2;
    },//------3
    isTime3(state){
      return state.timeArr_3;
    },
    isMale3(state){
      return state.maleArr_3;
    },
    isFemale3(state){
      return state.femaleArr_3;
    },
    isAll3(state){
      return state.allArr_3;
    },
    isShow3(state){
      return state.isShow_3;
    },//------4
    isTime4(state){
      return state.timeArr_4;
    },
    isMale4(state){
      return state.maleArr_4;
    },
    isFemale4(state){
      return state.femaleArr_4;
    },
    isAll4(state){
      return state.allArr_4;
    },
    isShow4(state){
      return state.isShow_4;
    },//------5
    isTime5(state){
      return state.timeArr_5;
    },
    isMale5(state){
      return state.maleArr_5;
    },
    isFemale5(state){
      return state.femaleArr_5;
    },
    isAll5(state){
      return state.allArr_5;
    },
    isShow5(state){
      return state.isShow_5;
    },//------6
    isTime6(state){
      return state.timeArr_6;
    },
    isMale6(state){
      return state.maleArr_6;
    },
    isFemale6(state){
      return state.femaleArr_6;
    },
    isAll6(state){
      return state.allArr_6;
    },
    isShow6(state){
      return state.isShow_6;
    },//------7
    isTime7(state){
      return state.timeArr_7;
    },
    isMale7(state){
      return state.maleArr_7;
    },
    isFemale7(state){
      return state.femaleArr_7;
    },
    isAll7(state){
      return state.allArr_7;
    },
    isShow7(state){
      return state.isShow_7;
    },
  },
  // modules: {
  // }
})
