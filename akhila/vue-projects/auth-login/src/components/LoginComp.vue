
<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div v-if="error" style="color: red;">{{ error }}</div>
      <p>Don't have an account? <router-link to="/register">Register here</router-link></p> 
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      const userData = JSON.parse(localStorage.getItem('user_' + this.username));
      if (userData && userData.password === this.password) {
        localStorage.setItem('authToken', 'your_token');
        this.$router.push('/dashboard'); 
      } else {
        this.error = 'Invalid credentials. Please try again.';
      }
    },
  },
};
</script>
