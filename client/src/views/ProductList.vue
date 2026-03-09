<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()
const { products } = storeToRefs(productStore)
</script>

<template>
    <h1 class="title is-1">Product List</h1>
    <div>
        <div v-for="product in products" :key="product.id">
            {{ product.id }}
        </div>
    </div>
</template>

<style lang="scss" scoped></style>