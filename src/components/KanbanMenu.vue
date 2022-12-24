<script lang="ts" setup>
import Card from "@/components/Ui/Card.vue"
import TheButton from "@/components/Ui/TheButton.vue"
</script>
<template>
    <Card class="shadow-md">
        <TheButton class="py-1" type="text" style="width: 100%">
            Clear Board
        </TheButton>
        <TheButton class="py-1" type="text" style="width: 100%">
            Rename Board
        </TheButton>
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
    </Card>
</template>
