import React, { useReducer } from 'react'

const initData = {
    langCards: [],
    langResults: {},
    ishiharaCards: [],
    ishiharaResults: {},
    titmusResults: {},
    titmusCircles: [],
    titmusAnimals: [],
    currentTest: '1',
    currentTestIshihara: 0,
    openListTest: true,
    idTest: '1'
}

const context = React.createContext(initData)


export const actionTypes = {
    ADD_LANG_CARDS: 1,
    ADD_LANG_RESULTS: 2,
    ADD_ISHIHARA_CARDS: 3,
    ADD_ISHIHARA_RESULTS: 4,
    UPDATE_CURRENT_TEST: 5,
    UPDATE_FLAG_SHOW_LIST_TEST: 6,
    SET_ID_TEST: 7,
    UPDATE_CURRENT_TEST_ISHIHARA: 8,
    ADD_TITMUS_RESULTS: 9,
    ADD_TITMUS_CIRCLES: 10,
    ADD_TITMUS_ANIMALS: 11,
}

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_LANG_CARDS:
            return {
                ...state,
                langCards: action.payload
            }
        case actionTypes.UPDATE_CURRENT_TEST:
            return {
                ...state,
                currentTest: action.payload
            }
        case actionTypes.ADD_LANG_RESULTS:
            return {
                ...state,
                langResults: action.payload
            }
        case actionTypes.ADD_ISHIHARA_CARDS:
            return {
                ...state,
                ishiharaCards: action.payload
            }
        case actionTypes.ADD_ISHIHARA_RESULTS:
            return {
                ...state,
                ishiharaResults: action.payload
            }
        case actionTypes.UPDATE_FLAG_SHOW_LIST_TEST:
            return {
                ...state,
                openListTest: action.payload
            }
        case actionTypes.SET_ID_TEST:
            return {
                ...state,
                idTest: action.payload
            }
        case actionTypes.UPDATE_CURRENT_TEST_ISHIHARA:
            return {
                ...state,
                currentTestIshihara: action.payload
            }
        case actionTypes.ADD_TITMUS_RESULTS:
            return {
                ...state,
                titmusResults: action.payload
            }
        case actionTypes.ADD_TITMUS_CIRCLES:
            return {
                ...state,
                titmusCircles: action.payload
            }
        case actionTypes.ADD_TITMUS_ANIMALS:
            return {
                ...state,
                titmusAnimals: action.payload
            }
        default:
            return state
    }
}

export const TestOphthalmologicalProcessProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initData)
    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>
    )
}

export default context