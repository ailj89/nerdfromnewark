import axios from 'axios'

import type { Role } from '@/api/types'

const getRoles = async () => {
  // const baseUrl = import.meta.env.VITE_APP_API_URL
  const baseUrl = 'http://localhost:3000'
  const url = `${baseUrl}/roles`
  const response = await axios.get<Role[]>(url)
  return response.data
}

export default getRoles
