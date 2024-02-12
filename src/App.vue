<template>
  <v-layout>
    <main-nav />
    <v-main>
      <router-view />
      <the-footer />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNav from '@/components/Nav/MainNav.vue'
import TheFooter from '@/components/Nav/TheFooter.vue'
</script>
