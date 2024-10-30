<!-- <!-- <template>
  <h1>student Template</h1>
  <form action="">
    <label for="name">Firstname :</label>
    <input type="text" required>
    <label for="name">Lastname :</label>
    <input type="text" required>
    <label for="email">Email :</label>
    <input type="email" required>
    <label for="name">Phone-num</label>
    <input type="number" required>
    <button>submit</button>
  </form>
</template>
<script>
  
</script>
<style>
h1{
  text-align: center;
}
 form { 
  display: flex;
  flex-direction: column;
  width:50%;
  margin: auto;
 }
 input{
  line-height: 30px;;
 }
 button{
  width:30%;
  line-height:35px;
  background-color: antiquewhite;
  border-radius: 5px;
  margin:auto;
  margin-top: 30px;
  /* text-align: center; */
 }
</style> -->

<template>
  <div>
    <h1>Student Template</h1>
    <form v-on:submit.prevent="handleSubmit">
      <label for="firstname">Firstname:</label>
      <input v-model="firstname" type="text" required>

      <label for="lastname">Lastname:</label>
      <input v-model="lastname" type="text" required>

      <label for="email">Email:</label>
      <input v-model="email" type="email" required>

      <label for="phone">Phone Number:</label>
      <input v-model="phone" type="tel" required>

      <label for="mothername">Mothername</label>
      <input type="text" v-model="mothername" required>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      mothername:''
    };
  },
  methods: {
    handleSubmit() {
      const studentData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
       mothername: this.mothername
      };
      console.log('Submitted Data:', studentData);
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
}
input {
  line-height: 30px;
}
button {
  width: 30%;
  line-height: 35px;
  background-color: antiquewhite;
  border-radius: 5px;
  margin: auto;
  margin-top: 30px;
}
</style> -->
