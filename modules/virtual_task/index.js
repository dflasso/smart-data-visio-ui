import React from 'react'
import ButtonsFooter from './ButtonsFooter'
import ContainerQuestionaries from './ContainerQuestionaries'
import ContainerQuestionariesAndTestFinal from './ContainerQuestionariesAndTestFinal'
import ContainerTermsConditions from './ContainerTermsConditions'
import ContainerVirtualTask from './ContainerVirtualTask'

export default function VirtualTask() {
    return (
        <>
            <ContainerTermsConditions />
            <ContainerQuestionaries />
            <ContainerVirtualTask />
            <ContainerQuestionariesAndTestFinal />
            <ButtonsFooter />
        </>
    )
}
