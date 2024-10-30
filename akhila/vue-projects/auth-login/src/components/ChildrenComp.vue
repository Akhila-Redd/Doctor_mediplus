<!-- ChildComponent.vue -->
<template>
  <div>
    <h3>Child Component</h3>
    <p>Injected Message: {{ injectedMessage }}</p>
    <input v-model="newMessage" placeholder="Type a new message" />
    <button @click="sendMessage">Send to Parent</button>
  </div>
</template>

<script>
export default {
methods: {
  sendMessage() {
    if (typeof this.updateMessage === 'function') { 
      this.updateMessage(this.newMessage); 
      this.newMessage = ''; 
    } else {
      console.error('updateMessage is not a function'); 
    }
  },
},
  inject: ['message', 'updateMessage'],
  data() {
    return {
      newMessage: '',
    };
  },
  computed: {
    injectedMessage() {
      return this.message;
    },
  },
};
</script>

  