<template>
  <header class="pt-5 pl-5">
    <div>
      <router-link :to="{ name: 'Home' }" class="d-inline-block mx-2">
        <img alt="Nerd From Newark" class="logo" src="@/assets/nfn.png" width="125" height="125" />
      </router-link>

      <nav class="d-inline-block mx-2" bordered>
        <h1 class="d-inline-block mx-2">{{ title }}</h1>

        <ul>
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
    name: 'About',
    url: '/about',
    icon: 'information-outline'
  },
  {
    name: 'Roles',
    url: '/roles',
    icon: 'briefcase-outline'
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
