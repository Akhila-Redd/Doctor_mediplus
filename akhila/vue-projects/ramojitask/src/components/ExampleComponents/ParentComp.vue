<template>
    <div>
      <ChildComp @childClicked="handleChildClick" />
      <ChildComp @childClickeds="handleChildClick" />
    </div>
</template>
  
<script>
import ChildComp from './ChildComp.vue';
  
  export default {
    components: {
      ChildComp,
    },
    methods: {
      handleChildClick(message) {
        console.log(message);
      },
    },
  };
</script>
  
  