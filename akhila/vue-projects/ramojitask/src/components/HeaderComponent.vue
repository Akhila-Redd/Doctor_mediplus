<template>
    <div class="header">
      <img v-if="image" :src="image" class="header-image" alt="Tab Image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .header-image {
    width: 70px; /* Adjust size as needed */
    height: 40px; /* Adjust size as needed */
    margin-right: 10px; /* Space between image and title */
  }
  </style>
  