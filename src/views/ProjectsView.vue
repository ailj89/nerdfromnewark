<template>
  <div class="d-flex align-center flex-column">
    <h3 class="text-h3 text-center pa-4">Projects!</h3>
    <v-container>
      <v-row>
        <v-col cols="1"> </v-col>

        <v-col cols="10">
          <v-card class="bg-grey-lighten-2">
            <v-tabs v-model="tab" color="deep-purple-accent-4">
              <v-tab v-for="(project, index) in projects" :key="project.name" :value="index">
                {{ project.name }}
              </v-tab>
            </v-tabs>

            <v-window v-model="tab">
              <v-window-item
                v-for="(project, index) in projects"
                :key="project.name"
                :value="index"
              >
                <v-container fluid>
                  <v-row>
                    <v-card-item>
                      <v-card-title>
                        <a :href="project.url" target="_blank">
                          {{ project.name }}
                        </a>
                      </v-card-title>

                      <v-card-text class="text-body-1 mt-4">
                        {{ project.details }}
                      </v-card-text>

                      <v-list lines="two" class="bg-grey-lighten-2">
                        <p class="text-body-2 font-italic">Tech Stack</p>
                        <v-list-item
                          v-for="stack in project.techstack"
                          :key="stack.name"
                          :title="stack.name"
                          :prepend-icon="'mdi-' + stack.icon"
                          class="text-body-2"
                        >
                        </v-list-item>
                      </v-list>
                    </v-card-item>
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
import { ref, computed, onMounted } from 'vue'
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()
const projects = computed(() => projectsStore.projects)

const tab = ref(null)

onMounted(projectsStore.FETCH_PROJECTS)
</script>
