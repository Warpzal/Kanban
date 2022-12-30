<script lang="ts" setup>
defineProps<{
    label?: string
    placeholder: string
}>()
</script>

<template>
    <div class="input">
        <textarea class="input__element" :placeholder="placeholder"></textarea>
    </div>
</template>

<style lang="scss" scoped>
textarea {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
    height: 8rem;
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
