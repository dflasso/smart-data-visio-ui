// React
import { useContext } from 'react'
import Swal from 'sweetalert2';
// Local Context
import TestOphthalmologicalProcessContext, { actionTypes } from "../contexts/TestOphthalmologicalProcessContext";
// Provaiders Data
import { providers } from "../providers";
import useLayout from './useLayout';

const backend = providers.backend

export default function useTestOphthalmologicalIshihara() {
    const { state, dispatch } = useContext(TestOphthalmologicalProcessContext)

    const { updateFlagShowBackdrop } = useLayout()

    const goNextTab = () => {
        try {
            if (!Array.isArray(state.ishiharaResults.results)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Prueba de Ishihara incompleta',
                    text: '¿Está seguro que desea avanzar a la prueba de Titmus?',
                    showCancelButton: true,
                    confirmButtonText: 'Continuar',
                    cancelButtonText: 'Cancelar'
                }).then(
                    result => {
                        if (result.isConfirmed) {
                            dispatch({
                                type: actionTypes.UPDATE_CURRENT_TEST,
                                payload: '3'
                            })
                        }
                    }
                )

            } else if (Array.isArray(state.ishiharaResults.results)) {
                if (state.ishiharaResults.results.length < 17) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Prueba de Lang Ishihara',
                        text: '¿Está seguro que desea avanzar a la prueba de Titmus?',
                        showCancelButton: true,
                        confirmButtonText: 'Continuar',
                        cancelButtonText: 'Cancelar'
                    }).then(
                        result => {
                            if (result.isConfirmed) {
                                dispatch({
                                    type: actionTypes.UPDATE_CURRENT_TEST,
                                    payload: '3'
                                })
                            }
                        }
                    )
                } else {
                    dispatch({
                        type: actionTypes.UPDATE_CURRENT_TEST,
                        payload: '3'
                    })
                }

            } else {
                dispatch({
                    type: actionTypes.UPDATE_CURRENT_TEST,
                    payload: '3'
                })
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error interno.',
                text: 'Por favor contáctese con soporte',
            })
        }
    }

    const goPreviousTab = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST,
            payload: '1'
        })
    }


    const handleNextTest = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST_ISHIHARA,
            payload: state.currentTestIshihara + 1
        })
    };

    const handleBackTest = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST_ISHIHARA,
            payload: state.currentTestIshihara - 1
        })
    };

    const handleSave = (cardInfo) => {
        const requets = {
            ticket_patient_tests: state.idTest,
            type_test: 'I',
            results: [cardInfo]
        }
        updateFlagShowBackdrop({ show: true })
        backend.medical_test.ophthalmological.ishihara.saveResult(requets)
            .then(
                response => {

                    dispatch({
                        type: actionTypes.ADD_ISHIHARA_RESULTS,
                        payload: response
                    })
                    handleNextTest()
                    Swal.fire({
                        icon: 'success',
                        title: 'Resultados de la prueba registrados con exito.'
                    })
                }
            ).catch(
                error => {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Ocurrio un error al registrar los resultados de la prueba',
                        text: 'Por favor vuelva a intentar. Si el problema persiste, contáctese con soporte. '
                    })
                }
            ).finally(() => updateFlagShowBackdrop({ show: false }))
    }

    const checkIfCardWasSaved = ({ idCard = "1" }) => {
        let isSaved = false
        try {
            if (Array.isArray(state.ishiharaResults.results)) {
                state.ishiharaResults.results.forEach(element => {
                    if (element.id_test === Number(idCard)) {
                        isSaved = true
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error interno.',
                text: 'Por favor contáctese con soporte',
            })
        }
        return isSaved
    }

    const getResulCard = ({ idCard = "1" }) => {
        let result = null
        try {
            if (Array.isArray(state.ishiharaResults.results)) {
                state.ishiharaResults.results.forEach(element => {
                    if (element.id_test === Number(idCard)) {
                        result = element
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error interno.',
                text: 'Por favor contáctese con soporte',
            })
        }
        return result
    }


    return {
        ishiharaCards: state.ishiharaCards,
        goNextTab,
        goPreviousTab,
        activeStep: state.currentTestIshihara,
        handleNextTest,
        handleBackTest,
        handleSave,
        checkIfCardWasSaved,
        getResulCard
    }
}
