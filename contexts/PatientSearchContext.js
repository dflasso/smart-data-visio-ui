import React, { useReducer } from 'react'

const initData = {
    patientSelected: {
        id: "0"
    },
    showBackdrop: false
}

const context = React.createContext(initData)


export const actionTypes = {
    UPDATED_SELECTED_PATIENT: 1,
    UPDATED_FLAG_SHOW_BACKDROP: 2
}

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.UPDATED_SELECTED_PATIENT:
            return {
                ...state,
                patientSelected: {
                    id: action.payload
                }
            }
        case actionTypes.UPDATED_FLAG_SHOW_BACKDROP:
            return {
                ...state,
                showBackdrop: action.payload
            }
        default:
            return state
    }
}

export const PatientsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initData)
    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>
    )
}

export default context