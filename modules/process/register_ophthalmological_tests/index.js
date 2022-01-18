import React from 'react'

import ButtonsFooter from './ButtonsFooter';
import ContaienerClassicTest from './ContaienerClassicTest';
import ContainerInfoPatient from './ContainerInfoPatient';
import ContainerVirtualTask from './ContainerVirtualTask';

export default function RegisterOphthalmologicalTests({ idTest }) {
    return (
        <>
            <ContainerInfoPatient idTest={idTest} />
            <ContaienerClassicTest idTest={idTest} />
            <ContainerVirtualTask idTest={idTest} />
            <ButtonsFooter idTest={idTest} />
        </>
    )
}
