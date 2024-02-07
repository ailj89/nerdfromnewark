<template>
  <main-nav />
  <router-view />
  <v-layout>
    <the-footer />
  </v-layout>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNav from '@/components/Nav/MainNav.vue'
import TheFooter from '@/components/Nav/TheFooter.vue'
</script>
