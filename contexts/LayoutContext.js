import React, { useReducer } from 'react'

const initData = {
    headerTitle: "",
    openMenu: false,
    openBackdrop: false
}

const context = React.createContext(initData)

export const actionTypes = {
    HEADER_TITLE_UPDATE: 1,
    MENU_OPEN: 2,
    MENU_CLOSE: 3,
    UPDATE_FLAG_SHOW_BACKDROP: 4
}

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.HEADER_TITLE_UPDATE:
            return {
                ...state,
                headerTitle: action.payload,

            }
        case actionTypes.MENU_OPEN:
            return {
                ...state,
                openMenu: true,

            }
        case actionTypes.MENU_CLOSE:
            return {
                ...state,
                openMenu: false,

            }
        case actionTypes.UPDATE_FLAG_SHOW_BACKDROP:
            return {
                ...state,
                openBackdrop: action.payload,

            }
        default:
            return state
    }
}

export const LayoutProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initData)
    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>
    )
}

export default context