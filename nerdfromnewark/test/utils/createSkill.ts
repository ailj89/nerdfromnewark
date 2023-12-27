import type { Skill } from '@/api/types'

export const createSkill = (skill: Partial<Skill> = {}): Skill => ({
  name: 'JavaScript',
  years: 15,
  ...skill
})
