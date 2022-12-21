<script lang="ts" setup>
const { color } = defineProps({
    color: {
        type: String,
        default: "var(--color-grey)",
    },
})
</script>

<template>
    <p>
        <slot></slot>
    </p>
</template>

<style lang="scss" scoped>
p {
    cursor: pointer;
    font-size: 1.3rem;
    color: v-bind(color);
    font-weight: bold;
    &:hover {
        text-decoration: line-through;
    }
}
</style>
