<template>
  <v-container>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <div class="d-flex align-center flex-column">
          <h3 class="text-h3 text-center pa-4">Welcome To Nerd From Newark!</h3>

          <p class="text-body-1 text-center pa-4">
            Here you will find details highlighting my
            <router-link class="navLink" :to="'/roles'">Career</router-link> as a Front-End
            Developer, more <router-link class="navLink" :to="'/about'">About</router-link> me
            outside of development, and
            <router-link class="navLink" :to="'/projects'">Projects</router-link> I've worked on or
            currently in the works.
          </p>

          <about-portfolio />

          <the-cards />
        </div>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TheCards from '@/components/TheCards.vue'
import AboutPortfolio from '@/components/home/AboutPortfolio.vue'
</script>
