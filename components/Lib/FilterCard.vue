<template>
    <main class="flex bg-white w-[308px] h-[100px] shadow-[0px_12px_12px_-8px_#2e4e6f0f] rounded-xl py-4 px-5 gap-3">
        <div class="flex h-full items-center">
            <p
                :class="props.numberBoxClasses"
                class="flex items-center justify-center h-14 w-14 p-5 text-white rounded-xl font-extrabold text-2xl">
                {{ props.numberOfItems }}
            </p>
        </div>
        <div class="flex flex-col h-full justify-center gap-1">
            <h5 class="capitalize font-semibold text-primary-gray">expired</h5>
            <p class="text-primary-light-gray text-sm">{{ props.duration }}</p>
        </div>
    </main>
</template>

<script setup lang="ts">
const props = defineProps({
    duration: {
        default: "month to month"
    },
    numberOfItems: {
        default: "0"
    },
    numberBoxClasses: {
        default: "bg-primary-red"
    },
})
</script>
