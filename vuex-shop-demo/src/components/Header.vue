<script>
import { ref } from 'vue'
export default {
  setup(){
    const isOpen = ref(false);

    const HandMenuOpne = () => {
      isOpen.value = !isOpen.value;
    }
    return{
      isOpen,
      HandMenuOpne,
    }
  }
}
</script>

<template>
    <header :class="{openMenu : isOpen}">
        <nav>
            <h4 class="title">客群人潮分析</h4>
            <a id="moblie_menu" href="javascript:;" @click="HandMenuOpne"></a>
            <div>
            <router-link to="/range0">(0-3)</router-link>
            <router-link to="/range1">(4-7)</router-link>
            <router-link to="/range2">(8-13)</router-link>
            <router-link to="/range3">(14-22)</router-link>
            <router-link to="/range4">(23-35)</router-link>
            <router-link to="/range5">(36-45)</router-link>
            <router-link to="/range6">(46-60)</router-link>
            <router-link to="/range7">(61up)</router-link>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
h4{
  color: greenyellow;
  font-size: 20px;
}
header {
  background-color: #373c3f;
  width: 100%;
  height: 97px;
  @media screen and (max-width: 640px){
    transition: height 0.2s;
    height: 37px;
    overflow: hidden;
    &.openMenu {
      height: 232px;
    }
  }
  > nav {
    position: relative;
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    // display: flex;
    
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 640px){
      width: 100%;
      height: 232px;
    }
    > .title {
      line-height: 97px;
      font-size: 18px;
      float: left;
      color: rgb(189, 223, 251);
      margin-right: 20px;
      @media screen and (max-width: 1044px){
        margin-left: 5%;
      }
      @media screen and (max-width: 640px){
        line-height: 37px;
      }
    }
    > div {
      width: 100%;
      height: 100%;
      @media screen and (max-width: 640px){
        clear: both;
        width: 100%;
        height: 195px;
      }
      > a {
        display: block;
        line-height: 97px;
        font-size: 15px;
        float: left;
        color: #fff;
        padding: 0 10px;
        &.router-link-active {
          color: coral;
        }
        @media screen and (max-width: 640px){
          width: 100%;
          height: auto;
          overflow: hidden;
          line-height: 37px;
          text-align: center;
        }
        
      }
    }
  } 
}
a#moblie_menu {
  display: none;
  @media screen and (max-width: 640px) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 37px;
    height: 37px;
    background-image: url("~@/assets/images/menu.jpg");
    background-position: 50% 50%;
    background-size: 95% auto;
    background-repeat: no-repeat;
  }
}
// header > nav > h1 {
//   line-height: 97px;
//   font-size: 18px;
//   float: left;
//   color: #fff;
//   margin-right: 20px;
// // }
// header > nav > div {
//   width: 100%;
//   height: 100%;
// // }
// header > nav > div > a {
//   display: block;
//   line-height: 97px;
//   font-size: 15px;
//   float: left;
//   color: #fff;
//   padding: 0 10px;
// }
</style>