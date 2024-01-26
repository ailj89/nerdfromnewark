import type { Role } from '@/api/types'

export const createRole = (role: Partial<Role> = {}): Role => ({
  company: 'gen.video',
  role: 'Senior Front-End Developer',
  ...role
})
