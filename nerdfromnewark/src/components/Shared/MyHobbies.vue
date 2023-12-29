<template>
  <v-card-item>
    <v-card-title>Nerd Extraordinaire</v-card-title>

    <v-card-subtitle>This is a subtitle</v-card-subtitle>
  </v-card-item>

  <v-card-text>
    When I'm not developing or keeping up with the lastest dev trends, I enjoy spending my time:

    <v-list-item
      v-for="hobby in hobbies"
      :key="hobby.name"
      :title="hobby.activity + ' ' + hobby.name"
      :subtitle="'Favorites include ' + hobby.favorites"
    ></v-list-item>
  </v-card-text>
</template>

<script lang="ts" setup>
interface Hobby {
  activity?: string
  name: string
  favorites?: string
}

const hobbies: Hobby[] = [
  {
    activity: 'Cooking',
    name: 'Baking',
    favorites: 'Bread, Mac n Cheese, Peach Cobler, Pork Belly, Ramen'
  },
  {
    activity: 'Playing',
    name: 'Board Games',
    favorites: 'Codenames, Ex Libris, Nemesis, Street Fighter'
  },
  {
    activity: 'Playing',
    name: 'Video Games',
    favorites: 'Diablo, Final Fantasy, Mortal Kombat, Street Fighter'
  },
  {
    activity: 'Reading',
    name: 'Comics',
    favorites: 'Ice Cream Man, Hulk, She-Hulk, Street Fighter, The Walking Dead, X-Men'
  },
  {
    activity: 'Watching',
    name: 'Anime',
    favorites: 'Cowboy Bebop, Dragon Ball Z, Gundam, Outlaw Star, Trigun'
  },
  {
    activity: 'Watching',
    name: 'Comedy Movies',
    favorites: 'Codenames, Ex Libris, Nemesis, Street Fighter'
  },
  {
    activity: 'Watching',
    name: 'Horror Movies',
    favorites:
      "Child's Play, Friday the 13th, Halloween, Night of the Living Dead, Nightmare on Elm Street, Return of the Living Dead"
  },
  {
    activity: 'Watching',
    name: 'Sports',
    favorites: 'Baseball, Basketball, Football, Wrestling'
  }
]
</script>
