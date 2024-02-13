<template>
  <v-footer color="black" app>
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

        <v-col class="text-center my-4" cols="12">
          <p>
            <a href="https://www.linkedin.com/in/andre-l-jordan" target="_blank" class="navLink"
              >LinkedIn</a
            >
            |
            <a
              href="../assets/Andre_Jordan_Resume.pdf"
              target="_self"
              class="navLink"
              download="Andre Jordan Resume"
              >Resume</a
            >
          </p>
        </v-col>

        <v-col class="text-center" cols="12">
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

footer {
  border-top: 2px solid var(--color-text);
}

@media screen and (min-width: 395px) and (max-width: 498px) {
  .v-container {
    width: 72%;
  }
}

@media screen and (min-width: 373px) and (max-width: 395px) {
  .v-container {
    width: 80%;
  }
}
</style>
