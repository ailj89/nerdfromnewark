<template>
  <div class="careers">
    <div class="career">
      <v-card
        v-for="role in roles"
        :key="role.company"
        class="ma-4 pa-6"
        flat
        outlined
        color="transparent"
      >
        <div class="custom-list pt-5">
          <v-list-item :title="role.company" :subtitle="role.title" class="d-block text-h4">
            <template v-slot:title="{ title }">
              <v-tooltip :text="role.company">
                <template v-slot:activator="{ props }">
                  <a :href="role.url" target="_blank" class="navLink">
                    <v-img
                      :width="100"
                      aspect-ratio="16/9"
                      cover
                      :src="`../../../public/images/${role.logo}`"
                      :alt="role.company"
                      class="d-inline-block"
                      v-bind="props"
                    ></v-img>
                  </a>
                </template>
              </v-tooltip>

              <h4 class="text-h6">
                <a :href="role.url" target="_blank" class="navLink">
                  {{ role.company }}
                </a>
              </h4>
            </template>

            <template v-slot:subtitle="{ subtitle }">
              <p class="text-subtitle-1">{{ role.title }}</p>
              <p class="text-subtitle-1">{{ role.date }}</p>
            </template>

            <h5 class="text-h5 my-3">Responsibilites:</h5>

            <v-list-item v-for="(duty, index) in role.duties" :key="index" class="mb-1">
              <p class="text-body-1">
                {{ duty }}
              </p>
            </v-list-item>

            <h5 v-if="role?.projects" class="text-h5 my-3">Projects:</h5>

            <v-list-item v-for="(project, index) in role?.projects" :key="index" class="mb-2">
              <div v-if="project.url != ''">
                <a :href="project.url" target="_blank" class="text-h6 navLink mb-1">
                  {{ project.name }}
                </a>
                <p class="text-body-1">{{ project.details }}</p>
              </div>
              <div v-if="project.url == ''">
                <h6 class="text-h6 mb-1">{{ project.name }}</h6>

                <p class="text-body-1">{{ project.details }}</p>
              </div>
            </v-list-item>
          </v-list-item>
        </div>
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
