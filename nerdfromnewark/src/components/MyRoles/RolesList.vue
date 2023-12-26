<template>
  <div class="careers">
    <div class="career">
      <v-card v-for="role in roles" :key="role.company">
        <v-list lines="one">
          <v-list-item :title="role.title" :subtitle="role.company">
            <v-list-item v-for="duty in role.duties" :key="duty" :title="duty"> </v-list-item>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRolesStore } from '@/stores/roles'

const rolesStore = useRolesStore()

const roles = rolesStore.roles

onMounted(rolesStore.FETCH_ROLES)
</script>
