<template>
  <HomeModuleComp />
  <div class="container-fluid footers mt-4">
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/MainComponents/FooterComp.vue';
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
.footers{
  background: #FFC9C6;

}
</style>

<!-- <template>
<ParentComp />
</template>
<script>
import ParentComp from './components/ExampleComponents/ParentComp.vue';

export default {
  components: {
    ParentComp
  }
}</script> -->