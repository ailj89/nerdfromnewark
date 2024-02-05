import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import axios from 'axios'
import { useHobbiesStore } from '@/stores/hobbies'
import MyHobbies from '@/components/Shared/MyHobbies.vue'

vi.mock('axios')

const axiosGetMock = axios.get as Mock

describe('MyHobbies', () => {
  const renderMyHobbies = () => {
    const pinia = createTestingPinia()
    const hobbiesStore = useHobbiesStore()

    render(MyHobbies, {
      global: {
        plugins: [pinia]
      }
    })

    return { hobbiesStore }
  }

  describe('FETCH_HOBBIES', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('should fetch data from the hobbies api', async () => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            activity: 'Cooking',
            name: 'Baking',
            favorites: 'Bread, Mac n Cheese, Peach Cobler, Pork Belly, Ramen',
            icon: 'mdi-chef-hat'
          }
        ]
      })

      const hobbiesStore = useHobbiesStore()
      await hobbiesStore.FETCH_HOBBIES()

      expect(hobbiesStore.hobbies).toEqual([
        {
          activity: 'Cooking',
          name: 'Baking',
          favorites: 'Bread, Mac n Cheese, Peach Cobler, Pork Belly, Ramen',
          icon: 'chef-hat'
        }
      ])
    })

    it('should call the hobbies api', () => {
      const { hobbiesStore } = renderMyHobbies()
      expect(hobbiesStore.FETCH_HOBBIES).toHaveBeenCalled()
    })

    // it('should render icons related to the hobby', () => {
    //   const { hobbiesStore } = renderMyHobbies()
    //   expect(hobbiesStore.FETCH_HOBBIES).toHaveBeenCalled()
    // })
  })
})
