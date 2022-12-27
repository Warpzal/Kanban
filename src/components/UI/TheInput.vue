<script lang="ts" setup>
defineProps<{
    label?: string
    placeholder: string
}>()
</script>

<template>
    <div class="input">
        <h3 class="input__label py-1">{{ label }}</h3>
        <input class="input__element" type="text" :placeholder="placeholder" />
    </div>
</template>

<style lang="scss" scoped>
.input {
    &__label {
        font-size: 1.3rem;
    }

    &__element {
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
}
</style>
