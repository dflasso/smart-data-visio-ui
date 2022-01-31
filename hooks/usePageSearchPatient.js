import { useContext } from 'react'
import PatientSearchContext, { actionTypes } from "../contexts/PatientSearchContext"

// Next.js
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
//Provider
import { providers } from "../providers";

const ownServices = providers.ownServices

export default function usePageSearchPatient() {
    const { state, dispatch } = useContext(PatientSearchContext)

    const router = useRouter()

    const updatePatientSelected = (event) => {
        dispatch({
            type: actionTypes.UPDATED_SELECTED_PATIENT,
            payload: event.target.value
        })
    }

    const checkIfPatientWasSelected = (idCurrentPatient) => {
        return (idCurrentPatient === state.patientSelected.id)
    }

    const setOpen = (open) => {
        dispatch({
            type: actionTypes.UPDATED_FLAG_SHOW_BACKDROP,
            payload: open
        })
    }

    const handleSelectedPatient = () => {
        const id = (typeof state.patientSelected === "object") ? state.patientSelected.id : "0"
        setOpen(true)
        ownServices.medical_test.ophthalmological.create({ patient_id: id })
            .then(
                response => {
                    router.push(`/process/eval-pilots/steps?id=${response.id}`).finally(() => setOpen(false))
                }
            ).catch(
                error => {
                    setOpen(false)
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Ocurrio un error al asignarle un grupo pruebas oftalmologicas al paciente',
                    })
                }
            )
    }

    const handleGoBack = () => {
        setOpen(true)
        router.push(`/process/eval-pilots/steps`).finally(() => setOpen(false))
    }


    const checkIfExistPatientSelected = () => {
        return (state.patientSelected.id === "0")
    }

    return {
        openBackdrop: state.showBackdrop,
        updatePatientSelected,
        checkIfPatientWasSelected,
        handleSelectedPatient,
        checkIfExistPatientSelected,
        handleGoBack
    }
}
