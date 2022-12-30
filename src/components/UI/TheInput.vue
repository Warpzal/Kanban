<script lang="ts" setup>
defineProps<{
    placeholder: string
}>()
</script>

<template>
    <input class="input__element" type="text" :placeholder="placeholder" />
</template>

<style lang="scss" scoped>
input {
    width: 100%;
    padding: 1rem;
    font-size: 1.4rem;
    background: var(--color-dark-1);
    color: var(--text-color);
    border: 1px solid var(--text-color-transparent);
    border-radius: 0.5rem;
    &:focus {
        outline: 2px dashed var(--text-color-transparent);
    }
}
</style>
