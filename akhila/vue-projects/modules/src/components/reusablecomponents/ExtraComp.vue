<template>
    <SecondComp2 :formfields="formFields" />
  </template>
  
  <script>
import SecondComp2 from '../pages/AboutPage/SecondComp2.vue';

  
  export default {
    components: {
      SecondComp2
    },
    data() {
      return {
        // formFields: [
        //   {
        //     labelNames: "First Name :",
        //     name: "firstname",
        //     type: "text",
        //     placeholder: "Enter your first name"
        //   },
        //   {
        //     labelNames: "Last Name : ",
        //     name: "lastname",
        //     type: "text",
        //     placeholder: "Enter your last name"
        //   },
        //   {
        //     labelNames: "Email : ",
        //     name: "email",
        //     type: "email",
        //     placeholder: "Enter your email"
        //   },
        //   {
        //     labelNames: "Password : ",
        //     name: "password",
        //     type: "password",
        //     placeholder: "Enter your password"
        //   }
        // ]
      };
    }
  }
  </script>
  