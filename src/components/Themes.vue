<script lang="ts" setup>
import Moon from "./ICON/Moon.vue"
import Sun from "./ICON/Sun.vue"
</script>

<template>
    <div class="card">
        <Sun />
        <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
        <Moon />
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem;
    width: 20rem;
    background: var(--color-dark-1);
    border-radius: 0.6rem;
}
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: var(--color-primary);
}

input:focus + .slider {
    box-shadow: 0 0 1px var(--color-primary);
}

input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
