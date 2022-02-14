import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import { RegisterUser } from '../../modules/users'

export default function UserRegister() {
    return (
        <PrivateLayout titlePage="Registro de Usuarios">
            <RegisterUser />
        </PrivateLayout>
    )
}
