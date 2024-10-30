<!-- GrandparentComponent.vue -->
<template>
    <div>
        <h1>Grandparent Component</h1>
        <p>Message: {{ message }}</p>
        <ParentComponent />
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello from Grandparent!',
            updateMessage:'this is updated message'
        };
    },
    provide() {
        return {
            message: this.message,
            updateMessage: this.updateMessage,
        };
    },
    methods: {
        updateMessage(newMessage) {
            this.message = newMessage; 
        },
    },

};
</script>