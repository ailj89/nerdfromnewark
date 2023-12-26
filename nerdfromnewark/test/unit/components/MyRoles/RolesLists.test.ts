import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import { useRolesStore } from '@/stores/roles'
import RolesList from '@/components/MyRoles/RolesList.vue'

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

  it('should fetch a list of roles', () => {
    const { rolesStore } = renderRolesList()
    expect(rolesStore.FETCH_ROLES).toHaveBeenCalled()
  })
})
