import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import { useSkillsStore } from '@/stores/skills'
import MySkills from '@/components/Shared/MySkills.vue'

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

  it('should fetch skills', () => {
    const { skillsStore } = renderMySkills()
    expect(skillsStore.FETCH_SKILLS).toHaveBeenCalled()
  })
})
