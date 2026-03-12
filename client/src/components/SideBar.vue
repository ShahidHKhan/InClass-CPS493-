<script setup lang="ts">
const props = defineProps<{
    isActive: boolean;
    width?: number;
}>();

</script>

<template>
    <div class="side-bar" :class="{ 'is-active': props.isActive }" :style ="{ transform: props.isActive ? 'translateX(0)' : 'translateX(90%)' }">
        <slot />

    </div>
</template>

<style lang="scss" scoped>
.side-bar {
    width: 250px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    border-left: 1px solid #ccc;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    transform: translateX(90%);
    transition: transform 0.3s ease-in-out;
}

.side-bar:hover,
.side-bar.is-active {
    transform: translateX(0);
}

</style>