<script lang="ts" setup>
import { computed } from "vue"

const { type } = defineProps({
    type: String,
})

const padding = computed(() => {
    if (type === "add-mobile") return ".4rem 1.7rem"
    if (type === "add") return ".4rem 1.7rem"
    return "1.2rem 1.8rem"
})
</script>

<template>
    <button class="button">
        <slot v-if="!type"></slot>
        <span v-else>+</span>
    </button>
</template>

<style lang="scss" scoped>
.button {
    display: block;
    cursor: pointer;
    font-size: 1.6rem;
    border: none;
    border-radius: 10rem;
    padding: v-bind(padding);
    background: var(--color-primary);
    color: white;
    font-weight: bold;

    &:hover {
        background: var(--color-primary-lighten);
    }
    span {
        font-size: 2rem;
    }
}
</style>
