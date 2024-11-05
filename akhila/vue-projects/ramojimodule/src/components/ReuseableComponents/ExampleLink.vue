<template>
  <router-link :to="path">
    <p class="btn border border-1 p-2" :class="{'active-link': isActive}" style="font-size:16px; font-weight: 700; color:#616161 ;">
      <img src="@/assets/hotel.png" alt="" />
      {{ name }}
    </p>
  </router-link>
</template>

<script>
export default {
  props: {
    path: String,
    name: String,
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    
  }
};
</script>

<style scoped>
.active-link {
  background-color:red;
  color: white !important;
}
.btn {
  transition: background-color 0.3s ease;
}
.btn:hover{
  background-color: antiquewhite;
  color: rgb(1, 131, 245) !important;
  font-size: 12px !important;
  font-family:'Times New Roman', Times, serif;
}
</style>

<!-- <router-link to="/home">
            <p class="btn border border-1 p-2"><img src="@/assets/hotel.png" alt=""></p>
        </router-link>
        <router-link to="/sitara">
            <p class="btn border border-1 p-2"><img src="@/assets/hotel.png" alt="">Sitara</p>
        </router-link>
        <router-link to="/greenin">
            <p class="btn border border-1 p-2"><img src="@/assets/hotel.png" alt="">GreenIn</p>
        </router-link>
        <router-link to="/shantiniketan">
            <p class="btn border border-1 p-2"><img src="@/assets/hotel.png" alt="">Shantiniketan</p>
        </router-link>
        <router-link to="/tara">
            <p class="btn border border-1 p-2 "><img src="@/assets/hotel.png" alt="">Tara</p>
        </router-link>
        <router-link to="/sahara">
            <p class="btn border border-1 p-2"><img src="@/assets/hotel.png" alt="">Sahara</p>
        </router-link>
        <router-link to="/vasundara">
            <p class="btn border border-1 p-2"><img src="@/assets/hotel.png" alt="">vasundara Villa</p>
        </router-link>  -->