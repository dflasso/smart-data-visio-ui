import { useContext } from 'react'
import TestLangContext, { actionTypes } from "../contexts/TestLangContext";
//alerts
import Swal from 'sweetalert2'
//next 
import { useRouter } from 'next/router'
// ownServices
import { providers } from "../providers";

const ownServices = providers.ownServices

export const typesStateTask = {
    pending: 1,
    success: 2
}

export default function useTestLangCards() {
    const { state, dispatch } = useContext(TestLangContext)
    const router = useRouter()

    const addResultCard = (cardInfo) => {
        const requets = {
            ticket_patient_tests: state.idTest,
            type_test: 'L',
            results: [cardInfo]
        }

        updateFlagShowBackdrop({ showBackdrop: true })

        ownServices.medical_test.ophthalmological.lang.saveResult(requets)
            .then(
                response => {
                    dispatch({
                        type: actionTypes.ADD_RESULT_LANG,
                        payload: response
                    })
                }
            ).catch(
                error => {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Ocurrio un error al registrar los resultados de la prueba',
                    })
                }
            ).finally(
                () => {
                    updateFlagShowBackdrop({ showBackdrop: false })
                }
            )
    }

    const loadCardLang = (cards = []) => {
        dispatch({
            type: actionTypes.ADD_CARDS_LANG,
            payload: cards
        })
    }

    const loadIdTest = ({ idTestOphthalmological = "0" }) => {
        dispatch({
            type: actionTypes.SET_ID_TEST_OPHTHALMOLOGICAL,
            payload: idTestOphthalmological
        })
    }

    const updateFlagShowBackdrop = ({ showBackdrop = false }) => {
        dispatch({
            type: actionTypes.UPDATE_FLAG_SHOW_BACKDROP,
            payload: showBackdrop
        })
    }

    const checkStateTask = (idCurrentTask) => {
        let isSuccess = false

        if (Array.isArray(state.results.results)) {

            state.results.results.forEach(
                item => {
                    if (item.id_test === Number(idCurrentTask)) {
                        isSuccess = true
                    }
                }
            )
        }

        return isSuccess ? typesStateTask.success : typesStateTask.pending
    }

    const analythicTest = (id_test) => {
        let results = null
        if (Array.isArray(state.results.results)) {

            state.results.results.forEach(
                item => {
                    if (item.id_test === Number(id_test)) {
                        results = item
                    }
                }
            )
        }
        return results
    }


    const handleGoBack = (idTest) => {
        updateFlagShowBackdrop({ showBackdrop: true })
        router.push(`/process/eval-pilots/steps?id=${idTest}`).finally(() => updateFlagShowBackdrop({ showBackdrop: false }))
    }



    return {
        showBackdrop: state.showBackdrop,
        loadCardLang,
        addResultCard,
        checkStateTask,
        loadIdTest,
        updateFlagShowBackdrop,
        analythicTest,
        handleGoBack
    }
}