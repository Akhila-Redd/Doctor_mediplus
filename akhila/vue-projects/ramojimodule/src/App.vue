<template>
   <div class="container">
  <router-view></router-view>
   </div>
   <div class="container-fluid footers mt-4">
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/MainComponents/FooterComp.vue';


export default {
  name: 'App',  
  components:{
    FooterComp
  }
}
</script>
<style>
.footers{
  background: #FFC9C6;

}</style>