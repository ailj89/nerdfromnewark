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
// import { computed, onMounted } from 'vue'
// import { useHobbiesStore } from '@/stores/hobbies'

// const hobbiesStore = useHobbiesStore()

// const hobbies = computed(() => hobbiesStore.hobbies)

const hobbies = [
  {
    activity: 'Cooking',
    name: '& Baking',
    favorites: 'Bread, Mac n Cheese, Peach Cobler, Pork Belly, Ramen',
    icon: 'chef-hat'
  },
  {
    activity: 'Playing',
    name: 'Board Games',
    favorites: 'Codenames, Ex Libris, Nemesis, Street Fighter',
    icon: 'dice-6-outline'
  },
  {
    activity: 'Playing',
    name: 'Video Games',
    favorites: 'Diablo, Final Fantasy, Mortal Kombat, Street Fighter',
    icon: 'controller'
  },
  {
    activity: 'Reading',
    name: 'Comics',
    favorites: 'Ice Cream Man, Hulk, She-Hulk, Street Fighter, The Walking Dead, X-Men',
    icon: 'book-open-page-variant'
  },
  {
    activity: 'Watching',
    name: 'Anime',
    favorites: 'Cowboy Bebop, Dragon Ball Z, Gundam, Outlaw Star, Trigun',
    icon: 'television-classic'
  },
  {
    activity: 'Watching',
    name: 'Comedies',
    favorites: 'Boondocks, Dave Chappelle, Family Guy, The Harley Quinn Show, South Park, Ted',
    icon: 'drama-masks'
  },
  {
    activity: 'Watching',
    name: 'Horror',
    favorites:
      "Child's Play, Evil Dead, Friday the 13th, Halloween, Night of the Living Dead, Nightmare on Elm Street, Return of the Living Dead",
    icon: 'knife'
  },
  {
    activity: 'Watching',
    name: 'Sports',
    favorites: 'Baseball, Basketball, Football, WWE, AEW',
    icon: 'basketball'
  }
]

// onMounted(hobbiesStore.FETCH_HOBBIES)
</script>

<style scoped>
a {
  color: var(--color-text);
}
</style>
