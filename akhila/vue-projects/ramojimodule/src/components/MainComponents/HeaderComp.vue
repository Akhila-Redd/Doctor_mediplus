<template>
  <div class="d-flex justify-content-between">
    <div>
    <img src="@/assets/image 16.png" class="header-logo p-0" />
  </div>
  <div class="header">
    <img v-if="image" :src="image" class="header-image" alt="Tab Image" />
    {{ tabname }}
  </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedImage: String,
    image: {
      type: String,
      default: '',
    },
    tabname:String
  },
};
</script>

<style>
.header-logo {
  display: flex;
}

.header {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
</style>