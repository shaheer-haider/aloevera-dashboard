<template>
    <svg :width="size" :height="size" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.66634 14C11.1641 14 13.9997 11.1645 13.9997 7.66667C13.9997 4.16886 11.1641 1.33333 7.66634 1.33333C4.16854 1.33333 1.33301 4.16886 1.33301 7.66667C1.33301 11.1645 4.16854 14 7.66634 14Z"
            stroke="#21BF73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.6663 14.6667L13.333 13.3333" stroke="#21BF73" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

</template>

<script setup>
defineProps({
    size: {
        default: 16
    },
})
</script>