import axios from 'axios'
import type { Project } from '@/api/types'

const getProjects = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}/projects`
  const response = await axios.get<Project[]>(url)
  return response.data
}

export default getProjects
