import React from 'react'
import PrivateLayout from '../../layouts/private_layout'
import PreQuestionnaire from '../../modules/questionnaires/PreQuestionnaire'

export default function PagePostQuestionaire() {
    return (
        <PrivateLayout titlePage="Cuestionario Posterior a las Pruebas Visuales">
            <PreQuestionnaire />
        </PrivateLayout>
    )
}
