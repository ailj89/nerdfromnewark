import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getLearnings from '@/api/getLearnings'
import type { Interest } from '@/api/types'

export const useLearningsStore = defineStore('Learnings', () => {
  const learnings = ref<Interest[]>([])

  const FETCH_LEARNINGS = async () => {
    const receivedLearnings = await getLearnings()
    learnings.value = receivedLearnings
  }

  const UNIQUE_LEARNINGS = computed(
    () => Array.isArray(learnings) && learnings.value.map((learning) => learning.name)
  )

  return { learnings, FETCH_LEARNINGS, UNIQUE_LEARNINGS }
})
