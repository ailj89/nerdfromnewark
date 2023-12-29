<template>
  <div class="">
    <section class="pb-5">
      <filters-prompt />

      <hobbies-filter />
    </section>
  </div>
</template>

<script lang="ts" setup>
import FiltersPrompt from '@/components/SideBars/FiltersPrompt.vue'
import HobbiesFilter from '@/components/SideBars/HobbiesFilter.vue'
</script>
