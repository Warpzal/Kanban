<script lang="ts" setup>
import KanbanLabel from "@/components/KanbanLabel.vue"
import StretchText from "@/components/Ui/StretchText.vue"
</script>

<template>
    <div>
        <StretchText class="ml-1 py-1">ALL BOARDS (3)</StretchText>
        <KanbanLabel :active="true">Example Board</KanbanLabel>
        <KanbanLabel>Example Board BLeh bleh</KanbanLabel>
        <KanbanLabel>Example Board 3</KanbanLabel>
        <KanbanLabel :alternative="true">+ Create New Board</KanbanLabel>
    </div>
</template>
