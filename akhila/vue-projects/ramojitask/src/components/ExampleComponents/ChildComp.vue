<template>
    <button @click="notiyParent">Click Me</button>
</template>
  
<script>
  export default {
    // emits: ['childClicked'], // Declaring the event
    methods: {
      notiyParent() {
        this.$emit('childClicked', 'Hello from Child!'); // Emitting the event
        this.$emit('childClickeds', 'Hello from Childd!'); // Emitting the event
      },
    },
  };
</script>
  