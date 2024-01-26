import axios from 'axios'

import type { Hobby } from '@/api/types'

const getHobbies = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}/hobbies`
  const response = await axios.get<Hobby[]>(url)
  return response.data
}

export default getHobbies
