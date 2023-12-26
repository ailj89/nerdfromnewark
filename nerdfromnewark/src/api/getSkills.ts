import axios from 'axios'

import type { Skill } from '@/api/types'

const getSkills = async () => {
  // const baseUrl = import.meta.env.VITE_APP_API_URL
  // console.log(import.meta.env.VITE_APP_API_URL)
  const baseUrl = 'http://localhost:3000'
  // console.log(baseUrl)
  const url = `${baseUrl}/skills`
  // console.log(url)
  const response = await axios.get<Skill[]>(url)
  // console.log(response.data)
  return response.data
}

export default getSkills
