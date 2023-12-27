<template>
  <div class="careers">
    <div class="career">
      <v-card v-for="role in roles" :key="role.company" width="800" class="ma-4">
        <v-list lines="one">
          <v-list-item :title="role.title" :subtitle="role.company" class="text-h4">
            <v-list-item v-for="duty in role.duties" :key="duty" :title="duty"> </v-list-item>
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

const roles = rolesStore.roles

const UNIQUE_ROLES = computed(() => rolesStore.UNIQUE_ROLES)

// console.log(UNIQUE_ROLES)

onMounted(rolesStore.FETCH_ROLES)
</script>
