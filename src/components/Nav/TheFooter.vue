<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="item in navItems"
        :key="item.name"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ item.name }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>NFN</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts" setup>
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
