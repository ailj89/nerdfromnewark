import axios from 'axios'

import type { Interest } from '@/api/types'

const getInterests = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}/interests`
  const response = await axios.get<Interest[]>(url)
  return response.data
}

export default getInterests
