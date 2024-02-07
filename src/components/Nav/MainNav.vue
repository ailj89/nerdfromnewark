<template>
  <v-app-bar :title="title" color="black">
    <template #prepend>
      <v-app-bar-nav-icon>
        <router-link :to="{ name: 'Home' }" class="d-inline-block mx-2">
          <img alt="Nerd From Newark" class="logo" src="@/assets/nfn.png" height="50" />
        </router-link>
      </v-app-bar-nav-icon>
    </template>
    <header class="py-5 pl-5">
      <div>
        <nav class="d-inline-block mx-2">
          <h4 class="d-inline-block mx-2 text-h4">{{ title }}</h4>

          <ul class="mt-3 text-subtitle-1">
            <li class="d-inline-block mx-2" v-for="item in navItems" :key="item.name">
              <router-link :to="item.url" class="navLink">
                <v-icon>mdi-{{ item.icon }}</v-icon>
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
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

nav {
  position: relative;
  top: -50px;
}
</style>
