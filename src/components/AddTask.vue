<script lang="ts" setup>
import TheCard from "@/components/Ui/TheCard.vue"
import TheInput from "@/components/Ui/TheInput.vue"
import TheDatalist from "@/components/Ui/TheDatalist.vue"
import TheTextarea from "@/components/Ui/TheTextarea.vue"
import TheButton from "@/components/Ui/TheButton.vue"
import CloseBtn from "@/components/Icon/CloseBtn.vue"
import type Task from "@/types/Task"
import { ref } from "vue"

const emit = defineEmits(["addTask"])

const title = ref("")
const description = ref("")
const subtasks = ref([""])
const status = ref("")
const submitted = ref(false)

const task = ref<Task>({
    id: "",
    title: "",
    description: "",
    subtasks: [],
    status: "",
})

const isValid = () => {
    let flag = true
    if (task.value.title === "") flag = false
    else if (task.value.status === "") flag = true
    submitted.value = true
    return flag
}

const removeSubtask = (index: number) => subtasks.value.splice(index, 1)

const addSubtask = () => {
    subtasks.value.push("")
}

const updateSubtask = (index: number, event: Event) => {
    const element = event.target as HTMLInputElement
    subtasks.value[index] = element.value
}

const updateStatus = (event: Event) => {
    const element = event.target as HTMLInputElement
    status.value = element.value
}

const updateTitle = (event: Event) => {
    const element = event.target as HTMLInputElement
    title.value = element.value
}

const updateDescription = (event: Event) => {
    const element = event.target as HTMLTextAreaElement
    description.value = element.value
}

const createTask = () => {
    task.value.id = "bleh"
    task.value.title = title.value
    task.value.description = description.value
    task.value.subtasks = subtasks.value
    task.value.status = status.value

    if (!isValid()) alert("Please fix the outlined fields")
    emit("addTask", task.value)
}
</script>
<template>
    <TheCard
        class="my-1 ml-1"
        style="
            max-width: 45rem;
            padding-left: 2rem;
            padding-right: 2rem;
            max-height: 80vh;
            overflow: auto;
        "
    >
        <h2>Add New Task</h2>

        <h3 class="label mt-3">Title</h3>

        <TheInput
            class="my-1"
            :class="{ invalid: title === '' && submitted }"
            label="Title"
            placeholder="e.g. Start learning things"
            :value="title"
            @input="updateTitle($event)"
        />

        <h3 class="label">Description (optional)</h3>

        <TheTextarea
            class="my-1"
            label="Description"
            placeholder="e.g. things"
            :value="description"
            @input="updateDescription($event)"
        />
        <h3 class="label">Subtasks (optional)</h3>
        <div class="subtasks">
            <div v-for="(subtask, index) of subtasks" class="subtasks__subtask">
                <TheInput
                    class="subtasks__input mt-1"
                    label="Subtasks"
                    placeholder="e.g. Make Coffee"
                    :value="subtask"
                    @input="updateSubtask(index, $event)"
                />

                <CloseBtn
                    @click="removeSubtask(index)"
                    class="subtasks__close is-hoverable"
                />
            </div>
        </div>

        <TheButton @click="addSubtask" class="my-1" type="alternative">
            + Add New Subtask
        </TheButton>

        <h3 class="label my-1">Status</h3>

        <TheInput
            class="my-1"
            :class="{ invalid: status == '' && submitted }"
            @input="updateStatus($event)"
            list="lists"
            id="lists"
            name="lists"
            placeholder="e.g. Todo"
        />

        <TheDatalist id="lists" label="Status" />

        <TheButton @click="createTask" class="my-1">Create Task</TheButton>
    </TheCard>
</template>
<style lang="scss" scoped>
.invalid {
    border-color: red;
}
.label {
    font-size: 1.3rem;
    color: var(--text-color);
}
.subtasks {
    &__subtask {
        display: flex;
        align-items: center;
    }
    &__input {
        flex: 1 0 95%;
    }
    &__close {
        margin-left: 1rem;
        flex: 1 0 10%;
    }
}
</style>
