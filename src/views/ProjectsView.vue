<template>
  <div class="d-flex align-center flex-column">
    <h3 class="text-h3 text-center pa-4">Projects!</h3>
    <v-container>
      <v-row>
        <v-col cols="1"> </v-col>

        <v-col cols="10">
          <v-card>
            <v-tabs v-model="tab" color="deep-purple-accent-4">
              <v-tab v-for="(project, index) in projects" :key="project.title" :value="index">
                {{ project.title }}
              </v-tab>
            </v-tabs>

            <v-window v-model="tab">
              <v-window-item
                v-for="(project, index) in projects"
                :key="project.title"
                :value="index"
              >
                <v-container fluid>
                  <v-row>
                    <v-card-title>{{ project.title }}</v-card-title>

                    <v-card-text class="text-body-1">
                      {{ project.description }}
                    </v-card-text>

                    <v-list lines="two" class="bg-grey-lighten-2">
                      <v-list-item
                        v-for="techstack in project.techstack"
                        :key="techstack.name"
                        :title="techstack.name"
                        :prepend-icon="'mdi-' + techstack.icon"
                        class="text-body-2"
                      ></v-list-item>
                    </v-list>
                  </v-row>
                </v-container>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>

        <v-col cols="1"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tab = ref(null)
const projects = [
  {
    title: 'Bored? Games!',
    description:
      'Site to manage my board game collection, inspired by <a href="https://shorturl.at/clqQT" target="_blank">Board Game Geek</a>.',
    techstack: [
      {
        name: 'HTML',
        icon: 'language-html5'
      },
      {
        name: 'CSS',
        icon: 'language-css3'
      },
      {
        name: 'JavaScript',
        icon: 'language-javascript'
      },
      {
        name: 'Node.js',
        icon: 'nodejs'
      },
      {
        name: 'Axios',
        icon: 'api'
      },
      {
        name: 'Vue',
        icon: 'vuejs'
      },
      {
        name: 'Vuetify',
        icon: 'vuetify'
      },
      {
        name: 'Nuxt',
        icon: 'nuxt'
      },
      {
        name: 'Pinia',
        icon: 'state-machine'
      },
      {
        name: 'Typescript',
        icon: 'language-typescript'
      },
      {
        name: 'Vue Test Utils',
        icon: 'ab-testing'
      },
      {
        name: 'Prisma',
        icon: 'database'
      },
      {
        name: 'Supabase',
        icon: ''
      },
      {
        name: 'Netlify',
        icon: 'server-outline'
      },
      {
        name: 'Docker',
        icon: 'docker'
      }
    ]
  }
]
</script>
