<template>
    <div>
      <h3>Cart Summary</h3>
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: ${{ totalPrice }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalItems: {
        type: Number,
        required: true,
      },
      totalPrice: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  