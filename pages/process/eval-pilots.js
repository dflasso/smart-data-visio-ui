import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import ContentHome from '../../modules/home/Content'

export default function Home() {
    return (
        <PrivateLayout titlePage="Inicio">
            <ContentHome />
        </PrivateLayout>
    )
}
