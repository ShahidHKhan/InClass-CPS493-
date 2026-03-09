import { defineStore } from 'pinia'
import type { product } from './types'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
    const products = ref<product[]>([{ id: 1 }, { id: 2 }, { id: 3 }])

    return { products }
})

