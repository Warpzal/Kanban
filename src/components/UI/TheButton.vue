<script lang="ts" setup>
import { computed } from "vue"

const { type, textColor } = defineProps({
    type: String,
    textColor: {
        default: "var(--color-grey)",
    },
})

const padding = computed(() => {
    if (type === "add") return ".4rem 1.7rem"
    if (type === "text") return "0px"
    return "1.2rem 1.8rem"
})
</script>

<template>
    <p
        role="button"
        class="button is-hoverable"
        :class="{
            'button--1': type == 'add' || !type,
            'button--2': type == 'text',
            'button--icon': type == 'icon',
        }"
    >
        <slot />
    </p>
</template>

<style lang="scss" scoped>
.is-hoverable {
    cursor: pointer;
    display: block;
}

.button {
    width: fit-content;
    border: none;
}
.button--icon {
    padding: 0.5rem 1.2rem;
    border-radius: 100px;
    font-size: 2rem;
    background: var(--color-primary);
    color: white;
    &:hover {
        background: var(--color-primary-lighten);
    }
}
.button--1 {
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
.button--2 {
    font-size: 1.3rem;
    color: v-bind(textColor);
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
}
</style>
