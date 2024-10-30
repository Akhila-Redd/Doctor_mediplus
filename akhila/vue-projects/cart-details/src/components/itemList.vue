<template>
    <div>
        <h3>Available Items</h3>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }} - ${{ item.price }}
                <button @click="addToCart(item)">Add to Cart</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
    },
    methods: {
        addToCart(item) {
            this.$emit('add-to-cart', item);
        }
    }
}
</script>