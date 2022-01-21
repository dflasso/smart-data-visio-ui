import React, { useReducer } from 'react'

const initData = {
    cards: [],
    results: {},
    showBackdrop: false,
    idTest: "0"
}

const context = React.createContext(initData)


export const actionTypes = {
    ADD_RESULT_LANG: 1,
    ADD_CARDS_LANG: 2,
    SET_ID_TEST_OPHTHALMOLOGICAL: 3,
    UPDATE_FLAG_SHOW_BACKDROP: 4
}

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.SET_ID_TEST_OPHTHALMOLOGICAL:
            return {
                ...state,
                idTest: action.payload
            }
        case actionTypes.UPDATE_FLAG_SHOW_BACKDROP:
            return {
                ...state,
                showBackdrop: action.payload
            }
        case actionTypes.ADD_CARDS_LANG:
            return {
                ...state,
                cards: [
                    action.payload
                ]
            }
        case actionTypes.ADD_RESULT_LANG:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state
    }
}

export const TestLangProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initData)
    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>
    )
}

export default context