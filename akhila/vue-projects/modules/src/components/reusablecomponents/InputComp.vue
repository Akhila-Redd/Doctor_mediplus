<!-- <template>
    <input :type="type" :placeholder="placeholder" :name="name" />
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        placeholder:String,
        name: String
    }
}
</script> -->
<template>
    <input
        :type="type"
        :name="name"
        v-model="inputValue"
        :placeholder="placeholder"
        :class="inputClass"
        @input="updateValue"
    />
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },

    },
    data() {
        return {
            inputValue: this.value 
        };
    }
   
}
</script>

<style scoped>
/* Add any specific styles for your input here */
</style>
