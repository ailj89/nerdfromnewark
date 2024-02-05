<template>
  <div class="d-flex align-center flex-column">
    <h3 class="text-h3 text-center pa-4">Welcome to Nerd From Newark!</h3>

    <p class="text-body-1 text-center pa-4">
      Here you will find details highlighting my
      <router-link class="navLink" :to="'/roles'">Career</router-link> as a Front-End Developer, my
      <router-link class="navLink" :to="'/about'">Hobbies/Interest</router-link>, and
      <router-link class="navLink" :to="'/projects'">Projects</router-link> I've worked on or
      currently in the works.
    </p>

    <about-portfolio />

    <the-cards />
  </div>
</template>

<script setup lang="ts">
import TheCards from '@/components/TheCards.vue'
import AboutPortfolio from '@/components/home/AboutPortfolio.vue'
</script>
