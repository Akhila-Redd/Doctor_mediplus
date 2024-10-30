<!-- <template>
    <div class="d-flex justify-content-between">
        <img src="../assets/image 16.png" class="header-logo p-0">
         <p v-show="sitara"> <img src="@/assets/sitara.svg" alt=""></p>
        <img v-if="selectedTab" :src="selectedTab" alt="Selected Tab Image" />
    </div>
</template>
<script>
export default {
    props: {
        images: String,
        sitara: Boolean,
        selectedTab: {
            type: String,
            default: null,
        },
    },
}
</script>
<style>
.header-logo {
    display: flex;
}
</style> -->
<template>
    <div class="d-flex justify-content-between">
      <img src="../assets/image 16.png" class="header-logo p-0" />
      <img v-if="selectedImage" :src="selectedImage" alt="Selected Tab Image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedImage: String,
    },
  };
  </script>
  
  <style>
  .header-logo {
    display: flex;
  }
  </style>
  