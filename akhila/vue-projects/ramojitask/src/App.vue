<template>
  <HomeModuleComp />
  <div class="container-fluid footers mt-4">
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import HomeModuleComp from './components/pages/HomeModule/HomeModuleComp.vue';
export default {
  name: 'App',
  components: {
    HomeModuleComp,
    FooterComp

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footers{
  background: #FFC9C6;

}
</style>
