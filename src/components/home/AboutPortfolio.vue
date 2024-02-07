<template>
  <p class="text-body-1 pa-4">
    If you've visited my portfolio previously, you're probably wondering why the change? I updated
    my portfolio using Vue to reflect the path my career has taken since previously developing my
    portfolio using <a class="link" href="https://react.dev/" target="_blank">React</a>. Why
    <a class="link" href="https://vuejs.org/" target="_blank">Vue?</a> The simple anwser is that it
    is syntactically similar to
    <a class="link" href="https://angularjs.org/" target="_blank">AngularJS</a> so it was an easier
    transtion. On top of that, there was a need to migrate from AngularJS during my time at
    gen.video as AngularJS was sunsetting. After evaluating
    <a class="link" href="https://angular.io/" target="_blank">Angular</a>, React, and Vue,
    ultimately we decided upon Vue because of the familiarity of the Dev Team. While Vue has become
    my framework of choice, I am looking forward to learning Angular, React, or whatever the next
    industry changing
    <a
      class="link"
      href="https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190"
      target="_blank"
      >framework</a
    >
    is in this ever evolving field.
  </p>

  <div class="my-4">
    <p class="text-body-1">With that said, this current version of my portfolio is built using:</p>

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
