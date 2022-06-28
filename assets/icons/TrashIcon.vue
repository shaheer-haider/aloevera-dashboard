<template>
    <svg :width="size" :height="size" viewBox="0 0 20 20" :fill="bgFill" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
            :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7.08301 4.14167L7.26634 3.05C7.39967 2.25833 7.49967 1.66667 8.90801 1.66667H11.0913C12.4997 1.66667 12.608 2.29167 12.733 3.05833L12.9163 4.14167"
            :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M15.7087 7.61667L15.167 16.0083C15.0753 17.3167 15.0003 18.3333 12.6753 18.3333H7.32533C5.00033 18.3333 4.92533 17.3167 4.83366 16.0083L4.29199 7.61667"
            :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.6084 13.75H11.3834" :stroke="color" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7.91699 10.4167H12.0837" :stroke="color" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
defineProps({
    color: {
        default: 'white',
        type: String
    },
    size: {
        default: '20',
        type: String
    },
    bgFill: {
        default: 'none',
        type: String
    }
})
</script>