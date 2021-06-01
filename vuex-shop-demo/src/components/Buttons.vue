<script>
import { reactive, ref } from 'vue'
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
    setup(){
        const router = useRouter();
        const store = useStore();
        const days = reactive(['2021-05-30 00:00:00','2021-06-01 00:00:00','2021-06-02 00:00:00']);
        const days2 = reactive(['2021-06-01 00:00:00','2021-06-02 00:00:00']);
        const mins = reactive(['15','30','60']);
        const mins2 = reactive(['30','60']);
            // {id:'1',name:'05/29',value:'2021-05-29 00:00:00'},
            // {id:'2',name:'06/01',value:'2021-06-01 00:00:00'},
            // {id:'3',name:'06/02',value:'2021-06-02 00:00:00'})
        const dayvalue = ref('2021-05-30 00:00:00');
        const minvalue = ref('15');
        const ischange = ref(true);
        const ischange2 = ref(true);

        const onminChange = () => {
            ischange2.value = false;
        }

        const ondayChange = () => {
            console.log("change");
            console.log(dayvalue.value);
            ischange.value = false;
        }

        const getapi = () => {
            if(dayvalue.value === '2021-05-30 00:00:00' && minvalue.value === '15'){
                store.dispatch('getapiInit');
                router.push({ name: "Home" });
            }
            if(dayvalue.value === '2021-05-30 00:00:00' && minvalue.value === '30'){
                store.dispatch('getapiInit30');
                router.push({ name: "Home" });
            }
            if(dayvalue.value === '2021-05-30 00:00:00' && minvalue.value === '60'){
                store.dispatch('getapiInit60');
                router.push({ name: "Home" });
            }

            if(dayvalue.value === '2021-06-01 00:00:00' && minvalue.value === '15'){
                store.dispatch('getapiInit2');
                router.push({ name: "Home" });
            }
            if(dayvalue.value === '2021-06-01 00:00:00' && minvalue.value === '30'){
                store.dispatch('getapiInit230');
                router.push({ name: "Home" });
            }
            if(dayvalue.value === '2021-06-01 00:00:00' && minvalue.value === '60'){
                store.dispatch('getapiInit260');
                router.push({ name: "Home" });
            }

            if(dayvalue.value === '2021-06-02 00:00:00' && minvalue.value === '15'){
                store.dispatch('getapiInit3');
                router.push({ name: "Home" });
            }
            if(dayvalue.value === '2021-06-02 00:00:00' && minvalue.value === '30'){
                store.dispatch('getapiInit330');
                router.push({ name: "Home" });
            }
            if(dayvalue.value === '2021-06-02 00:00:00' && minvalue.value === '60'){
                store.dispatch('getapiInit360');
                router.push({ name: "Home" });
            }
        }

        return{
            days, dayvalue , ondayChange , onminChange , ischange , ischange2 , days2 , mins , mins2 , minvalue , getapi
        }
    }
}
</script>

<template>
    <div id="btn">
        <p>日期:</p>
        <select v-model="dayvalue" v-on:change="ondayChange">
            <option value="" v-show="ischange">2021-05-30 00:00:00</option>
            <option :value="item" v-for="item in days2" :key="item" v-show="ischange">{{item}}</option>
            <option :value="item" v-for="item in days" :key="item" v-show="!ischange">{{item}}</option>
        </select>
        <p>時間間隔(分):</p>
        <select v-model="minvalue" v-on:change="ondayChange">
            <option value="" v-show="ischange2">15</option>
            <option :value="item" v-for="item in mins2" :key="item" v-show="ischange2">{{item}}</option>
            <option :value="item" v-for="item in mins" :key="item" v-show="!ischange2">{{item}}</option>
        </select>
        <button @click="getapi" class="bttn">搜尋</button>
    </div>
</template>

<style>
    #btn{
        background-color: #373c3f;
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        margin: 0px 10px;
        color: azure;
    }
    .bttn{
        margin: 0px 40px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10;
        background: rgb(48, 105, 107);
        color:cornsilk;
        width: 80px;
        border: none;
        border-radius: 10px;
    }
</style>