<template>
    <button @click="callback" class="rounded-2xl w-max flex items-center gap-2 px-3 py-2">
        <slot></slot>
        {{ text }}
    </button>
</template>

<script setup lang="ts">
defineProps(["callback", "Icon", "text"])
</script>