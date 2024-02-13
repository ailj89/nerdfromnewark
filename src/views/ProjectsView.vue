<template>
  <div class="d-flex align-center flex-column">
    <h3 class="text-h3 text-center pa-4">Projects!</h3>
    <v-container>
      <v-row>
        <v-col cols="10" sm="12" offset="1" offset-sm="0">
          <projects-list />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed, onMounted } from 'vue'
// import { useProjectsStore } from '@/stores/projects'
import ProjectsList from '@/components/Projects/ProjectsList.vue'

// const projectsStore = useProjectsStore()
// const projects = computed(() => projectsStore.projects)

// const tab = ref(0)

// onMounted(projectsStore.FETCH_PROJECTS)
</script>
