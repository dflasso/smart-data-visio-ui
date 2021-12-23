import React, { useReducer } from 'react'

const initData = {
    currentTap: "2",
    cards: []
}

const context = React.createContext(initData)


export const actionTypes = {
    UPDATE_TAB: 1,
    ADD_CARD_LANG: 2
}

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_CARD_LANG:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    action.payload
                ]
            }
        case actionTypes.UPDATE_TAB:
            return {
                ...state,
                currentTap: action.payload
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