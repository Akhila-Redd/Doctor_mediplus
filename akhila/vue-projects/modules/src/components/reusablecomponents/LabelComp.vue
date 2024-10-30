<!-- <template>
    <label>{{ LabelName}}</label>
</template>
<script>
export default{
    props:{
        LabelName:String
    }
}</script> -->

<template>
    <label>{{ labelName }}</label>
</template>

<script>
export default {
    props: {
        labelName: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
/* Add any specific styles for your label here */
</style>
