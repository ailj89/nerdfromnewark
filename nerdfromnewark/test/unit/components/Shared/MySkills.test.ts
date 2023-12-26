import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import axios from 'axios'
import { useSkillsStore } from '@/stores/skills'
import MySkills from '@/components/Shared/MySkills.vue'

vi.mock('axios')

const axiosGetMock = axios.get as Mock

describe('MySkills', () => {
  const renderMySkills = () => {
    const pinia = createTestingPinia()
    const skillsStore = useSkillsStore()

    render(MySkills, {
      global: {
        plugins: [pinia]
      }
    })

    return { skillsStore }
  }

  describe('FETCH_SKILLS', () => {
    it('should fetch a list of skills', async () => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            name: 'JavaScript',
            years: 15
          }
        ]
      })

      const { skillsStore } = renderMySkills()
      await skillsStore.FETCH_SKILLS()
      expect(skillsStore.skills).toEqual([
        {
          name: 'JavaScript',
          years: 15
        }
      ])
    })

    it('should render skills', () => {
      const { skillsStore } = renderMySkills()
      expect(skillsStore.FETCH_SKILLS).toHaveBeenCalled()
    })
  })
})
