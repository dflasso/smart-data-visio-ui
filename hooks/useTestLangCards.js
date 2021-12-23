import { useContext } from 'react'
import TestLangContext, { actionTypes } from "../contexts/TestLangContext";

export default function useTestLangCards() {
    const { state, dispatch } = useContext(TestLangContext)


    const addResultCard = (cardInfo) => {
        dispatch({
            type: actionTypes.ADD_CARD_LANG,
            payload: cardInfo
        })

        dispatch({
            type: actionTypes.UPDATE_TAB,
            payload: "1"
        })
    }

    return {
        cards: state.cards,
        addResultCard
    }
}