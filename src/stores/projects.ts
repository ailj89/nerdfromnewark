import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getProjects from '@/api/getProjects'
import type { Project } from '@/api/types'

export const useProjectsStore = defineStore('Projects', () => {
  const projects = ref<Project[]>([])

  const FETCH_PROJECTS = async () => {
    const recievedProjects = await getProjects()
    projects.value = recievedProjects
  }

  const UNIQUE_PROJECTS = computed(
    () => Array.isArray(projects) && projects.value.map((project) => project.name)
  )

  return { projects, FETCH_PROJECTS, UNIQUE_PROJECTS }
})
