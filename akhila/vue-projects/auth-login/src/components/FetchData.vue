<template>
  <div>
    <h1>User Data</h1>
    <button @click="fetchUserData">Fetch User Data</button>
  </div>
</template>

<script>
import axiosInstance from '../axios';
export default {
  methods: {
    async fetchUserData() {
      try {
        const response = await axiosInstance.get('/user');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
  },
};
</script>
