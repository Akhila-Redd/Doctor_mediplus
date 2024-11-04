<template>
    <button @click="sendData">Send Data to Parent</button>
</template>
  
<script>
  export default {
    emits: {
      dataSent: (payload) => {
        // Validate that the payload is a string
        return typeof payload === 'string';
      }
    },
    methods: {
      sendData() {
        const data = 'Hello, Parent!';
        this.$emit('dataSent', data); // Emit the event with the data
      }
    }
  }
</script>
  