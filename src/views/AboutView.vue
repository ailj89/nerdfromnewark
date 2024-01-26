<template>
  <AboutMe />
</template>

<script setup lang="ts">
import AboutMe from '../components/AboutMe.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
