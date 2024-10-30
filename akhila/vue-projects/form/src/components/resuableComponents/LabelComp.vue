
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
