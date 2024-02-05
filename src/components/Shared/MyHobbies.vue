<template>
  <v-card-item>
    <v-card-title>Nerd Extraordinaire</v-card-title>

    <v-card-subtitle>
      <a href="https://shorturl.at/clqQT" target="_blank">Board Game Collection</a> |
      <a href="https://boredga.me/" target="_blank">Bored?Games!</a>
    </v-card-subtitle>
  </v-card-item>

  <v-card-text class="text-body-1">
    There are many aspects to me, I am a son, a brother, a pet owner, a nerd, a friend, and many
    more but most important of all, I am a Human. Here is a my
    <a href="" target="_blank">Myers-Briggs</a> personality test. The following is a modest insight
    of who I am.

    <br />
    <br />
    When I'm not developing or keeping up with the lastest dev trends, I enjoy spending my time
    doing a multitude of activities such as:

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
