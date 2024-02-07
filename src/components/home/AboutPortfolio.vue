<template>
  <div class="my-4">
    <p class="text-body-1">This version of NFN is built using:</p>

    <div class="custom-list">
      <v-list-item
        v-for="tool in tools"
        :key="tool.name"
        :title="tool.name"
        :subtitle="tool.purpose"
        :prepend-icon="'mdi-' + tool.icon"
        class="text-body-2"
      >
      </v-list-item>
    </div>
  </div>
</template>

<script setup lang="ts">
const tools = [
  {
    name: 'Vue',
    purpose: 'JS Framework.',
    icon: 'vuejs'
  },
  {
    name: 'Vuetify',
    purpose: 'Vue UI Library.',
    icon: 'vuetify'
  },
  {
    name: 'Vite',
    purpose: 'Building tool and dev server.',
    icon: 'lightning-bolt'
  },
  {
    name: 'Vitest',
    purpose: 'Testing Library identical to Jest but complimentary to Vite.',
    icon: 'ab-testing'
  },
  {
    name: 'Vue Test Utils',
    purpose: 'Utility functions for testing Vue.',
    icon: 'ab-testing'
  },
  {
    name: 'Vue Testing Library',
    purpose: 'Additional functionality built on Vue Test Utils to simplify testing UI and events.',
    icon: 'ab-testing'
  },
  {
    name: 'Pinia',
    purpose: 'Vue State management.',
    icon: 'fruit-pineapple'
  },
  {
    name: 'NodeJS',
    purpose: 'Package manager.',
    icon: 'nodejs'
  },
  {
    name: 'Typescript',
    icon: 'language-typescript',
    purpose: 'Type checking and error handling prior to compiling JS.'
  },
  {
    name: 'Axios',
    icon: 'api',
    purpose: 'API requests.'
  },
  {
    name: 'Netlify',
    icon: 'server-outline',
    purpose: 'Hosting/deployment.'
  },
  {
    name: 'Love',
    icon: 'heart',
    purpose: 'Because why do something if you are not passionate about it?'
  }
]
</script>

<style scoped>
.custom-list {
  border: 1px solid var(--vt-c-forget-me-not);
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px;
}
</style>
