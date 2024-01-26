<template>
  <v-card-item>
    <v-card-title>Front-End Developer</v-card-title>

    <v-card-subtitle
      >View <a href="https://www.linkedin.com/in/andre-l-jordan" target="_blank">LinkedIn</a> |
      Download
      <a href="../assets/Andre_Jordan_Resume.pdf" target="_blank" download
        >Resume</a
      ></v-card-subtitle
    >
  </v-card-item>

  <v-card-text>
    I've began developing in 2006 at the age of 16 and my career as a developer began in 2008. In
    the 15 years since, I have developed sites and web apps for F500 companies, investment firms,
    finiancial institutions, motion pictures, marketing, influencer marketing, analytics and
    startups. During that time, I also have 2 years experience of teaching and assisting in
    Front-End Development courses.

    <h3 class="my-4">Skills I've learned over the years include:</h3>

    <v-list-item
      v-for="skill in skills"
      :key="skill.name"
      :title="skill.name"
      :subtitle="skill.years + ' years'"
    ></v-list-item>
  </v-card-text>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useSkillsStore } from '@/stores/skills'

const skillsStore = useSkillsStore()

const skills = computed(() => skillsStore.skills)

onMounted(skillsStore.FETCH_SKILLS)
</script>
