import { useContext } from 'react'
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

    const updateFlagShowBackdrop = ({ show = false }) => {
        dispatch({
            type: actionTypes.UPDATE_FLAG_SHOW_BACKDROP,
            payload: show
        })
    }

    return {
        state,
        openBackdrop: state.openBackdrop,
        handleDrawerOpen,
        handleDrawerClose,
        setTitle,
        updateFlagShowBackdrop
    }
}