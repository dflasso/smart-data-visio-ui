//React 
import React, { useEffect } from 'react'
// Next
import { useRouter } from 'next/router';
// Alerts
import Swal from 'sweetalert2';

// Local Components
import ButtonsFooter from './ButtonsFooter';
import ContaienerClassicTest from './ContaienerClassicTest';
import ContainerInfoPatient from './ContainerInfoPatient';
import ContainerVirtualTask from './ContainerVirtualTask';
import useLayout from '../../../hooks/useLayout';
import TestOphthalmologicalProcess from './TestOphthalmologicalProcess';
import { TestOphthalmologicalProcessProvider } from '../../../contexts/TestOphthalmologicalProcessContext';

export default function RegisterOphthalmologicalTests({ idTest = "", patientNumDocument = "" }) {
    // hook router
    const router = useRouter()
    // hook layout
    const { updateFlagShowBackdrop } = useLayout()

    useEffect(() => {
        if (idTest === '' || patientNumDocument === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Antes de comenzar la pruebas oftalmológicas primero debe seleccionar un paciente.'
            }).then(
                () => {
                    updateFlagShowBackdrop({ show: true })
                    router.push('/process/eval-pilots').finally(() => updateFlagShowBackdrop({ show: false }))
                }
            )
        }
        return () => { }
    }, [])

    return (
        <>
            <ContainerInfoPatient idTest={idTest} patientNumDocument={patientNumDocument} />
            {/* <ContaienerClassicTest idTest={idTest} />
            <ContainerVirtualTask idTest={idTest} /> */}
            <TestOphthalmologicalProcessProvider>
                <TestOphthalmologicalProcess idTest={idTest} patientNumDocument={patientNumDocument} />
            </TestOphthalmologicalProcessProvider>
            <ButtonsFooter idTest={idTest} />
        </>
    )
}
