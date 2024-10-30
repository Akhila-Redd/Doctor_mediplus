<template>
    <form @submit.prevent="submitForm">
      <input v-model="formData.name" placeholder="Enter name" required />
      <input v-model="formData.age" placeholder="Enter age" required type="number" />
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          age: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Save data to local storage
        localStorage.setItem('studentData', JSON.stringify(this.formData));
        // Navigate to details page
        this.$router.push({ name: 'StudentDetails' });
      }
    }
  };
  </script>
  