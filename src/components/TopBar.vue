<script lang="ts" setup>
import KanbanBoards from "@/components/KanbanBoards.vue"
import KanbanMenu from "@/components/KanbanMenu.vue"
import TheButton from "@/components/Ui/TheButton.vue"
import ElipseVertical from "@/components/Icon/ElipseVertical.vue"
import Cheveron from "@/components/Icon/Cheveron.vue"
import Logo from "@/components/Icon/Logo.vue"
import Add from "@/components/Icon/Add.vue"
import CheveronFlipped from "@/components/Icon/CheveronFlipped.vue"
import TheCard from "./Ui/TheCard.vue"
import Themes from "@/components/Themes.vue"

import { ref } from "vue"

const isOpenMenu = ref(false)
const isOpenKanbanBoards = ref(false)

const toggleMenu = () => (isOpenMenu.value = !isOpenMenu.value)

const toggleKanbanBoards = () => {
    isOpenKanbanBoards.value = !isOpenKanbanBoards.value
}
</script>

<template>
    <header class="header">
        <div
            v-show="isOpenKanbanBoards"
            @click="toggleKanbanBoards"
            class="overlay"
        ></div>
        <div v-show="isOpenMenu" @click="toggleMenu" class="overlay"></div>
        <div class="header__left ml-1">
            <Logo class="mobile-only" />

            <h1 class="mobile-only" @click="toggleKanbanBoards">
                Example Board
            </h1>
            <h1 class="desktop-only">Example Board</h1>

            <Cheveron
                v-show="!isOpenKanbanBoards"
                @click="toggleKanbanBoards"
                class="mobile-only"
                style="margin-top: 0.8rem"
            />

            <CheveronFlipped
                v-show="isOpenKanbanBoards"
                @click="toggleKanbanBoards"
                class="mobile-only"
                style="margin-top: 0.8rem"
            />

            <TheCard v-show="isOpenKanbanBoards" class="kanban-boards">
                <KanbanBoards />
                <Themes />
            </TheCard>
        </div>

        <div class="header__right">
            <TheButton style="padding: 0.5rem 0.9rem">
                <Add class="mobile-only" />
                <div class="desktop-only" style="padding: 0.5rem 0.9rem">
                    + Add New Task
                </div>
            </TheButton>
            <ElipseVertical @click="toggleMenu" />
            <KanbanMenu v-show="isOpenMenu" class="kanban-menu" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.overlay {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
}

.kanban-menu {
    z-index: 100;
    user-select: none; /* Standard syntax */
    position: absolute;
    margin-top: 2rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    padding-right: 1rem;
    top: 100%;
    right: 0.2rem;
    width: 30rem;
    background: var(--color-dark-1);
}

.kanban-boards {
    z-index: 100;
    user-select: none; /* Standard syntax */
    border-radius: 0.8rem;
    position: absolute;
    margin-top: 2rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    padding-right: 1rem;
    top: 100%;
    left: 2rem;
    width: 30rem;
    background: var(--color-dark-1);
}

.header {
    isolation: isolate;
    background: var(--color-dark-1);
    padding: 2.2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--text-color-transparent);
    h1 {
        user-select: none;
        font-size: 2.4rem;
    }
    &__left {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    &__right {
        position: relative;
        display: flex;
        gap: 2rem;
        align-items: center;
    }
}
</style>
