<template>
  <div class="d-flex align-center flex-column">
    <p>
      Welcome to Nerd From Newark, highlighting my
      <router-link :to="'/roles'">Career</router-link>as a Front-End Developer and my
      <router-link :to="'/about'">hobbies/interest</router-link>.
    </p>

    <hello-world />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>
