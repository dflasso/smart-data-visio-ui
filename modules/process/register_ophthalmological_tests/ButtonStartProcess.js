//React 
import React from 'react'
// Material UI
import { PlayCircle } from '@mui/icons-material'
import { IconButton } from '@mui/material'
// Next
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

//Provider
import { providers } from "../../../providers";
//Custom hooks
import useLayout from '../../../hooks/useLayout';
// Styles
import styles from "../../../styles/EvalPilots.module.scss"

const ownServices = providers.ownServices

export default function ButtonStartProcess({ patient_data = {} }) {
    // hook layout
    const { updateFlagShowBackdrop } = useLayout()
    // hook router
    const router = useRouter()

    const handleCreateProcess = () => {
        Swal.fire({
            icon: "question",
            title: '¿Desea iniciar las pruebas?',
            showCancelButton: true,
            confirmButtonText: 'Iniciar',
            cancelButtonText: 'Regresar'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                updateFlagShowBackdrop({ show: true })
                ownServices.medical_test.ophthalmological.create({ patient_id: patient_data.id })
                    .then(
                        response => {
                            router.push(`/process/eval-pilots/steps?id=${response.id}&patient_id=${patient_data.doc_identification}`).finally(() => updateFlagShowBackdrop({ show: false }))
                        }
                    ).catch(
                        error => {
                            updateFlagShowBackdrop({ show: false })
                            console.log(error)
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: 'Ocurrio un error al asignarle un grupo pruebas oftalmologicas al paciente',
                            })
                        }
                    )
            }
        })
    }
    return (
        <IconButton className={styles.BtnDetailRow} onClick={handleCreateProcess} >
            <PlayCircle color="success" />
        </IconButton>
    )
}
