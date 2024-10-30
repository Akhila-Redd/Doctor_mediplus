<template>
    <div>
      <h3>Shopping Cart</h3>
      <div v-if="cartItems.length === 0">Your cart is empty.</div>
      <div v-else>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <img :src="item.image" :alt="item.name" class="cart-item-image" />
            <span>{{ item.name }} - ${{ item.price }}</span>
          </li>
        </ul>
        <button @click="$emit('clear-cart')">Clear Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cartItems: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  
  .cart-item-image {
    width: 50px; /* Adjust size as needed */
    height: 50px; /* Adjust size as needed */
    margin-right: 10px;
  }
  </style>
  