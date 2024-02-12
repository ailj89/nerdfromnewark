<template>
  <v-app-bar :title="title" color="black">
    <template #prepend>
      <v-app-bar-nav-icon>
        <router-link :to="{ name: 'Home' }" class="mx-2">
          <img alt="Nerd From Newark" class="logo" src="@/assets/nfn.png" height="50" />
        </router-link>
      </v-app-bar-nav-icon>
    </template>

    <nav class="mx-2">
      <ul class="text-subtitle-1">
        <!-- <v-responsive width="80%"> -->
        <li v-for="item in navItems" :key="item.name" class="d-inline-block mx-4">
          <router-link :to="item.url" class="navLink">
            <v-icon>mdi-{{ item.icon }}</v-icon>
            {{ item.name }}
          </router-link>
        </li>
        <!-- </v-responsive> -->
      </ul>
    </nav>
  </v-app-bar>
</template>

<script lang="ts" setup>
const title = 'Nerd From Newark'
const navItems = [
  {
    name: 'Home',
    url: '/',
    icon: 'home'
  },
  {
    name: 'Career',
    url: '/roles',
    icon: 'briefcase-outline'
  },
  {
    name: 'About',
    url: '/about',
    icon: 'information-outline'
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: 'clipboard-list-outline'
  }
]
</script>

<style scoped>
header {
  border-bottom: 2px solid var(--color-text);
}

header.bg-black {
  color: var(--color-text) !important;
  font-weight: bold !important;
}

.v-card .v-card-title {
  color: var(--color-text) !important;
}

.v-toolbar-title .v-toolbar-title__placeholder {
  font-weight: bold !important;
}

@media screen and (min-width: 415px) and (max-width: 539px) {
  ul {
    width: 72%;
    text-align: center;
  }
}
</style>
