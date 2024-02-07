<template>
  <v-card-item>
    <v-card-title>Front-End Developer</v-card-title>

    <v-card-subtitle>
      <a class="navLink" href="https://www.linkedin.com/in/andre-l-jordan" target="_blank"
        >LinkedIn</a
      >
      |
      <a class="navLink" href="../assets/Andre_Jordan_Resume.pdf" target="_blank" download
        >Resume</a
      ></v-card-subtitle
    >
  </v-card-item>

  <v-card-text class="text-body-1">
    I started developing in 2006 at the age of 16 when I accidentally clicked View Source one day
    and technically my career as a developer began in 2008 once I got my first freelance role on
    campus at Bentley University, creating a website for Prom Dress donations. In the years since, I
    have developed sites and web apps for F500 companies, investment firms, finiancial institutions,
    motion pictures, marketing and influencer marketing companies, analytics and startups. During
    that time, I also have 2 years experience of teaching and assisting in Front-End Development
    courses. Check the <router-link class="navLink" :to="'/roles'">Career</router-link> page for
    more information.

    <v-row>
      <v-col cols="6">
        <h6 class="my-4 text-h6">Skills I've learned over the years include:</h6>

        <v-list lines="two">
          <v-list-item
            v-for="skill in skills"
            :key="skill.name"
            :title="skill.name"
            :subtitle="skill.years + ' years'"
            :prepend-icon="'mdi-' + skill.icon"
            class="text-body-2"
          ></v-list-item>
        </v-list>
      </v-col>

      <v-col cols="6">
        <h6 class="my-4 text-h6">
          Skills/technologies I am currently learning/interested in include:
        </h6>

        <v-list lines="two">
          <p class="text-body-2 font-italic">Learning</p>
          <v-list-item
            v-for="learning in learnings"
            :key="learning.name"
            :title="learning.name"
            class="text-body-2"
            :prepend-icon="'mdi-' + learning.icon"
          ></v-list-item>
        </v-list>

        <v-divider :thickness="4"></v-divider>

        <v-list lines="two">
          <p class="text-body-2 font-italic">Interested In</p>
          <v-list-item
            v-for="interest in interests"
            :key="interest.name"
            :title="interest.name"
            class="text-body-2"
            :prepend-icon="'mdi-' + interest.icon"
          ></v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useLearningsStore } from '@/stores/learnings'
import { useSkillsStore } from '@/stores/skills'
import { useInterestsStore } from '@/stores/interests'

const interestsStore = useInterestsStore()
const interests = computed(() => interestsStore.interests)

const learningsStore = useLearningsStore()
const learnings = computed(() => learningsStore.learnings)

const skillsStore = useSkillsStore()
const skills = computed(() => skillsStore.skills)

onMounted(interestsStore.FETCH_INTERESTS)
onMounted(learningsStore.FETCH_LEARNINGS)
onMounted(skillsStore.FETCH_SKILLS)
</script>

<style scoped>
a {
  color: var(--color-text);
}
</style>
