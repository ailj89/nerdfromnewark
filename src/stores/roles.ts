import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getRoles from '@/api/getRoles'
import type { Role } from '@/api/types'

export const useRolesStore = defineStore('roles', () => {
  const roles = ref<Role[]>([])

  const FETCH_ROLES = async () => {
    const receivedRoles = await getRoles()
    roles.value = receivedRoles
  }

  // const UNIQUE_ROLES = computed(() => Array.isArray(roles) && roles.value.map((role) => role.title))
  const UNIQUE_ROLES = computed(() => roles.value.map((role) => role.title))

  return { roles, FETCH_ROLES, UNIQUE_ROLES }
})
