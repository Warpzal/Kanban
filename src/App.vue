<script lang="ts" setup>
import KanbanList from "@/components/KanbanList.vue"
import KanbanBoards from "@/components/KanbanBoards.vue"
import KanbanLogo from "@/components/KanbanLogo.vue"
// import StretchText from "./components/Ui/StretchText.vue"
import Themes from "@/components/Themes.vue"
import TopBar from "@/components/TopBar.vue"
import AddTask from "@/components/AddTask.vue"
import type List from "@/types/List"

import { ref } from "vue"

const lists = ref<List[]>([
    {
        id: "jfdsfla",
        name: "To-do",
        color: "cyan",
        tasks: [
            {
                id: "dafastring",
                title: "Work on Kanban Board",
                description: "Please clean the house",
                subtasks: [],
                status: "To-do",
            },
        ],
    },
    {
        id: "jfdsfla",
        name: "In Progress",
        color: "yellow",
        tasks: [
            {
                id: "dafastring",
                title: "Work on Kanban Board",
                description: "Please clean the house",
                subtasks: [],
                status: "In Progress",
            },
        ],
    },
])
</script>

<template>
    <div class="layout">
        <div class="sidebar">
            <div class="top">
                <KanbanLogo class="desktop-only ml-1 mb-2" />
                <KanbanBoards class="desktop-only" />
            </div>
            <div class="bottom desktop-only">
                <!-- <StretchText class="ml-1 py-1">Hide Sidebar</StretchText> -->
                <Themes style="margin: 0 auto; width: 90%" />
            </div>
        </div>
        <main class="main">
            <TopBar class="mobile-only" />
            <TopBar class="desktop-only" />
            <section class="content">
                <section class="todos">
                    <KanbanList
                        v-for="list in lists"
                        :list="list"
                        :key="list.id"
                    >
                    </KanbanList>
                </section>
                <AddTask />
            </section>
        </main>
    </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap");
:root {
    --color-primary: hsl(242, 48%, 58%);
    --color-primary-lighten: hsl(242, 48%, 68%);
    --color-dark-1: #ffffff;
    --color-grey: #828fa3;
    --color-bg: #f4f7fd;
    --color-light-text: #333;
    --text-color: #333;
    --text-color-transparent: rgba(0, 0, 0, 0.1);
    --kanban-color-bg: hsl(242, 48%, 95%);
}

.darkmode {
    --text-color: white;
    --text-color-transparent: rgba(255, 255, 255, 0.1);
    --color-primary: hsl(242, 48%, 58%);
    --color-primary-lighten: hsl(242, 48%, 68%);
    --color-dark-1: #2b2c37;
    --color-grey: #828fa3;
    --color-bg: #20212c;
    --color-light-text: white;
    --kanban-color-bg: white;
}

*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
}

html {
    font-size: 65%;
    @media (min-width: 1980px) {
        font-size: 67%;
    }
    @media (min-width: 2400px) {
        font-size: 70%;
    }
}

body {
    background: var(--color-bg);
    font-family: "Plus Jakarta Sans", sans-serif;
    color: var(--color-light-text);
}

.layout {
    @media (min-width: 650px) {
        display: flex;
    }
}

.sidebar {
    flex: 0 0 clamp(25rem, 30%, 28rem);
    background: var(--color-dark-1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid var(--text-color-transparent);

    @media (min-width: 650px) {
        height: 100vh;
        padding: 3rem 0;
        padding-right: 2.2rem;
    }
}

.main {
    position: relative;
    flex: 0 1 100%;
}

.content {
    overflow-y: scroll;
}

.todos {
    padding: 1.5rem 3rem;
    display: flex;
    gap: 2rem;
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.todos::-webkit-scrollbar {
    display: none;
}

// UTILITY
.is-hoverable {
    cursor: pointer;
}

.mobile-only {
    @media (min-width: 651px) {
        display: none !important;
    }
}

.desktop-only {
    @media (max-width: 650px) {
        display: none !important;
    }
}

.py-1 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.my-1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.mt-1 {
    margin-top: 1rem;
}

.mt-3 {
    margin-top: 3rem;
}

.mb-2 {
    margin-bottom: 5rem;
}

.ml-1 {
    margin-left: 1.5rem;
}

.mr-1 {
    margin-right: 1.5rem;
}

.shadow-sm {
    box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.05);
}

.shadow-md {
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
}

input,
textarea {
    font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
