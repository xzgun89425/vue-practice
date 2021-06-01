<script>
import Header from "@/components/Header.vue";
import Buttons from "@/components/Buttons.vue";
import { useRouter, useRoute } from "vue-router";
// import Footer from "@/components/Footer.vue";
import { useStore } from "vuex";
import { onMounted } from 'vue';
export default {
    components:{
        Header,
        Buttons,
        // Footer,
    },
    setup(){
      const store = useStore();
      const router = useRouter();
      const init = () => {
        store.dispatch('getapiInit');
        router.push({ name: "Home" });
      }

      onMounted(()=>{
        init();
      });

      return{

      }
    }
}
</script>

<template>
    <Header />
    <Buttons />
    <router-view></router-view>
    <!-- <Footer /> -->
</template>

<style>
   * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
}
img {
  display: block;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>