<template>
  <v-card-item>
    <v-card-title>Front-End Developer</v-card-title>

    <v-card-subtitle>
      <a class="navLink" href="https://www.linkedin.com/in/andre-l-jordan" target="_blank"
        >LinkedIn</a
      >
      |
      <a
        class="navLink"
        href="../assets/Andre_Jordan_Resume.pdf"
        target="_self"
        download="Andre Jordan Resume"
        >Resume</a
      ></v-card-subtitle
    >
  </v-card-item>

  <v-card-text class="text-body-1">
    I started developing in 2006 at the age of 16 when I accidentally clicked
    <a
      href="https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html"
      target="_blank"
      class="navLink"
      >View Source</a
    >
    one day and technically my career as a developer began in 2008 once I got my first freelance
    role on campus at Bentley University, creating a website for Prom Dress donations. In the years
    since, I have developed sites and web apps for F500 companies, investment firms, finiancial
    institutions, motion pictures, marketing and influencer marketing companies, analytics and
    startups. During that time, I also have 2 years experience of teaching and assisting in
    Front-End Development courses. Check the
    <router-link class="navLink" :to="'/roles'">Career</router-link> page for more information.

    <v-row>
      <v-col cols="12" sm="6">
        <h6 class="my-4 text-h6">Skills I've learned over the years include:</h6>

        <v-list-item
          v-for="skill in skills"
          :key="skill.name"
          :title="skill.name"
          :subtitle="skill.years + ' years'"
          :prepend-icon="'mdi-' + skill.icon"
          class="text-body-2"
        ></v-list-item>
      </v-col>

      <v-col cols="12" sm="6">
        <h6 class="my-4 text-h6">
          Skills/technologies I am currently learning/interested in include:
        </h6>

        <p class="text-body-2 font-italic">Learning</p>
        <v-list-item
          v-for="learning in learnings"
          :key="learning.name"
          :title="learning.name"
          class="text-body-2"
          :prepend-icon="'mdi-' + learning.icon"
        ></v-list-item>

        <v-divider :thickness="4" class="my-3"></v-divider>

        <p class="text-body-2 font-italic">Interested In</p>
        <v-list-item
          v-for="interest in interests"
          :key="interest.name"
          :title="interest.name"
          class="text-body-2"
          :prepend-icon="'mdi-' + interest.icon"
        ></v-list-item>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script lang="ts" setup>
// import { onMounted, computed } from 'vue'
// import { useLearningsStore } from '@/stores/learnings'
// import { useSkillsStore } from '@/stores/skills'
// import { useInterestsStore } from '@/stores/interests'

// const interestsStore = useInterestsStore()
// const interests = computed(() => interestsStore.interests)

const interests = [
  {
    name: 'Angular',
    icon: 'angularjs'
  },
  {
    name: 'React',
    icon: 'react'
  }
]

// const learningsStore = useLearningsStore()
// const learnings = computed(() => learningsStore.learnings)

const learnings = [
  {
    name: 'Nuxt',
    icon: 'nuxt'
  },
  {
    name: 'Pinia',
    icon: 'fruit-pineapple'
  },
  {
    name: 'Tailwind',
    icon: 'tailwind'
  },
  {
    name: 'Typescript',
    icon: 'language-typescript'
  },
  {
    name: 'Vite',
    icon: 'lightning-bolt'
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
    name: 'Vue Testing Library',
    icon: 'ab-testing'
  }
]

// const skillsStore = useSkillsStore()
// const skills = computed(() => skillsStore.skills)

const skills = [
  {
    name: 'HTML',
    years: 15,
    icon: 'language-html5'
  },
  {
    name: 'CSS',
    years: 15,
    icon: 'language-css3'
  },
  {
    name: 'JavaScript',
    years: 15,
    icon: 'language-javascript'
  },
  {
    name: 'jQuery',
    years: 11,
    icon: 'jquery'
  },
  {
    name: 'Restful APIs',
    years: 11,
    icon: 'api'
  },
  {
    name: 'Responsive Web Design',
    years: 11,
    icon: 'responsive'
  },
  {
    name: 'AngularJS',
    years: 9,
    icon: 'angularjs'
  },
  {
    name: 'Bootstrap',
    years: 9,
    icon: 'bootstrap'
  },
  {
    name: 'Node.js',
    years: 9,
    icon: 'nodejs'
  },
  {
    name: 'SASS',
    years: 9,
    icon: 'sass'
  },
  {
    name: 'Axios',
    years: 2,
    icon: 'api'
  },
  {
    name: 'Vue',
    years: 2,
    icon: 'vuejs'
  },
  {
    name: 'Vuetify',
    years: 2,
    icon: 'vuetify'
  }
]

// onMounted(interestsStore.FETCH_INTERESTS)
// onMounted(learningsStore.FETCH_LEARNINGS)
// onMounted(skillsStore.FETCH_SKILLS)
</script>

<style scoped>
a {
  color: var(--color-text);
}
</style>
