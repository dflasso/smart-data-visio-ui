import React, { useReducer } from 'react'

const initData = {
    currentTap: "1"
}

const context = React.createContext(initData)


export const actionTypes = {
    UPDATE_TAB: 1
}

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.UPDATE_TAB:
            return {
                ...state,
                currentTap: action.payload
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