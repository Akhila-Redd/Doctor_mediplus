
<template>
    <button>{{ buttonName }}</button>
</template>
<script>
export default {
    props: {
        buttonName: {
            type: String,
            required: true
        }
    }
}
</script>