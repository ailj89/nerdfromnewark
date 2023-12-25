import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getSkills from '@/api/getSkills'
import type { Skill } from '@/api/types'

export const useSkillsStore = defineStore('skills', () => {
  const skills = ref<Skill[]>([])

  const FETCH_SKILLS = async () => {
    const receivedSkills = await getSkills()
    skills.value = receivedSkills
  }

  const UNIQUE_SKILLS = computed(
    () => Array.isArray(skills) && skills.value.map((skill) => skill.name)
  )

  return { skills, FETCH_SKILLS, UNIQUE_SKILLS }
})
