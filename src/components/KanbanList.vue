<script lang="ts" setup>
import ListTitle from "@/components/ListTitle.vue"
import Task from "@/components/Task.vue"
import type List from "@/types/List"

defineProps<{
    list: List
}>()
</script>

<template>
    <div class="list">
        <ListTitle
            class="py-1"
            :ball-color="list.color"
            :tasks="list.tasks.length"
        >
            {{ list.name }}
        </ListTitle>
        <Task v-for="task in list.tasks">
            <template #title>{{ task.title }}</template>
            <template #subtasks_count>
                0 subtasks of {{ task.subtasks.length }}
            </template>
        </Task>
    </div>
</template>

<style lang="scss" scoped>
.list {
    flex: 1 0 clamp(22rem, 75%, 27rem);
    padding: 0.5rem;
    padding-bottom: 12.5rem;
    user-select: none;
    &:hover {
        outline: 1px dashed var(--color-grey);
        // border-radius: 8px;
    }
}
</style>
