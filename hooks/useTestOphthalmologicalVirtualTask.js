// React
import { useContext, useState } from 'react'
// Local Context
import TestOphthalmologicalProcessContext, { actionTypes } from "../contexts/TestOphthalmologicalProcessContext";

export default function useTestOphthalmologicalVirtualTask({ nextTab = "2", previousTab = "1" }) {
    const { state, dispatch } = useContext(TestOphthalmologicalProcessContext)
    const [activeStep, setActiveStep] = useState(0);

    const goNextTab = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST,
            payload: nextTab
        })
    }

    const goPreviousTab = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST,
            payload: previousTab
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
