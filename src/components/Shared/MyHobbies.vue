<template>
  <v-card-item>
    <v-card-title>Nerd Extraordinaire</v-card-title>

    <v-card-subtitle>
      <a href="https://shorturl.at/clqQT" target="_blank">Board Game Collection</a> |
      <a href="https://boredga.me/" target="_blank">Bored?Games!</a> (In Development)
    </v-card-subtitle>
  </v-card-item>

  <v-card-text class="text-body-1">
    When I'm not developing or keeping up with the lastest dev trends, I enjoy spending my time:
    <v-list lines="two" class="bg-grey-lighten-2">
      <v-list-item
        v-for="hobby in hobbies"
        :key="hobby.name"
        :title="hobby.activity + ' ' + hobby.name"
        :subtitle="'Favorites include ' + hobby.favorites"
        :prepend-icon="'mdi-' + hobby.icon"
        class="text-body-2"
      >
      </v-list-item>
    </v-list>
  </v-card-text>
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
