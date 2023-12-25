import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getHobbies from '@/api/getHobbies'
import type { Hobby } from '@/api/types'

export const useHobbiesStore = defineStore('hobbies', () => {
  const hobbies = ref<Hobby[]>([])

  const FETCH_HOBBIES = async () => {
    const receivedHobbies = await getHobbies()
    hobbies.value = receivedHobbies
  }

  const UNIQUE_HOBBIES = computed(
    () => Array.isArray(hobbies) && hobbies.value.map((hobby) => hobby.name)
  )

  return { hobbies, FETCH_HOBBIES, UNIQUE_HOBBIES }
})
