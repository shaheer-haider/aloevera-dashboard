<template>
    <div class="select-primary">
        <select @change="update" v-model="val">
            <option v-for="value, index of props.values" :key="index" :value="value.value">{{ value.name
            }}</option>
        </select>
        <img src="@/assets/icons/DownArrow.svg" alt="select">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    val: {
        default: ""
    },
    values: {
        default: [],
    }
})
const val = ref(props.val)
const emit = defineEmits(['updateValue'])
function update() {
    emit("updateValue", val)
}
</script>