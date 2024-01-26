import type { Mock } from 'vitest'
import axios from 'axios'
import { render, screen } from '@testing-library/vue'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useRolesStore } from '@/stores/roles'
import RolesList from '@/components/MyRoles/RolesList.vue'

vi.mock('axios')

const axiosGetMock = axios.get as Mock

describe('RolesList', () => {
  const renderRolesList = () => {
    const pinia = createTestingPinia()
    const rolesStore = useRolesStore()

    render(RolesList, {
      global: {
        plugins: [pinia]
      }
    })

    return { rolesStore }
  }

  describe('FETCH_ROLES', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('should call the roles api', () => {
      const { rolesStore } = renderRolesList()
      expect(rolesStore.FETCH_ROLES).toHaveBeenCalled()
    })

    it('should fetch data from the roles api', async () => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            company: 'gen.video',
            role: 'Senior Front-End Developer'
          }
        ]
      })

      const rolesStore = useRolesStore()
      await rolesStore.FETCH_ROLES()

      expect(rolesStore.roles).toEqual([
        {
          company: 'gen.video',
          role: 'Senior Front-End Developer'
        }
      ])

      //   expect(screen.getByText('Senior Front-End Developer')).toBeInTheDocument()
    })
  })
})
