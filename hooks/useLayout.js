import { useContext, useState } from 'react'
import LayoutContext, { actionTypes } from "../contexts/LayoutContext";

export default function useLayout() {
    const { state, dispatch } = useContext(LayoutContext)

    const handleDrawerOpen = () => {
        dispatch({
            type: actionTypes.MENU_OPEN
        })
    };

    const handleDrawerClose = () => {
        dispatch({
            type: actionTypes.MENU_CLOSE
        })
    };

    const setTitle = (tittle) => {
        dispatch({
            type: actionTypes.HEADER_TITLE_UPDATE,
            payload: tittle
        })
    }

    return {
        state,
        handleDrawerOpen,
        handleDrawerClose,
        setTitle
    }
}