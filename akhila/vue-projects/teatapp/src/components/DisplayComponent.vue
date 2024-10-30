<template>
    <div>
      <h2>Submitted Data</h2>
      <p>Name: {{ data.name }}</p>
      <p>Age: {{ data.age }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  