<template>
  <div class="custom-list">
    <v-tabs v-model="tab" color="deep-purple-accent-4">
      <v-tab v-for="(project, index) in projects" :key="project.name" :value="index">
        {{ project.name }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item v-for="(project, index) in projects" :key="project.name" :value="index">
        <v-container fluid>
          <v-row>
            <v-card flat outlined color="transparent">
              <v-card-item>
                <h6 class="my-4 text-h6">About:</h6>

                <v-card-text class="text-body-1 mt-4">
                  <a :href="project.url" target="_blank" class="navLink"> {{ project.name }} </a>,
                  <span v-if="project.status"> {{ project.status }},</span>
                  {{ project.details }}
                </v-card-text>

                <h6 class="my-4 text-h6">Purpose/Problem attempting to solve:</h6>

                <v-card-text class="text-body-1">
                  {{ project.purpose }}
                </v-card-text>

                <div>
                  <p class="text-body-2 font-italic">Tech Stack</p>
                  <v-list-item
                    v-for="stack in project.techstack"
                    :key="stack.name"
                    :title="stack.name"
                    :prepend-icon="'mdi-' + stack.icon"
                    class="text-body-2"
                  >
                  </v-list-item>
                </div>
              </v-card-item>
            </v-card>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const tab = ref(0)
const projects = [
  {
    name: 'Bored? Games!',
    status: 'currently in development',
    details:
      "is a site to manage my board game collection, inspired by Board Game Geek's collection page. Features in progress include linking expansions to base games, win/lose records, creating playlist for game nights, guides to setup games and expansions.",
    purpose:
      "While keeping tracks of plays on BGG, I noticed there's no way to indicate whether you've included any expansions or modules during that session. I've also noticed the lack of setup guides for expansions or modules in general and would like a centralized location where I can choose which game I'm playing, how many players, which expansions or modules I am including, if any, and how to set up the game based on those parameters. Furthermore, BGG doesn't not provide a way to sort or filter games by difficulty, player count, themes, or mechanics.",
    url: 'https://boredga.me/',
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
        name: 'Tailwind',
        icon: 'tailwind'
      },
      {
        name: 'JavaScript',
        icon: 'language-javascript'
      },
      {
        name: 'Typescript',
        icon: 'language-typescript'
      },
      {
        name: 'Node.js',
        icon: 'nodejs'
      },
      {
        name: 'Vue',
        icon: 'vuejs'
      },
      {
        name: 'Nuxt',
        icon: 'nuxt'
      },
      {
        name: 'Nuxt UI',
        icon: 'nuxt'
      },
      {
        name: 'Pinia',
        icon: 'fruit-pineapple'
      },
      {
        name: 'Vitest',
        icon: 'ab-testing'
      },
      {
        name: 'Vue Test Utils',
        icon: 'ab-testing'
      },
      {
        name: 'Axios',
        icon: 'api'
      },
      {
        name: 'Prisma',
        icon: 'database'
      },
      {
        name: 'Supabase',
        icon: 'database'
      },
      {
        name: 'Docker',
        icon: 'docker'
      },
      {
        name: 'Netlify',
        icon: 'server-outline'
      }
    ]
  },
  {
    name: 'NFN',
    status: '',
    details:
      'he second version of my portfolio, built in React as the first was built with jQuery, detailing my career to that point in time.',
    purpose:
      'An overdue update to my portfolio while getting a better understanding of how React works.',
    url: 'https://www.nfn.netlify.app',
    techstack: [
      {
        name: 'HTML',
        icon: 'language-html5'
      },
      {
        name: 'JavaScript',
        icon: 'language-javascript'
      },
      {
        name: 'CSS',
        icon: 'language-css3'
      },
      {
        name: 'SASS',
        icon: 'sass'
      },
      {
        name: 'React',
        icon: 'react'
      },
      {
        name: 'Netlify',
        icon: 'server-outline'
      }
    ]
  },
  {
    name: 'Profanity Filter',
    status: '',
    details: 'prevents users from entering restricted words based on a given list.',
    purpose: 'Used for the e-card generator built for Miracles From Heaven.',
    url: 'https://codepen.io/ailj89/pen/eZNGRY',
    techstack: [
      {
        name: 'HTML',
        icon: 'language-html5'
      },
      {
        name: 'JavaScript',
        icon: 'language-javascript'
      },
      {
        name: 'jQuery',
        icon: 'jquery'
      }
    ]
  }
]
</script>
