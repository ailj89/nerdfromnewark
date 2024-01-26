import axios from 'axios'

import type { Skill } from '@/api/types'

const getSkills = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}/skills`
  const response = await axios.get<Skill[]>(url)
  return response.data
}

export default getSkills
