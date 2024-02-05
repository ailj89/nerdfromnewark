import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getInterests from '@/api/getInterests'
import type { Interest } from '@/api/types'

export const useInterestsStore = defineStore('Interests', () => {
  const interests = ref<Interest[]>([])

  const FETCH_INTERESTS = async () => {
    const receivedInterests = await getInterests()
    interests.value = receivedInterests
  }

  const UNIQUE_INTERESTS = computed(
    () => Array.isArray(interests) && interests.value.map((interest) => interest.name)
  )

  return { interests, FETCH_INTERESTS, UNIQUE_INTERESTS }
})
