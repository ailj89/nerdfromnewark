<template>
    <div class="flex flex-col border-r border-solid bg-white p-4 w-96">
        <section class="pb-5">
            <filters-prompt />

            <hobbies-filter />
        </section>
    </div>
</template>

<script lang="ts" setup>
    import FiltersPrompt from '@/components/SideBars/FiltersPrompt.vue';
    import HobbiesFilter from '@/components/SideBars/HobbiesFilter.vue';
</script>