<script lang="ts" setup>
import TheCard from "@/components/Ui/TheCard.vue"
import TheButton from "@/components/Ui/TheButton.vue"
</script>
<template>
    <TheCard class="shadow-md" style="padding: none">
        <TheButton class="py-1" type="text"> Clear Board </TheButton>
        <TheButton class="py-1" type="text"> Rename Board </TheButton>
        <TheButton
            class="py-1"
            type="text"
            text-color="red"
            style="width: 100%"
        >
            Delete Board
        </TheButton>
        <TheButton
            class="py-1"
            type="text"
            text-color="red"
            style="width: 100%"
        >
            Die
        </TheButton>
    </TheCard>
</template>
