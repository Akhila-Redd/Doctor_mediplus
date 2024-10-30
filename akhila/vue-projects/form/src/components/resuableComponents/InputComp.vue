

<template>
    <div>
      <input
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :value="modelValue"  
        @input="onInput"  
        class="form-control"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: String,
      type: {
        type: String,
        default: ''
      },
      placeholder: String,
      name: String
    },
    methods: {
      onInput(event) {
        this.$emit('update:modelValue', event.target.value); 
      }
    }
  };
  </script>
  