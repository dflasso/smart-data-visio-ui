import { useContext } from 'react'
import TestLangContext, { actionTypes } from "../contexts/TestLangContext";

export default function useTestLangTabs() {
    const { state, dispatch } = useContext(TestLangContext)

    const handleChangeTap = (_, newValue) => {
        dispatch({
            type: actionTypes.UPDATE_TAB,
            payload: newValue
        })
    }

    return {
        state,
        handleChangeTap
    }
}