<script lang="ts" setup>
import Task from "@/components/Task.vue"
import ListTitle from "@/components/ListTitle.vue"
import KanbanLogo from "@/components/KanbanLogo.vue"
import KanbanLabel from "@/components/KanbanLabel.vue"
import StretchText from "@/components/UI/StretchText.vue"
import TheButton from "@/components/Ui/TheButton.vue"
import ElipseVertical from "@/components/Icon/ElipseVertical.vue"
import Card from "./components/UI/Card.vue"
import Themes from "@/components/Themes.vue"

import { watch, ref, computed } from "vue"
import { useWindowSize } from "@vueuse/core"
const { width } = useWindowSize()

const isMobile = ref(false)

// const addButton = computed(() => {
//     if (width.value < 625) isMobile.value = true
//     else isMobile.value = false
// })

watch(width, () => {
    if (width.value < 625) isMobile.value = true
    else isMobile.value = false
})
</script>

<template>
    <KanbanLogo />
    <Themes />
    <ElipseVertical />
    <StretchText>ALL BOARDS (3)</StretchText>
    <KanbanLabel>Learn</KanbanLabel>
    <KanbanLabel active>Study</KanbanLabel>
    <KanbanLabel alternative>+ Create New Board</KanbanLabel>
    <TheButton>Add</TheButton>
    <Card class="shadow-md">
        <TheButton class="py-1" type="text">Clear Board</TheButton>
        <TheButton class="py-1" type="text">Rename Board</TheButton>
        <TheButton class="py-1" type="text" text-color="red">
            Delete Board
        </TheButton>
        <TheButton class="py-1" type="text" text-color="red">Die</TheButton>
    </Card>
    <ListTitle ball-color="limegreen" :tasks="2">TODO</ListTitle>
    <ListTitle ball-color="orange" :tasks="5">DOING</ListTitle>
    <ListTitle ball-color="red" :tasks="4">DONE</ListTitle>
    <StretchText>Hide Sidebar</StretchText>
    <StretchText>Show Sidebar</StretchText>

    <TheButton> Click </TheButton>
    <Task>
        <template #title>Title</template>
        <template #subtasks_count>0 of 1 subtasks</template>
    </Task>
    <Task>
        <template #title>Title</template>
        <template #subtasks_count>no subtasks</template>
    </Task>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap");
:root {
    --color-primary: hsl(242, 48%, 58%);
    --color-primary-lighten: hsl(242, 48%, 68%);
    --color-dark-1: #2b2c37;
    --color-grey: #828fa3;
    --color-bg: #20212c;
}

*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
}

html {
    font-size: 62.5%;
}

body {
    padding: 3rem;
    background: var(--color-bg);
    color: white;
    font-family: "Plus Jakarta Sans", sans-serif;
}

#app > :not(:first-child) {
    margin-top: 20px;
}

.py-1 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.shadow-sm {
    box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.05);
}
.shadow-md {
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
}
</style>
