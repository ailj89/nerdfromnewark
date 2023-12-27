import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import axios from 'axios'
import { useSkillsStore } from '@/stores/skills'
import MySkills from '@/components/Shared/MySkills.vue'
// import { createSkill } from '../../../utils/createSkill'

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
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('should fetch data from the skills api', async () => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            name: 'JavaScript',
            years: 15
          }
        ]
      })

      const skillsStore = useSkillsStore()
      await skillsStore.FETCH_SKILLS()

      expect(skillsStore.skills).toEqual([
        {
          name: 'JavaScript',
          years: 15
        }
      ])
    })

    it('should call the skills api', () => {
      const { skillsStore } = renderMySkills()
      expect(skillsStore.FETCH_SKILLS).toHaveBeenCalled()
    })
  })
})
