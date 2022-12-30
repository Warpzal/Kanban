<script lang="ts" setup>
import TheCard from "@/components/Ui/TheCard.vue"
</script>

<template>
    <TheCard class="task shadow-sm">
        <p class="task__title">
            <slot name="title"></slot>
        </p>
        <p class="task__subtasks">
            <slot name="subtasks_count"></slot>
        </p>
    </TheCard>
</template>

<style lang="scss" scoped>
.task {
    margin-bottom: 1.5rem;
    cursor: pointer;

    &:hover &__title {
        color: var(--color-primary-lighten);
    }

    &__title {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 2.2rem;
    }

    &__subtasks {
        padding-top: 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--color-grey);
    }
}
</style>
