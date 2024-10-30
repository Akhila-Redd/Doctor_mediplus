<template>
    <div>
      <h2>User Form</h2>
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="firstname" class="form-label">First Name</label>
          <input v-model="formdata.firstname" type="text" id="firstname" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Last Name</label>
          <input v-model="formdata.lastname" type="text" id="lastname" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="formdata.email" type="email" id="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="mobile" class="form-label">Mobile No</label>
          <input v-model="formdata.mobile" type="tel" id="mobile" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formdata: {
          firstname: '',
          lastname: '',
          email: '',
          mobile: '',
        },
      };
    },
    methods: {
      submit() {
        const newStudent = JSON.stringify(this.formdata); // Serialize the object
        this.$router.push({ name: 'student', params: { student: encodeURIComponent(newStudent) } });
      },
    },
  };
  </script>
  