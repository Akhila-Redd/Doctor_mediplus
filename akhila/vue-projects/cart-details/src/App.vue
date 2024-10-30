<template>
  <div id="app">
    <ItemList :items="products" @add-to-cart="addToCart" />
    <Cart :cartItems="cartItems" @clear-cart="clearCart" />
    <CartSum :totalItems="totalItems" :totalPrice="totalPrice" />
  </div>
</template>

<script>
import ItemList from './components/itemList.vue';
import Cart from './components/CartDel.vue';
import CartSum from './components/CartSum.vue';

export default {
  components: {
    ItemList,
    Cart,
    CartSum,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 29.99,
          image: require("@/assets/logo1.png"), 
        },
        {
          id: 2,
          name: 'Product 2',
          price: 19.99,
          image: require('@/assets/logo2.png'),
        },
        {
          id: 3,
          name: 'Product 3',
          price: 49.99,
          image: require('@/assets/image1.png'),
        },
      ],
      cartItems: [],
    };
  },
  computed: {
    totalItems() {
      return this.cartItems.length;
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    },
  },
  methods: {
    addToCart(item) {
      this.cartItems.push(item);
    },
    clearCart() {
      this.cartItems = [];
    },
  },
};
</script>
<!-- 
<template>
<TabDet />
</template>
<script>
import TabDet from './components/TabDet.vue';

export default{
  components:{
    TabDet
  }
}
</script> -->