import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import { ContentMainAdminUsers } from '../../modules/users'

export default function Users() {
    return (
        <PrivateLayout titlePage="Usuarios">
            <ContentMainAdminUsers />
        </PrivateLayout>
    )
}
