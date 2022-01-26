// React
import { useContext, useEffect, useState } from 'react'
// Local Context
import TestOphthalmologicalProcessContext, { actionTypes } from "../contexts/TestOphthalmologicalProcessContext";
// Provaiders Data
import { providers } from "../providers";

const backend = providers.backend

export default function useTestOphthalmologicalTitmus() {
    const { state, dispatch } = useContext(TestOphthalmologicalProcessContext)
    const [activeStep, setActiveStep] = useState(0);

    const goNextTab = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST,
            payload: '4'
        })
    }

    const goPreviousTab = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST,
            payload: '2'
        })
    }


    const handleNextTest = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBackTest = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return {
        ishiharaCards: state.ishiharaCards,
        goNextTab,
        goPreviousTab,
        activeStep,
        handleNextTest,
        handleBackTest
    }
}
