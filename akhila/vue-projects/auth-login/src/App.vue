<template>
  <div id="app">
    <router-view></router-view>
    <ParentComp />
  </div>
</template>

<script>
import ParentComp from './components/ParentComp.vue';
export default {
  components: {
    ParentComp,
  },
  name: 'App',
};
</script>
