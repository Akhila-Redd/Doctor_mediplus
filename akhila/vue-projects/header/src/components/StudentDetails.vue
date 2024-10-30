<template>
    <div>
      <h2>Student Details</h2>
      <p>First Name: {{ student.firstname }}</p>
      <p>Last Name: {{ student.lastname }}</p>
      <p>Email: {{ student.email }}</p>
      <p>Mobile No: {{ student.mobile }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        student: {},
      };
    },
    created() {
      const studentString = this.$route.params.student;
  
      if (studentString) {
        try {
          this.student = JSON.parse(decodeURIComponent(studentString));
        } catch (error) {
          console.error('Error parsing student data:', error);
        }
      }
    },
  };
  </script>
  