import React from 'react'
import { PatientsProvider } from '../../contexts/PatientsContext';
import PrivateLayout from '../../layouts/private_layout'
import ContentPatient from '../../modules/patient/ContentPatient';


export default function PatientAdmin() {
    return (
        <PrivateLayout titlePage="Administración de Pacientes">
            <PatientsProvider>
                <ContentPatient />
            </PatientsProvider>
        </PrivateLayout>
    )
}
