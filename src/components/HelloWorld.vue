<template>
  <div class="mx-auto" width="800">
    <router-link :to="'/roles'">
      <v-card
        width="200"
        max-width="400"
        height="200"
        image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        title="Career"
        theme="dark"
      ></v-card>
    </router-link>

    <router-link :to="'/about'">
      <v-card
        width="200"
        max-width="400"
        height="200"
        image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        title="Hobbies"
        theme="dark"
      ></v-card>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
