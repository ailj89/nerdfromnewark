<template>
  <v-card-item>
    <v-card-title>Front-End Developer</v-card-title>

    <v-card-subtitle
      ><a href="https://www.linkedin.com/in/andre-l-jordan" target="_blank">LinkedIn</a> |
      <a href="../assets/Andre_Jordan_Resume.pdf" target="_blank" download
        >Resume</a
      ></v-card-subtitle
    >
  </v-card-item>

  <v-card-text class="text-body-1">
    I've began developing in 2006 at the age of 16 and my career as a developer began in 2008. In
    the 15 years since, I have developed sites and web apps for F500 companies, investment firms,
    finiancial institutions, motion pictures, marketing, influencer marketing, analytics and
    startups. During that time, I also have 2 years experience of teaching and assisting in
    Front-End Development courses. More extensive details on my career may be read
    <router-link :to="'/roles'">here</router-link>.

    <v-row>
      <v-col cols="6">
        <h6 class="my-4 text-h6">Skills I've learned over the years include:</h6>

        <v-list lines="two" class="bg-grey-lighten-2">
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
        <h6 class="my-4 text-h6">Skills/technologies I am learning/interested in include:</h6>

        <v-list lines="two" class="bg-grey-lighten-2">
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
import { useSkillsStore } from '@/stores/skills'
import { useInterestsStore } from '@/stores/interests'

const skillsStore = useSkillsStore()

const skills = computed(() => skillsStore.skills)

const interestsStore = useInterestsStore()

const interests = computed(() => interestsStore.interests)

onMounted(skillsStore.FETCH_SKILLS)
onMounted(interestsStore.FETCH_INTERESTS)
</script>

<style scoped>
a {
  color: var(--color-text);
}
</style>
