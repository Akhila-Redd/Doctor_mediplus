<!-- src/components/Register.vue -->
<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="username" placeholder="Username"  />
        <input v-model="password" type="password" placeholder="Password"  />
        <input v-model="email" type="email" placeholder="Email"  />
        <button type="submit">Register</button>
      </form>
      <div v-if="error" style="color: red;">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        email: '',
        error: '', // To display error messages
      };
    },
    methods: {
      register() {
        // Simple validation for demonstration
        if (!this.username || !this.password || !this.email) {
          this.error = 'All fields are required.';
          return;
        }
  
        // Simulate saving to local storage or database
        const newUser = {
          username: this.username,
          password: this.password,
          email: this.email,
        };
  
        // Ideally, you would send this data to your backend API
        localStorage.setItem('user_' + this.username, JSON.stringify(newUser)); // Store new user data
        this.$router.push('/login'); // Redirect to login page after registration
      },
    },
  };
  </script>
  