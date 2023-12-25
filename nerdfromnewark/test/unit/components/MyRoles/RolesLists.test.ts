import { render, screen} from '@testing-library/vue';

import RolesList from '@/components/MyRoles/RoleList.vue';

describe('RoleList', () => {
    const renderRolesList = () => {
        render(RolesList)
    }
})

it('fetches the role list', () => {
    expect
})