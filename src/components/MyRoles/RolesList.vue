<template>
  <div class="careers">
    <div class="career">
      <v-card v-for="role in roles" :key="role.company" class="ma-4 pa-6 bg-grey-lighten-2">
        <v-list lines="one" class="bg-grey-lighten-2">
          <v-list-item :title="role.company" :subtitle="role.title" class="d-inline-block text-h4">
            <template v-slot:title="{ title }">
              <a :href="role.url" target="_blank" class="text-body-1 d-inline-block">
                <v-tooltip :text="role.company">
                  <template v-slot:activator="{ props }">
                    <v-img
                      :width="100"
                      aspect-ratio="16/9"
                      cover
                      :src="`../../../public/images/${role.logo}`"
                      :alt="role.company"
                      class="d-inline-block"
                      v-bind="props"
                    ></v-img>
                  </template>
                </v-tooltip>
              </a>
            </template>

            <template v-slot:subtitle="{ subtitle }">
              <span class="text-subtitle-1">
                {{ role.title }}
              </span>
            </template>

            <h6 class="text-h6 my-3">Responsibilites</h6>

            <v-list-item
              v-for="(duty, index) in role.duties"
              :key="index"
              :title="duty"
            ></v-list-item>

            <h6 v-if="role?.projects" class="text-h6 my-3">Projects</h6>

            <v-list-item v-for="(project, index) in role?.projects" :key="index">
              <div v-if="project.url != ''">
                <a :href="project.url" target="_blank" class="text-h5">
                  {{ project.name }}
                </a>
                <p class="text-body-1">{{ project.details }}</p>
              </div>
              <div v-if="project.url == ''">
                <p class="text-h5">{{ project.name }}</p>

                <p class="text-body-1">{{ project.details }}</p>
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

// const UNIQUE_ROLES = computed(() => rolesStore.UNIQUE_ROLES)

onMounted(rolesStore.FETCH_ROLES)
</script>

<style scoped>
a {
  color: var(--color-text);
}
</style>
