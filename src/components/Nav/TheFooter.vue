<template>
  <v-footer color="black" app="true" inset>
    <v-container>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="item in footerItems"
          :key="item.name"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          <router-link :to="item.url" class="navLink">
            {{ item.name }}
          </router-link>
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          <strong>{{ new Date().getFullYear() }} — NFN</strong>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts" setup>
const footerItems = [
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
strong {
  color: var(--vt-c-forget-me-not);
}

/* footer {
  position: absolute;
  bottom: 0;
  width: 100%;
} */
</style>
