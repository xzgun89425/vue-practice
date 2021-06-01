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

            // {id:'1',name:'05/29',value:'2021-05-29 00:00:00'},
            // {id:'2',name:'06/01',value:'2021-06-01 00:00:00'},
            // {id:'3',name:'06/02',value:'2021-06-02 00:00:00'})
        const dayvalue = ref('');
        const ischange = ref(true);

        const ondayChange = () => {
            console.log("change");
            console.log(dayvalue.value);
            ischange.value = false;

            if(dayvalue.value === '2021-05-30 00:00:00'){
                store.dispatch('getapiInit');
                router.push({ name: "Home" });
            }

            if(dayvalue.value === '2021-06-01 00:00:00'){
                store.dispatch('getapiInit2');
                router.push({ name: "Home" });
            }

            if(dayvalue.value === '2021-06-02 00:00:00'){
                store.dispatch('getapiInit3');
                router.push({ name: "Home" });
            }
        }

        return{
            days, dayvalue , ondayChange , ischange ,days2
        }
    }
}
</script>

<template>
    <div id="btn">
        <select v-model="dayvalue" v-on:change="ondayChange">
            <option value="" v-show="ischange">2021-05-30 00:00:00</option>
            <option :value="item" v-for="item in days2" :key="item" v-show="ischange">{{item}}</option>
            <option :value="item" v-for="item in days" :key="item" v-show="!ischange">{{item}}</option>
        </select>
    </div>
</template>

<style>
    #btn{
        background-color: #b3c8d4;
        width: 100%;
        height: 25px;
    }
</style>