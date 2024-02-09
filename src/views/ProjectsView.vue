<template>
  <div class="d-flex align-center flex-column">
    <h3 class="text-h3 text-center pa-4">Projects!</h3>
    <v-container>
      <v-row>
        <v-col cols="1"> </v-col>

        <v-col cols="12" sm="10">
          <div class="custom-list">
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
                    <v-card flat outlined color="transparent">
                      <v-card-item>
                        <h6 class="my-4 text-h6">About:</h6>

                        <v-card-text class="text-body-1 mt-4">
                          <a :href="project.url" target="_blank" class="navLink">
                            {{ project.name }} </a
                          >, <span v-if="project.status"> {{ project.status }},</span>
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

const tab = ref(0)

onMounted(projectsStore.FETCH_PROJECTS)
</script>
