// React
import { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
// Local Context
import TestOphthalmologicalProcessContext, { actionTypes } from "../contexts/TestOphthalmologicalProcessContext";
// Provaiders Data
import { providers } from "../providers";
import useLayout from './useLayout';
// Constants
import { titmusNumCircles, titmusTotalCircles, titmusNumAnimals, titmusRowsAnimals } from "../constants/titmus";

const backend = providers.backend

const buildCirclesData = (circlesIntbound = []) => {
    let circlesRecovery = []
    let cicleRecovery = null
    for (let index = 1; index <= titmusNumCircles; index++) {
        cicleRecovery = circlesIntbound.filter(circle => circle.num_figure === index)
        circlesRecovery.push({
            id: index.toString(),
            label: `Figura ${index}:`,
            options: cicleRecovery
        })
    }
    return circlesRecovery
}

const buildAnimalsData = (animalsIntBound = []) => {
    const animalsData = titmusRowsAnimals.map(row => ({
        id: row,
        options: animalsIntBound.filter(element => element.row === row)
            .sort((elementA, elementB) => elementA.order - elementB.order)
    }))

    return animalsData
}

export default function useTestOphthalmologicalTitmus() {
    const { state, dispatch } = useContext(TestOphthalmologicalProcessContext)
    const { updateFlagShowBackdrop } = useLayout()
    const [circles, setCircles] = useState([])
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        if (state.titmusCircles.length === titmusTotalCircles) {
            setCircles(buildCirclesData(state.titmusCircles))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error al recuperar los datos de la prueba de círculos.',
                text: 'Por favor contáctese con soporte.'
            })
        }

        if (state.titmusAnimals.length === titmusNumAnimals) {
            setAnimals(buildAnimalsData(state.titmusAnimals))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error al recuperar los datos de la prueba de animales.',
                text: 'Por favor contáctese con soporte.'
            })
        }

        return () => { }
    }, [])

    const goNextTab = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST,
            payload: '4'
        })
    }

    const goPreviousTab = () => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_TEST,
            payload: '2'
        })
    }

    const handleSaveHouseFly = ({ data }) => {
        updateFlagShowBackdrop({ show: true })
        backend.medical_test.ophthalmological.titmus.results.updateHouseFly(data)
            .then(response => {
                dispatch({
                    type: actionTypes.ADD_TITMUS_RESULTS,
                    payload: response
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Resultados registrados con exito.'
                })
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error al registrar los resultados de la prueba',
                    text: 'Por favor vuelva a intentar. Si el problema persiste, contáctese con soporte. '
                })
            })
            .finally(() => updateFlagShowBackdrop({ show: false }))
    }

    const handleSaveCirclesResults = ({ data }) => {
        updateFlagShowBackdrop({ show: true })
        backend.medical_test.ophthalmological.titmus.results.updateCircles(data)
            .then(response => {
                dispatch({
                    type: actionTypes.ADD_TITMUS_RESULTS,
                    payload: response
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Resultados registrados con exito.'
                })
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error al registrar los resultados de la prueba',
                    text: 'Por favor vuelva a intentar. Si el problema persiste, contáctese con soporte. '
                })
            })
            .finally(() => updateFlagShowBackdrop({ show: false }))
    }

    const handleSaveAnimalsResults = ({ data }) => {
        updateFlagShowBackdrop({ show: true })
        backend.medical_test.ophthalmological.titmus.results.updateAnimals(data)
            .then(response => {
                dispatch({
                    type: actionTypes.ADD_TITMUS_RESULTS,
                    payload: response
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Resultados registrados con exito.'
                })
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error al registrar los resultados de la prueba',
                    text: 'Por favor vuelva a intentar. Si el problema persiste, contáctese con soporte. '
                })
            })
            .finally(() => updateFlagShowBackdrop({ show: false }))
    }

    return {
        goNextTab,
        goPreviousTab,
        idTest: state.idTest,
        handleSaveHouseFly,
        circles,
        animals,
        handleSaveCirclesResults,
        handleSaveAnimalsResults
    }
}
