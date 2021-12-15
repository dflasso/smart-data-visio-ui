import { useContext } from 'react'
import PatientsContext, { actionTypes } from "../contexts/PatientsContext";

export default function useTabsPatients() {
    const { state, dispatch } = useContext(PatientsContext)

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