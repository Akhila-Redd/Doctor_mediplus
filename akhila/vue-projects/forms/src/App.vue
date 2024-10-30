<template>
  <div id="app">
      <router-link to="/">Home</router-link>
      <router-link to="/students">Students</router-link>
      <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add your styles here */
</style>

