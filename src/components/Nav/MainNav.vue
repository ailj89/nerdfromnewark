<template>
  <header>
    <div>
      <router-link :to="{ name: 'Home' }" class="d-inline-block mx-2">
        <img alt="Nerd From Newark" class="logo" src="@/assets/nfn.png" width="125" height="125" />
      </router-link>

      <nav class="d-inline-block mx-2">
        <h1 class="d-inline-block mx-2">{{ title }}</h1>

        <ul>
          <li class="d-inline-block mx-2" v-for="item in navItems" :key="item.name">
            <router-link :to="item.url">{{ item.name }}</router-link>
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
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Roles',
    url: '/roles'
  }
]
</script>

<style scoped>
nav {
  position: relative;
  top: -50px;
}
</style>
