<template>
    <p class="stretched-text">
        <slot></slot>
    </p>
</template>

<style lang="scss" scoped>
.stretched-text {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-grey);
    letter-spacing: 0.24rem;
}
</style>
