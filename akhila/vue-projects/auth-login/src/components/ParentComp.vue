<template>
    <div>
      <h2>Parent Component</h2>
      <ChildrenComp @updateMessage="handleUpdate" />
    </div>
</template>
<script>
import ChildrenComp from './ChildrenComp.vue';
  export default {
    components: {
      ChildrenComp,
    },
    methods: {
      handleUpdate(newMessage) {
        console.log('Updated message from child:', newMessage);
        this.$emit('message-updated', newMessage); 
      },
    },
  };
</script>
  