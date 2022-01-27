// React
import { useContext, useEffect } from 'react'
// Local Context
import TestOphthalmologicalProcessContext, { actionTypes } from "../contexts/TestOphthalmologicalProcessContext";
// Provaiders Data
import { providers } from "../providers";

const backend = providers.backend

export default function useTestOphthalmologicalProcess({ idTest = "0" }) {
    const { state, dispatch } = useContext(TestOphthalmologicalProcessContext)

    useEffect(() => {
        backend.medical_test.ophthalmological.lang.findAll()
            .then(data => {
                dispatch({
                    type: actionTypes.ADD_LANG_CARDS,
                    payload: data
                })
            })

        backend.medical_test.ophthalmological.ishihara.findAll()
            .then(data => dispatch({
                type: actionTypes.ADD_ISHIHARA_CARDS,
                payload: data
            }))

        backend.medical_test.ophthalmological.titmus.circles.findAll()
            .then(data => dispatch({
                type: actionTypes.ADD_TITMUS_CIRCLES,
                payload: data
            }))

        backend.medical_test.ophthalmological.titmus.animals.findAll()
            .then(data => dispatch({
                type: actionTypes.ADD_TITMUS_ANIMALS,
                payload: data
            }))

        dispatch({
            type: actionTypes.SET_ID_TEST,
            payload: idTest
        })

        return () => { }
    }, [])

    const showListTest = (show) => () => {
        dispatch({
            type: actionTypes.UPDATE_FLAG_SHOW_LIST_TEST,
            payload: show
        })
    }

    return {
        langCards: state.langCards,
        langResults: state.langResults,
        currentTest: state.currentTest,
        openListTest: state.openListTest,
        showListTest
    }
}

export function useListTestOphthalmological() {

    const { state } = useContext(TestOphthalmologicalProcessContext)

    const checkIfTestIsCurrent = (numTest = "1") => {
        return state.currentTest === numTest
    }

    const checkIfLangTestFinished = () => {
        let langIsFinished = false
        try {
            if (state.langResults.results.length === 2) {
                langIsFinished = true
            }
        } catch (error) {

        }

        return langIsFinished
    }

    const checkIfIshiharaTestFinished = () => {
        let ishiharaIsFinished = false
        try {
            if (state.ishiharaResults.results.length === 17) {
                ishiharaIsFinished = true
            }
        } catch (error) {

        }

        return ishiharaIsFinished
    }

    return {
        checkIfTestIsCurrent,
        checkIfLangTestFinished,
        checkIfIshiharaTestFinished
    }
}
