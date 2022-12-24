<script setup lang="ts">
import StretchText from "./UI/StretchText.vue"

const { tasks, ballColor } = defineProps({
    tasks: {
        type: Number,
        default: 1,
    },
    ballColor: {
        type: String,
        default: "yellow",
    },
})
</script>

<template>
    <div class="the-list">
        <div class="the-list__ball"></div>
        <StretchText> <slot></slot>({{ tasks }}) </StretchText>
    </div>
</template>

<style lang="scss" scoped>
.the-list {
    display: flex;
    gap: 5px;
    text-transform: uppercase;
    &__ball {
        align-self: center;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: v-bind(ballColor);
    }
}
</style>
