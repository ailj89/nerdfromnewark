<template>
    <div class="mt-5">
        <ul class="flex flew-row flex-wrap">
            <li v-for="value in uniqueValues" :key="value">
                <input type="checkbox" name="" :id="value" v-model="selectedValues" @change="selectValue">
                <label :for="value">{{ value }}</label>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const props = defineProps({
        uniqueValues: {
            type: [Set<string>, Array<string>],
            required: true
        },
        action:{
            type: Function,
            required: true
        }
    })

    const selectedValues = ref<string[]>([]);

    const selectValue = () => {
        props.action(selectedValues.value)
    }

</script>