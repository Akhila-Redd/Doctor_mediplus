<template>
    <div>
      <h2>Selected Tab Image</h2>
      <img v-if="selectedTab" :src="selectedTab" alt="Selected Tab Image" />
      <p v-else>Please select a tab to see the image.</p>
    </div>
</template>
  
<script>
  export default {
    props: {
      selectedTab: {
        type: String,
        default: null,
      },
    },
  };
</script>
  
<style>
  img {
    max-width: 100%;
    height: auto;
  }
</style>
  