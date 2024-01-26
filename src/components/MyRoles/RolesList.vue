<template>
  <div class="careers">
    <div class="career">
      <v-card v-for="role in roles" :key="role.company" class="ma-4">
        <v-list lines="two">
          <v-list-item
            :title="role.title"
            :subtitle="role.company"
            :prepend-avatar="`@/src/images/${role.logo}`"
            class="text-h4"
          >
            <h4>Duties</h4>

            <v-list-item v-for="duty in role.duties" :key="duty" :title="duty"> </v-list-item>

            <h4>Projects</h4>

            <v-list-item v-for="(project, index) in role?.projects" :key="index">
              <div v-if="project.url != ''">
                <a :href="project.url" target="_blank">
                  {{ project.name }}
                </a>
                <p>{{ project.details }}</p>
              </div>
              <div v-if="project.url == ''">
                <p>{{ project.name }}</p>

                <p>{{ project.details }}</p>
              </div>
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useRolesStore } from '@/stores/roles'

const rolesStore = useRolesStore()

const roles = computed(() => rolesStore.roles)

const UNIQUE_ROLES = computed(() => rolesStore.UNIQUE_ROLES)

// console.log(UNIQUE_ROLES)

onMounted(rolesStore.FETCH_ROLES)
</script>
