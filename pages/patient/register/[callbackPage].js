// React.js
import React from 'react'
// Next.js
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
// Materal UI
import { Backdrop, CircularProgress, Grid } from '@mui/material';

// Local Components
import PrivateLayout from '../../../layouts/private_layout'
import FormRegisterPatient from '../../../modules/patient/FormRegisterPatient';
import styles from "../../../styles/RegisterPatient.module.scss";

//Provider
import { providers } from "../../../providers";

const backend = providers.backend

export default function RegisterPatientCallback() {
    const router = useRouter()

    const [open, setOpen] = React.useState(false);

    const onSave = ({ data = {}, error = {}, is_successfull = true }) => {
        setOpen(true)
        if (data === null && error === null && !is_successfull) {
            router.push(`/process/eval-pilots/steps`).finally(() => setOpen(false))

        } else {

            backend.medical_test.ophthalmological.create({ patient_id: data.id })
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
    }

    return (
        <PrivateLayout titlePage="Inicio">
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.mainContent} >
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <FormRegisterPatient onSave={onSave} />
            </Grid>
        </PrivateLayout>
    )
}
