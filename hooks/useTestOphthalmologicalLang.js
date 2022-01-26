// React
import { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
// Local Context
import TestOphthalmologicalProcessContext, { actionTypes } from "../contexts/TestOphthalmologicalProcessContext";
// Provaiders Data
import { providers } from "../providers";
// Custom Hooks
import useLayout from './useLayout';

const backend = providers.backend

export default function useTestOphthalmologicalLang() {
    const { state, dispatch } = useContext(TestOphthalmologicalProcessContext)
    const { updateFlagShowBackdrop } = useLayout()
    const goNextTab = () => {
        try {
            if (!Array.isArray(state.langResults.results)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Prueba de Lang incompleta',
                    text: '¿Está seguro que desea avanzar a la prueba de Ishihara?',
                    showCancelButton: true,
                    confirmButtonText: 'Continuar',
                    cancelButtonText: 'Cancelar'
                }).then(
                    result => {
                        if (result.isConfirmed) {
                            dispatch({
                                type: actionTypes.UPDATE_CURRENT_TEST,
                                payload: '2'
                            })
                        }
                    }
                )

            } else if (Array.isArray(state.langResults.results)) {
                if (state.langResults.results.length < 2) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Prueba de Lang incompleta',
                        text: '¿Está seguro que desea avanzar a la prueba de Ishihara?',
                        showCancelButton: true,
                        confirmButtonText: 'Continuar',
                        cancelButtonText: 'Cancelar'
                    }).then(
                        result => {
                            if (result.isConfirmed) {
                                dispatch({
                                    type: actionTypes.UPDATE_CURRENT_TEST,
                                    payload: '2'
                                })
                            }
                        }
                    )
                } else {
                    dispatch({
                        type: actionTypes.UPDATE_CURRENT_TEST,
                        payload: '2'
                    })
                }

            } else {
                dispatch({
                    type: actionTypes.UPDATE_CURRENT_TEST,
                    payload: '2'
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

    const handleSaveOneResult = (cardInfo) => {
        const requets = {
            ticket_patient_tests: state.idTest,
            type_test: 'L',
            results: [cardInfo]
        }

        updateFlagShowBackdrop({ show: true })
        backend.medical_test.ophthalmological.lang.saveResult(requets)
            .then(
                response => {

                    dispatch({
                        type: actionTypes.ADD_LANG_RESULTS,
                        payload: response
                    })

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
            if (Array.isArray(state.langResults.results)) {
                state.langResults.results.forEach(element => {
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
            if (Array.isArray(state.langResults.results)) {
                state.langResults.results.forEach(element => {
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
        langCards: state.langCards,
        goNextTab,
        handleSaveOneResult,
        checkIfCardWasSaved,
        getResulCard
    }
}
