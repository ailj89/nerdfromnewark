<template>
  <v-card-item>
    <v-card-title>Nerd Extraordinaire</v-card-title>
  </v-card-item>

  <v-card-text class="text-body-1 my-3">
    There are many aspects to me, I am a son, a brother, a pet owner, a nerd, a friend, and many
    more but most important of all, I am a Human. The following is a modest insight of who I am when
    I'm not developing or keeping up with the lastest dev trends, I enjoy spending my time doing a
    multitude of activities such as:
  </v-card-text>

  <v-list-item
    v-for="hobby in hobbies"
    :key="hobby.name"
    :title="hobby.activity + ' ' + hobby.name"
    :subtitle="'Favorites include ' + hobby.favorites"
    :prepend-icon="'mdi-' + hobby.icon"
    class="text-body-2"
  >
  </v-list-item>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useHobbiesStore } from '@/stores/hobbies'

const hobbiesStore = useHobbiesStore()

const hobbies = computed(() => hobbiesStore.hobbies)

onMounted(hobbiesStore.FETCH_HOBBIES)
</script>

<style scoped>
a {
  color: var(--color-text);
}
</style>
